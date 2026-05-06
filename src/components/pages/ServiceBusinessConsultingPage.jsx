import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const ServiceBusinessConsultingPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Business Consulting Services | Acharya Professional Accountants"
        description="Strategic business consulting to improve profitability, cash flow, and financial planning for growing businesses."
        canonical="https://www.acharyaprofessionalaccountants.in/services/business-consulting"
      />
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8" data-aos="fade-up">
        <div>
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Business Consulting</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            Expert Business Consulting Services
          </h1>
          <p className="text-lg text-boulder max-w-3xl mb-4">
            In today’s dynamic economic landscape, navigating business challenges requires more than just standard accounting. Our strategic financial and business consulting services are designed to help you see the story behind your numbers, enabling confident, data-driven, and growth-focused decisions. 
          </p>
          <p className="text-lg text-boulder max-w-3xl">
            Whether you are a startup scaling rapidly or an established enterprise optimizing operations, Acharya Professional Accountants provides tailored advisory solutions. We bridge the gap between compliance and strategic growth, offering virtual CFO services, financial modeling, and operational insights to propel your business forward.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/businessct.webp" type="image/webp" />
            <img
              src="/images/businessct.webp"
              alt="Expert Business consulting and financial advisory at Acharya Professional Accountants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up">
        <div className="bg-secondary-dark/50 border border-primary-accent/10 rounded-2xl p-8 md:p-12">
           <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-center">Why Does Your Business Need Strategic Consulting?</h2>
           <p className="text-boulder text-center max-w-4xl mx-auto mb-8">
             Many businesses face stagnation because they lack a clear view of their financial health. Our corporate consulting services go beyond traditional audits and tax filings to offer actionable intelligence. We identify revenue leakages, optimize capital allocation, and structure your financial operations to withstand market volatility and drive sustainable profitability.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-dark-bg p-6 rounded-xl border border-primary-accent/10">
               <DynamicFaIcon name="fa-chart-line" className="text-primary-accent text-3xl mb-4" />
               <h3 className="text-xl font-semibold mb-2">Sustainable Growth</h3>
               <p className="text-boulder text-sm">Develop long-term financial strategies that scale with your business vision without compromising cash reserves.</p>
             </div>
             <div className="bg-dark-bg p-6 rounded-xl border border-primary-accent/10">
               <DynamicFaIcon name="fa-shield-alt" className="text-primary-accent text-3xl mb-4" />
               <h3 className="text-xl font-semibold mb-2">Risk Mitigation</h3>
               <p className="text-boulder text-sm">Identify operational and financial risks early, establishing robust internal controls and compliance frameworks.</p>
             </div>
             <div className="bg-dark-bg p-6 rounded-xl border border-primary-accent/10">
               <DynamicFaIcon name="fa-lightbulb" className="text-primary-accent text-3xl mb-4" />
               <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
               <p className="text-boulder text-sm">Optimize your resource allocation, streamline workflows, and eliminate redundancies to improve overall margins.</p>
             </div>
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Core Consulting Areas</h2>
          <p className="text-boulder mb-6 text-sm">Our extensive portfolio of advisory services covers every financial aspect of your business operations.</p>
          <ul className="space-y-3 text-boulder">
            {[
              'Business model validation and pricing strategy reviews',
              'Profitability analysis and cost-structure optimization',
              'Cash flow forecasting and working capital management',
              'Comprehensive budgeting and variance tracking',
              'Financial feasibility studies for new initiatives & projects',
              'Virtual CFO (Chief Financial Officer) services',
              'Mergers, acquisitions, and business valuation support',
              'Internal control audits and system improvements'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-4">Tangible Outcomes You Can Expect</h2>
          <p className="text-boulder mb-6 text-sm">Partnering with Acharya Professional Accountants brings measurable improvements to your bottom line.</p>
          <ul className="space-y-3 text-boulder">
            {[
              'Clearer understanding of which products, services, or locations drive maximum profit.',
              'Structured turnaround plans to consistently improve margins and manage cash flow efficiently.',
              'Enhanced preparedness for securing loans, attracting investors, or onboarding partners.',
              'A proactive, regular review cadence that replaces reactive financial firefighting.',
              'Strategic decisions backed by hard numbers and data, rather than guesswork.',
              'Optimized tax structures aligned with your overall corporate strategy.',
              'Robust management information systems (MIS) for real-time performance tracking.'
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
            <h2 className="font-montserrat text-2xl font-bold mb-4">Our Engagement Style</h2>
            <p className="text-boulder mb-5 text-sm">We don't just hand you a report; we partner with you to implement strategic changes effectively.</p>
            <ol className="space-y-3 text-boulder list-decimal list-inside">
              <li><strong>Discovery:</strong> Understand your long-term goals, immediate pain points, and current financial metrics.</li>
              <li><strong>Analysis:</strong> Deep-dive into your financial statements, business processes, and key performance drivers.</li>
              <li><strong>Strategy:</strong> Co-create realistic, actionable plans with clear milestones and defined KPIs.</li>
              <li><strong>Monitoring:</strong> Review progress periodically through management meetings and recalibrate strategies as needed.</li>
              <li><strong>Execution:</strong> Actively support your internal finance and management team in implementing recommended changes.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Who Is This Ideal For?</h2>
            <p className="text-boulder mb-5 text-sm">Our consulting services cater to ambitious businesses ready for the next level.</p>
            <ul className="space-y-3 text-boulder">
              {[
                'Startup founders and entrepreneurs planning to scale operations rapidly and sustainably.',
                'Businesses with high revenue generation but unclear or shrinking profitability margins.',
                'Management teams preparing for market expansion, venture capital funding, or corporate restructuring.',
                'Business owners who want a professional, regular financial sounding board to discuss strategy.',
                'Organizations looking to outsource their CFO functions for expert, cost-effective financial leadership.',
                'Family-owned businesses navigating succession planning and professionalization.'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <DynamicFaIcon name="fa-user" className="text-primary-accent mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-secondary-dark/80 rounded-2xl p-8 md:p-10 border border-primary-accent/10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">Business Consulting – Frequently Asked Questions</h2>
          <div className="space-y-6 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                Is this a one-time project or ongoing support?
              </h3>
              <p>We offer highly flexible engagement models. Depending on your needs, we provide targeted, one-time financial health reviews, project feasibility studies, as well as ongoing consulting relationships (like Virtual CFO services) that include monthly or quarterly strategic review meetings.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                Will you help implement the recommendations you provide?
              </h3>
              <p>Absolutely. We strongly believe that strategy without execution is futile. We work closely with your internal team to translate our strategic recommendations into daily processes, set up comprehensive performance dashboards, and establish a disciplined review rhythm.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                Do you only work with large corporate enterprises?
              </h3>
              <p>No, our passion lies in supporting SMEs, growing startups, and family-managed businesses. We customize our consulting frameworks to suit the size, complexity, and budget of your organization, ensuring that expert financial guidance makes a visible difference regardless of your current scale.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                What makes your business consulting different from standard CA services?
              </h3>
              <p>While standard CA services often focus on historical data—like past audits, tax compliance, and retroactive bookkeeping—our business consulting is forward-looking. We use your financial data to forecast future performance, identify growth opportunities, structure capital efficiently, and advise on high-level corporate decisions.</p>
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
              <DynamicFaIcon name="fa-arrow-left" className="text-sm" />
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceBusinessConsultingPage;


