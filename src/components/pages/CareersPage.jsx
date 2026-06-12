import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEO from '../common/SEO';

import InternshipForm from '../sections/InternshipForm';
import JobOpenings from '../sections/JobOpenings';
import PeopleCulture from '../sections/PeopleCulture';

const CareersPage = () => {
  const location = useLocation();

  useEffect(() => {
    /* =========================
       AOS Init
    ========================== */
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    /* =========================
       Scroll Handling
    ========================== */
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (location.state?.scrollToJobOpenings) {
      setTimeout(() => {
        const jobOpeningsSection =
          document.getElementById('job-openings');
        if (jobOpeningsSection) {
          jobOpeningsSection.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 200);
    }
  }, [location.state]);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Careers & Internships at Acharya Professional Accountants"
        description="Explore accounting careers and internships in Kerala with Acharya. Join our expert team and grow your accounting and finance career with us."
        canonical="https://www.acharyaprofessionalaccountants.in/careers"
      />
      {/* =========================
          Page Intro
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-12 md:mb-16"
        data-aos="fade-up"
      >
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
          Careers
        </p>

        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
          Accounting Internships & Career Opportunities in Kozhikode
        </h1>

        <p className="text-lg text-boulder max-w-3xl">
          Acharya Professional Accountants provides structured internship and
          career opportunities for students and professionals seeking real-world
          exposure in accounting, GST, audit, and finance—guided by experienced
          practitioners.
        </p>
      </section>

      {/* =========================
          Trust Badges Section
      ========================== */}
      <section className="py-16 bg-secondary-dark/30 border-y border-white/5" data-aos="fade-up" data-aos-delay="50">
        <div className="container mx-auto px-5 md:px-12 lg:px-20">
          
          {/* Main Success Stats Card */}
          <div className="bg-secondary-dark border border-primary-accent/15 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-2xl mb-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.3),transparent_50%)]" />
            <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Trusted by Students Across Kerala
            </span>
            <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
              1,800+ Students
            </span>
            <span className="text-white text-lg md:text-xl font-semibold mt-3 block">
              Successfully Completed Their FYUGP Internship (2025–26)
            </span>
            <div className="w-16 h-[2px] bg-primary-accent my-4 mx-auto" />
            <p className="text-boulder text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Acharya Professional Accountants is proud to have successfully guided and trained more than 1,800+ students through their FYUGP (Four-Year Undergraduate Programme) Internship during the academic year 2025–26.
            </p>
          </div>

          {/* Practical Exposure Points */}
          <div className="mb-12">
            <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white mb-6">
              Through our structured internship programs, students gained practical exposure in:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Accounting and Bookkeeping",
                "GST and Taxation Basics",
                "Finance and Business Operations",
                "Audit Support Activities",
                "Professional Documentation",
                "Workplace Ethics and Compliance"
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary-dark border border-white/5 rounded-full px-6 py-3.5 flex items-center gap-3 text-white text-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent text-xs flex-shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Students Choose Us Card */}
          <div className="bg-secondary-dark/50 border border-white/5 rounded-3xl p-8 md:p-10">
            <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white mb-6">
              Why Students Choose Acharya Professional Accountants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "1,800+ FYUGP Internships Completed (2025–26)" },
                { label: "Structured Learning Framework" },
                { label: "Practical Industry Exposure" },
                { label: "Experienced Professional Mentors" },
                { label: "Internship Certificate & Work Experience Documentation" },
                { label: "Career-Oriented Training Environment" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-boulder text-sm">
                  <span className="text-primary-accent text-lg flex-shrink-0">✅</span>
                  <span className="text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Bridging statement */}
            <div className="border-t border-white/5 pt-6 mt-8 text-center text-boulder text-sm max-w-4xl mx-auto leading-relaxed">
              Our internship model focuses on bridging the gap between academic learning and industry requirements, helping students develop practical skills, professional confidence, and career readiness. <strong className="text-gray-200 font-semibold">With over 1,800 successful FYUGP internship completions, Acharya Professional Accountants continues to support students across Kerala in building strong foundations for careers in accounting, finance, taxation, auditing, and corporate compliance.</strong>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          Internship Application
      ========================== */}
      <section data-aos="fade-up" data-aos-delay="100">
        <InternshipForm />
      </section>

      {/* =========================
          Job Openings
      ========================== */}
      <section
        id="job-openings"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <JobOpenings />
      </section>

      {/* =========================
          People & Culture
      ========================== */}
      <section data-aos="fade-up" data-aos-delay="200">
        <PeopleCulture />
      </section>
    </main>
  );
};

export default CareersPage;
