import React from 'react';
import { Link } from 'react-router-dom';

const TopCities = () => {
    const cities = [
        {
            name: "Kozhikode",
            desc: "Bookkeeping, reporting, and compliance support",
            slug: "kozhikode"
        },
        {
            name: "Kannur",
            desc: "Business accounting and tax support",
            slug: "kannur"
        },
        {
            name: "Malappuram",
            desc: "Structured accounting services for local businesses",
            slug: "malappuram"
        },
        {
            name: "Mangalore",
            desc: "Support for growing companies and professionals",
            slug: "mangaluru"
        },
        {
            name: "Bangalore",
            desc: "Accounting workflows and compliance assistance",
            slug: "bangalore"
        },
        {
            name: "Chennai",
            desc: "Reliable accounting and business support services",
            slug: "chennai"
        }
    ];

    return (
        <section className="relative z-10 py-20 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-5 md:px-20">
                <div 
                    className="bg-secondary-dark/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    data-aos="fade-up"
                >
                    {/* Decorative background glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mb-10">
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-white">
                            Top cities we serve
                        </h2>
                        <p className="text-boulder text-base md:text-lg">
                            Explore our accounting service pages by city.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {cities.map((city, index) => (
                            <Link
                                key={index}
                                to={`/accounting-service-in-${city.slug}`}
                                className="block bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 transition-all duration-300 group"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <h3 className="font-montserrat text-base md:text-lg font-bold text-white group-hover:text-primary-accent transition-colors">
                                    Accounting services in {city.name}
                                </h3>
                                <p className="text-boulder text-xs md:text-sm mt-2 font-normal leading-relaxed">
                                    {city.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCities;
