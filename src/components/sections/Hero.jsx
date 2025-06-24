import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
  style={{
    minHeight: '100vh',
    backgroundImage: `linear-gradient(135deg, rgba(4, 4, 4, 0.8), rgba(44, 14, 9, 0.6)),
      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600'><rect fill='%23040404' width='1000' height='600'/><g fill='%23e5a145' opacity='0.1'><circle cx='200' cy='200' r='100'/><circle cx='800' cy='400' r='150'/><circle cx='500' cy='100' r='80'/></g></svg>")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  className="flex items-center justify-center text-center relative overflow-hidden" 
    >
      <div  className="relative z-10 max-w-4xl px-4">
        <div data-aos="fade-up"
            data-aos-delay="500">
        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fadeInUp delay-[500ms]">
          Acharya Professional Accountants Pvt Ltd
        </h1>
        </div>
        <div data-aos="fade-up"
            data-aos-delay="600">
        <p className="text-xl md:text-2xl text-boulder mb-8 opacity-0 animate-fadeInUp delay-[1000ms]">
          Expertise. Trust. Growth.
        </p>
        </div>
        <div  className="flex flex-wrap justify-center gap-4 opacity-0 animate-fadeInUp delay-[1500ms]">
          <Link data-aos="fade-up"
            data-aos-delay="1000"
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer"
          >
            Explore Services
          </Link>
          <Link data-aos="fade-up"
            data-aos-delay="1000"
            to="internship"
            smooth={true}
            duration={500}
            offset={-80}
            className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer"
          >
            Apply for Internship
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
