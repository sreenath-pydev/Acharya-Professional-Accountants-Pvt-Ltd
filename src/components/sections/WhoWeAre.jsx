const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-16 md:py-20 bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary-accent">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="50">
            <h3 className="text-2xl font-semibold mb-4 text-primary-accent">
              Leading Accounting Excellence Since 2018
            </h3>
            <p className="text-boulder mb-6 text-lg leading-relaxed">
              Acharya Professional Accountants Pvt Ltd stands as a beacon of excellence in the
              accounting and financial services industry. Established with a vision to transform how
              businesses manage their financial affairs, we have grown from a local firm to a trusted
              partner for organizations across various sectors.
            </p>
            <p className="text-boulder mb-6 text-lg leading-relaxed">
              Our team consists of experienced Chartered Accountants, tax professionals, financial
              advisors, and compliance experts who bring decades of combined experience to every
              client engagement. We pride ourselves on staying ahead of regulatory changes,
              leveraging cutting-edge technology, and maintaining the highest standards of
              professional ethics.
            </p>
            <p className="text-boulder text-lg leading-relaxed">
              What sets us apart is our commitment to understanding each client's unique business
              environment. We don't just provide accounting services; we become strategic partners
              who help navigate complex financial landscapes, optimize tax strategies, and drive
              sustainable growth.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="50"
            className="relative rounded-2xl overflow-hidden w-full aspect-[4/3] bg-gradient-to-br from-irish-coffee to-korma"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-irish-coffee to-korma" />
            <img
              src="/images/about.webp"
              alt="Acharya Professional Accountants team"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

