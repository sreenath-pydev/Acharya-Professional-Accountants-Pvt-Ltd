import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceTaxAuditPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    { name: 'Retail and trading businesses', icon: 'fa-shopping-cart' },
    { name: 'Manufacturing companies', icon: 'fa-industry' },
    { name: 'Construction and contracting firms', icon: 'fa-building' },
    { name: 'Healthcare institutions', icon: 'fa-hospital' },
    { name: 'Educational organizations', icon: 'fa-graduation-cap' },
    { name: 'Service-based businesses', icon: 'fa-cogs' },
    { name: 'E-commerce companies', icon: 'fa-laptop' },
    { name: 'Startups and SMEs', icon: 'fa-rocket' },
  ];

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Tax Audit Services (u/s 44AB) | Acharya Professional Accountants"
        description="Professional Tax Audit Services under Section 44AB designed to help businesses maintain statutory compliance, financial accuracy, and transparent reporting."
        canonical="https://www.acharyaprofessionalaccountants.in/services/auditing/tax-audit"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Auditing / Tax Audit</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Professional Tax Audit Services for Businesses Across Kerala & India
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              At <strong className="text-white">Acharya Professional Accountants</strong>, we provide reliable and professional <strong className="text-white">Tax Audit Services (u/s 44AB)</strong> designed to help businesses maintain statutory compliance, financial accuracy, and transparent reporting under the Income Tax Act. Our experienced professionals assist businesses in conducting tax audits efficiently while ensuring proper documentation, accurate financial reporting, and timely compliance.
            </p>
            <p>
              As a trusted provider of <strong className="text-white">Professional Accounting Services India</strong>, we support businesses across Kerala and India with comprehensive tax audit solutions that strengthen financial management and support smooth business operations.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/audit.webp" type="image/webp" />
            <img
              src="/images/audit.webp"
              alt="Tax Audit Services (u/s 44AB) at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services & Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Our Tax Audit Services */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Our Tax Audit Services (u/s 44AB)</h2>
            <p className="text-boulder mb-6">
              Our audit and compliance solutions are tailored for startups, SMEs, professionals, trading businesses, and corporate organizations.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'Tax Audit under Section 44AB',
                'Financial Statement Preparation',
                'GST and Income Tax Services',
                'Income Tax Return Filing India',
                'Audit and Taxation Services',
                'Business Tax Filing Services',
                'Financial Reporting Services',
                'Financial Compliance Services',
                'Business Financial Analysis',
                'Revenue Monitoring Services',
                'Expense Tracking Services',
                'Ledger scrutiny and account reconciliation',
                'Compliance review and documentation support',
                'Cash Flow Management India support',
                'Business Cash Flow Services consultation',
                'Audit reporting and verification',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            Our professionals ensure that financial records are properly reviewed, reconciled, and maintained according to statutory and taxation requirements.
          </p>
        </div>

        {/* Why Tax Audit is Important */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Why Tax Audit (u/s 44AB) is Important</h2>
            <p className="text-boulder mb-4">
              Tax audits play a vital role in ensuring financial transparency, reducing compliance risks, and maintaining accurate books of accounts. A professionally conducted tax audit helps businesses improve reporting standards, identify discrepancies, and ensure compliance with Income Tax regulations.
            </p>
            <p className="text-boulder mb-4">
              Our <strong className="text-white">Accounting Services Kerala</strong> and compliance-focused financial solutions help businesses:
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Maintain accurate financial records',
                'Improve operational transparency and accountability',
                'Support GST and Income Tax compliance',
                'Strengthen budgeting and financial planning',
                'Reduce risks of penalties and notices',
                'Improve financial decision-making',
                'Enhance credibility with banks and stakeholders',
                'Ensure timely statutory reporting and filing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            With increasing regulatory requirements and evolving tax laws, businesses require expert support to maintain smooth and compliant financial operations.
          </p>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center text-white">Industries We Support</h2>
        <p className="text-boulder text-center mb-8 max-w-2xl mx-auto">
          We provide <strong className="text-white">Tax Audit Services (u/s 44AB)</strong> for:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-secondary-dark border border-primary-accent/10 rounded-xl p-5 flex flex-col items-center text-center hover:border-primary-accent/30 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center mb-4 group-hover:bg-primary-accent/20 transition-colors">
                <DynamicFaIcon name={ind.icon} className="text-primary-accent text-xl" />
              </div>
              <span className="text-sm font-medium text-white">{ind.name}</span>
            </div>
          ))}
        </div>
        <p className="text-boulder text-center text-sm">
          Our audit solutions are customized according to industry-specific financial structures and compliance requirements.
        </p>
      </section>

      {/* Why Choose Acharya Section */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-secondary-dark/80 rounded-2xl p-8 md:p-10 border border-primary-accent/10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
          <div>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold leading-tight text-white">
              Why Choose Acharya Professional Accountants
            </h2>
            <p className="text-boulder text-sm mt-3">
              As a trusted provider of <strong className="text-white">Chartered Accountant Services Kozhikode</strong>, we focus on professionalism, accuracy, and compliance excellence to help businesses maintain strong financial systems and statutory compliance.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat text-lg font-bold mb-4 text-primary-accent">What Makes Us Different:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-boulder text-sm">
              {[
                'Experienced taxation and audit professionals',
                'Accurate audit reporting and documentation',
                'Timely filing and compliance support',
                'Transparent and professional service approach',
                'Industry-focused financial expertise',
                'End-to-end audit and taxation assistance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <DynamicFaIcon name="fa-check" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
                Your Trusted Tax Audit & Compliance Partner
              </h3>
              <p className="text-lg max-w-2xl font-medium">
                Professional Tax Audit Services (u/s 44AB) are essential for maintaining compliance, strengthening financial transparency, and supporting sustainable business growth. Partner with Acharya Professional Accountants for dependable, accurate, and business-focused tax audit solutions across Kerala and India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Tax%20Audit%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex justify-center items-center bg-dark-bg text-primary-accent font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark hover:text-primary-accent transition-all duration-300"
              >
                Enquire on WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex-1 sm:flex-none inline-flex justify-center items-center bg-white text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-300"
              >
                Contact Form
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-dark-bg font-semibold hover:text-secondary-dark transition-colors duration-300"
            >
              <DynamicFaIcon name="fa-arrow-left" className="text-sm" />
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceTaxAuditPage;
