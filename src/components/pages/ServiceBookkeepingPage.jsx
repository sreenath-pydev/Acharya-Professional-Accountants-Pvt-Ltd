import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceBookkeepingPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const businessTypes = [
    { name: 'Small businesses', icon: 'fa-store' },
    { name: 'Startups', icon: 'fa-rocket' },
    { name: 'Retail shops', icon: 'fa-shopping-bag' },
    { name: 'E-commerce businesses', icon: 'fa-laptop' },
    { name: 'Freelancers', icon: 'fa-user-tie' },
    { name: 'Consultants', icon: 'fa-handshake' },
    { name: 'Service companies', icon: 'fa-cogs' },
    { name: 'Traders and wholesalers', icon: 'fa-shopping-cart' },
    { name: 'Professional firms', icon: 'fa-building' },
  ];

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Professional Bookkeeping Services | Acharya Professional Accountants"
        description="Reliable accounting and bookkeeping services in Kerala and across India. Support for daily entries, bank reconciliation, GST bookkeeping, and payroll."
        canonical="https://www.acharyaprofessionalaccountants.in/services/accounting/bookkeeping"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Accounting / Bookkeeping</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Professional Bookkeeping Services by Acharya Professional Accountants
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              In today’s competitive business environment, accurate <strong className="text-white">Bookkeeping Services</strong> play a major role in maintaining financial stability, business growth, and legal compliance. Every business, whether small, medium, or large, requires proper financial record management to track income, expenses, profits, liabilities, and tax obligations. At Acharya Professional Accountants, we provide reliable and professional Bookkeeping Services in Kerala and across India for businesses, startups, freelancers, and professionals across multiple industries.
            </p>
            <p>
              Our Bookkeeping Services Kozhikode and pan-India accounting support are designed to help businesses maintain organized financial records while reducing accounting errors and compliance risks. Proper bookkeeping helps business owners make better financial decisions, manage cash flow efficiently, and prepare for GST Filing, Audit and Taxation Services, and Income Tax Return Filing India requirements.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/accounting.webp" type="image/webp" />
            <img
              src="/images/accounting.webp"
              alt="Bookkeeping Services at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services and Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Our Bookkeeping Services */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">What Our Bookkeeping Team Handles:</h2>
            <p className="text-boulder mb-6">
              Our experienced accounting team handles a complete range of bookkeeping and day-to-day transaction records:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'Daily bookkeeping entries',
                'Sales and purchase recording',
                'Bank reconciliation',
                'Expense tracking',
                'Accounts payable and receivable management',
                'GST bookkeeping support',
                'Payroll bookkeeping',
                'Financial statement preparation',
                'Ledger maintenance',
                'Tally accounting services',
                'Business financial reporting',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            Professional Bookkeeping Services are essential for maintaining accurate records for GST and Income Tax Services, Financial Compliance Services, and Business Tax Filing requirements.
          </p>
        </div>

        {/* Why Bookkeeping helps in */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Proper Bookkeeping Helps in:</h2>
            <p className="text-boulder mb-4">
              Many businesses face penalties, compliance notices, and financial confusion because of incomplete or inaccurate bookkeeping practices. Organized bookkeeping systems help in:
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'GST Registration Kerala',
                'Online GST Filing',
                'Income Tax Filing Kerala',
                'Income Tax Return Filing India',
                'Audit preparation',
                'Financial planning',
                'Cash flow management',
                'Loan documentation',
                'Financial Compliance Services',
                'Business growth analysis',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            As trusted Accounting and Bookkeeping Experts in Kerala and India, we help businesses reduce financial confusion and improve operational efficiency.
          </p>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center text-white">We Support</h2>
        <p className="text-boulder text-center mb-8 max-w-2xl mx-auto">
          Our Bookkeeping Services Kerala and India support diverse sectors:
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
        <p className="text-boulder text-center text-sm">
          At Acharya Professional Accountants, we focus on accurate data entry, timely reporting, and organized financial management using modern software and methods.
        </p>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
                Accurate Records. Better Decisions. Stronger Business Growth.
              </h3>
              <p className="text-lg max-w-2xl font-medium">
                Whether you are a startup owner, freelancer, small business, or growing company anywhere in Kerala or India, our professional Bookkeeping Services ensure that your business financial records remain accurate, compliant, and ready for future growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Bookkeeping%20Services"
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

export default ServiceBookkeepingPage;
