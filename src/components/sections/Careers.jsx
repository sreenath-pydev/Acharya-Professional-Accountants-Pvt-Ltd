import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  { name: 'Sreehari C', role: 'Chairman & CEO', photo: '/teams_images/sreehari.jpg' },
  { name: 'Rahul C', role: 'Managing Director', photo: '/teams_images/rahul.jpg' },
  { name: 'Anagha G M', role: 'Director', photo: '/teams_images/anagha.jpg' },
  { name: 'Anjana', role: 'Director', photo: '/teams_images/anjana.jpg' },
  { name: 'Shamsida', role: 'HR Manager', photo: '/teams_images/shamsida.jpg' },
  { name: 'Anandu', role: 'Office Admin', photo: '/teams_images/anandu.jpg' },
  { name: 'Ayisha Shifan', role: 'Finance coordinator', photo: '/teams_images/ayisha.jpg' }
];


const perks = [
  { icon: 'fa-chart-line', text: 'Professional Growth' },
  { icon: 'fa-users', text: 'Collaborative Culture' },
  { icon: 'fa-arrow-up-right-dots', text: 'Clear Career Progression' },
  { icon: 'fa-hand-holding-heart', text: 'Work That Matters' },
  { icon: 'fa-globe', text: 'Diverse Client Exposure' },
  { icon: 'fa-balance-scale', text: 'Work-Life Balance' }
];

const jobListings = [
  {
    title: 'Marketing Field Executive',
    location: 'Kozhikode',
    type: 'Full-time',
    experience: '0 - 2+',
    description: 'We are looking for a proactive and client-focused Marketing Field Executive to promote our accounting and financial services. This role is open to both freshers and experienced candidates who are passionate about marketing, business development, and building strong client relationships.',
    responsibilities: [
      'Reach out to potential clients through field visits, referrals, and networking activities',
      'Promote the firm\'s services including accounting, taxation, and consulting solutions',
      'Build and maintain long-term relationships with new and existing clients',
      'Support marketing campaigns and gather insights from field activities',
      'Conduct basic market research to identify business opportunities',
      'Participate in seminars, exhibitions, and client meetings to represent the firm',
      'Work toward lead generation and business development goals'
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business Administration, or a related field",
      'Strong verbal and written communication skills',
      'Excellent interpersonal and relationship-building abilities',
      'Ability to work independently and meet targets',
      'Good presentation and persuasion skills',
      'Willingness to travel locally as needed'
    ]
  },
  {
    title: 'Audit Assistant',
    location: 'Kozhikode',
    type: 'Full-time',
    experience: '0 - 2+',
    description: 'We are seeking a detail-oriented Audit Assistant to support our audit team in conducting financial and compliance audits for various clients. This role offers hands-on experience in auditing procedures, financial analysis, and client interaction within a professional work environment.',
    responsibilities: [
      'Assist in conducting statutory, internal, and tax audits for clients',
      'Examine financial records, reports, and compliance documents',
      'Support the audit team in planning and executing audit assignments',
      'Prepare audit working papers and documentation',
      'Identify discrepancies and report audit findings to senior auditors',
      'Coordinate with clients to gather necessary audit information'
    ],
    requirements: [
      "Bachelor's degree in Commerce, Accounting, or related field",
      '0–2 years of experience in audit or accounting (freshers may apply)',
      'Basic knowledge of auditing standards and accounting principles',
      'Proficiency in MS Excel and accounting software (e.g., Tally)',
      'Strong attention to detail and analytical skills',
      'Good communication and time-management skills'
    ]
  },
  {
    title: 'Finance Intern',
    location: 'Kozhikode',
    type: 'Internship',
    experience: 'Fresher',
    description: 'We are offering a valuable internship opportunity for students or recent graduates looking to build a career in finance and accounting. As a Finance Intern, you will gain hands-on experience in financial reporting, bookkeeping, and supporting client projects under the guidance of experienced professionals.',
    responsibilities: [
      'Assist in maintaining financial records and preparing basic reports',
      'Support day-to-day bookkeeping and accounting tasks',
      'Help with invoice processing, data entry, and reconciliations',
      'Conduct basic research and analysis on financial topics',
      'Assist the team with client documentation and audit preparations',
      'Participate in training sessions to learn financial tools and regulations'
    ],
    requirements: [
      "Pursuing or recently completed a Bachelor's degree in Commerce, Finance, or related field",
      'Basic understanding of accounting and finance principles',
      'Proficiency in MS Excel; familiarity with Tally or other software is a plus',
      'Eagerness to learn and take initiative',
      'Strong attention to detail and organization skills',
      'Good communication and teamwork abilities'
    ]
  }
];

const Careers = () => {
  const [activeJob, setActiveJob] = useState(null);

  const toggleJob = (index) => {
    setActiveJob(activeJob === index ? null : index);
  };

  useEffect(() => {
    AOS.refresh();
  }, [activeJob]);

  return (
    <section id="careers" className="py-20 bg-graphite overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div data-aos="fade-up" data-aos-delay="50">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
            Join Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
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
                <div data-aos="fade-up" data-aos-delay={50 + index * 50} key={index} className="bg-dark-bg/40 p-4 rounded-lg flex items-center gap-3">
                  <div className="text-xl text-primary-accent">
                    <i className={`fas ${perk.icon}`}></i>
                  </div>
                  <div className="font-medium text-dark-bg">{perk.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="job-listings">
          <div data-aos="fade-up" data-aos-delay="50">
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary-accent">Current Openings</h3>
          </div>

          {jobListings.map((job, index) => (
            <div
              key={index}
              {...(activeJob !== index && {
                'data-aos': 'fade-up',
                'data-aos-delay': 50 + index * 10
              })}
              className={`bg-secondary-dark rounded-xl overflow-hidden mb-6 border border-primary-accent/10 hover:border-primary-accent transition-all duration-300 ${
                activeJob === index ? 'shadow-lg shadow-primary-accent/20' : ''
              }`}
            >
              <div
                className="p-6 cursor-pointer flex justify-between items-center hover:bg-primary-accent/5 transition-colors duration-300"
                onClick={() => toggleJob(index)}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-xl font-semibold text-white mb-2 break-words">{job.title}</div>
                  <div className="flex flex-wrap gap-3 sm:gap-5 text-boulder text-sm min-w-0 break-words">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt"></i> {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-briefcase"></i> {job.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-layer-group"></i> {job.experience}
                    </div>
                  </div>
                </div>
                <div className="text-primary-accent text-xl transition-transform duration-300">
                  <i className={`fas fa-chevron-${activeJob === index ? 'up' : 'down'}`}></i>
                </div>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeJob === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="text-boulder mb-6 leading-relaxed">{job.description}</div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary-accent">Responsibilities</h4>
                    <ul className="text-boulder pl-6 space-y-2">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="relative pl-5 before:content-['•'] before:text-primary-accent before:absolute before:left-0 before:text-xl">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary-accent">Requirements</h4>
                    <ul className="text-boulder pl-6 space-y-2">
                      {job.requirements.map((item, i) => (
                        <li key={i} className="relative pl-5 before:content-['•'] before:text-primary-accent before:absolute before:left-0 before:text-xl">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-primary-accent/10 flex justify-end">
                    <button
                      className="w-full sm:w-auto bg-primary-accent text-dark-bg px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                      onClick={() => alert(`Application for "${job.title}" will open in a new window.`)}
                    >
                      <i className="fas fa-paper-plane"></i> Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
