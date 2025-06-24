
const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-dark">
      <div data-aos="fade-up" className="container mx-auto px-5 md:px-20">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
          About Us
        </h2>
        
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right"
  data-aos-delay="100">
            <h3 className="text-2xl font-semibold mb-4 text-primary-accent">Leading Accounting Excellence</h3>
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
              data-aos-delay="100" 
  className="bg-gradient-to-br from-irish-coffee to-korma h-96 rounded-2xl flex items-center justify-center overflow-hidden relative"
>
  {/* Background gradient remains */}
  <div className="absolute inset-0 bg-gradient-to-br from-irish-coffee to-korma"></div>
  

  <img 
    src="/src/assets/images/about.png" 
    alt="Accounting services illustration"
    className="w-full h-full object-cover object-center opacity-90"
  />
  
  
</div>
        </div>
      </div>
    </section>
  );
};

export default About;