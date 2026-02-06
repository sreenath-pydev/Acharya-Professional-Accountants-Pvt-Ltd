import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceAuditingPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Auditing Services | Acharya Professional Accountants"
        description="Independent auditing services including statutory, internal, and tax audits to ensure compliance and control."
        canonical="https://www.acharyaprofessionalaccountants.in/services/auditing"
      />
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Auditing</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            Auditing Services
          </h1>
          <p className="text-lg text-boulder max-w-3xl">
            Independent, structured reviews of your books, controls, and compliance, giving comfort to management, stakeholders, and regulators.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/audit.webp" type="image/webp" />
            <img
              src="/images/audit.webp"
              alt="Auditing services at Acharya Professional Accountants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Types of Audits We Support</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Internal audits and control reviews',
              'Management and operational audits',
              'Tax and GST-focused audits support',
              'Preparation support for statutory audits',
              'Special purpose reviews and agreed-upon procedures',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Value We Bring</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Clear documentation and audit trails',
              'Actionable findings instead of generic comments',
              'Support in implementing control improvements',
              'Better preparedness for external/statutory audits',
              'Comfort for lenders, investors, and partners',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-star" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================
          Detailed Auditing Services Grid
      ========================== */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="75">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">Comprehensive Auditing Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Statutory Audit',
              desc: 'Ensuring your financial statements obey all legal requirements and accounting standards (Ind AS / IFRS).',
              icon: 'fa-balance-scale',
              slug: 'statutory-audit',
            },
            {
              title: 'Internal Audit',
              desc: 'Evaluating your internal controls, risk management, and governance to improve operational efficiency.',
              icon: 'fa-search-dollar',
              slug: 'internal-audit',
            },
            {
              title: 'Tax Audit (u/s 44AB)',
              desc: 'Verification of books of accounts for businesses/professions crossing turnover limits strictly as per Income Tax Act.',
              icon: 'fa-file-invoice',
              slug: 'tax-audit',
            },
            {
              title: 'GST Audit & Reconciliation',
              desc: 'Detailed examination of records to ensure GST compliance, reconciling returns with books to prevent penalties.',
              icon: 'fa-calculator',
              slug: 'gst-audit',
            },
            {
              title: 'Stock Audit Support',
              desc: 'Physical verification and valuation of inventory to ensure accuracy and match book records.',
              icon: 'fa-boxes',
              slug: 'stock-audit',
            },
            {
              title: 'Audit Documentation',
              desc: 'Preparation of audit-ready schedules, financial statements, and supporting documents to facilitate smooth audits.',
              icon: 'fa-folder-open',
              slug: 'audit-documentation',
            },
            {
              title: 'Rectification of Audit Queries',
              desc: 'Expert assistance in resolving queries raised during statutory or tax audits with proper justifications.',
              icon: 'fa-clipboard-check',
              slug: 'rectification-audit-queries',
            },
          ].map((service, index) => (
            <Link
              key={index}
              to={`/services/auditing/${service.slug}`}
              className="bg-secondary-dark border border-primary-accent/10 rounded-xl p-6 hover:border-primary-accent/40 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl mb-4 group-hover:bg-primary-accent group-hover:text-dark-bg transition-colors duration-300">
                <DynamicFaIcon name={service.icon} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-boulder text-sm">{service.desc}</p>
            </Link>
          ))}
        </div>

      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Audit Approach</h2>
            <ol className="space-y-3 text-boulder list-decimal list-inside">
              <li>Understand your processes, risk areas, and reporting needs.</li>
              <li>Plan fieldwork with minimal disruption to operations.</li>
              <li>Perform tests, walkthroughs, and data analysis.</li>
              <li>Discuss observations with management for context.</li>
              <li>Issue clear, prioritized reports with practical suggestions.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3 text-boulder">
              {[
                'Growing businesses needing stronger internal controls',
                'Organizations preparing for lender or investor due diligence',
                'Entities facing frequent queries from auditors or regulators',
                'Management teams wanting an independent review of processes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <DynamicFaIcon name="fa-user" className="text-primary-accent mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-secondary-dark/80 rounded-2xl p-8 md:p-10 border border-primary-accent/10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">Auditing – FAQ</h2>
          <div className="space-y-4 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Will an internal audit disrupt our routine work?
              </h3>
              <p>We plan fieldwork in advance, use checklists, and coordinate with your team to keep disruption minimal.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Can you help us prepare for statutory or tax audits?
              </h3>
              <p>Yes, we review your books, working papers, and documentation to ensure readiness before external teams arrive.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                How are audit findings shared?
              </h3>
              <p>We share a structured report with risk levels, impact, and recommended actions, and can also present it to management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Strengthen Your Controls with an Audit Partner</h3>
              <p className="text-lg max-w-2xl">
                Share your key concerns and we’ll help you design an audit exercise that adds real value, not just checklists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Auditing%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex justify-center items-center bg-dark-bg text-primary-accent font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark transition-all duration-300"
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

export default ServiceAuditingPage;


