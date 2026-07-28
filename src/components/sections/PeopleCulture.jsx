const teamMembers = [
  { name: 'Sreehari C', role: 'Chairman & CEO', photo: '/teams_images/sreehari.webp' },
  { name: 'Rahul C', role: 'Managing Director', photo: '/teams_images/rahul.webp' },
  { name: 'Anagha G M', role: 'Director', photo: '/teams_images/anagha.webp' },
  { name: 'Anjana', role: 'Director', photo: '/teams_images/anjana.webp' },
  { name: 'Shamsida', role: 'HR Manager', photo: '/teams_images/shamsida.webp' },
  { name: 'Anandu', role: 'Office Admin', photo: '/teams_images/anandu.webp' },
  { name: 'Ayisha Shifa', role: 'Finance coordinator', photo: '/teams_images/ayisha.webp' }
];

const perks = [
  { icon: 'fa-chart-line', text: 'Professional Growth' },
  { icon: 'fa-users', text: 'Collaborative Culture' },
  { icon: 'fa-arrow-up-right-dots', text: 'Clear Career Progression' },
  { icon: 'fa-hand-holding-heart', text: 'Work That Matters' },
  { icon: 'fa-globe', text: 'Diverse Client Exposure' },
  { icon: 'fa-balance-scale', text: 'Work-Life Balance' }
];

const PeopleCulture = () => {
  return (
    <section id="people-culture" className="relative z-10 py-12 md:py-20 bg-graphite/45 backdrop-blur-md overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary-accent">
            Our People & Culture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Team Section */}
          <div 
            data-aos="fade-right" 
            data-aos-delay="50" 
            className="bg-secondary-dark p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-primary-accent/10"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-primary-accent">Meet Our Team</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  data-aos="fade-up" 
                  data-aos-delay={50 + index * 50} 
                  key={index} 
                  className="text-center min-w-0 break-words"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-lg hover:scale-105 hover:shadow-primary-accent/30 transition-all duration-300">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="font-semibold text-white text-sm sm:text-base">{member.name}</div>
                  <div className="text-xs sm:text-sm text-boulder">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Perks Section */}
          <div 
            data-aos="fade-left" 
            data-aos-delay="50" 
            className="bg-gradient-to-br from-korma to-primary-accent p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg shadow-korma/30 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-dark-bg">Why Work With Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {perks.map((perk, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={50 + index * 50}
                  key={index}
                  className="bg-dark-bg/40 p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl flex flex-col sm:flex-row items-center justify-center gap-3 min-h-[100px] sm:min-h-[120px] text-center w-full shadow-md hover:shadow-primary-accent/30 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl text-primary-accent">
                    <i className={`fas ${perk.icon}`}></i>
                  </div>
                  <div className="font-semibold text-white text-sm sm:text-base md:text-lg">{perk.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleCulture;