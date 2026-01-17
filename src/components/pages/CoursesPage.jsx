import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';

const CoursesPage = () => {
  useEffect(() => {
    /* =========================
       AOS & Scroll
    ========================== */
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const courses = [
    {
      name: 'C-PAT – Certified Professional Accounting Training',
      value: 'Hands-on accounting & GST training that makes you job-ready.',
      outcome: 'Step into roles like Junior Accountant or GST Executive.',
      link: '/courses/c-pat',
    },
    {
      name: 'C-PRO – Corporate Professional Readiness Program',
      value: 'Data-driven corporate reporting program for analyst and Big 4-style work.',
      outcome: 'Move toward MIS Executive or corporate finance analyst roles.',
      link: '/courses/c-pro',
    },
    {
      name: 'GLOBAL - PRO – International Career Readiness Program',
      value: 'UAE / GCC-focused international accounting, MIS, and career readiness.',
      outcome: 'Prepare for overseas accounting, MIS, VAT, and reporting roles.',
      link: '/courses/globalpro',
    },
  ];

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Accounting & Finance Internship in Kerala | Acharya"
        description="Join job-oriented Accounting & Finance courses in Kerala with internships for BCom, CMA, & ACCA students. Gain real practical experience in Kozhikode."
        keywords="accounting courses in calicut, accounting institutes in calicut, accounting courses in kerala, best accounting institute in calicut, accountant course in kerala, accountant internship kerala, finance internship kozhikode, CMA practical training, ACCA work experience"
        canonical="https://acharyaprofessionalaccountants.in/courses"
      />
      {/* =========================
          Page Intro
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-12 md:mb-16"
        data-aos="fade-up"
      >
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
          Courses
        </p>

        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
          Accounting & Finance Internship in Kerala | Acharya
        </h1>

        <p className="text-lg text-boulder max-w-3xl leading-relaxed">
          Acharya Professional Accountants offers practical accounting training
          in Kozhikode that bridges college learning with real corporate work.
          As a GST course Kerala learners trust, each program blends classroom
          clarity, GST and finance workflows, and career-style practice to make
          you career ready.
        </p>
      </section>

      {/* =========================
          Internship Section (Degree/PG)
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-16 md:mb-20"
        data-aos="fade-up"
        data-aos-delay="25"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Side */}
          <div className="lg:w-1/2">
            <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
              Internship Program
            </p>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Accounting & Finance Internship for Degree & Post-Graduation Students
            </h2>
            <p className="text-lg text-boulder mb-6 leading-relaxed">
              At Acharya Professional Accountants, we provide a job-oriented
              accounting and finance internship designed for degree and
              post-graduation students (BCom, BBA, BSc Finance, MBA, MCom) who
              want practical exposure, real office experience, and confidence to
              start their careers.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-secondary-dark border border-primary-accent/20 rounded-xl p-5">
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <i className="fas fa-briefcase text-primary-accent"></i>
                  What You Will Learn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    'Accounting & Bookkeeping',
                    'GST Filing & Compliance',
                    'Income Tax & TDS',
                    'Audit & Compliance Support',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-boulder text-sm">
                      <i className="fas fa-check text-primary-accent mt-1 text-xs"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div>
                    <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Duration</p>
                    <p>1 - 3 Months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                    <i className="fas fa-laptop-house"></i>
                  </div>
                  <div>
                    <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Mode</p>
                    <p>Onsite & Hybrid</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Benefit</p>
                    <p>Certificate & Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20am%20interested%20in%20the%20Accounting%20Internship"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-primary-accent text-dark-bg font-semibold px-8 py-3 rounded-full hover:bg-korma transition-all duration-300 shadow-lg shadow-primary-accent/25"
              >
                Apply for Internship
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-accent/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
            <img
              src="/images/internship_office.webp"
              alt="Students working in a modern accounting office during internship"
              className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
              <p className="text-white text-sm font-medium text-center">
                "Gain real work experience on live business cases under professional guidance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Internship Section (CMA/ACCA)
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-16 md:mb-24"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Content Side */}
          <div className="lg:w-1/2">
            <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
              Specialized Internship
            </p>
            <h2 className="font-montserrat text-3xl md:text-3xl font-bold mb-5 leading-tight">
              Finance Internship for CMA US, CMA India & ACCA Students
            </h2>
            <p className="text-lg text-boulder mb-6 leading-relaxed">
              Designed for CMA and ACCA students, this internship bridges the gap
              between professional qualifications and industry reality. Gain confidence
              to work in corporate finance, audit firms, and GST consulting practices.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-secondary-dark border border-primary-accent/20 rounded-xl p-5">
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <i className="fas fa-chart-line text-primary-accent"></i>
                  Technical Exposure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    'GST & Tax Compliance',
                    'Financial Reporting',
                    'Audit Procedures',
                    'Corporate Finance Basics',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-boulder text-sm">
                      <i className="fas fa-check text-primary-accent mt-1 text-xs"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Timing</p>
                    <p>Flexible Schedule</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div>
                    <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Proof</p>
                    <p>Work Experience Letter</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20am%20a%20CMA/ACCA%20student%20interested%20in%20work%20experience"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-white text-dark-bg font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
              >
                Join for Work Experience
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-bl from-primary-accent/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
            <img
              src="/images/finance_internship_cma_acca.webp"
              alt="Finance professionals and interns discussing financial reports"
              className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute top-6 right-6 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-user-graduate text-primary-accent text-xl"></i>
                <p className="text-white text-sm font-bold">Career & Exam Friendly</p>
              </div>
              <p className="text-boulder text-xs">
                "Work on real client files without disturbing your exam preparation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Courses Grid
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-14 md:mb-16"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="space-y-3">
                <h3 className="font-montserrat text-xl font-semibold text-white">
                  {course.name}
                </h3>
                <p className="text-boulder">{course.value}</p>
                <p className="text-primary-accent text-sm font-semibold uppercase tracking-wide">
                  {course.outcome}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to={course.link}
                  className="inline-flex items-center justify-center w-full bg-primary-accent text-dark-bg font-semibold px-4 py-3 rounded-full hover:bg-korma transition-all duration-300 group"
                >
                  <span>View Course Details</span>
                  <i className="fas fa-arrow-right text-sm ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          Free Guideline Section
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
        data-aos="fade-up"
        data-aos-delay="25"
      >
        <div className="bg-secondary-dark/70 border border-primary-accent/20 rounded-3xl p-8 md:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
          <p className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold mb-2">
            Free Guideline
          </p>

          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-3 text-white">
            Free Course Selection & Accounting Career Guideline
          </h2>

          <p className="text-boulder mb-5 max-w-3xl">
            Confused about which accounting or finance course to choose? Get a
            clear, practical guideline before you decide—covering what employers
            expect, how to plan India and GCC paths, and how finance courses with
            career exposure can help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-boulder">
            {[
              'Which course fits your background (Commerce / Finance / Freshers)',
              'Practical skills required for accounting, GST & corporate roles',
              'Difference between accounting, MIS, analyst & audit paths',
              'Career roadmap for India & GCC opportunities',
              'Common mistakes students make while choosing courses',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <i className="fas fa-check-circle text-primary-accent mt-1"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="https://wa.me/919446369434?text=Hi%20I%20want%20the%20free%20course%20selection%20guideline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-primary-accent text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-korma transition-all duration-300"
            >
              Get Free Guideline
            </a>

            <Link
              to="/contact"
              className="inline-flex justify-center items-center border border-primary-accent text-primary-accent font-semibold px-6 py-3 rounded-full hover:bg-primary-accent/10 transition-all duration-300"
            >
              Enquire Now
            </Link>
          </div>

          <p className="text-sm text-boulder">
            Prepared by practicing professionals at Acharya Professional
            Accountants—focused on practical accounting training, GST readiness,
            and real career clarity for accounting courses in Kozhikode.
          </p>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section
        className="container mx-auto px-4 md:px-20 pb-16 md:pb-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div>
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">
              Ready to Start?
            </h3>
            <p className="text-lg max-w-2xl">
              Apply now or enquire to choose the right program for your goals.
              Career guidance & counselling support available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/contact"
              className="flex-1 sm:flex-none inline-flex justify-center items-center bg-dark-bg text-primary-accent font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark transition-all duration-300"
            >
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="flex-1 sm:flex-none inline-flex justify-center items-center bg-white text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
