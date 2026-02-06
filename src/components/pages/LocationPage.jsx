import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import Services from '../sections/Services';
import { Link, useParams } from 'react-router-dom';
import { locationGroups } from '../../data/locationData';

const LocationPage = ({ citySlugOverride }) => {
    const params = useParams();
    const citySlug = citySlugOverride || params.citySlug;

    // Helper to format slug to Title Case (e.g., 'kochi' -> 'Kochi', 'new-delhi' -> 'New Delhi')
    const formatCityName = (slug) => {
        if (!slug) return 'Kozhikode'; // Default fallback
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const locationName = formatCityName(citySlug);

    useEffect(() => {
        /* =========================
           AOS & Scroll
        ========================== */
        // Delay AOS refresh to ensure DOM is fully ready
        setTimeout(() => {
            AOS.refresh();
        }, 100);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [locationName, citySlug]);

    return (
        <main key={citySlug} className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            <SEO
                title={`Accounting Services in ${locationName} | CA Firm & Tax Consultants`}
                description={`Top CA Firm in ${locationName} offering expert Accounting, GST Registration, Income Tax Filing, and Audit services. Trusted by local businesses in ${locationName} for financial growth.`}
                canonical={`https://www.acharyaprofessionalaccountants.in/accounting-service-in-${citySlug || 'kozhikode'}`}
            />
            {/* =========================
          Page Intro
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
                data-aos="fade-up"
            >
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-3/5">
                        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                            Location: {locationName}
                        </p>

                        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4">
                            Expert CA & Accounting Services in {locationName}
                        </h1>

                        <p className="text-lg text-boulder max-w-3xl mb-6">
                            Acharya Professional Accountants brings world-class financial expertise directly to {locationName}.
                            From GST filing and income tax returns to comprehensive business auditing and advisory,
                            we help businesses in {locationName} grow with confidence and compliance.
                        </p>

                        {/* Local SEO Text Block */}
                        <div className="bg-secondary-dark/30 border border-primary-accent/10 rounded-xl p-6 mb-6 text-sm text-boulder leading-relaxed">
                            <p className="mb-2">
                                We understand the unique business landscape of <strong>{locationName}</strong>. Whether you are a startup looking for company registration in {locationName} or an established firm needing complex audit support, our team provides tailored solutions right here in your city.
                            </p>
                            <p>
                                Partner with the most trusted accounting firm serving <strong>{locationName}</strong> and nearby regions to ensure your business remains 100% compliant with Indian tax laws.
                            </p>
                        </div>


                        <div className="mt-6">
                            <Link to="/contact" className="inline-block bg-primary-accent hover:bg-primary-accent/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary-accent/20">
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>
                    {/* Image Placeholder - Dynamic ALT Text */}
                    <div className="w-full md:w-2/5">
                        <div className="rounded-2xl overflow-hidden border border-primary-accent/20 shadow-2xl relative group">
                            <div className="absolute inset-0 bg-primary-accent/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            {/* Ideally replace this src with a dynamic map or city image if available, else a generic office image */}
                            <img
                                src="/images/internship_office.webp"
                                alt={`Accounting and CA Services office in ${locationName}`}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
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
                <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6 hover:border-primary-accent/40 transition-colors duration-300">
                    <h2 className="font-montserrat text-xl font-semibold mb-3 text-white">
                        Local {locationName} Expertise
                    </h2>
                    <p className="text-boulder text-sm md:text-base">
                        Detailed understanding of the local business environment in {locationName}, ensuring relevant and timely financial advice for local market conditions.
                    </p>
                </div>

                <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6 hover:border-primary-accent/40 transition-colors duration-300">
                    <h2 className="font-montserrat text-xl font-semibold mb-3 text-white">
                        Digital-First Approach
                    </h2>
                    <p className="text-boulder text-sm md:text-base">
                        Modern tools and cloud-based accounting that keep you connected to your finances, no matter where you are in {locationName} or travelling.
                    </p>
                </div>

                <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6 hover:border-primary-accent/40 transition-colors duration-300">
                    <h2 className="font-montserrat text-xl font-semibold mb-3 text-white">
                        Comprehensive Growth Support
                    </h2>
                    <p className="text-boulder text-sm md:text-base">
                        Beyond just filing taxes in {locationName}, we partner with you to structure your business for long-term growth and stability.
                    </p>
                </div>
            </section>

            {/* =========================
          Services List (Reused)
      ========================== */}
            <div className="container mx-auto px-4 md:px-20 mb-8">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-center">
                    Top Accounting Services in {locationName}
                </h2>
                <p className="text-center text-boulder max-w-2xl mx-auto mb-10">
                    We offer a complete suite of financial services customized for {locationName} based businesses.
                </p>
            </div>
            <Services />

            {/* =========================
          Major Locations (Links)
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-12 md:mb-16"
                data-aos="fade-up"
            >
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center pt-10 border-t border-white/5">
                    Other Locations We Serve
                </h2>

                <div className="space-y-8">
                    {locationGroups.map((group, index) => (
                        <div key={index} className="bg-secondary-dark/50 rounded-2xl p-6">
                            <h3 className="text-primary-accent font-semibold text-lg mb-4 pb-2 text-center">
                                {group.region}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {group.cities.map((city) => {
                                    // Generate slug: trim whitespace, lowercase, replace spaces with hyphens
                                    const slug = city.trim().toLowerCase().replace(/\s+/g, '-');
                                    return (
                                        <Link
                                            key={city}
                                            to={`/accounting-service-in-${slug}`}
                                            className="inline-block bg-white/5 hover:bg-primary-accent hover:text-dark-bg text-boulder hover:text-white text-sm px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border border-white/5 hover:border-transparent"
                                        >
                                            {city}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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
                    Book a consultation with our experts today and discover how we can simplify your financial management in {locationName}.
                </p>
                <Link to="/contact" className="inline-block border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                    Contact Us Today
                </Link>
            </section>
        </main>
    );
};

export default LocationPage;
