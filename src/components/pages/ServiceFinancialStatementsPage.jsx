import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceFinancialStatementsPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const businessTypes = [
    { name: 'Startups', icon: 'fa-rocket' },
    { name: 'Small businesses', icon: 'fa-store' },
    { name: 'Traders and wholesalers', icon: 'fa-shopping-cart' },
    { name: 'E-commerce businesses', icon: 'fa-laptop' },
    { name: 'Service companies', icon: 'fa-cogs' },
    { name: 'Freelancers', icon: 'fa-user-tie' },
    { name: 'Consultants', icon: 'fa-handshake' },
    { name: 'Partnership firms', icon: 'fa-users' },
    { name: 'Private companies', icon: 'fa-building' },
  ];

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Financial Statement Services | Acharya Professional Accountants"
        description="Professional Financial Statement services in Kerala and across India. Accurate Balance Sheets, P&L, and Cash Flow statement preparation for businesses."
        canonical="https://www.acharyaprofessionalaccountants.in/services/accounting/financial-statements"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Accounting / Financial Statements</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Financial Statement Services by Acharya Professional Accountants
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              Accurate Financial Statements are the foundation of every successful business. Whether you are a startup, small business, freelancer, partnership firm, or growing company, professionally prepared financial reports help you understand your business performance, maintain compliance, and make smarter financial decisions.
            </p>
            <p>
              At <strong className="text-white">Acharya Professional Accountants</strong>, we provide professional <strong className="text-white">Financial Statement Services</strong> in Kerala and across India for businesses of all sizes. Our expert accounting team prepares accurate, compliant, and well-structured financial reports that support business growth, tax filing, audits, banking requirements, and financial planning.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/accounting.webp" type="image/webp" />
            <img
              src="/images/accounting.webp"
              alt="Financial Statement Services at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services and Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Our Financial Statement Services */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Our Financial Statement Services include:</h2>
            <p className="text-boulder mb-6">
              Our accounting team provides comprehensive financial statement preparation and reporting:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'Profit & Loss Statement Preparation',
                'Balance Sheet Preparation',
                'Cash Flow Statements',
                'Trial Balance Preparation',
                'Ledger Scrutiny',
                'Bank Reconciliation Statements',
                'MIS Reporting',
                'Financial Analysis Reports',
                'Business Performance Reports',
                'GST & Tax Reporting Support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            We ensure that every report is prepared with accuracy, transparency, and goes through a rigorous professional review process.
          </p>
        </div>

        {/* Proper Financial Statements are essential for */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Proper Financial Statements are Essential for:</h2>
            <p className="text-boulder mb-4">
              Many businesses face compliance issues, inaccurate reporting, and financial confusion because of improper accounting records. Well-structured statements are required for:
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Income Tax Return Filing India',
                'GST and Income Tax Services',
                'Audit and Taxation Services',
                'Loan Applications',
                'Investor Reporting',
                'Business Compliance',
                'Financial Planning',
                'Company Valuation',
                'Budgeting and Forecasting',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            At Acharya Professional Accountants, we ensure that every financial report is prepared with accuracy, transparency, and professional review.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-secondary-dark rounded-2xl p-8 md:p-10 border border-primary-accent/10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-white text-center">
            How Our Services Help Your Business
          </h2>
          <p className="text-boulder text-center mb-8 max-w-2xl mx-auto">
            Our Financial Statement Services Kerala and pan-India support help businesses:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Understand Profitability', desc: 'Get accurate insights into profit margins, operational costs, and overall financial performance.' },
              { title: 'Track Business Performance', desc: 'Monitor monthly, quarterly, and annual trends to evaluate business health.' },
              { title: 'Improve Cash Flow Management', desc: 'Track inflows and outflows to maintain liquidity and support day-to-day operations.' },
              { title: 'Maintain Legal Compliance', desc: 'Ensure reports conform with standard tax regulations and legal frameworks.' },
              { title: 'Prepare for Audits', desc: 'Have structured books and reconciliations ready for smooth internal and statutory audits.' },
              { title: 'Strengthen Financial Credibility', desc: 'Build trust with banks, stakeholders, and potential investors with clear records.' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-dark-bg/60 p-6 rounded-xl border border-primary-accent/5 hover:border-primary-accent/15 transition-all">
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-boulder">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-boulder font-medium text-sm italic">
              Our comprehensive accounting support empowers you to make strategic business decisions based on accurate data.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="150">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center text-white">We Work With</h2>
        <p className="text-boulder text-center mb-8 max-w-2xl mx-auto">
          We provide comprehensive financial reporting support for various entity structures, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 mb-8">
          {businessTypes.map((biz, idx) => (
            <div
              key={idx}
              className="bg-secondary-dark border border-primary-accent/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-primary-accent/30 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center mb-3 group-hover:bg-primary-accent/20 transition-colors">
                <DynamicFaIcon name={biz.icon} className="text-primary-accent text-lg" />
              </div>
              <span className="text-xs font-semibold text-white leading-tight">{biz.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
                Accurate Financial Statements Build Strong Businesses
              </h3>
              <p className="text-lg max-w-2xl font-medium">
                As trusted Financial Reporting Experts in Kerala and India, our goal is to help businesses maintain organized financial records and achieve long-term financial stability through professional accounting support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Financial%20Statement%20Services"
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

export default ServiceFinancialStatementsPage;
