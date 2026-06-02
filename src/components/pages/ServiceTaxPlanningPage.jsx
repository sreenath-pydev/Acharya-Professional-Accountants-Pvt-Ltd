import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceTaxPlanningPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    { name: 'Retail and trading businesses', icon: 'fa-shopping-cart' },
    { name: 'Service-based companies', icon: 'fa-cogs' },
    { name: 'Startups and SMEs', icon: 'fa-rocket' },
    { name: 'Construction and contracting firms', icon: 'fa-building' },
    { name: 'Healthcare and medical professionals', icon: 'fa-hospital' },
    { name: 'Educational institutions', icon: 'fa-graduation-cap' },
    { name: 'E-commerce businesses', icon: 'fa-laptop' },
    { name: 'Freelancers and consultants', icon: 'fa-user-tie' },
  ];

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Strategic Tax Planning for Businesses & Professionals | Acharya"
        description="Premium Tax Planning Services designed to help businesses, entrepreneurs, startups, and professionals reduce tax liabilities, maintain compliance, and improve performance."
        canonical="https://www.acharyaprofessionalaccountants.in/services/taxation/tax-planning"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Taxation / Tax Planning</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Strategic Tax Planning for Businesses and Professionals
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              At <strong className="text-white">Acharya Professional Accountants</strong>, we provide premium <strong className="text-white">Tax Planning Services</strong> designed to help businesses, entrepreneurs, startups, and professionals reduce tax liabilities, maintain compliance, and improve long-term financial performance. Our expert-driven approach combines financial analysis, compliance management, and strategic tax planning to support sustainable business growth across Kerala and India.
            </p>
            <p>
              As a trusted provider of <strong className="text-white">Professional Accounting Services India</strong>, we help clients make informed financial decisions through accurate reporting, structured tax strategies, and proactive financial management.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/tax.webp" type="image/webp" />
            <img
              src="/images/tax.webp"
              alt="Strategic Tax Planning at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services & Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Our Tax Planning Services */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Our Tax Planning Services</h2>
            <p className="text-boulder mb-6">
              Our comprehensive tax solutions are tailored to meet the financial and regulatory needs of modern businesses.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'Business and corporate tax planning',
                'GST and Income Tax compliance support',
                'Income Tax Return Filing India',
                'Advance tax calculation and planning',
                'Financial Statement Preparation',
                'Revenue Monitoring Services',
                'Expense Tracking Services',
                'Business Tax Filing Services',
                'Audit and Taxation Services',
                'Financial Reporting Services',
                'Business Financial Analysis',
                'Tax-saving investment guidance',
                'Compliance review and risk assessment',
                'Cash flow and profitability planning',
                'Year-end tax optimization strategies',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            Our experienced professionals ensure every financial activity is aligned with current tax regulations while supporting better financial efficiency and operational control.
          </p>
        </div>

        {/* Why Tax Planning is Important */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Why Tax Planning is Important</h2>
            <p className="text-boulder mb-4">
              Effective tax planning is essential for maintaining profitability, improving financial stability, and ensuring regulatory compliance. Businesses that adopt professional tax planning strategies can better manage expenses, avoid penalties, and maximize available deductions and exemptions.
            </p>
            <p className="text-boulder mb-4">
              Our <strong className="text-white">Cash Flow Management India</strong> and <strong className="text-white">Financial Compliance Services</strong> help businesses:
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Reduce unnecessary tax burdens',
                'Improve budgeting and financial forecasting',
                'Maintain accurate financial records',
                'Support GST and Income Tax Services compliance',
                'Improve operational and financial transparency',
                'Strengthen business decision-making',
                'Enhance long-term business sustainability',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            With changing financial regulations and increasing compliance requirements, businesses require expert support to maintain accuracy and financial discipline.
          </p>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center text-white">Industries We Support</h2>
        <p className="text-boulder text-center mb-8 max-w-2xl mx-auto">
          We provide <strong className="text-white">Accounting Services Kerala</strong> and India-wide financial solutions for:
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
          Our customized financial and taxation strategies are designed to match the operational structure and compliance requirements of each industry.
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
              As a trusted provider of <strong className="text-white">Chartered Accountant Services Kozhikode</strong>, we are committed to delivering professionalism, accuracy, and compliance-focused financial solutions. Our team combines practical expertise with industry knowledge to provide reliable tax planning and business advisory support.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat text-lg font-bold mb-4 text-primary-accent">What Makes Us Different:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-boulder text-sm">
              {[
                'Experienced finance and taxation professionals',
                'Accurate and compliance-focused reporting',
                'Transparent and professional service approach',
                'Customized tax strategies for business growth',
                'Timely filing and financial monitoring',
                'End-to-end support for GST, Income Tax, and audit requirements',
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
                Build a Stronger Financial Future
              </h3>
              <p className="text-lg max-w-2xl font-medium">
                Professional tax planning is more than compliance — it is a strategic financial tool that supports growth, stability, and long-term business success. Partner with Acharya Professional Accountants for reliable, accurate, and business-focused taxation and financial management solutions across Kerala and India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Tax%20Planning%20Services"
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

export default ServiceTaxPlanningPage;
