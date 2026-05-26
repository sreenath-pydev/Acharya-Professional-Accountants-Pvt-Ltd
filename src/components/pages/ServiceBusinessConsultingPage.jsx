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

      {/* New Section: Virtual CFO & Strategic Financial Framework */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="75">
        <div className="bg-secondary-dark/40 border border-primary-accent/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">Our Virtual CFO & Strategic Financial Framework</h2>
            <p className="text-boulder max-w-3xl mx-auto">
              Our Virtual CFO services provide growing enterprises with high-level financial expertise without the overhead of a full-time executive. We establish a disciplined, process-oriented framework to streamline your corporate finance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-dark-bg/60 p-6 rounded-xl border border-white/5 hover:border-primary-accent/30 transition-all duration-300">
              <div className="w-10 h-10 bg-primary-accent/10 rounded-lg flex items-center justify-center text-primary-accent text-lg mb-4">
                <DynamicFaIcon name="fa-coins" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Cash Flow & Liquidity Management</h4>
              <p className="text-xs text-boulder leading-relaxed">Continuous monitoring and optimization of your working capital cycles, cash flow forecasting, and debt-equity structuring to maintain strong liquidity.</p>
            </div>
            <div className="bg-dark-bg/60 p-6 rounded-xl border border-white/5 hover:border-primary-accent/30 transition-all duration-300">
              <div className="w-10 h-10 bg-primary-accent/10 rounded-lg flex items-center justify-center text-primary-accent text-lg mb-4">
                <DynamicFaIcon name="fa-chart-pie" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Advanced Budgeting & Forecasting</h4>
              <p className="text-xs text-boulder leading-relaxed">Designing master budgets, variance analysis protocols, and dynamic operational forecasts to ensure your department expenditure remains aligned with strategic goals.</p>
            </div>
            <div className="bg-dark-bg/60 p-6 rounded-xl border border-white/5 hover:border-primary-accent/30 transition-all duration-300">
              <div className="w-10 h-10 bg-primary-accent/10 rounded-lg flex items-center justify-center text-primary-accent text-lg mb-4">
                <DynamicFaIcon name="fa-calculator" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Financial Modeling & Valuations</h4>
              <p className="text-xs text-boulder leading-relaxed">Developing robust financial models for pricing products, scaling to new locations, assessing M&A opportunities, and establishing accurate business valuations for funding.</p>
            </div>
            <div className="bg-dark-bg/60 p-6 rounded-xl border border-white/5 hover:border-primary-accent/30 transition-all duration-300">
              <div className="w-10 h-10 bg-primary-accent/10 rounded-lg flex items-center justify-center text-primary-accent text-lg mb-4">
                <DynamicFaIcon name="fa-users-cog" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">Board & Investor Representation</h4>
              <p className="text-xs text-boulder leading-relaxed">Assisting in compiling board presentation packs, presenting financial health status during board meetings, and responding to due diligence queries from prospective investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Financial Health Checklist */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="90">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-primary-accent font-bold tracking-wider uppercase text-sm">Strategic Audit</span>
            <h2 className="font-montserrat text-3xl font-bold mt-2 mb-6">Is Your Business Facing These Red Flags?</h2>
            <p className="text-boulder text-lg mb-6">
              Many business owners operate on "gut feeling" rather than structured data. If your company displays any of the symptoms below, it is a clear indicator that you need a professional financial health checkup and business consulting support.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-secondary-dark/60 rounded-xl border border-white/5">
                <div className="text-red-400 text-xl mt-1 flex-shrink-0"><DynamicFaIcon name="fa-exclamation-triangle" /></div>
                <div>
                  <h4 className="font-semibold text-white">Shrinking Profits Despite Rising Revenues</h4>
                  <p className="text-sm text-boulder mt-1">If your sales ledger shows growth but cash reserves are depleted, your overhead cost structure or pricing strategy needs immediate restructuring.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-secondary-dark/60 rounded-xl border border-white/5">
                <div className="text-red-400 text-xl mt-1 flex-shrink-0"><DynamicFaIcon name="fa-exclamation-triangle" /></div>
                <div>
                  <h4 className="font-semibold text-white">Stuck Capital in Inventory & Receivables</h4>
                  <p className="text-sm text-boulder mt-1">Poor working capital management can lock up cash in unsold stock or unpaid customer invoices, creating artificial cash crunches.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-secondary-dark/60 rounded-xl border border-white/5">
                <div className="text-red-400 text-xl mt-1 flex-shrink-0"><DynamicFaIcon name="fa-exclamation-triangle" /></div>
                <div>
                  <h4 className="font-semibold text-white">Over-reliance on Short-Term Debt</h4>
                  <p className="text-sm text-boulder mt-1">Frequently using credit cards, personal funds, or high-interest short-term loans to cover operational payroll indicates a structurally broken cash cycle.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary-dark border border-primary-accent/15 rounded-3xl p-8 lg:p-10">
            <h3 className="font-montserrat text-xl font-bold text-white mb-6">Our Practical Solutions & Interventions</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-green-400 text-xl mt-1 flex-shrink-0"><DynamicFaIcon name="fa-check-circle" /></div>
                <div>
                  <h5 className="font-semibold text-white">Unit Economics Analysis</h5>
                  <p className="text-sm text-boulder mt-1">We drill down into the profitability of every product line and location, eliminating low-margin, resource-heavy channels.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 text-xl mt-1 flex-shrink-0"><DynamicFaIcon name="fa-check-circle" /></div>
                <div>
                  <h5 className="font-semibold text-white">Credit Terms Rationalization</h5>
                  <p className="text-sm text-boulder mt-1">We help restructure vendor payment schedules and client credit limits, reducing your Days Sales Outstanding (DSO).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 text-xl mt-1 flex-shrink-0"><DynamicFaIcon name="fa-check-circle" /></div>
                <div>
                  <h5 className="font-semibold text-white">Long-term Debt Restructuring</h5>
                  <p className="text-sm text-boulder mt-1">Replacing expensive, fragmented credit lines with consolidated, low-interest commercial term loans to reduce monthly debt servicing costs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-green-400 text-xl mt-1 flex-shrink-0"><DynamicFaIcon name="fa-check-circle" /></div>
                <div>
                  <h5 className="font-semibold text-white">Cloud Accounting & MIS Setup</h5>
                  <p className="text-sm text-boulder mt-1">Implementing automated reporting Dashboards that give management real-time visibility into profit centers and cash run rates.</p>
                </div>
              </div>
            </div>
          </div>
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
            <div>
              <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                How does the pricing for consulting or Virtual CFO services work?
              </h3>
              <p>We understand that every business is unique. We offer fixed project-based pricing for one-time engagements (such as a business model review or financial health check) and monthly/quarterly retainer fees for ongoing Virtual CFO support. We discuss and align on the scope and pricing upfront to ensure transparency and prevent any surprises.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                Will my business data remain secure and confidential?
              </h3>
              <p>Security and confidentiality are fundamental to our professional code of ethics. We sign strict Non-Disclosure Agreements (NDAs) with all our consulting clients. Only authorized team members who are directly working on your engagement will have access to your financial statements, invoices, and operational data.</p>
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


