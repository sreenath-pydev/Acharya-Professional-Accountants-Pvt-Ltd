import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceAccountingPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Accounting Services | Acharya Professional Accountants"
        description="Structured, timely, and compliant accounting services in Calicut to keep your books clean and business ready for growth."
        canonical="https://acharyaprofessionalaccountants.in/services/accounting"
      />
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Accounting</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            Accounting Services
          </h1>
          <p className="text-lg text-boulder max-w-3xl">
            Structured, timely, and compliant accounting that keeps your books clean, your reports clear, and your business ready
            for decisions, audits, and growth.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/accounting.webp" type="image/webp" />
            <img
              src="/images/accounting.webp"
              alt="Accounting services at Acharya Professional Accountants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">What We Handle</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Day-to-day bookkeeping and transaction recording',
              'Ledger scrutiny, reconciliations, and error corrections',
              'Monthly, quarterly, and annual financial statements',
              'Cash flow and working capital tracking',
              'Management reports for owners and leadership teams',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">How It Helps Your Business</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Up-to-date books that stand up to audits and reviews',
              'Clarity on profitability, costs, and cash requirements',
              'Better preparedness for loans, investors, and compliance',
              'Less firefighting at year-end and during tax filings',
              'Confidence in numbers before taking key decisions',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-star" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Our Accounting Process</h2>
            <ol className="space-y-3 text-boulder list-decimal list-inside">
              <li>Understand your business model, volumes, and reporting needs.</li>
              <li>Set up or refine your accounting system and chart of accounts.</li>
              <li>Define monthly routines for entries, reconciliations, and checks.</li>
              <li>Share periodic MIS, summaries, and red-flag reports.</li>
              <li>Coordinate smoothly with your auditors and tax team.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3 text-boulder">
              {[
                'Businesses without an in-house accounting team',
                'Founders who want better visibility on their numbers',
                'Organizations scaling and needing more structured books',
                'Firms looking to upgrade from basic bookkeeping to MIS',
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

      {/* FAQ-style section */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-secondary-dark/80 rounded-2xl p-8 md:p-10 border border-primary-accent/10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">Accounting Services – FAQ</h2>
          <div className="space-y-4 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Do I need to shift my existing accounting software?
              </h3>
              <p>Not always. We first review your current setup (like Tally or other tools) and then decide whether optimization or migration is better.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Can you coordinate with my internal team?
              </h3>
              <p>Yes, we work with your in-house staff to define roles, controls, and workflows so that responsibilities are clear.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                How often will I receive reports?
              </h3>
              <p>Reporting frequency is customized—typically monthly, with options for weekly or quarterly dashboards based on your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Talk to Us About Accounting</h3>
              <p className="text-lg max-w-2xl">
                Share your current bookkeeping and reporting challenges and we’ll help you design a practical, scalable accounting setup.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Accounting%20Services"
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

export default ServiceAccountingPage;


