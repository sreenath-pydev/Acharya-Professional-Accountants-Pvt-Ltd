import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const ServiceBusinessConsultingPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Business Consulting</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            Business Consulting
          </h1>
          <p className="text-lg text-boulder max-w-3xl">
            Strategic financial and business consulting to help you see the story behind your numbers and take confident, growth-focused decisions.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/businessct.webp" type="image/webp" />
            <img
              src="/images/businessct.webp"
              alt="Business consulting at Acharya Professional Accountants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Consulting Areas</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Business model and pricing reviews',
              'Profitability and cost-structure analysis',
              'Cash flow and working capital planning',
              'Budgeting and performance tracking',
              'Financial feasibility for new initiatives',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fas fa-check-circle text-primary-accent mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Outcomes You Can Expect</h2>
          <ul className="space-y-3 text-boulder">
            {[
              'Clearer understanding of which products/services drive profit',
              'Structured plans to improve margins and cash flow',
              'Better preparedness for lenders, investors, or partners',
              'Regular review cadence instead of reactive firefighting',
              'Decisions backed by numbers, not guesswork',
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
            <h2 className="font-montserrat text-2xl font-bold mb-4">Engagement Style</h2>
            <ol className="space-y-3 text-boulder list-decimal list-inside">
              <li>Understand your goals, pain points, and current numbers.</li>
              <li>Deep-dive into financials, processes, and key drivers.</li>
              <li>Co-create realistic plans, milestones, and metrics.</li>
              <li>Review progress periodically and recalibrate as needed.</li>
              <li>Support your internal team in implementing changes.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Ideal For</h2>
            <ul className="space-y-3 text-boulder">
              {[
                'Founders planning to scale operations',
                'Businesses with revenue but unclear profitability',
                'Teams preparing for expansion, funding, or restructuring',
                'Owners who want a regular financial sounding board',
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
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">Business Consulting – FAQ</h2>
          <div className="space-y-4 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Is this a one-time project or ongoing support?
              </h3>
              <p>We offer both—one-time reviews as well as ongoing consulting relationships with periodic review meetings.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Will you help implement the recommendations?
              </h3>
              <p>Yes, we work with your team to translate recommendations into processes, dashboards, and review rhythms.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Do you only work with large companies?
              </h3>
              <p>No, we work closely with SMEs and growing businesses where consulting support can make a visible difference.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Plan Your Next Phase with Clarity</h3>
              <p className="text-lg max-w-2xl">
                Share where you are and where you want to go—we’ll help you build a roadmap that is financially and operationally realistic.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20Business%20Consulting"
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

export default ServiceBusinessConsultingPage;


