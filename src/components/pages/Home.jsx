import { useEffect } from 'react';
import AOS from 'aos';
import { setCanonical } from '../../utils/seo';

import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import TaxCalculatorTeaser from '../sections/TaxCalculatorTeaser';
import CoursesTeaser from '../sections/CoursesTeaser';
import CareersTeaser from '../sections/CareersTeaser';
import FAQ from '../sections/FAQ';
import PeopleCulture from '../sections/PeopleCulture';
// import JobOpenings from '../sections/JobOpenings';
import Contact from '../sections/Contact';

const Home = () => {
  useEffect(() => {
    /* =========================
       SEO: Title & Description
    ========================== */
    document.title =
      'CA Firm in Kozhikode | Acharya Professional Accountants';

    const metaDescription = document.querySelector(
      "meta[name='description']"
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Trusted chartered accountant firm in Kozhikode offers tax, audit, GST, & registration services nationwide, helping businesses stay compliant & grow.'
      );
    }

    /* =========================
       SEO: Canonical URL
    ========================== */
    setCanonical('https://acharyaprofessionalaccountants.in/');

    /* =========================
       AOS & Scroll
    ========================== */
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <TaxCalculatorTeaser />
      <CoursesTeaser />
      <CareersTeaser />
      <FAQ />
      <PeopleCulture />
      {/* <JobOpenings /> */}
      <Contact />
    </main>
  );
};

export default Home;
