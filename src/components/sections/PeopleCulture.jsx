import AOS from 'aos';
import { useEffect } from 'react';

const teamMembers = [
  { name: 'Sreehari C', role: 'Chairman & CEO', photo: '/teams_images/sreehari.jpg' },
  { name: 'Rahul C', role: 'Managing Director', photo: '/teams_images/rahul.jpg' },
  { name: 'Anagha G M', role: 'Director', photo: '/teams_images/anagha.jpg' },
  { name: 'Anjana', role: 'Director', photo: '/teams_images/anjana.jpg' },
  { name: 'Shamsida', role: 'HR Manager', photo: '/teams_images/shamsida.jpg' },
  { name: 'Anandu', role: 'Office Admin', photo: '/teams_images/anandu.jpg' },
  { name: 'Ayisha Shifa', role: 'Finance coordinator', photo: '/teams_images/ayisha.jpg' }
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
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="people-culture" className="py-20 bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
            Our People & Culture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div data-aos="fade-right" data-aos-delay="50" className="bg-secondary-dark p-6 sm:p-8 rounded-2xl border border-primary-accent/10">
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary-accent">Meet Our Team</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {teamMembers.map((member, index) => (
                <div data-aos="fade-up" data-aos-delay={50 + index * 50} key={index} className="text-center min-w-0 break-words">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:scale-105 hover:shadow-primary-accent/30 transition-all duration-300">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="font-semibold text-white">{member.name}</div>
                  <div className="text-sm text-boulder">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="50" className="bg-gradient-to-br from-korma to-primary-accent p-6 sm:p-8 rounded-2xl shadow-lg shadow-korma/30 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-dark-bg">Why Work With Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {perks.map((perk, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={50 + index * 50}
                  key={index}
                  className="bg-dark-bg/40 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[120px] text-center w-full shadow-md hover:shadow-primary-accent/30 transition-all duration-300"
                >
                  <div className="text-2xl text-primary-accent">
                    <i className={`fas ${perk.icon}`}></i>
                  </div>
                  <div className="font-semibold text-dark-bg text-lg">{perk.text}</div>
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