import DynamicFaIcon from '../common/FontAwesomeRegistry';

const OurExpertise = () => {
  const expertiseAreas = [
    {
      icon: 'fa-file-invoice-dollar',
      title: 'Tax Planning & Compliance',
      description:
        'Expert tax planning strategies and comprehensive compliance services to minimize liabilities and maximize savings while ensuring full regulatory adherence.',
      highlights: ['GST Filing & Compliance', 'Income Tax Planning', 'TDS Management', 'Tax Audits']
    },
    {
      icon: 'fa-book',
      title: 'Accounting & Bookkeeping',
      description:
        'Comprehensive bookkeeping services that keep your financial records accurate, up-to-date, and compliant with accounting standards.',
      highlights: ['Financial Statements', 'Bookkeeping', 'Account Reconciliation', 'Monthly Reports']
    },
    {
      icon: 'fa-search-dollar',
      title: 'Auditing Services',
      description:
        'Independent auditing services that provide stakeholders with confidence in your financial reporting and internal controls.',
      highlights: ['Statutory Audits', 'Internal Audits', 'Tax Audits', 'Due Diligence']
    },
    {
      icon: 'fa-building',
      title: 'Corporate Compliance',
      description:
        'Complete corporate compliance solutions including ROC filings, company registrations, and regulatory documentation.',
      highlights: ['Company Registration', 'ROC Filings', 'Annual Returns', 'Compliance Management']
    },
    {
      icon: 'fa-chart-line',
      title: 'Business Consulting',
      description:
        'Strategic financial consulting to help you make informed decisions, optimize operations, and accelerate growth.',
      highlights: ['Financial Planning', 'Business Strategy', 'Process Optimization', 'Risk Management']
    },
    {
      icon: 'fa-handshake',
      title: 'Advisory Services',
      description:
        'Personalized financial advisory services to guide your business through complex financial decisions and market challenges.',
      highlights: ['Investment Advisory', 'Mergers & Acquisitions', 'Valuation Services', 'Financial Modeling']
    }
  ];

  return (
    <section id="our-expertise" className="py-16 md:py-20 bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-primary-accent">
            Our Expertise
          </h2>
          <p className="text-boulder text-lg max-w-3xl mx-auto">
            With years of experience and deep industry knowledge, we offer comprehensive financial
            services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={50 + index * 50}
              className="bg-secondary-dark p-6 rounded-xl border border-primary-accent/10 hover:border-primary-accent/30 hover:shadow-lg hover:shadow-primary-accent/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl text-primary-accent mb-4">
                <DynamicFaIcon name={area.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
              <p className="text-boulder mb-4 leading-relaxed">{area.description}</p>
              <ul className="space-y-2">
                {area.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-boulder text-sm flex items-start gap-2">
                    <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1 text-xs" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;

