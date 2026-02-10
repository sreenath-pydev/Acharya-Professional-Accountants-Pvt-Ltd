import React from 'react';
import { IconCheck } from '../common/Icons';

const LocationServices = ({ services, cityName }) => {
    if (!services || services.length === 0) return null;

    return (
        <section className="py-16 bg-dark-bg">
            <div className="container mx-auto px-4 md:px-20">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-center text-white" data-aos="fade-up">
                    Our Accounting & CA Services in {cityName}
                </h2>
                <div className="w-24 h-1 bg-primary-accent mx-auto mb-12 rounded-full"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((serviceGroup, index) => (
                        <div
                            key={index}
                            className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/10"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <h3 className="font-montserrat text-xl font-semibold mb-4 text-primary-accent group-hover:text-white transition-colors">
                                {serviceGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {serviceGroup.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-boulder text-sm group-hover:text-gray-300 transition-colors">
                                        <span className="mt-1 flex-shrink-0 text-primary-accent">
                                            <IconCheck className="w-4 h-4" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationServices;
