import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceTdsTcsPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    { name: 'Retail and trading businesses', icon: 'fa-shopping-cart' },
    { name: 'Startups and SMEs', icon: 'fa-rocket' },
    { name: 'Manufacturing companies', icon: 'fa-industry' },
    { name: 'Service-based businesses', icon: 'fa-cogs' },
    { name: 'Construction and contracting firms', icon: 'fa-building' },
    { name: 'Healthcare institutions', icon: 'fa-hospital' },
    { name: 'Educational organizations', icon: 'fa-graduation-cap' },
    { name: 'E-commerce businesses', icon: 'fa-laptop' },
  ];

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Reliable TDS & TCS Compliance Solutions | Acharya Professional Accountants"
        description="Professional TDS & TCS Services designed to help businesses maintain complete tax compliance, improve financial accuracy, and avoid penalties in Kerala and India."
        canonical="https://www.acharyaprofessionalaccountants.in/services/taxation/tds-tcs"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Taxation / TDS & TCS</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Reliable TDS & TCS Compliance Solutions for Businesses
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              At <strong className="text-white">Acharya Professional Accountants</strong>, we provide professional <strong className="text-white">TDS & TCS Services</strong> designed to help businesses maintain complete tax compliance, improve financial accuracy, and avoid penalties under Indian taxation laws. Our expert-led solutions support organizations across Kerala and India with efficient tax deduction, collection, reporting, and filing processes.
            </p>
            <p>
              As a trusted provider of <strong className="text-white">Professional Accounting Services India</strong>, we assist businesses in managing Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) requirements with accuracy, transparency, and regulatory compliance.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/tax.webp" type="image/webp" />
            <img
              src="/images/tax.webp"
              alt="TDS and TCS Compliance Solutions at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Services & Importance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Our TDS & TCS Services */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Our TDS & TCS Services</h2>
            <p className="text-boulder mb-6">
              Our comprehensive taxation and compliance services are tailored to businesses of all sizes, ensuring timely filings and proper financial reporting.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm mb-6">
              {[
                'TDS calculation and deduction management',
                'TCS collection and compliance support',
                'Quarterly TDS & TCS return filing',
                'TDS reconciliation and correction filing',
                'PAN verification and compliance checks',
                'Vendor and employee TDS management',
                'GST and Income Tax Services support',
                'Income Tax Return Filing India',
                'Business Tax Filing Services',
                'Financial Statement Preparation',
                'Revenue Monitoring Services',
                'Expense Tracking Services',
                'Financial Reporting Services',
                'Audit and Taxation Services',
                'Financial Compliance Services',
                'Business Financial Analysis',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            Our experienced team ensures that all statutory deductions and collections are processed accurately while maintaining proper documentation and compliance standards.
          </p>
        </div>

        {/* Why Compliance is Important */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">Why TDS & TCS Compliance is Important</h2>
            <p className="text-boulder mb-4">
              Efficient TDS and TCS management is essential for businesses to maintain financial discipline, avoid interest and penalties, and ensure smooth tax assessments. Delays or inaccuracies in tax deductions and filings can impact business operations and financial credibility.
            </p>
            <p className="text-boulder mb-4">
              Our <strong className="text-white">Cash Flow Management India</strong> and <strong className="text-white">Business Cash Flow Services</strong> help businesses:
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Maintain accurate tax records',
                'Improve operational and financial transparency',
                'Avoid late filing penalties and notices',
                'Support smooth GST and Income Tax compliance',
                'Streamline vendor and payroll taxation',
                'Improve budgeting and financial planning',
                'Ensure proper financial reporting and audit readiness',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-boulder border-t border-white/5 pt-4">
            With changing tax regulations and compliance requirements, businesses require professional support to maintain efficiency and accuracy.
          </p>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center text-white">Industries We Support</h2>
        <p className="text-boulder text-center mb-8 max-w-2xl mx-auto">
          We provide <strong className="text-white">Accounting Services Kerala</strong> and India-wide taxation support for diverse industry sectors:
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
          Our customized taxation and compliance strategies are designed according to the operational and financial requirements of each industry.
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
              As a trusted provider of <strong className="text-white">Chartered Accountant Services Kozhikode</strong>, we focus on delivering professional, accurate, and compliance-oriented taxation solutions for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat text-lg font-bold mb-4 text-primary-accent">What Makes Us Different:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-boulder text-sm">
              {[
                'Experienced taxation and accounting professionals',
                'Timely and accurate TDS & TCS filing',
                'End-to-end compliance management',
                'Transparent and professional service approach',
                'Industry-focused financial solutions',
                'Strong expertise in audit, taxation, and reporting',
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
                Your Trusted Financial & Compliance Partner
              </h3>
              <p className="text-lg max-w-2xl font-medium">
                Efficient TDS and TCS management is essential for maintaining business credibility, compliance, and financial stability. Partner with Acharya Professional Accountants for reliable, accurate, and business-focused taxation and compliance solutions across Kerala and India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20TDS%20and%20TCS%20Services"
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

export default ServiceTdsTcsPage;
