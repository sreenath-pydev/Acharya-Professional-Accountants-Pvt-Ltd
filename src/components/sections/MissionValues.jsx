import DynamicFaIcon from '../common/FontAwesomeRegistry';

const MissionValues = () => {
  const values = [
    {
      icon: 'fa-handshake',
      title: 'Integrity',
      description:
        'We conduct our business with unwavering honesty, transparency, and ethical standards in every interaction and decision.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description:
        'We embrace cutting-edge technology and innovative solutions to deliver efficient, modern accounting services.'
    },
    {
      icon: 'fa-heart',
      title: 'Client-Centric',
      description:
        'Our clients are at the heart of everything we do. We prioritize their success and build long-lasting partnerships.'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Excellence',
      description:
        'We strive for excellence in every service we provide, continuously improving and maintaining the highest professional standards.'
    },
    {
      icon: 'fa-users',
      title: 'Collaboration',
      description:
        'We believe in working together as a team, both internally and with our clients, to achieve shared success.'
    },
    {
      icon: 'fa-rocket',
      title: 'Growth',
      description:
        'We are committed to continuous learning, development, and helping our clients grow their businesses sustainably.'
    }
  ];

  return (
    <section id="mission-values" className="relative z-10 py-16 md:py-20 bg-secondary-dark/40 backdrop-blur-md overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary-accent">
            Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 mb-12">
          {/* Mission Section */}
          <div data-aos="fade-right" data-aos-delay="50" className="bg-dark-bg/50 p-8 rounded-2xl border border-primary-accent/10">
            <h3 className="text-2xl font-semibold mb-6 text-primary-accent flex items-center gap-3">
              <DynamicFaIcon name="fa-bullseye" />
              Our Mission
            </h3>
            <p className="text-boulder text-lg leading-relaxed mb-4">
              To empower businesses of all sizes with expert accounting, taxation, and financial
              advisory services that drive sustainable growth, ensure regulatory compliance, and
              maximize profitability.
            </p>
            <p className="text-boulder text-lg leading-relaxed">
              We are dedicated to building trust through transparency, delivering personalized
              solutions tailored to each client's unique needs, and fostering long-term
              relationships that contribute to mutual success.
            </p>
          </div>

          {/* Vision Section */}
          <div data-aos="fade-left" data-aos-delay="50" className="bg-dark-bg/50 p-8 rounded-2xl border border-primary-accent/10">
            <h3 className="text-2xl font-semibold mb-6 text-primary-accent flex items-center gap-3">
              <DynamicFaIcon name="fa-eye" />
              Our Vision
            </h3>
            <p className="text-boulder text-lg leading-relaxed mb-4">
              To be recognized as the premier accounting firm in the region, known for excellence,
              innovation, and unwavering commitment to client success.
            </p>
            <p className="text-boulder text-lg leading-relaxed">
              We envision a future where every business, regardless of size, has access to
              world-class financial expertise that enables them to thrive in an ever-evolving
              economic landscape.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={50 + index * 50}
              className="bg-dark-bg/50 p-6 rounded-xl border border-primary-accent/10 hover:border-primary-accent/30 hover:shadow-lg hover:shadow-primary-accent/10 transition-all duration-300"
            >
              <div className="text-4xl text-primary-accent mb-4">
                <DynamicFaIcon name={value.icon} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{value.title}</h4>
              <p className="text-boulder leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;

