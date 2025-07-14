import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import PeopleCulture from '../sections/PeopleCulture';
import JobOpenings from '../sections/JobOpenings';
import Blog from '../sections/Blog';
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
      <PeopleCulture />
      {/* <JobOpenings /> */}
      <Blog />
      <Contact />
    </main>
  );
};

export default Home;