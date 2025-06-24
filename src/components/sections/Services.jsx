const services = [
  {
    icon: 'fa-calculator',
    title: 'Accounting Services',
    description:
      'Comprehensive bookkeeping, financial statement preparation, and accounting system implementation to keep your business financially organized.'
  },
  {
    icon: 'fa-file-invoice-dollar',
    title: 'Taxation',
    description:
      'Expert tax planning, preparation, and compliance services for individuals and businesses to maximize savings and ensure regulatory compliance.'
  },
  {
    icon: 'fa-search-dollar',
    title: 'Auditing',
    description:
      'Independent auditing services that provide stakeholders with confidence in your financial reporting and internal controls.'
  },
  {
    icon: 'fa-building',
    title: 'Corporate Compliance',
    description:
      'Ensure your business meets all regulatory requirements with our comprehensive compliance monitoring and reporting services.'
  },
  {
    icon: 'fa-chart-pie',
    title: 'Business Consulting',
    description:
      'Strategic financial consulting to help you make informed decisions, optimize operations, and accelerate growth.'
  },
  {
    icon: 'fa-handshake',
    title: 'Advisory Services',
    description:
      'Personalized financial advisory services to guide your business through complex financial decisions and market challenges.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="container mx-auto px-5 md:px-20"
      >
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100} 
              data-aos-duration={200 + index * 100} 
              className="bg-secondary-dark p-8 rounded-xl text-center border border-primary-accent/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-accent/20 hover:border-primary-accent transition-all duration-300"
            >
              <div className="text-5xl text-primary-accent mb-4">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-boulder">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
