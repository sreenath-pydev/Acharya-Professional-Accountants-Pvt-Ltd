import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import career from '../sections/careers';
import JobOpenings from '../sections/JobOpenings';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AOS from 'aos';

const CareersPage = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
    
    // Check if we need to scroll to job openings
    if (location.state?.scrollToJobOpenings) {
      setTimeout(() => {
        const jobOpeningsSection = document.getElementById('job-openings');
        if (jobOpeningsSection) {
          jobOpeningsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <main className="font-inter text-white bg-dark-bg">
      <Header />
      <career />
      <JobOpenings />
      
    </main>
  );
};

export default CareersPage;