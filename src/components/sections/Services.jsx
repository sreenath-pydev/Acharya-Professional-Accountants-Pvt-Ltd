import { Link } from 'react-router-dom';
import {
  IconCalculator,
  IconFileInvoiceDollar,
  IconSearchDollar,
  IconFileSignature,
  IconChartPie,
  IconHandshake,
  IconArrowRight
} from '../common/Icons';

const services = [
  {
    id: 'accounting',
    icon: 'fa-calculator',
    title: 'Accounting Services',
    description:
      'Comprehensive bookkeeping, financial statement preparation, and accounting system implementation to keep your business financially organized.',
    link: '/services/accounting',
  },
  {
    id: 'taxation',
    icon: 'fa-file-invoice-dollar',
    title: 'Taxation',
    description:
      'Expert tax planning, preparation, and compliance services for individuals and businesses to maximize savings and ensure regulatory compliance.',
    link: '/services/taxation',
  },
  {
    id: 'auditing',
    icon: 'fa-search-dollar',
    title: 'Auditing',
    description:
      'Independent auditing services that provide stakeholders with confidence in your financial reporting and internal controls.',
    link: '/services/auditing',
  },
  {
    id: 'gst',
    icon: 'fa-file-signature',
    title: 'GST Services',
    description:
      'Expert GST registration, return filing, reconciliation, and compliance solutions to ensure your business meets all tax regulations with accuracy and ease.',
    link: '/services/gst',
  },
  {
    id: 'consulting',
    icon: 'fa-chart-pie',
    title: 'Business Consulting',
    description:
      'Strategic financial consulting to help you make informed decisions, optimize operations, and accelerate growth.',
    link: '/services/business-consulting',
  },
  {
    id: 'advisory',
    icon: 'fa-handshake',
    title: 'MCA & Compliance Services',
    description:
      'Comprehensive secretarial/event-based compliance and accounting support for companies and LLPs.',
    link: '/services/advisory',
  }
];

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'fa-calculator': return IconCalculator;
    case 'fa-file-invoice-dollar': return IconFileInvoiceDollar;
    case 'fa-search-dollar': return IconSearchDollar;
    case 'fa-file-signature': return IconFileSignature;
    case 'fa-chart-pie': return IconChartPie;
    case 'fa-handshake': return IconHandshake;
    default: return IconCalculator;
  }
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="container mx-auto px-5 md:px-20"
      >
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={50 + index * 50}
                data-aos-duration={100 + index * 50}
                className="bg-secondary-dark p-8 rounded-xl text-center border border-primary-accent/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-accent/20 hover:border-primary-accent transition-all duration-300"
              >
                <div className="text-5xl text-primary-accent mb-4 flex justify-center">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-boulder mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center bg-primary-accent text-dark-bg font-semibold px-5 py-2.5 rounded-full hover:bg-korma transition-all duration-300 text-sm group"
                >
                  View Service Details
                  <IconArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
