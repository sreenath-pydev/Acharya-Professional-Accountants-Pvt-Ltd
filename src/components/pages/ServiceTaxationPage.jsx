import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';

const ServiceTaxationPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Taxation Services | Acharya Professional Accountants"
        description="Expert tax planning and filing support for individuals and businesses in Calicut. Reduce risk and optimize savings."
        canonical="https://acharyaprofessionalaccountants.in/services/taxation"
      />
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Taxation</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            Taxation Services
          </h1>
          <p className="text-lg text-boulder max-w-3xl">
            Practical, regulation-aligned tax planning and filing support for individuals and businesses, designed to reduce risk,
            avoid penalties, and optimise savings.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/tax.webp" type="image/webp" />
            <img
              src="/images/tax.webp"
              alt="Taxation services at Acharya Professional Accountants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">What We Cover</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Income tax planning and filing for individuals and businesses',
              'Advance tax, TDS, and TCS support',
              'Tax computation, working papers, and documentation',
              'Responding to notices and handling queries',
              'Year-end tax review and projections for the next year',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fas fa-check-circle text-primary-accent mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Benefits for You</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Accurate, timely filing with clear documentation',
              'Better visibility on tax liability through the year',
              'Support in optimising eligible deductions and benefits',
              'Reduced stress around scrutiny and assessments',
              'Single point-of-contact for ongoing tax queries',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fas fa-star text-primary-accent mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Engagement Flow</h2>
            <ol className="space-y-3 text-boulder list-decimal list-inside">
              <li>Understand your income sources, entity type, and current tax position.</li>
              <li>Collect data, challans, and previous returns as needed.</li>
              <li>Prepare workings and draft returns with clear explanations.</li>
              <li>Review with you, finalize and file within due dates.</li>
              <li>Support you with post-filing clarifications or notices.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3 text-boulder">
              {[
                'Salaried individuals with multiple income sources',
                'Professionals, consultants, and freelancers',
                'Business owners and partners in firms/companies',
                'NRIs needing support with Indian tax filings',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <i className="fas fa-user text-primary-accent mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-secondary-dark/80 rounded-2xl p-8 md:p-10 border border-primary-accent/10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">Taxation – FAQ</h2>
          <div className="space-y-4 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Can you work with my existing accounts team or CA?
              </h3>
              <p>Yes, we often work alongside internal teams and auditors, ensuring all tax workings are aligned and well-documented.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                How early should I engage you before due dates?
              </h3>
              <p>We recommend engaging us at least a few weeks before key filing dates so there is enough time to review and clarify data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Do you assist in responding to tax notices?
              </h3>
              <p>Yes, we can help draft responses, prepare supporting documentation, and guide you on the next steps for most common notices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Plan Your Taxes with Confidence</h3>
              <p className="text-lg max-w-2xl">
                Let us understand your income pattern and help you structure taxes in a compliant, stress-free manner.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Taxation%20Services"
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
              <i className="fas fa-arrow-left text-sm"></i>
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceTaxationPage;


