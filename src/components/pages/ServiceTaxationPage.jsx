import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceTaxationPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Professional Income Tax Filing Solutions | Acharya Professional Accountants"
        description="Reliable and compliance-focused Income Tax Filing solutions designed to help businesses and individuals manage tax obligations efficiently and accurately in Kerala and India."
        canonical="https://www.acharyaprofessionalaccountants.in/services/taxation"
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Taxation</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Professional Income Tax Filing Solutions for Businesses and Individuals
          </h1>
          <div className="space-y-4 text-boulder text-lg max-w-3xl">
            <p>
              At <strong className="text-white">Acharya Professional Accountants</strong>, we provide reliable and compliance-focused <strong className="text-white">Income Tax Filing</strong> solutions designed to help businesses and individuals manage tax obligations efficiently and accurately. Our expert-driven services ensure timely tax filing, regulatory compliance, financial transparency, and improved financial planning for businesses across Kerala and India.
            </p>
            <p>
              As a trusted provider of <strong className="text-white">Professional Accounting Services India</strong>, we offer comprehensive support for tax filing, financial reporting, and compliance management. Our experienced professionals help businesses streamline tax processes while reducing compliance risks and improving financial decision-making.
            </p>
          </div>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden self-start" data-aos="fade-left">
          <picture>
            <source srcSet="/images/tax.webp" type="image/webp" />
            <img
              src="/images/tax.webp"
              alt="Professional Income Tax Filing Solutions at Acharya Professional Accountants"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Solutions and Compliance Grid */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        {/* Solutions Card */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">
              Comprehensive Income Tax Filing Solutions
            </h2>
            <p className="text-boulder mb-6">
              Our professional tax experts provide end-to-end assistance for businesses, professionals, startups, and individuals with accurate documentation and timely filing support. Our services include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-boulder text-sm">
              {[
                'Income Tax Return Filing India for businesses and individuals',
                'Business Tax Filing Services with complete compliance support',
                'GST and Income Tax Services coordination and reporting',
                'Financial Statement Preparation for tax assessment',
                'Revenue Monitoring Services and taxable income analysis',
                'Expense Tracking Services for accurate deductions and claims',
                'Financial Reporting Services for compliance and planning',
                'Business Financial Analysis to optimize tax efficiency',
                'Tax planning and advisory services',
                'Audit and Taxation Services support',
                'Financial Compliance Services for statutory accuracy',
                'Advance tax calculation and filing assistance',
                'TDS compliance and reporting support',
                'Customized reporting for business taxation and regulatory review',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Card */}
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4 text-white">
              Ensure Compliance and Financial Accuracy
            </h2>
            <p className="text-boulder mb-6">
              Efficient tax filing is essential for maintaining financial discipline, avoiding penalties, and supporting long-term business growth. Our professional team ensures accurate record management, timely submissions, and transparent reporting aligned with current tax regulations.
            </p>
            <p className="text-boulder mb-4">
              With our expert <strong className="text-white">Accounting Services Kerala</strong>, businesses can:
            </p>
            <ul className="space-y-3 text-boulder text-sm mb-6">
              {[
                'Maintain accurate and compliant tax records',
                'Ensure timely filing of income tax returns and GST reports',
                'Improve financial transparency and operational control',
                'Reduce tax-related risks and penalties',
                'Strengthen budgeting and financial planning',
                'Support strategic business decision-making',
                'Enhance compliance with evolving tax regulations in India',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <DynamicFaIcon name="fa-star" className="text-primary-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-gradient-to-r from-secondary-dark to-secondary-dark/65 border border-primary-accent/15 rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-boulder italic leading-relaxed">
            "As specialists in <strong className="text-white">Chartered Accountant Services Kozhikode</strong>, we combine accounting expertise, tax knowledge, and modern financial practices to deliver dependable and efficient income tax filing solutions for businesses across multiple industries."
          </p>
        </div>
      </section>

      {/* Partner Section */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-secondary-dark/80 rounded-2xl p-8 md:p-10 border border-primary-accent/10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
          <div>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold leading-tight text-white">
              Best Tax and Accounting Partner Across Kerala and India
            </h2>
          </div>
          <div className="space-y-4 text-boulder text-base md:text-lg">
            <p>
              At <strong className="text-white">Acharya Professional Accountants</strong>, we are committed to delivering professional, secure, and result-oriented tax and accounting services tailored to modern business requirements. Our team provides reliable support for taxation, reporting, compliance management, and financial advisory services with a strong focus on accuracy and professionalism.
            </p>
            <p>
              Whether you require support for tax filing, GST compliance, financial reporting, or complete accounting solutions, we deliver customized services that support operational efficiency and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
                Partner with Acharya Professional Accountants
              </h3>
              <p className="text-lg max-w-2xl font-medium">
                Your trusted financial and accounting partner for professional income tax filing, compliance management, and business success across Kerala and India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-inter">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Income%20Tax%20Filing%20Services"
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

export default ServiceTaxationPage;
