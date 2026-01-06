import { useEffect } from 'react';
import AOS from 'aos';
import { setCanonical } from '../../utils/seo';
import Services from '../sections/Services';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LocationPage = ({ locationName, seoTitle, seoDescription, canonicalUrl }) => {
    useEffect(() => {
        /* =========================
           SEO: Title & Description
        ========================== */
        document.title = seoTitle || `CA Services in ${locationName} | Acharya Professional Accountants`;

        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                seoDescription || `Professional CA, Tax, and Accounting services for businesses in ${locationName}. Expert support for GST, Auditing, and Business Consulting.`
            );
        }

        /* =========================
           SEO: Canonical URL
        ========================== */
        if (canonicalUrl) {
            setCanonical(canonicalUrl);
        }

        /* =========================
           AOS & Scroll
        ========================== */
        AOS.refresh();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [locationName, seoTitle, seoDescription, canonicalUrl]);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            {/* =========================
          Page Intro
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
                data-aos="fade-up"
            >
                <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                    Location: {locationName}
                </p>

                <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
                    Expert CA & Accounting Services in {locationName}
                </h1>

                <p className="text-lg text-boulder max-w-3xl">
                    Acharya Professional Accountants brings world-class financial expertise directly to {locationName}.
                    From GST filing and income tax returns to comprehensive business auditing and advisory,
                    we help businesses in {locationName} grow with confidence and compliance.
                </p>

                <div className="mt-8">
                    <Link to="/contact" className="inline-block bg-primary-accent hover:bg-primary-accent/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                        Get a Free Consultation
                    </Link>
                </div>
            </section>

            {/* =========================
          Why Local Businesses Choose Us
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                data-aos="fade-up"
                data-aos-delay="50"
            >
                <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
                    <h2 className="font-montserrat text-xl font-semibold mb-3">
                        Local Expertise
                    </h2>
                    <p className="text-boulder text-sm md:text-base">
                        Detailed understanding of the local business environment in {locationName}, ensuring relevant and timely financial advice.
                    </p>
                </div>

                <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
                    <h2 className="font-montserrat text-xl font-semibold mb-3">
                        Digital-First Approach
                    </h2>
                    <p className="text-boulder text-sm md:text-base">
                        Modern tools and cloud-based accounting that keep you connected to your finances, no matter where you are in {locationName}.
                    </p>
                </div>

                <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6">
                    <h2 className="font-montserrat text-xl font-semibold mb-3">
                        Comprehensive Growth Support
                    </h2>
                    <p className="text-boulder text-sm md:text-base">
                        Beyond just filing taxes, we partner with you to structure your business for long-term growth and stability.
                    </p>
                </div>
            </section>

            {/* =========================
          Services List (Reused)
      ========================== */}
            <div className="container mx-auto px-4 md:px-20 mb-8">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">
                    Our Services in {locationName}
                </h2>
            </div>
            <Services />

            {/* =========================
          CTA / Conclusion
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 py-16 text-center"
                data-aos="fade-up"
            >
                <h2 className="font-montserrat text-2xl md:text-4xl font-bold mb-6">
                    Ready to streamline your accounting in {locationName}?
                </h2>
                <p className="text-boulder text-lg mb-8 max-w-2xl mx-auto">
                    Book a consultation with our experts today and discover how we can simplify your financial management.
                </p>
                <Link to="/contact" className="inline-block border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                    Contact Us Today
                </Link>
            </section>
        </main>
    );
};

LocationPage.propTypes = {
    locationName: PropTypes.string.isRequired,
    seoTitle: PropTypes.string,
    seoDescription: PropTypes.string,
    canonicalUrl: PropTypes.string,
};

export default LocationPage;
