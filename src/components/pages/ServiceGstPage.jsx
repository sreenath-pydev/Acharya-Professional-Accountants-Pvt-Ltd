import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceGstPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="GST Services | Acharya Professional Accountants"
        description="End-to-end GST support including registration, returns, and compliance for businesses in Calicut and beyond."
        canonical="https://www.acharyaprofessionalaccountants.in/services/gst"
      />
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / GST</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            GST Services
          </h1>
          <p className="text-lg text-boulder max-w-3xl">
            End-to-end GST support—from registration to returns, reconciliations, and compliance—so your business stays aligned with the latest rules.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/gst.webp" type="image/webp" />
            <img
              src="/images/gst.webp"
              alt="GST services at Acharya Professional Accountants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">GST Services We Provide</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'GST registration and advisory on structure',
              'Monthly/quarterly GST return preparation and filing',
              'GSTR-2B and purchase reconciliation',
              'Input tax credit review and optimisation',
              'Support with GST notices, audits, and queries',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Why GST Partner Support Matters</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Lower risk of interest, penalties, and blocked credits',
              'Better understanding of rate changes and notifications',
              'Smooth co-ordination between accounts and GST filings',
              'Timely reconciliations that catch issues early',
              'Comfort during departmental visits or information requests',
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
          Detailed GST Services Grid
      ========================== */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="75">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">Comprehensive GST Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'GST Registration & Profile',
              desc: 'New Registration, Amendments, Migration, Cancellation, and Revocation support.',
              icon: 'fa-id-card',
              slug: 'registration-profile-management',
            },
            {
              title: 'Return Filing & Compliance',
              desc: 'Monthly returns (GSTR-1/3B), Annual Returns (9/9C), and Nil filing.',
              icon: 'fa-calendar-check',
              slug: 'return-filing-compliance',
            },
            {
              title: 'Reconciliation & Review',
              desc: 'Deep-dive matching of Books vs Returns and GSTR-2B vs Purchase Registers.',
              icon: 'fa-check-double',
              slug: 'reconciliation-review',
            },
            {
              title: 'Compliance & Advisory',
              desc: 'Health checks, HSN Classification, RCM, E-Invoicing, and E-Way Bill advisory.',
              icon: 'fa-gavel',
              slug: 'compliance-advisory',
            },
            {
              title: 'Specialized Services',
              desc: 'Tailored solutions for Startups, E-Commerce, Exporters, and Construction.',
              icon: 'fa-industry',
              slug: 'specialized-gst-services',
            },
            {
              title: 'Refunds & Optimization',
              desc: 'Recovering working capital through Export Refunds, Inverted Duty, and ITC optimization.',
              icon: 'fa-hand-holding-usd',
              slug: 'refunds-optimization',
            },
          ].map((service, index) => (
            <Link
              key={index}
              to={`/services/gst/${service.slug}`}
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
            <h2 className="font-montserrat text-2xl font-bold mb-4">Our GST Workflow</h2>
            <ol className="space-y-3 text-boulder list-decimal list-inside">
              <li>Understand your sales, purchase, and branch structure.</li>
              <li>Set up GST data requirements and standard formats.</li>
              <li>Review monthly data, reconcile, and identify gaps.</li>
              <li>File accurate, timely returns with documentation.</li>
              <li>Periodically review GST positions and risk areas.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3 text-boulder">
              {[
                'Businesses with multi-state registrations',
                'Traders, distributors, and service providers',
                'Businesses facing frequent GST mismatches',
                'Firms wanting to streamline GST with accounting',
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
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">GST – FAQ</h2>
          <div className="space-y-4 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Can you take over GST filing from my current provider?
              </h3>
              <p>Yes, we can review past filings, identify open items, and smoothly transition GST compliance to our team.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Do you help with GST audits and departmental visits?
              </h3>
              <p>We assist with documentation, reconciliations, and responses so you can handle departmental interactions with confidence.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                How often are reconciliations done?
              </h3>
              <p>Typically monthly, aligned to filing cycles, with deeper reviews scheduled periodically based on your volume and risk profile.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Make GST Compliance Predictable</h3>
              <p className="text-lg max-w-2xl">
                Get a GST partner who understands both law and ground realities, so compliance becomes a system, not a scramble.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20GST%20Services"
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

export default ServiceGstPage;


