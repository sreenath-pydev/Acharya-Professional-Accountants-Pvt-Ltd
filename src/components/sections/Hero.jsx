import { Link } from 'react-scroll';

const Hero = () => {
  const backgroundImage = '/images/banner2_desktop.webp';



  return (
    <>
      <style>{`
        .hero-bg-img {
          object-position: 73% 48%;
        }
        @media (min-width: 640px) {
          .hero-bg-img {
            object-position: center 60px;
          }
        }
        @media (min-width: 1024px) {
          .hero-bg-img {
            object-position: center 96px;
          }
        }
      `}</style>
      <section
        id="home"
        className="relative overflow-hidden min-h-[90vh] flex items-center bg-graphite"
      >
        {/* Background Image using responsive picture tag */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <source media="(min-width: 1024px)" srcSet="/images/banner2_desktop.webp" />
          <source media="(min-width: 640px)" srcSet="/images/banner2_tablet.webp" />
          <img
            src="/images/banner2_mobile.webp"
            alt="Acharya accounting banner"
            className="w-full h-full object-cover hero-bg-img"
            loading="eager"
            fetchpriority="high"
            width="640"
            height="360"
          />
        </picture>

        {/* Gradient Overlay mirroring CSS background-image style */}
        <div 
          className="absolute inset-0 pointer-events-none z-10" 
          style={{
            backgroundImage: 'linear-gradient(120deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.25) 100%)'
          }}
        />

        {/* Secondary overlay for dynamic visual lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/40 to-transparent pointer-events-none z-10" />

        <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-32 pb-[360px] md:pb-28 lg:pb-36 relative z-20">
          <div className="max-w-3xl space-y-6" data-aos="fade-right" data-aos-delay="120">
            <p className="text-primary-accent uppercase tracking-[0.25em] text-xs md:text-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
              Acharya Professional Accountants
            </p>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.65)]">
              Empowering Businesses Through Expert Accounting & Financial Guidance
            </h1>
            <p className="text-lg md:text-xl text-silver-sand max-w-2xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]">
              With innovative solutions, unwavering integrity, and personalized service, we help
              organizations overcome financial challenges and unlock new opportunities.
            </p>
            <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="220">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer"
              >
                Enquire Now
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(229,161,69,0.35),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(229,161,69,0.25),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(229,161,69,0.2),transparent_28%)] animate-pulse-slow" />
      </section>
    </>
  );
};

export default Hero;
