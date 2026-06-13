import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import LocationServices from '../sections/LocationServices';
import { Link, useParams } from 'react-router-dom';
import { locationGroups, cityContent } from '../../data/locationData';
import { IconCheck } from '../common/Icons';

const LocationPage = ({ citySlugOverride }) => {
    const params = useParams();
    const citySlug = citySlugOverride || params.citySlug;

    // key might need normalization if URL slug differs from data key
    // In our data, keys are like 'kozhikode', 'bengaluru'. 
    // The slug coming in is already normalized by DynamicPageHandler presumably, 
    // but let's be safe.
    const normalizedSlug = citySlug ? citySlug.toLowerCase() : 'kozhikode';

    const cityData = cityContent[normalizedSlug];

    useEffect(() => {
        /* =========================
           AOS & Scroll
        ========================== */
        setTimeout(() => {
            AOS.refresh();
        }, 100);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [citySlug]);

    // Fallback if city data not found (shouldn't happen with correct routing)
    if (!cityData) {
        return (
            <div className="min-h-screen pt-32 text-center text-white bg-dark-bg">
                <h1 className="text-3xl font-bold">Location Not Found</h1>
                <p className="mt-4">We are expanding our services. Please contact us for support.</p>
                <Link to="/contact" className="inline-block mt-6 bg-primary-accent px-6 py-2 rounded-full text-white">Contact Us</Link>
            </div>
        );
    }

    return (
        <main key={citySlug} className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            <SEO
                title={cityData.metaTitle}
                description={cityData.metaDescription}
                canonical={`https://www.acharyaprofessionalaccountants.in/accounting-service-in-${cityData.slug}`}
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
                            Location: {cityData.name}
                        </p>

                        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {cityData.introTitle}
                        </h1>

                        <div className="text-lg text-boulder max-w-3xl mb-8 space-y-4">
                            {cityData.introText.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-primary-accent hover:bg-primary-accent/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary-accent/20">
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          Services List (City Specific)
      ========================== */}
            <LocationServices services={cityData.services} cityName={cityData.name} />

            {/* =========================
          Why Local Businesses Choose Us
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-16 py-10"
                data-aos="fade-up"
                data-aos-delay="50"
            >
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-10 text-center">
                    Why Choose Acharya in {cityData.name}?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cityData.whyChooseUs.map((item, index) => (
                        <div key={index} className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/40 transition-colors duration-300">
                            <h3 className="font-montserrat text-lg font-semibold mb-2 text-white flex items-center gap-2">
                                <IconCheck className="text-primary-accent w-5 h-5" />
                                {item.title}
                            </h3>
                            <p className="text-boulder text-sm leading-relaxed pl-7">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================
          Areas Served
      ========================== */}
            {cityData.areasServed && cityData.areasServed.length > 0 && (
                <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
                    <div className="bg-secondary-dark/30 border border-white/5 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="font-montserrat text-2xl font-bold mb-6 text-white">
                            Areas We Serve in {cityData.name}
                        </h2>
                        <p className="text-boulder mb-8 max-w-2xl mx-auto">
                            Our {cityData.name} team provides dedicated support to businesses and professionals across these key locations:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {cityData.areasServed.map((area, idx) => (
                                <span key={idx} className="bg-dark-bg text-gray-300 px-4 py-2 rounded-lg text-sm border border-white/10 hover:border-primary-accent/50 transition-colors cursor-default">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {locationGroups.map((group, index) => (
                        <div key={index} className="bg-secondary-dark/50 rounded-2xl p-6">
                            <h3 className="text-primary-accent font-semibold text-lg mb-4 pb-2 border-b border-white/5">
                                {group.region}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.cities.map((city) => {
                                    // Generate slug: trim whitespace, lowercase, replace spaces with hyphens
                                    // Special handling for cities with brackets/commas if needed, 
                                    // but we know our map keys are simple.
                                    // We'll map the Display Name (e.g. "Kochi") to the slug key if needed, or 
                                    // just rely on our simple slugify logic if it matches.
                                    // For safety, let's look for mapping or just simple slugify.
                                    // "Delhi (NCR)" -> "delhi-ncr" -> wait, our key is "delhi". 
                                    // The user provided list logic in locationData.js is helpful. 
                                    // Ideally locationData.js groups should use the KEYS or SLUGS directly?
                                    // Current locationGroups uses DISPLAY NAMES. 
                                    // Let's adjust slug logic slightly for known edge cases.

                                    let slug = city.toLowerCase();
                                    if (city.includes('Delhi')) slug = 'delhi';
                                    else if (city.includes('Kochi')) slug = 'kochi';
                                    else if (city.includes('Bengaluru')) slug = 'bangalore';
                                    else if (city.includes('Mangaluru')) slug = 'mangaluru';

                                    else slug = city.trim().toLowerCase().replace(/\s+/g, '-');

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
                    Ready to streamline your accounting in {cityData.name}?
                </h2>
                <p className="text-boulder text-lg mb-8 max-w-2xl mx-auto">
                    Book a consultation with our experts today.
                </p>
                <Link to="/contact" className="inline-block border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                    Contact Us Today
                </Link>
            </section>
        </main>
    );
};

export default LocationPage;
