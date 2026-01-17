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
        title="CA Firm in Kozhikode | Acharya Professional Accountants"
        description="Trusted chartered accountant firm in Kozhikode offers tax, audit, GST, & registration services nationwide, helping businesses stay compliant & grow."
        keywords="best ca firms in calicut, ca firm in calicut, chartered accountants in calicut, tax consultants in kozhikode"
        canonical="https://acharyaprofessionalaccountants.in/"
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
