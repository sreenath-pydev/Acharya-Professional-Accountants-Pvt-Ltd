import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { setCanonical } from '../../utils/seo';

const ServiceAdvisoryPage = () => {
  useEffect(() => {
    setCanonical('https://acharyaprofessionalaccountants.in/services/advisory');
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Advisory</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            Advisory Services
          </h1>
          <p className="text-lg text-boulder max-w-3xl">
            Ongoing, personalized financial and regulatory guidance to help you navigate decisions, transactions, and changing regulations with confidence.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/advisory.webp" type="image/webp" />
            <img
              src="/images/advisory.webp"
              alt="Advisory services at Acharya Professional Accountants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Advisory Focus Areas</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Entity structuring and re-structuring',
              'Capital, borrowing, and investment decisions',
              'Compliance roadmaps for new initiatives',
              'Board and management reporting support',
              'Succession and transition planning perspectives',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fas fa-check-circle text-primary-accent mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">How Advisory Support Helps</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'You gain a trusted external perspective on key moves',
              'Decisions account for both compliance and business impact',
              'Better anticipation of regulatory and financial implications',
              'Less last-minute scrambling around critical timelines',
              'Confidence in presenting decisions to stakeholders',
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
            <h2 className="font-montserrat text-2xl font-bold mb-4">How We Work with You</h2>
            <ol className="space-y-3 text-boulder list-decimal list-inside">
              <li>Understand your business, ownership, and decision context.</li>
              <li>Identify areas where recurring advisory input is valuable.</li>
              <li>Set up review rhythms (monthly/quarterly/transaction-based).</li>
              <li>Provide written notes, options, and risk perspectives.</li>
              <li>Stay available as a sounding board for evolving situations.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3 text-boulder">
              {[
                'Business owners handling frequent financial/legal decisions',
                'Promoters planning expansion, diversification, or exits',
                'Family-run businesses formalizing governance and reporting',
                'Leaders who value a long-term advisory relationship',
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
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">Advisory – FAQ</h2>
          <div className="space-y-4 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Is advisory a fixed-fee or per-consultation engagement?
              </h3>
              <p>We offer both models—retainer-based advisory for ongoing support and per-consultation options for specific decisions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Will you coordinate with our legal or other external advisors?
              </h3>
              <p>Yes, we frequently collaborate with legal and other specialists so your decisions consider all relevant perspectives.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                How confidential is the information shared?
              </h3>
              <p>All discussions and data are handled with strict confidentiality, in line with professional and ethical standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Get a Trusted Advisory Partner</h3>
              <p className="text-lg max-w-2xl">
                Let’s discuss how an ongoing advisory relationship can support your decisions and safeguard your growth journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Advisory%20Services"
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

export default ServiceAdvisoryPage;


