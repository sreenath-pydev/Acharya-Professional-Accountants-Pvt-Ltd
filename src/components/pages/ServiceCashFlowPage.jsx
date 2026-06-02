import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceCashFlowPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Cash Flow Tracking Services | Acharya Professional Accountants"
        description="Reliable Cash Flow Tracking and Management services in Kerala and across India. Improve operational stability, control expenses, and forecast cash flow."
        canonical="https://www.acharyaprofessionalaccountants.in/services/accounting/cash-flow"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Accounting / Cash Flow</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Cash Flow Tracking Services by Acharya Professional Accountants
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              Effective <strong className="text-white">Cash Flow Tracking</strong> is one of the most important parts of successful business management. No matter how profitable a business appears, poor cash flow management can create serious financial problems, operational delays, and compliance challenges. At Acharya Professional Accountants, we provide professional Cash Flow Tracking Services in Kerala and across India to help businesses maintain financial stability, improve decision-making, and manage business operations efficiently.
            </p>
            <p>
              Cash Flow Tracking helps businesses monitor the movement of money coming into and going out of the business. Proper cash flow management allows business owners to understand their financial position, control expenses, manage liabilities, and plan future investments more effectively.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/accounting.webp" type="image/webp" />
            <img
              src="/images/accounting.webp"
              alt="Cash Flow Tracking Services at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services and Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Our Cash Flow Tracking Services */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Our Cash Flow Tracking Services include:</h2>
            <p className="text-boulder mb-6">
              Our professional cash flow monitoring solutions include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'Daily cash flow monitoring',
                'Business cash inflow and outflow tracking',
                'Expense management',
                'Revenue analysis',
                'Cash flow forecasting',
                'Financial reporting',
                'Accounts receivable monitoring',
                'Accounts payable tracking',
                'Business financial analysis',
                'Monthly and quarterly cash flow reports',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            Proper Cash Flow Tracking Services are essential for Business Financial Planning, Financial Statement Preparation, GST and Income Tax Services, Audit and Taxation Services, Business Tax Filing, Financial Compliance Services, Loan and investment planning, and Business growth analysis.
          </p>
        </div>

        {/* Why Proper Cash Flow Tracking is Crucial */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Professional Cash Flow Monitoring helps:</h2>
            <p className="text-boulder mb-4">
              Many businesses face financial stress because they fail to properly track operational expenses, delayed customer payments, or unnecessary spending. Without accurate Cash Flow Tracking, businesses may struggle with supplier payments, salary processing, loan repayments, GST filing, and Income Tax Return Filing India requirements.
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Improve financial decision-making',
                'Maintain operational stability',
                'Reduce financial risks',
                'Improve budgeting accuracy',
                'Control unnecessary expenses',
                'Prepare for audits and compliance',
                'Strengthen financial planning',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            At Acharya Professional Accountants, our experienced professionals help businesses create organized tracking systems that improve financial visibility and business control.
          </p>
        </div>
      </section>

      {/* Target Audiences and Reach */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-gradient-to-r from-secondary-dark to-secondary-dark/65 border border-primary-accent/15 rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto">
          <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Flexible Support for All Entity Types</h2>
          <p className="text-lg text-boulder leading-relaxed">
            Our Cash Flow Tracking Services in Kerala and across India are designed to support startups, small businesses, freelancers, retail shops, e-commerce companies, service businesses, and growing enterprises.
          </p>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
                Better Cash Flow Management Builds Stronger Businesses
              </h3>
              <p className="text-xl font-bold mb-2">Track Better. Plan Better. Grow Better.</p>
              <p className="text-lg max-w-2xl font-medium">
                As trusted Financial Management Experts in Kerala and India, we focus on helping businesses maintain healthy cash flow systems and long-term financial growth through professional accounting support and accurate financial reporting.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter font-semibold">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Cash%20Flow%20Tracking%20Services"
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

export default ServiceCashFlowPage;
