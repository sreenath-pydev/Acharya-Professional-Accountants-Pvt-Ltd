import { useEffect } from 'react';
import AOS from 'aos';
import Internship from '../sections/Internship';

import Header from '../common/Header';


const InternshipPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    AOS.refresh();
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg">
      <Header />
      <Internship />
      
    
    </main>
  );
};

export default InternshipPage;