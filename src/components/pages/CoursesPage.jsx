import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

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
        title="Best Accounting & Finance Courses in Kozhikode | Acharya"
        description="Enroll in job-oriented accounting and finance courses in Kozhikode. Practical training in GST, Income Tax, Audit, and corporate reporting for rapid career growth."
        canonical="https://www.acharyaprofessionalaccountants.in/courses"
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
          Accounting & Finance Courses in Kerala | Acharya
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
                  <DynamicFaIcon name="fa-arrow-right" className="text-sm ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
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
