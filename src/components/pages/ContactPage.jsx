import { useEffect } from 'react';
import AOS from 'aos';
import Contact from '../sections/Contact';
import SEO from '../common/SEO';

const ContactPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Contact Us | Acharya Professional Accountants"
        description="Get in touch with Acharya Professional Accountants in Calicut for expert CA services, tax consulting, and business support."
        canonical="https://acharyaprofessionalaccountants.in/contact"
      />
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14" data-aos="fade-up">
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Contact</p>
        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
          Get in touch with Acharya
        </h1>
        <p className="text-lg text-boulder max-w-3xl">
          Reach out for course enquiries, corporate compliance services, or partnership
          opportunities. We typically respond within one business day.
        </p>
      </section>

      <Contact />
    </main>
  );
};

export default ContactPage;

