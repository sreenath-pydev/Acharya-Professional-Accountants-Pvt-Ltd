import { useEffect } from 'react';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Link } from 'react-router-dom';
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
        title="About Acharya Professional Accountants | CA Firm in India"
        description="Know Acharya Professional Accountants' story, mission, and values, a client-focused CA firm committed to ethical, transparent guidance for Indian taxpayers."
        canonical="https://www.acharyaprofessionalaccountants.in/about"
        robots="index, follow"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "Acharya Professional Accountants Pvt Ltd",
            "url": "https://www.acharyaprofessionalaccountants.in",
            "logo": "https://www.acharyaprofessionalaccountants.in/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Helmet>

      <section
        className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
        data-aos="fade-up"
      >
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
          About
        </p>

        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
          About Acharya Professional Accountants
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-primary-accent">Trusted CA Firm in India</h2>

        <p className="text-lg text-boulder max-w-3xl">
          Acharya Professional Accountants is a leading firm providing expert financial solutions.
          Our services include <Link to="/services/gst-filing" className="text-primary-accent hover:underline">GST Filing</Link>,
          <Link to="/services/income-tax" className="text-primary-accent hover:underline"> Income Tax Services</Link>,
          <Link to="/services/company-registration" className="text-primary-accent hover:underline"> Company Registration</Link>,
          and professional <Link to="/services/audit" className="text-primary-accent hover:underline">Audit Services</Link>.
          If you need expert financial guidance, <Link to="/contact" className="text-primary-accent hover:underline">Contact Us</Link> today.
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
