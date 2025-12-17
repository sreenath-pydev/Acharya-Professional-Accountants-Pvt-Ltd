import { useEffect } from 'react';
import AOS from 'aos';
import Services from '../sections/Services';

const ServicesPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14" data-aos="fade-up">
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services</p>
        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
          Comprehensive Accounting & Advisory Services
        </h1>
        <p className="text-lg text-boulder max-w-3xl">
          From day-to-day bookkeeping to complex tax, GST, audit, and advisory mandates, Acharya Professional Accountants offers
          structured, compliant, and insight-driven services for businesses in Kozhikode and beyond.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
          <h2 className="font-montserrat text-xl font-semibold mb-3">Compliance Assured</h2>
          <p className="text-boulder text-sm md:text-base">
            Stay on top of statutory timelines for accounting, tax, GST, and audit with processes that reduce errors and prevent penalties.
          </p>
        </div>
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
          <h2 className="font-montserrat text-xl font-semibold mb-3">Insight-Driven Reporting</h2>
          <p className="text-boulder text-sm md:text-base">
            Go beyond numbers with MIS, dashboards, and review reports that help founders and finance teams take clear decisions.
          </p>
        </div>
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
          <h2 className="font-montserrat text-xl font-semibold mb-3">Partner for Growth</h2>
          <p className="text-boulder text-sm md:text-base">
            Use our advisory and consulting inputs to structure growth, manage risk, and build stronger financial discipline.
          </p>
        </div>
      </section>

      <Services />

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Who We Serve</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'SMEs and family-run businesses',
              'Traders, retailers, and service providers',
              'Startup founders and first-time entrepreneurs',
              'Professionals and consultants needing tax & GST support',
              'Organizations needing outsourced finance teams',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fas fa-check text-primary-accent mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Why Businesses Choose Acharya</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Practicing professionals leading every mandate',
              'Clarity in communication and regular updates',
              'Focus on both compliance and business impact',
              'Experience across industries and entity sizes',
              'Kozhikode-based team with modern tools and systems',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fas fa-star text-primary-accent mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
