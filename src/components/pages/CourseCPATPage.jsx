import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { setCanonical } from '../../utils/seo';

const CourseCPATPage = () => {
  useEffect(() => {
    setCanonical('https://acharyaprofessionalaccountants.in/courses/c-pat');
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14" data-aos="fade-up">
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Course Detail</p>
        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-3">
          C-PAT – Certified Professional Accounting Training
        </h1>
        <p className="text-lg text-boulder max-w-3xl">
          Become job-ready in accounting, GST, taxation, and audit with Kozhikode’s practical accounting & GST course.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-20 space-y-10 md:space-y-12 mb-16" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8 md:p-10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-boulder leading-relaxed">
            C-PAT is a hands-on accounting training program that bridges college theory and real practice. Learn how accounting,
            GST, taxation, and audit actually run inside offices with guided exercises and live-style files.
          </p>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8 md:p-10">
          <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-4">Why Choose C-PAT</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-boulder">
            {[
              '100% practical training',
              'Live accounting & GST filing',
              'career exposure',
              'Industry-recognized certification',
              'Training by practicing professionals',
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
            <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-4">Course Curriculum</h3>
            <div className="space-y-4 text-boulder">
              <div>
                <h4 className="text-white font-semibold mb-2">Accounting & Bookkeeping</h4>
                <p>Entries, reconciliations, ledgers, and month-end closes.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">GST & Indirect Tax</h4>
                <p>GST workflows, returns, reconciliations, and compliance checks.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Income Tax</h4>
                <p>Basics of computation, TDS considerations, and documentation.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Audit & Compliance</h4>
                <p>Working papers, schedules, and support for statutory reviews.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Software Training (Tally, Excel, portals)</h4>
                <p>Hands-on with Tally, Excel process maps, and common filing portals.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
              <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-3">career Exposure</h3>
              <p className="text-boulder leading-relaxed">
                Experience career at Acharya Professional Accountants: work on real client files, follow office procedures,
                and prepare for interviews with feedback. Top performers receive placement consideration.
              </p>
            </div>

            <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
              <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-3">Certification</h3>
              <p className="text-boulder">
                Certified Professional Accounting Training (C-PAT)
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Who Can Join</h3>
            <p className="text-boulder">
              B.Com / BBA / M.Com / MBA students, freshers, and career-gap candidates who want practical accounting skills.
            </p>
          </div>

          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Career Opportunities</h3>
            <ul className="space-y-3 text-boulder">
              {[
                'Junior Accountant',
                'GST Executive',
                'Audit Assistant',
                'Accounts Executive',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <i className="fas fa-briefcase text-primary-accent mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Duration & Mode</h3>
            <ul className="space-y-3 text-boulder">
              <li className="flex items-start gap-3">
                <i className="fas fa-clock text-primary-accent mt-1"></i>
                <span>Flexible: 1 / 3 / 6 Months</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-chalkboard-teacher text-primary-accent mt-1"></i>
                <span>Classroom & practical office training</span>
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
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Apply for C-PAT</h3>
              <p className="text-lg max-w-2xl">Get the most practical accounting & GST course in Kozhikode and become job-ready.</p>
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

export default CourseCPATPage;

