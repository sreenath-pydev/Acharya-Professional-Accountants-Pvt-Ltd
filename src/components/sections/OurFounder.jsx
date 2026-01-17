import DynamicFaIcon from '../common/FontAwesomeRegistry';

const OurFounder = () => {
  const socialLinks = [
    { icon: 'fa-linkedin-in', url: '#', label: 'LinkedIn' },
    { icon: 'fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fa-instagram', url: '#', label: 'Instagram' }
  ];

  return (
    <section id="our-founder" className="py-16 md:py-20 bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-primary-accent">
            Our Founder
          </h2>
          <p className="text-boulder text-lg max-w-3xl mx-auto">
            Meet the visionary leader behind Acharya Professional Accountants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left Side: Founder Image and Social Media */}
          <div data-aos="fade-right" data-aos-delay="50" className="flex flex-col items-center md:items-start">
            <div className="relative mb-6">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-accent/20">
                <img
                  src="/teams_images/sreehari.webp"
                  alt="Founder - Sreehari C"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-accent rounded-full flex items-center justify-center shadow-lg border-4 border-dark-bg">
                <DynamicFaIcon name="fa-award" className="text-3xl text-dark-bg" />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary-dark rounded-full flex items-center justify-center text-primary-accent text-lg hover:bg-primary-accent hover:text-dark-bg hover:scale-110 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <DynamicFaIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Founder Details */}
          <div data-aos="fade-left" data-aos-delay="50" className="pt-0">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Sreehari C
            </h3>
            <p className="text-xl text-primary-accent mb-6">Chairman & CEO</p>

            <div className="space-y-6">
              <p className="text-boulder text-lg leading-relaxed">
                Sreehari C is the visionary founder and Chairman & CEO of Acharya Professional
                Accountants Pvt Ltd. With over 15 years of experience in the accounting and
                financial services industry, Sreehari has been instrumental in establishing the firm
                as a trusted name in professional accounting services.
              </p>

              <p className="text-boulder text-lg leading-relaxed">
                His expertise spans across taxation, auditing, corporate compliance, and financial
                advisory services. Under his leadership, Acharya Professional Accountants has grown
                from a startup to a comprehensive accounting firm serving clients across various
                industries.
              </p>

              <div className="bg-secondary-dark/50 p-6 rounded-xl border border-primary-accent/10">
                <h4 className="text-xl font-semibold mb-4 text-primary-accent">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="text-boulder flex items-start gap-2">
                    <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                    <span>Established and scaled Acharya Professional Accountants from ground up</span>
                  </li>
                  <li className="text-boulder flex items-start gap-2">
                    <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                    <span>Led successful client engagements across multiple industries</span>
                  </li>
                  <li className="text-boulder flex items-start gap-2">
                    <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                    <span>Pioneered innovative accounting solutions and service delivery models</span>
                  </li>
                  <li className="text-boulder flex items-start gap-2">
                    <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                    <span>Mentored and developed numerous accounting professionals</span>
                  </li>
                </ul>
              </div>

              <p className="text-boulder text-lg leading-relaxed italic">
                "Our mission is to empower businesses with expert financial guidance and create
                lasting value through integrity, innovation, and personalized service."
              </p>
              <p className="text-primary-accent font-semibold">- Sreehari C</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;

