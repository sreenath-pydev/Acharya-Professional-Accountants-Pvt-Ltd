import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Internship from '../sections/Internship';
import Careers from '../sections/Careers';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import AOS from 'aos';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    AOS.refresh(); // 
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Internship />
      <Careers />
      <Blog />
      <Contact />
    </main>
  );
};

export default Home;