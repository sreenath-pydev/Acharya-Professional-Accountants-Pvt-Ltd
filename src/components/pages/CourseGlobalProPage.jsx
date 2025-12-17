import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const CourseGlobalProPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14" data-aos="fade-up">
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Course Detail</p>
        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-3">
          GLOBAL - PRO – International Career Readiness Program
        </h1>
        <p className="text-lg text-boulder max-w-3xl">
          Train for UAE, GCC & overseas corporate careers with international accounting, MIS, and professional readiness.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-20 space-y-10 md:space-y-12 mb-16" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8 md:p-10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">Program Overview</h2>
          <p className="text-boulder leading-relaxed">
            GLOBAL - PRO is a specialized program crafted for UAE and GCC accounting careers. You build international accounting &
            reporting capability, data analysis and MIS confidence, corporate professionalism, and overseas job readiness that
            meets employer expectations.
          </p>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8 md:p-10">
          <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-4">Why GLOBAL - PRO</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-boulder">
            {[
              'Designed for UAE & GCC job markets',
              'International accounting & reporting focus',
              'Data analysis & MIS reporting',
              'Practical Excel & reporting skills',
              'Corporate communication training',
              'Interview & overseas job readiness support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <i className="fas fa-check-circle text-primary-accent mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-4">What You Will Learn</h3>
            <div className="space-y-4 text-boulder">
              <div>
                <h4 className="text-white font-semibold mb-2">International Accounting & Reporting</h4>
                <p>IFRS overview and overseas reporting expectations for UAE & GCC markets.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Data Analysis & MIS Reporting</h4>
                <p>Excel-driven dashboards, variance and performance analysis, and MIS storytelling.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">VAT & Compliance</h4>
                <p>UAE-oriented VAT basics, filings flow, and compliance checkpoints.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Corporate Tools & Work Culture</h4>
                <p>Productivity tools, documentation standards, and cross-border work etiquette.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
              <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-3">Practical Exposure</h3>
              <p className="text-boulder leading-relaxed">
                Work with corporate-style datasets, international case studies, and trainer-guided practical sessions that mirror
                overseas accounting teams.
              </p>
            </div>

            <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
              <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-3">Certification</h3>
              <p className="text-boulder">
                GLOBAL - PRO – International Career Readiness Certificate<br />
                Issued by Acharya Professional Accountants
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Who Should Join</h3>
            <ul className="space-y-3 text-boulder">
              {[
                'Students targeting UAE / GCC jobs',
                'Commerce & finance graduates',
                'Freshers seeking international exposure',
                'Professionals planning overseas careers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <i className="fas fa-user text-primary-accent mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Career Opportunities</h3>
            <ul className="space-y-3 text-boulder">
              {[
                'Accounts Executive',
                'MIS Executive',
                'Audit Assistant',
                'Finance Analyst',
                'VAT Executive',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <i className="fas fa-briefcase text-primary-accent mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Program Details</h3>
            <ul className="space-y-3 text-boulder">
              <li className="flex items-start gap-3">
                <i className="fas fa-clock text-primary-accent mt-1"></i>
                <span>Duration: 1 / 3 / 6 Months</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-chalkboard-teacher text-primary-accent mt-1"></i>
                <span>Mode: Classroom + Practical Training</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary-accent mt-1"></i>
                <span>Location: Kozhikode, Kerala</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

       <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="100">
         <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
             <div>
               <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Apply for GLOBAL - PRO</h3>
               <p className="text-lg max-w-2xl">Ready for UAE and GCC roles? Apply or enquire to start your overseas-focused training.</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
               <a
  href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20apply%20for%20the%20course"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 sm:flex-none inline-flex justify-center items-center bg-dark-bg text-primary-accent font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark transition-all duration-300"
>
  Apply Now
</a>

               <Link
                 to="/contact"
                 className="flex-1 sm:flex-none inline-flex justify-center items-center bg-white text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-300"
               >
                 Enquire Now
               </Link>
             </div>
           </div>
           <div>
             <Link
               to="/courses"
               className="inline-flex items-center gap-2 text-dark-bg font-semibold hover:text-secondary-dark transition-colors duration-300"
             >
               <i className="fas fa-arrow-left text-sm"></i>
               <span>Back to Courses</span>
             </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default CourseGlobalProPage;

