import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';

import WhoWeAre from '../sections/WhoWeAre';
import MissionValues from '../sections/MissionValues';
import OurExpertise from '../sections/OurExpertise';
import OurJourney from '../sections/OurJourney';
import OurFounder from '../sections/OurFounder';
import PeopleCulture from '../sections/PeopleCulture';

const AboutPage = () => {
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

    window.scrollTo({ top: 0, behavior: 'smooth' });

    /* =========================
       Smooth scroll for anchors
    ========================== */
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      AOS.refresh();
    };
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-32 md:pt-36 scroll-smooth">
      <SEO
        title="About Acharya | Professional Accounting & Tax Experts"
        description="Acharya is a professional CA firm that provides reliable accounting, tax, and compliance solutions to businesses and individuals across India."
        canonical="https://acharyaprofessionalaccountants.in/about"
      />

      <section
        className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
        data-aos="fade-up"
      >
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
          About
        </p>

        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
          Acharya Professional Accountants
        </h1>

        <p className="text-lg text-boulder max-w-3xl">
          Learn more about who we are, the values that drive us, and how we
          support businesses with trusted accounting expertise across every
          stage of growth.
        </p>
      </section>

      <WhoWeAre />
      <MissionValues />
      <OurExpertise />
      <OurJourney />
      <OurFounder />
      <PeopleCulture />
    </main>
  );
};

export default AboutPage;
