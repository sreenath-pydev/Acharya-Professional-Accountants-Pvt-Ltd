import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceManagementReportsPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Strategic Management Reporting Services | Acharya"
        description="Professional Management Report Services in Kerala and India. Gain complete financial visibility and make confident business decisions with custom MIS reports."
        canonical="https://www.acharyaprofessionalaccountants.in/services/accounting/management-reports"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Accounting / Management Reports</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Strategic Financial Reporting for Smarter Business Decisions
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              At <strong className="text-white">Acharya Professional Accountants</strong>, we provide professional <strong className="text-white">Management Report Services</strong> designed to help businesses gain complete financial visibility, improve operational efficiency, and make confident business decisions. Our reporting solutions enable organizations to monitor financial performance, track revenue and expenses, maintain compliance, and strengthen long-term financial planning.
            </p>
            <p>
              As a trusted provider of <strong className="text-white">Cash Flow Management India</strong> solutions and <strong className="text-white">Professional Accounting Services India</strong>, we support businesses across Kerala and throughout India with accurate, timely, and insight-driven financial reporting.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/accounting.webp" type="image/webp" />
            <img
              src="/images/accounting.webp"
              alt="Management Reports at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services and Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Comprehensive Management Reporting Solutions */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Comprehensive Management Reporting Solutions</h2>
            <p className="text-boulder mb-6">
              Our customized management reports help business owners and decision-makers understand the financial health of their organization through detailed analysis and performance tracking. Our services include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'Revenue Monitoring Services and performance analysis',
                'Expense Tracking Services for operational cost control',
                'Monthly and quarterly financial reporting',
                'Budget planning and forecasting support',
                'Financial Statement Preparation and reporting review',
                'Business Financial Analysis for strategic growth planning',
                'Cash inflow and outflow monitoring for stability',
                'GST and Income Tax Services integration in reports',
                'Financial Compliance Services for statutory accuracy',
                'Support for Audit and Taxation Services',
                'Income Tax Return Filing India coordination',
                'Business Tax Filing Services and documentation support',
                'Customized MIS and management dashboards',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Improve Financial Control and Business Stability */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Improve Financial Control and Stability</h2>
            <p className="text-boulder mb-4">
              Effective management reporting is essential for maintaining financial discipline and improving business performance. Our expert team ensures that every report is professionally prepared, data-driven, and aligned with your operational goals.
            </p>
            <p className="text-boulder mb-4">
              With our <strong className="text-white">Accounting Services Kerala</strong>, businesses can:
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Identify unnecessary expenses and improve cost efficiency',
                'Monitor profitability and revenue trends',
                'Strengthen budgeting and financial planning',
                'Maintain accurate GST and tax records',
                'Improve financial transparency and compliance',
                'Support informed management and investment decisions',
                'Enhance operational stability through consistent reporting',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            As specialists in <strong className="text-white">Chartered Accountant Services Kozhikode</strong>, we combine accounting expertise with modern reporting practices to deliver dependable and actionable financial insights.
          </p>
        </div>
      </section>

      {/* Financial Expertise */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-gradient-to-r from-secondary-dark to-secondary-dark/65 border border-primary-accent/15 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">
              Trusted Financial Expertise Across Kerala and India
            </h2>
            <p className="text-boulder text-base md:text-lg">
              At <strong className="text-white">Acharya Professional Accountants</strong>, we understand that accurate reporting is critical for sustainable business growth. Our team delivers dependable <strong className="text-white">Business Cash Flow Services</strong>, advanced financial reporting solutions, and compliance-focused accounting support tailored to the needs of modern businesses.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-boulder text-base md:text-lg border-l-2 border-primary-accent/30 pl-6 leading-relaxed">
              Whether you require detailed management reports, ongoing financial monitoring, GST compliance support, or complete accounting and taxation assistance, we provide the professionalism, precision, and strategic guidance your business needs to grow confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
                Partner with Acharya Professional Accountants
              </h3>
              <p className="text-lg max-w-2xl font-medium">
                Your trusted financial and accounting partner for professional management reporting, compliance, and business growth across Kerala and India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter font-semibold">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Management%20Report%20Services"
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

export default ServiceManagementReportsPage;
