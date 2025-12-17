import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import VincumTaxCalculator from '../sections/VincumTaxCalculator';
import FAQ from '../sections/FAQ';
import PeopleCulture from '../sections/PeopleCulture';
import JobOpenings from '../sections/JobOpenings';
import Contact from '../sections/Contact';
import AOS from 'aos';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <VincumTaxCalculator />
      <FAQ />
      <PeopleCulture />
      {/* <JobOpenings /> */}
      <Contact />
    </main>
  );
};

export default Home;