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
          Internship Application
      ========================== */}
      <section data-aos="fade-up" data-aos-delay="50">
        <InternshipForm />
      </section>

      {/* =========================
          Job Openings
      ========================== */}
      <section
        id="job-openings"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <JobOpenings />
      </section>

      {/* =========================
          People & Culture
      ========================== */}
      <section data-aos="fade-up" data-aos-delay="150">
        <PeopleCulture />
      </section>
    </main>
  );
};

export default CareersPage;
