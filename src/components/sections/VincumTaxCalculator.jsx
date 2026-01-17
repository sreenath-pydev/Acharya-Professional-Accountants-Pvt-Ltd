import { useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import jsPDF from 'jspdf';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const COLORS = ['#e5a145', '#8e400e', '#7c7c7b'];

const regimeOptions = [
  { value: 'new', label: 'New Regime' },
  { value: 'old', label: 'Old Regime' },
];

const ageOptions = [
  { value: 'below60', label: 'Below 60' },
  { value: '60to79', label: '60 – 79' },
  { value: '80plus', label: '80+' },
];

const residentialOptions = [
  { value: 'resident', label: 'Resident' },
  { value: 'nri', label: 'NRI' },
];

const parseNumber = (val) => {
  const n = Number(val.toString().replace(/,/g, ''));
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

const getOldRegimeSlabs = (ageCategory) => {
  if (ageCategory === '80plus') {
    return [
      { upto: 500000, rate: 0 },
      { upto: 1000000, rate: 0.2 },
      { upto: Infinity, rate: 0.3 },
    ];
  }
  if (ageCategory === '60to79') {
    return [
      { upto: 300000, rate: 0 },
      { upto: 500000, rate: 0.05 },
      { upto: 1000000, rate: 0.2 },
      { upto: Infinity, rate: 0.3 },
    ];
  }
  return [
    { upto: 250000, rate: 0 },
    { upto: 500000, rate: 0.05 },
    { upto: 1000000, rate: 0.2 },
    { upto: Infinity, rate: 0.3 },
  ];
};

const newRegimeSlabs = [
  { upto: 300000, rate: 0 },
  { upto: 700000, rate: 0.05 },
  { upto: 1000000, rate: 0.1 },
  { upto: 1200000, rate: 0.15 },
  { upto: 1500000, rate: 0.2 },
  { upto: Infinity, rate: 0.3 },
];

const calculateSlabTax = (taxableIncome, slabs) => {
  let remaining = taxableIncome;
  let previousLimit = 0;
  let totalTax = 0;
  const breakdown = [];

  for (const slab of slabs) {
    if (remaining <= 0) break;
    const span = Math.min(remaining, slab.upto - previousLimit);
    const taxForSlab = span * slab.rate;
    if (span > 0) {
      breakdown.push({
        label:
          slab.upto === Infinity
            ? `Above ₹${previousLimit.toLocaleString('en-IN')}`
            : `₹${previousLimit.toLocaleString('en-IN')}–₹${slab.upto.toLocaleString('en-IN')}`,
        tax: Math.round(taxForSlab),
      });
      totalTax += taxForSlab;
      remaining -= span;
      previousLimit = slab.upto;
    }
  }

  return { baseTax: Math.round(totalTax), slabBreakdown: breakdown };
};

const computeBaseTaxFromTaxableIncome = (taxableIncome, regime, ageCategory) => {
  const slabs = regime === 'old' ? getOldRegimeSlabs(ageCategory) : newRegimeSlabs;
  return calculateSlabTax(taxableIncome, slabs);
};

const calculateTax = (inputs) => {
  const {
    regime,
    ageCategory,
    residentialStatus,
    grossSalary,
    otherIncome,
    section80C,
    section80DSelfFamily,
    section80DParents,
    homeLoanInterest,
    hraExemption,
    ltaExemption,
    professionalTax,
  } = inputs;

  const grossIncome = grossSalary + otherIncome;

  const standardDeduction = regime === 'new' ? 75000 : 50000;

  let totalDeductions = standardDeduction;

  if (regime === 'old') {
    const capped80C = Math.min(section80C, 150000);
    const maxSelf80D = ageCategory === 'below60' ? 25000 : 50000;
    const capped80DSelf = Math.min(section80DSelfFamily, maxSelf80D);
    const capped80DParents = Math.min(section80DParents, 50000);
    const cappedHomeLoan = Math.min(homeLoanInterest, 200000);
    const cappedProfessionalTax = Math.min(professionalTax, 2500);

    totalDeductions +=
      capped80C +
      capped80DSelf +
      capped80DParents +
      cappedHomeLoan +
      hraExemption +
      ltaExemption +
      cappedProfessionalTax;
  }

  const taxableIncome = Math.max(0, grossIncome - totalDeductions);

  const { baseTax, slabBreakdown } = computeBaseTaxFromTaxableIncome(taxableIncome, regime, ageCategory);

  let rebate = 0;
  if (residentialStatus === 'resident') {
    if (regime === 'new' && taxableIncome <= 1200000) {
      rebate = baseTax;
    } else if (regime === 'old' && taxableIncome <= 500000) {
      rebate = Math.min(baseTax, 12500);
    }
  }

  let taxAfterRebate = Math.max(0, baseTax - rebate);

  const grossTotalIncome = grossIncome; // used for surcharge
  let surchargeRate = 0;
  let threshold = null;

  if (grossTotalIncome > 5000000 && grossTotalIncome <= 10000000) {
    surchargeRate = 0.1;
    threshold = 5000000;
  } else if (grossTotalIncome > 10000000 && grossTotalIncome <= 20000000) {
    surchargeRate = 0.15;
    threshold = 10000000;
  } else if (grossTotalIncome > 20000000 && grossTotalIncome <= 50000000) {
    surchargeRate = 0.25;
    threshold = 20000000;
  } else if (grossTotalIncome > 50000000) {
    surchargeRate = 0.37;
    threshold = 50000000;
  }

  if (regime === 'new' && surchargeRate > 0.25) {
    surchargeRate = 0.25;
  }

  let surcharge = 0;
  if (surchargeRate > 0 && taxAfterRebate > 0 && threshold) {
    const normalSurcharge = taxAfterRebate * surchargeRate;
    let taxWithSurcharge = taxAfterRebate + normalSurcharge;

    const deltaIncome = grossTotalIncome - threshold;
    const approxTaxableAtThreshold = Math.max(0, taxableIncome - deltaIncome);
    const { baseTax: baseAtThreshold } = computeBaseTaxFromTaxableIncome(
      approxTaxableAtThreshold,
      regime,
      ageCategory
    );

    let rebateAtThreshold = 0;
    if (residentialStatus === 'resident') {
      if (regime === 'new' && approxTaxableAtThreshold <= 1200000) {
        rebateAtThreshold = baseAtThreshold;
      } else if (regime === 'old' && approxTaxableAtThreshold <= 500000) {
        rebateAtThreshold = Math.min(baseAtThreshold, 12500);
      }
    }

    const taxAtThreshold = Math.max(0, baseAtThreshold - rebateAtThreshold);
    const maxTax = taxAtThreshold + (grossTotalIncome - threshold);

    if (taxWithSurcharge > maxTax) {
      surcharge = Math.max(0, maxTax - taxAfterRebate);
      taxWithSurcharge = taxAfterRebate + surcharge;
    } else {
      surcharge = normalSurcharge;
    }
  }

  surcharge = Math.round(surcharge);
  const taxPlusSurcharge = taxAfterRebate + surcharge;
  const cess = Math.round(taxPlusSurcharge * 0.04);
  const totalTax = Math.round(taxPlusSurcharge + cess);

  const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

  const componentData = [
    { name: 'Base Tax (after rebate)', value: Math.round(taxAfterRebate) },
    { name: 'Surcharge', value: surcharge },
    { name: 'Cess', value: cess },
  ].filter((c) => c.value > 0);

  return {
    grossIncome,
    totalDeductions: Math.round(totalDeductions),
    taxableIncome: Math.round(taxableIncome),
    baseTax,
    rebate: Math.round(rebate),
    surcharge,
    surchargeRate,
    cess,
    totalTax,
    effectiveRate,
    slabBreakdown,
    componentData,
  };
};

const VincumTaxCalculator = () => {
  const [regime, setRegime] = useState('new');
  const [ageCategory, setAgeCategory] = useState('below60');
  const [residentialStatus, setResidentialStatus] = useState('resident');
  const [grossSalary, setGrossSalary] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [section80C, setSection80C] = useState('');
  const [section80DSelfFamily, setSection80DSelfFamily] = useState('');
  const [section80DParents, setSection80DParents] = useState('');
  const [homeLoanInterest, setHomeLoanInterest] = useState('');
  const [hraExemption, setHraExemption] = useState('');
  const [ltaExemption, setLtaExemption] = useState('');
  const [professionalTax, setProfessionalTax] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadConsent, setLeadConsent] = useState(false);
  const [leadErrors, setLeadErrors] = useState({ name: '', phone: '', consent: '' });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitError, setLeadSubmitError] = useState('');

  const numericInputs = {
    regime,
    ageCategory,
    residentialStatus,
    grossSalary: parseNumber(grossSalary),
    otherIncome: parseNumber(otherIncome),
    section80C: parseNumber(section80C),
    section80DSelfFamily: parseNumber(section80DSelfFamily),
    section80DParents: parseNumber(section80DParents),
    homeLoanInterest: parseNumber(homeLoanInterest),
    hraExemption: parseNumber(hraExemption),
    ltaExemption: parseNumber(ltaExemption),
    professionalTax: parseNumber(professionalTax),
  };

  const selectedResult = useMemo(() => calculateTax(numericInputs), [JSON.stringify(numericInputs)]);

  const alternateRegime = regime === 'new' ? 'old' : 'new';
  const alternateResult = useMemo(
    () =>
      calculateTax({
        ...numericInputs,
        regime: alternateRegime,
      }),
    [JSON.stringify(numericInputs), alternateRegime]
  );

  const betterRegime = selectedResult.totalTax <= alternateResult.totalTax ? regime : alternateRegime;
  const savings =
    alternateResult.totalTax > 0
      ? Math.abs(selectedResult.totalTax - alternateResult.totalTax)
      : 0;

  const generatePdfReport = () => {
    const doc = new jsPDF();
    let y = 10;

    const addLine = (text) => {
      doc.text(text, 10, y);
      y += 7;
    };

    doc.setFontSize(14);
    addLine('Acharya Professional Accountants');
    doc.setFontSize(12);
    addLine('Income Tax Calculator Report – FY 2025-26 (AY 2026-27)');
    y += 3;

    doc.setFontSize(11);
    addLine(`Generated on: ${new Date().toLocaleString()}`);
    addLine(`Selected Regime: ${regime === 'new' ? 'New Regime' : 'Old Regime'}`);
    addLine(`Age Category: ${ageCategory}`);
    addLine(`Residential Status: ${residentialStatus}`);
    y += 4;

    addLine('--- Income Summary ---');
    addLine(`Gross Salary: ₹${selectedResult.grossIncome.toLocaleString('en-IN')}`);
    addLine(`Other Income: ₹${numericInputs.otherIncome.toLocaleString('en-IN')}`);
    addLine(`Total Deductions: ₹${selectedResult.totalDeductions.toLocaleString('en-IN')}`);
    addLine(`Taxable Income: ₹${selectedResult.taxableIncome.toLocaleString('en-IN')}`);
    y += 4;

    addLine('--- Tax Computation ---');
    addLine(`Base Tax: ₹${selectedResult.baseTax.toLocaleString('en-IN')}`);
    addLine(`Rebate (u/s 87A): ₹${selectedResult.rebate.toLocaleString('en-IN')}`);
    addLine(
      `Surcharge: ₹${selectedResult.surcharge.toLocaleString('en-IN')} (Rate: ${(selectedResult.surchargeRate * 100).toFixed(
        0
      )}%)`
    );
    addLine(`Health & Education Cess (4%): ₹${selectedResult.cess.toLocaleString('en-IN')}`);
    addLine(`Final Tax Payable: ₹${selectedResult.totalTax.toLocaleString('en-IN')}`);
    addLine(`Effective Tax Rate: ${selectedResult.effectiveRate.toFixed(2)}%`);
    y += 4;

    addLine('--- Regime Comparison ---');
    addLine(
      `Alternate Regime (${alternateRegime === 'new' ? 'New' : 'Old'}) Tax: ₹${alternateResult.totalTax.toLocaleString(
        'en-IN'
      )}`
    );
    addLine(
      `Better Regime (based on this estimate): ${betterRegime === 'new' ? 'New Regime' : 'Old Regime'}`
    );

    doc.save('acharya-income-tax-report-fy2025-26.pdf');
  };

  const validateLeadForm = () => {
    const errors = { name: '', phone: '', consent: '' };
    if (!leadName.trim()) {
      errors.name = 'Please enter your full name.';
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!leadPhone.trim()) {
      errors.phone = 'Please enter your mobile number.';
    } else if (!phoneRegex.test(leadPhone.trim())) {
      errors.phone = 'Enter a valid 10-digit Indian mobile number starting with 6–9.';
    }
    if (!leadConsent) {
      errors.consent = 'You must agree to be contacted.';
    }
    setLeadErrors(errors);
    return !errors.name && !errors.phone && !errors.consent;
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setLeadSubmitError('');
    const isValid = validateLeadForm();
    if (!isValid) return;

    try {
      setIsSubmittingLead(true);
      const payload = {
        name: leadName.trim(),
        phone: leadPhone.trim(),
        taxRegime: regime === 'new' ? 'New Regime' : 'Old Regime',
        grossIncome: selectedResult.grossIncome,
        taxableIncome: selectedResult.taxableIncome,
        totalTaxPayable: selectedResult.totalTax,
        timestamp: new Date().toISOString(),
      };

      const res = await fetch('https://formspree.io/f/xblnnqbb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      generatePdfReport();
      setIsModalOpen(false);
    } catch (err) {
      setLeadSubmitError('Something went wrong while submitting. Please try again in a moment.');
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const isLeadFormValid =
    !!leadName.trim() &&
    /^[6-9]\d{9}$/.test(leadPhone.trim()) &&
    leadConsent &&
    !isSubmittingLead;

  const deductionsDisabled = regime === 'new';

  return (
    <section id="tax-calculator" className="py-16 md:py-20 bg-dark-bg">
      <div className="container mx-auto px-5 md:px-12 lg:px-20" data-aos="fade-up" data-aos-delay="80">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
          {/* Left: Inputs */}
          <div className="w-full lg:w-1/2 bg-secondary-dark/80 rounded-2xl p-6 md:p-7 border border-primary-accent/10 shadow-xl">
            <p className="text-primary-accent uppercase tracking-[0.25em] text-xs mb-3 font-semibold">
              Vincum Tax Calculator
            </p>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-1">
              Indian Income Tax Calculator – FY 2025-26
            </h2>
            <p className="text-boulder text-sm md:text-base mb-5">
              Estimate your income tax under both Old and New Regimes with a practical, student- and professional-friendly view of
              slabs, deductions, and effective tax rates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="text-sm text-boulder">
                <span className="block font-semibold text-white mb-1">
                  Financial Year
                </span>
                <div className="px-3 py-2.5 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm">
                  2025-26 (AY 2026-27)
                </div>
              </div>
              <div className="text-sm text-boulder">
                <span className="block font-semibold text-white mb-1">
                  Tax Regime
                </span>
                <div className="flex gap-2">
                  {regimeOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRegime(opt.value)}
                      className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${regime === opt.value
                          ? 'bg-primary-accent text-dark-bg border-primary-accent'
                          : 'bg-dark-bg text-boulder border-primary-accent/20 hover:border-primary-accent/60'
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-sm text-boulder">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-white">Age Category</span>
                </div>
                <select
                  className="w-full px-3 py-2.5 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  value={ageCategory}
                  onChange={(e) => setAgeCategory(e.target.value)}
                >
                  {ageOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-boulder">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-white">Residential Status</span>
                </div>
                <select
                  className="w-full px-3 py-2.5 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  value={residentialStatus}
                  onChange={(e) => setResidentialStatus(e.target.value)}
                >
                  {residentialOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Income Inputs */}
            <div className="border-t border-primary-accent/10 pt-4 mt-4 space-y-3">
              <h3 className="font-montserrat text-sm md:text-base font-semibold text-white">
                Income Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">Gross Salary (Annual)</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> Includes basic, allowances, bonus
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    placeholder="e.g. 600000"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">Other Income</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> Interest, rental, etc.
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    placeholder="e.g. 50000"
                  />
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div className="border-t border-primary-accent/10 pt-4 mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-montserrat text-sm md:text-base font-semibold text-white">
                  Deductions (Old Regime)
                </h3>
                <span className="text-xs text-friar-gray">
                  {regime === 'new'
                    ? 'Most deductions are disabled in New Regime; only standard deduction is applied.'
                    : 'Enter eligible amounts; caps are applied automatically.'}
                </span>
              </div>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-3 text-sm ${deductionsDisabled ? 'opacity-60' : ''
                  }`}
              >
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">80C Investments</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> PF, ELSS, LIC (Max ₹1.5L)
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={section80C}
                    onChange={(e) => setSection80C(e.target.value)}
                    disabled={deductionsDisabled}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent disabled:opacity-60"
                    placeholder="e.g. 120000"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">80D – Self/Family</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> Health insurance premium
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={section80DSelfFamily}
                    onChange={(e) => setSection80DSelfFamily(e.target.value)}
                    disabled={deductionsDisabled}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent disabled:opacity-60"
                    placeholder="e.g. 20000"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">80D – Parents</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> Health insurance for parents
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={section80DParents}
                    onChange={(e) => setSection80DParents(e.target.value)}
                    disabled={deductionsDisabled}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent disabled:opacity-60"
                    placeholder="e.g. 30000"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">Home Loan Interest</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> Section 24(b), Max ₹2L
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={homeLoanInterest}
                    onChange={(e) => setHomeLoanInterest(e.target.value)}
                    disabled={deductionsDisabled}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent disabled:opacity-60"
                    placeholder="e.g. 180000"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">HRA Exemption</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> As per HRA rules
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={hraExemption}
                    onChange={(e) => setHraExemption(e.target.value)}
                    disabled={deductionsDisabled}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent disabled:opacity-60"
                    placeholder="e.g. 80000"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">LTA Exemption</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> As per LTA rules
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={ltaExemption}
                    onChange={(e) => setLtaExemption(e.target.value)}
                    disabled={deductionsDisabled}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent disabled:opacity-60"
                    placeholder="e.g. 30000"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between mb-1">
                    <span className="text-boulder">Professional Tax</span>
                    <span className="text-xs text-friar-gray">
                      <DynamicFaIcon name="fa-circle-info" className="mr-1" /> Max ₹2,500
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={professionalTax}
                    onChange={(e) => setProfessionalTax(e.target.value)}
                    disabled={deductionsDisabled}
                    className="w-full px-3 py-2 rounded-lg bg-dark-bg/60 border border-primary-accent/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent disabled:opacity-60"
                    placeholder="e.g. 2400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="w-full lg:w-1/2 space-y-5">
            {/* Summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-secondary-dark/80 rounded-xl p-3 border border-primary-accent/10">
                <p className="text-xs text-friar-gray mb-1">Gross Income</p>
                <p className="font-montserrat text-lg font-semibold">
                  ₹{selectedResult.grossIncome.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="bg-secondary-dark/80 rounded-xl p-3 border border-primary-accent/10">
                <p className="text-xs text-friar-gray mb-1">Total Deductions</p>
                <p className="font-montserrat text-lg font-semibold">
                  ₹{selectedResult.totalDeductions.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="bg-secondary-dark/80 rounded-xl p-3 border border-primary-accent/10">
                <p className="text-xs text-friar-gray mb-1">Taxable Income</p>
                <p className="font-montserrat text-lg font-semibold">
                  ₹{selectedResult.taxableIncome.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="bg-secondary-dark/80 rounded-xl p-3 border border-primary-accent/10">
                <p className="text-xs text-friar-gray mb-1">Final Tax Payable</p>
                <p className="font-montserrat text-lg font-semibold text-primary-accent">
                  ₹{selectedResult.totalTax.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Detailed breakdown */}
            <div className="bg-secondary-dark/80 rounded-2xl p-5 border border-primary-accent/10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-montserrat text-base md:text-lg font-semibold">
                  Detailed Tax Breakdown ({regime === 'new' ? 'New Regime' : 'Old Regime'})
                </h3>
                <p className="text-xs text-friar-gray">
                  Effective Tax Rate:{' '}
                  <span className="font-semibold text-primary-accent">
                    {selectedResult.effectiveRate.toFixed(2)}%
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-boulder">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Base Tax</span>
                    <span>₹{selectedResult.baseTax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rebate (u/s 87A)</span>
                    <span>₹{selectedResult.rebate.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax After Rebate</span>
                    <span>
                      ₹{(selectedResult.baseTax - selectedResult.rebate).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>
                      Surcharge{' '}
                      {selectedResult.surchargeRate > 0 && `(${(selectedResult.surchargeRate * 100).toFixed(0)}%)`}
                    </span>
                    <span>₹{selectedResult.surcharge.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cess (4%)</span>
                    <span>₹{selectedResult.cess.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-primary-accent">
                    <span>Total Tax</span>
                    <span>₹{selectedResult.totalTax.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regime comparison */}
            <div className="bg-secondary-dark/80 rounded-2xl p-5 border border-primary-accent/10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-montserrat text-base md:text-lg font-semibold">
                  Regime Comparison
                </h3>
                {savings > 0 && (
                  <p className="text-xs text-primary-accent">
                    Better based on this estimate:{' '}
                    <span className="font-semibold">
                      {betterRegime === 'new' ? 'New Regime' : 'Old Regime'}
                    </span>{' '}
                    (approx. savings ₹{savings.toLocaleString('en-IN')})
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-boulder">
                <div className="bg-dark-bg/60 rounded-xl p-3 border border-primary-accent/5">
                  <p className="text-friar-gray mb-1">
                    Selected – {regime === 'new' ? 'New Regime' : 'Old Regime'}
                  </p>
                  <p className="font-montserrat text-lg font-semibold mb-1">
                    ₹{selectedResult.totalTax.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs">
                    Effective Rate: {selectedResult.effectiveRate.toFixed(2)}%
                  </p>
                </div>
                <div className="bg-dark-bg/60 rounded-xl p-3 border border-primary-accent/5">
                  <p className="text-friar-gray mb-1">
                    Alternate – {alternateRegime === 'new' ? 'New Regime' : 'Old Regime'}
                  </p>
                  <p className="font-montserrat text-lg font-semibold mb-1">
                    ₹{alternateResult.totalTax.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs">
                    Effective Rate: {alternateResult.effectiveRate.toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary-dark/80 rounded-2xl p-4 border border-primary-accent/10 h-64">
                <p className="text-xs text-friar-gray mb-2">Tax by Slab</p>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={selectedResult.slabBreakdown}>
                    <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <RechartsTooltip
                      contentStyle={{ fontSize: 12 }}
                      formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Tax']}
                    />
                    <Bar dataKey="tax" fill="#e5a145" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-secondary-dark/80 rounded-2xl p-4 border border-primary-accent/10 h-64">
                <p className="text-xs text-friar-gray mb-2">Tax Components</p>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={selectedResult.componentData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {selectedResult.componentData.map((entry, index) => (
                        <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: 10 }} />
                    <RechartsTooltip
                      formatter={(value, name) => [
                        `₹${value.toLocaleString('en-IN')}`,
                        name,
                      ]}
                      contentStyle={{ fontSize: 12 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-accent text-dark-bg text-sm font-semibold hover:bg-korma transition-all duration-300"
              >
                <i className="fas fa-download text-xs" />
                <span>Download Report</span>
              </button>
              <p className="text-[11px] text-friar-gray max-w-sm">
                This calculator is for educational guidance only and does not replace personalised advice. Tax rules can change; please
                consult a professional for filing decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-secondary-dark rounded-2xl w-full max-w-md p-6 md:p-7 border border-primary-accent/30 shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-montserrat text-xl font-semibold text-white mb-1">
                  Download PDF Tax Report
                </h3>
                <p className="text-xs text-boulder">
                  Share your details to receive a personalised estimate summary. You can still change inputs and recalculate anytime.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-friar-gray hover:text-white transition-colors"
                aria-label="Close"
              >
                <i className="fas fa-times" />
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleLeadSubmit}>
              <div className="text-sm">
                <label className="block text-boulder mb-1">
                  Full Name <span className="text-primary-accent">*</span>
                </label>
                <input
                  type="text"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-dark-bg/70 border border-primary-accent/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  placeholder="Your full name"
                />
                {leadErrors.name && (
                  <p className="text-[11px] text-red-400 mt-1">{leadErrors.name}</p>
                )}
              </div>

              <div className="text-sm">
                <label className="block text-boulder mb-1">
                  Mobile Number <span className="text-primary-accent">*</span>
                </label>
                <input
                  type="tel"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-dark-bg/70 border border-primary-accent/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  placeholder="10-digit Indian mobile number"
                />
                {leadErrors.phone && (
                  <p className="text-[11px] text-red-400 mt-1">{leadErrors.phone}</p>
                )}
              </div>

              <div className="flex items-start gap-2 text-xs text-boulder">
                <input
                  id="lead-consent"
                  type="checkbox"
                  checked={leadConsent}
                  onChange={(e) => setLeadConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-primary-accent/40 bg-dark-bg/80 text-primary-accent focus:ring-primary-accent"
                />
                <label htmlFor="lead-consent">
                  I agree to be contacted regarding tax-related services.
                </label>
              </div>
              {leadErrors.consent && (
                <p className="text-[11px] text-red-400 -mt-2">{leadErrors.consent}</p>
              )}

              {leadSubmitError && (
                <p className="text-[11px] text-red-400">{leadSubmitError}</p>
              )}

              <div className="flex justify-between items-center pt-2 gap-3 flex-wrap">
                <button
                  type="submit"
                  disabled={!isLeadFormValid}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isLeadFormValid
                      ? 'bg-primary-accent text-dark-bg hover:bg-korma'
                      : 'bg-friar-gray text-dark-bg cursor-not-allowed opacity-70'
                    }`}
                >
                  {isSubmittingLead ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <i className="fas fa-file-download text-xs" />
                      <span>Download PDF Report</span>
                    </>
                  )}
                </button>
                <p className="text-[10px] text-friar-gray max-w-[220px]">
                  Your details are used only to share guidance from Acharya Professional Accountants. No data is stored in the browser.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default VincumTaxCalculator;


