import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import { Link } from 'react-router-dom';
import { locationGroups } from '../../data/locationData';

import Services from '../sections/Services';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServicesPage = () => {
  useEffect(() => {
    /* =========================
       AOS & Scroll
    ========================== */
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Accounting, Tax, GST & Audit Services | Acharya Kozhikode"
        description="Professional CA services in Kozhikode, including tax consulting, auditing, GST, business consulting, and business registration for clients nationwide."
        canonical="https://acharyaprofessionalaccountants.in/services"
      />
      {/* =========================
          Page Intro
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
        data-aos="fade-up"
      >
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
          Services
        </p>

        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
          Comprehensive Accounting, Tax, GST & Audit Services
        </h1>

        <p className="text-lg text-boulder max-w-3xl">
          From day-to-day bookkeeping to complex tax, GST, audit, and advisory
          mandates, Acharya Professional Accountants offers structured,
          compliant, and insight-driven services for businesses in Kozhikode
          and across India.
        </p>
      </section>

      {/* =========================
          Key Strengths
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
          <h2 className="font-montserrat text-xl font-semibold mb-3">
            Compliance Assured
          </h2>
          <p className="text-boulder text-sm md:text-base">
            Stay on top of statutory timelines for accounting, tax, GST, and
            audit with processes that reduce errors and prevent penalties.
          </p>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
          <h2 className="font-montserrat text-xl font-semibold mb-3">
            Insight-Driven Reporting
          </h2>
          <p className="text-boulder text-sm md:text-base">
            Go beyond numbers with MIS, dashboards, and review reports that help
            founders and finance teams take clear decisions.
          </p>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
          <h2 className="font-montserrat text-xl font-semibold mb-3">
            Partner for Growth
          </h2>
          <p className="text-boulder text-sm md:text-base">
            Use our advisory and consulting inputs to structure growth, manage
            risk, and build stronger financial discipline.
          </p>
        </div>
      </section>

      {/* =========================
          Core Services Listing
      ========================== */}
      <Services />

      {/* =========================
          Who We Serve & Why Choose Us
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">
            Who We Serve
          </h2>
          <ul className="space-y-3 text-boulder">
            {[
              'SMEs and family-run businesses',
              'Traders, retailers, and service providers',
              'Startup founders and first-time entrepreneurs',
              'Professionals and consultants needing tax & GST support',
              'Organizations needing outsourced finance teams',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-check" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">
            Why Businesses Choose Acharya
          </h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Practicing professionals leading every mandate',
              'Clarity in communication and regular updates',
              'Focus on both compliance and business impact',
              'Experience across industries and entity sizes',
              'Kozhikode-based team with modern tools and systems',
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
          Major Locations (Links)
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-12 md:mb-16"
        data-aos="fade-up"
      >
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center pt-10 border-t border-white/5">
          Other Locations We Serve
        </h2>

        <div className="space-y-8">
          {locationGroups.map((group, index) => (
            <div key={index} className="bg-secondary-dark/50 rounded-2xl p-6">
              <h3 className="text-primary-accent font-semibold text-lg mb-4 pb-2 text-center">
                {group.region}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {group.cities.map((city) => {
                  // Generate slug: trim whitespace, lowercase, replace spaces with hyphens
                  const slug = city.trim().toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link
                      key={city}
                      to={`/accounting-service-in-${slug}`}
                      className="inline-block bg-white/5 hover:bg-primary-accent hover:text-dark-bg text-boulder hover:text-white text-sm px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border border-white/5 hover:border-transparent"
                    >
                      {city}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
