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
          <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / MCA & Compliance</p>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
            MCA & Compliance Services
          </h1>
          <p className="text-lg text-boulder max-w-3xl">
            Complete corporate compliance solutions including Secretarial, Event-Based, and Accounting support to keep your entity legally compliant and audit-ready.
          </p>
        </div>
        <div className="bg-secondary-dark/80 border border-primary-accent/20 rounded-2xl overflow-hidden" data-aos="fade-left">
          <picture>
            <source srcSet="/images/advisory.webp" type="image/webp" />
            <img
              src="/images/advisory.webp"
              alt="MCA and Compliance Services at Acharya"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Secretarial Compliances */}
      <section className="container mx-auto px-4 md:px-20 mb-12" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 md:p-10">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-primary-accent">1. Secretarial Compliances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {[
              { name: 'Annual Compliance for Private Limited Company', slug: 'annual-compliance-for-private-limited-company' },
              { name: 'Annual Filing for LLP', slug: 'annual-filing-for-llp' },
              { name: 'Section 8 Company Compliance', slug: 'section-8-company-compliance' },
              { name: 'Annual Compliance for One Person Company', slug: 'annual-compliance-for-one-person-company' },
              { name: 'DIR-3 KYC Filing Online', slug: 'dir-3-kyc-filing-online' },
              { name: 'Share Transfer', slug: 'share-transfer' },
              { name: 'ADT-1 Filing', slug: 'adt-1-filing' },
              { name: 'Partnership Firm Compliance', slug: 'partnership-firm-compliance' },
              { name: 'DPT-3 Filing Online', slug: 'dpt-3-filing-online' },
              { name: 'Sole Proprietorship Compliance', slug: 'sole-proprietorship-compliance' },
              { name: 'LLP Form 11 Filing', slug: 'llp-form-11-filing' },
              { name: 'DIN Reactivation Online', slug: 'din-reactivation-online' },
              { name: 'FSSAI Annual Return Filing', slug: 'fssai-annual-return-filing' },
              { name: 'Dematerialisation of Shares', slug: 'dematerialisation-of-shares' },
              { name: 'Form MGT-7 Filing', slug: 'form-mgt-7-filing' },
              { name: 'Form AOC-4 Filing', slug: 'form-aoc-4-filing' },
              { name: 'LLP Form 8 Filing', slug: 'llp-form-8-filing' },
            ].map((item, index) => (
              <Link key={index} to={`/services/advisory/${item.slug}`} className="flex items-start gap-3 group hover:text-primary-accent transition-colors">
                <i className="fas fa-check-circle text-primary-accent/70 mt-1 text-sm group-hover:text-primary-accent"></i>
                <span className="text-boulder text-sm md:text-base group-hover:text-white transition-colors">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event-Based Compliances */}
      <section className="container mx-auto px-4 md:px-20 mb-12" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 md:p-10">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-primary-accent">2. Event-Based Compliances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {[
              { name: 'Add a New Partner in LLP', slug: 'add-a-new-partner-in-llp' },
              { name: 'Removal of Partner from LLP', slug: 'removal-of-partner-from-llp' },
              { name: 'Event-Based Compliance for Companies', slug: 'event-based-compliance-for-companies' },
              { name: 'Change in Object Clause', slug: 'change-in-object-clause' },
              { name: 'Appointment and Resignation of Director', slug: 'appointment-and-resignation-of-director' },
              { name: 'Change in Name Clause', slug: 'change-in-name-clause' },
              { name: 'Removal of Director', slug: 'removal-of-director' },
              { name: 'Change in Share Capital', slug: 'change-in-share-capital' },
              { name: 'Change in Registered Office Address', slug: 'change-in-registered-office-address' },
              { name: 'Company Name Change', slug: 'company-name-change' },
              { name: 'MOA Amendment', slug: 'moa-amendment' },
              { name: 'AOA Amendment', slug: 'aoa-amendment' },
              { name: 'Increase Authorized Capital', slug: 'increase-authorized-capital' },
              { name: 'Amendment of LLP Agreement', slug: 'amendment-of-llp-agreement' },
            ].map((item, index) => (
              <Link key={index} to={`/services/advisory/${item.slug}`} className="flex items-start gap-3 group hover:text-primary-accent transition-colors">
                <i className="fas fa-star text-primary-accent/70 mt-1 text-sm group-hover:text-primary-accent"></i>
                <span className="text-boulder text-sm md:text-base group-hover:text-white transition-colors">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accounting & Book Keeping */}
      <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up" data-aos-delay="150">
        <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-8 md:p-10">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-primary-accent">3. Accounting & Book Keeping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {[
              { name: 'Secretarial Audit', slug: 'secretarial-audit' },
              { name: 'Due Diligence', slug: 'due-diligence' },
              { name: 'Business Plan', slug: 'business-plan' },
              { name: 'Virtual CFO Services', slug: 'virtual-cfo-services' },
              { name: 'Accounting Services', slug: 'accounting-services' },
              { name: 'Accounts Payable Services', slug: 'accounts-payable-services' },
              { name: 'Accounts Receivable Services', slug: 'accounts-receivable-services' },
              { name: 'Tax Audit', slug: 'tax-audit' },
              { name: 'Payroll Services', slug: 'payroll-services' },
              { name: 'Forensic Audit', slug: 'forensic-audit' },
              { name: 'Financial Report Preparation', slug: 'financial-report-preparation' },
            ].map((item, index) => (
              <Link key={index} to={`/services/advisory/${item.slug}`} className="flex items-start gap-3 group hover:text-primary-accent transition-colors">
                <i className="fas fa-chart-line text-primary-accent/70 mt-1 text-sm group-hover:text-primary-accent"></i>
                <span className="text-boulder text-sm md:text-base group-hover:text-white transition-colors">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-secondary-dark/80 rounded-2xl p-8 md:p-10 border border-primary-accent/10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">MCA & Compliance – FAQ</h2>
          <div className="space-y-4 text-boulder">
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Why is annual compliance mandatory?
              </h3>
              <p>Filing annual forms (like AOC-4/MGT-7 for companies or Form 8/11 for LLPs) is mandatory to avoid heavy penalties and disqualification of directors.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1 text-base md:text-lg">
                Can you handle compliance for Section 8 companies?
              </h3>
              <p>Yes, we specialize in compliance for non-profit organizations (Section 8 companies) ensuring they meet all regulatory requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="250">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Ensure 100% Compliance</h3>
              <p className="text-lg max-w-2xl">
                Avoid penalties and focus on business growth while we handle your secretarial and event-based compliances.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20discuss%20MCA%20Compliance%20Services"
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


