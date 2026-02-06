import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';

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
  // SEO handled by component


  useEffect(() => {
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <SEO
        title="Accounting and Tax Consulting Services in India | Acharya"
        description="Acharya Professional Accountants is a trusted CA firm offering expert tax consulting, GST filing, auditing, and business registration services across India."
        canonical="https://www.acharyaprofessionalaccountants.in/"
      />

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
