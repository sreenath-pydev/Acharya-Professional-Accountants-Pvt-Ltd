import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceReconciliationsPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Reconciliation Services | Acharya Professional Accountants"
        description="Professional bank, GST, vendor, customer ledger, accounts payable/receivable, and TDS reconciliation services in Kerala and across India."
        canonical="https://www.acharyaprofessionalaccountants.in/services/accounting/reconciliations"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Accounting / Reconciliations</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Reconciliation Services by Acharya Professional Accountants
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              Accurate <strong className="text-white">Reconciliation Services</strong> are essential for maintaining proper financial records, identifying accounting errors, and ensuring business compliance. At Acharya Professional Accountants, we provide professional Reconciliation Services in Kerala and across India for businesses, startups, freelancers, traders, and professionals who require accurate financial management and transparent accounting systems.
            </p>
            <p>
              Financial reconciliations help businesses compare internal financial records with external statements such as bank accounts, GST reports, supplier balances, customer ledgers, and tax records. Proper reconciliation ensures that every transaction is correctly recorded and helps businesses identify missing entries, duplicate transactions, accounting mistakes, or financial mismatches.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/accounting.webp" type="image/webp" />
            <img
              src="/images/accounting.webp"
              alt="Reconciliation Services at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services and Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Our Reconciliation Services */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Our Reconciliation Services include:</h2>
            <p className="text-boulder mb-6">
              Our professional reconciliation solutions include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'Bank Reconciliation Statements (BRS)',
                'GST Reconciliation',
                'Vendor Reconciliation',
                'Customer Ledger Reconciliation',
                'Accounts Payable Reconciliation',
                'Accounts Receivable Reconciliation',
                'TDS Reconciliation',
                'Income Tax Reconciliation',
                'Credit Card Reconciliation',
                'Financial Ledger Verification',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            Proper reconciliation is highly important for: GST and Income Tax Services, Income Tax Return Filing India, Financial Statement Preparation, Audit and Taxation Services, Financial Compliance Services, Business Tax Filing, Cash Flow Monitoring, and Accurate Financial Reporting.
          </p>
        </div>

        {/* Why Reconciliation helps */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Our Reconciliation Services help:</h2>
            <p className="text-boulder mb-4">
              Many businesses face tax notices, compliance issues, and financial confusion because of incomplete reconciliations and inaccurate accounting records. At Acharya Professional Accountants, our experienced professionals ensure that every financial record is carefully verified, matched, and organized to maintain financial transparency and compliance.
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Detect accounting errors quickly',
                'Improve financial accuracy',
                'Reduce compliance risks',
                'Maintain audit readiness',
                'Improve cash flow control',
                'Support business decision-making',
                'Ensure accurate GST filing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            Whether you are a small business, startup, freelancer, e-commerce business, or growing company, our professional reconciliation support helps maintain clean, accurate, and compliant records.
          </p>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
                Accurate Reconciliation Creates Strong Financial Control
              </h3>
              <p className="text-xl font-bold mb-2">Better Accuracy. Better Compliance. Better Business Growth.</p>
              <p className="text-lg max-w-2xl font-medium">
                Partner with Acharya Professional Accountants for reliable, accurate, and business-focused reconciliation solutions across Kerala and India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter font-semibold">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Reconciliation%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex justify-center items-center bg-dark-bg text-primary-accent px-6 py-3 rounded-full hover:bg-secondary-dark hover:text-primary-accent transition-all duration-300"
              >
                Enquire on WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex-1 sm:flex-none inline-flex justify-center items-center bg-white text-dark-bg px-6 py-3 rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-300"
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

export default ServiceReconciliationsPage;
