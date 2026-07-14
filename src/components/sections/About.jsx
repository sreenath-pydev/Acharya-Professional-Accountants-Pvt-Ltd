const About = () => {
  return (
    <section id="about" className="relative z-10 py-16 md:py-20 bg-secondary-dark/40 backdrop-blur-md overflow-hidden">
      <div data-aos="fade-up" data-aos-delay="50" className="container mx-auto px-4 md:px-20">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary-accent">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="50">
            <h3 className="text-2xl font-semibold mb-4 text-primary-accent">
              Leading Accounting Excellence
            </h3>
            <p className="text-boulder mb-6 text-lg">
              Acharya Professional Accountings has established itself as a trusted partner for businesses of all sizes. We provide comprehensive accounting, taxation, and financial consulting services that drive growth and ensure compliance.
            </p>
            <p className="text-boulder mb-6 text-lg">
              Our vision is to be the premier accounting firm that empowers businesses through expert financial guidance, innovative solutions, and unwavering integrity. We believe in building long-term relationships with our clients and nurturing the next generation of accounting professionals.
            </p>
            <p className="text-boulder text-lg">
              From startups to established corporations, we deliver personalized service that addresses your unique financial challenges and opportunities.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="50"
            className="relative rounded-2xl overflow-hidden w-full aspect-[4/3] bg-gradient-to-br from-irish-coffee to-korma"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-irish-coffee to-korma" />
            <img
              src="/images/about2.webp"
              alt="Accounting services illustration"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
