const OurJourney = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description:
        'Acharya Professional Accountants was established with a vision to provide exceptional accounting services. Started with a small team of dedicated professionals committed to excellence.'
    },
    {
      year: '2022',
      title: 'Expansion',
      description:
        'Expanded our service portfolio and client base significantly. Added GST compliance services and corporate advisory capabilities to better serve growing businesses.'
    },
    {
      year: '2023',
      title: 'Recognition',
      description:
        'Gained recognition in the industry for our innovative approach and client-focused services. Established strategic partnerships and enhanced our technological capabilities.'
    },
    {
      year: '2024',
      title: 'Growth & Innovation',
      description:
        'Launched career programs to nurture the next generation of accounting professionals. Integrated advanced technology solutions for improved service delivery.'
    },
    {
      year: '2025',
      title: 'Excellence',
      description:
        'Continued to excel in serving diverse industries. Maintained our commitment to quality, innovation, and building long-term client relationships that drive mutual success.'
    }
  ];

  return (
    <section id="our-journey" className="py-16 md:py-20 bg-secondary-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-primary-accent">
            Our Journey
          </h2>
          <p className="text-boulder text-lg max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted name in accounting services, our journey
            reflects our commitment to excellence and growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-accent/30"></div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={50 + index * 50}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Year Badge */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary-accent text-dark-bg flex items-center justify-center text-xl font-bold shadow-lg border-4 border-secondary-dark">
                    {milestone.year}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 bg-dark-bg/50 p-6 md:p-8 rounded-xl border border-primary-accent/10 hover:border-primary-accent/30 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary-accent">
                    {milestone.title}
                  </h3>
                  <p className="text-boulder leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;

