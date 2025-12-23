import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PeopleCulture from '../sections/PeopleCulture';
import JobOpenings from '../sections/JobOpenings';
import InternshipForm from '../sections/InternshipForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CareersPage = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    window.scrollTo(0, 0);
    
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
      <InternshipForm />
      <JobOpenings />
    </main>
  );
};

export default CareersPage;