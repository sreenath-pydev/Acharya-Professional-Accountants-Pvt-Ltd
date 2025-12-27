import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import VincumTaxCalculator from '../sections/VincumTaxCalculator';
import { setCanonical } from '../../utils/seo';

const TaxCalculatorPage = () => {
    useEffect(() => {
        document.title = 'Income Tax Calculator FY 2025-26 | Plan & Save Tax | Acharya';
        setCanonical('https://acharyaprofessionalaccountants.in/calculator');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        AOS.refresh();
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            {/* SEO Header Section */}
            <section className="container mx-auto px-4 md:px-20 mb-8 md:mb-12 text-center" data-aos="fade-up">
                <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                    Free Online Tool
                </p>
                <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
                    Income Tax Calculator <span className="text-primary-accent">&</span> Planner
                </h1>
                <p className="text-lg text-boulder max-w-2xl mx-auto">
                    Compare Old vs. New Regime instantly. Estimate your tax liability for FY 2025-26 and optimize your savings with our easy-to-use, comprehensive calculator.
                </p>
            </section>

            {/* Calculator Section */}
            <VincumTaxCalculator />

            {/* Benefits / Why Use Section */}
            <section className="container mx-auto px-4 md:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-secondary-dark/50 border border-primary-accent/10 p-6 rounded-2xl hover:border-primary-accent/30 transition-colors">
                        <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center mb-4 text-primary-accent text-xl">
                            <i className="fas fa-calculator"></i>
                        </div>
                        <h3 className="font-montserrat text-xl font-bold mb-2">Accurate Estimation</h3>
                        <p className="text-boulder text-sm">
                            Updated with the latest budget 2025 amendments, surcharges, and rebate limits to ensure precise calculations.
                        </p>
                    </div>
                    <div className="bg-secondary-dark/50 border border-primary-accent/10 p-6 rounded-2xl hover:border-primary-accent/30 transition-colors">
                        <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center mb-4 text-primary-accent text-xl">
                            <i className="fas fa-balance-scale"></i>
                        </div>
                        <h3 className="font-montserrat text-xl font-bold mb-2">Regime Comparison</h3>
                        <p className="text-boulder text-sm">
                            Confused between Old and New regimes? We automatically compare both to show you where you save more.
                        </p>
                    </div>
                    <div className="bg-secondary-dark/50 border border-primary-accent/10 p-6 rounded-2xl hover:border-primary-accent/30 transition-colors">
                        <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center mb-4 text-primary-accent text-xl">
                            <i className="fas fa-file-invoice-dollar"></i>
                        </div>
                        <h3 className="font-montserrat text-xl font-bold mb-2">Detailed Breakdown</h3>
                        <p className="text-boulder text-sm">
                            Get a component-wise breakdown of Base Tax, Surcharge, and Cess to understand exactly what you are paying.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expert Services CTA Section */}
            <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-secondary-dark border border-primary-accent/15 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
                            Need Professional Tax Assistance?
                        </h2>
                        <p className="text-boulder text-lg mb-6">
                            Calculators are great for estimates, but complex incomes require expert attention. Our Chartered Accountants can help you file accurate returns and maximize refunds.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-sm text-boulder">
                                <i className="fas fa-check text-primary-accent"></i> ITR Filing for Salaried & Business
                            </li>
                            <li className="flex items-center gap-3 text-sm text-boulder">
                                <i className="fas fa-check text-primary-accent"></i> Capital Gains & Foreign Income
                            </li>
                            <li className="flex items-center gap-3 text-sm text-boulder">
                                <i className="fas fa-check text-primary-accent"></i> Notice Management & Appeals
                            </li>
                        </ul>
                        <Link
                            to="/services/taxation"
                            className="inline-flex items-center gap-2 bg-primary-accent text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-white transition-all duration-300"
                        >
                            Explore Taxation Services <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3">
                        {/* Placeholder for an illustration or icon if needed, using a simple stylized box for now or reused image */}
                        <div className="bg-dark-bg/50 p-6 rounded-2xl border border-primary-accent/10 text-center">
                            <i className="fas fa-user-tie text-6xl text-primary-accent/20 mb-4"></i>
                            <p className="text-white font-semibold">Expert CA Support</p>
                            <p className="text-xs text-friar-gray mt-1">Get personalized advice locally in Kozhikode & Online</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 md:px-20 mb-20" data-aos="fade-up" data-aos-delay="150">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="bg-secondary-dark/30 rounded-xl p-6 border border-primary-accent/5">
                        <h3 className="font-semibold text-white mb-2">Which regime is better for me?</h3>
                        <p className="text-boulder text-sm">
                            It depends on your investments. Generally, if your deductions (HRA, 80C, 80D, etc.) exceed ₹3.75 Lakhs, the Old Regime might be beneficial. Otherwise, the New Regime usually offers lower tax rates. Use the calculator above to check.
                        </p>
                    </div>
                    <div className="bg-secondary-dark/30 rounded-xl p-6 border border-primary-accent/5">
                        <h3 className="font-semibold text-white mb-2">Is Standard Deduction applicable in New Regime?</h3>
                        <p className="text-boulder text-sm">
                            Yes, starting from FY 2023-24, the Standard Deduction of ₹50,000 (increased to ₹75,000 proposed in recent updates for specific cases) is available under the New Regime as well for salaried individuals.
                        </p>
                    </div>
                    <div className="bg-secondary-dark/30 rounded-xl p-6 border border-primary-accent/5">
                        <h3 className="font-semibold text-white mb-2">Do I need to file ITR if my income is tax-free?</h3>
                        <p className="text-boulder text-sm">
                            Even if your tax liability is zero, filing ITR is mandatory if your total income exceeds the basic exemption limit (₹3 Lakhs). It is also helpful for loan processing and visa applications.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TaxCalculatorPage;
