import { Link } from 'react-router-dom';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const CareersTeaser = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-secondary-dark to-dark-bg border-b border-primary-accent/10">
            <div className="container mx-auto px-4 md:px-20" data-aos="fade-up">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary-accent/10 group">
                            <div className="absolute inset-0 bg-primary-accent/20 mix-blend-overlay z-10"></div>
                            <img
                                src="/images/careers.webp" // Updated image path
                                alt="Careers at Acharya"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1522201876988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop'; // Fallback
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent z-20"></div>
                            <div className="absolute bottom-6 left-6 right-6 z-30">
                                <div className="bg-dark-bg/80 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <p className="text-primary-accent font-semibold mb-1">Internship Program</p>
                                    <p className="text-white text-xs opacity-80">Gain real-world experience with our structured training.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3 font-semibold">
                            Work With Us
                        </p>
                        <h2 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 text-white">
                            Build Your Career with Acharya
                        </h2>
                        <p className="text-boulder text-lg mb-8 leading-relaxed">
                            We are always striving to build a team that is passionate about finance and accounting. whether you are a student looking for an internship or a professional seeking growth, we have a place for you.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-4 bg-secondary-dark/50 p-4 rounded-xl border border-primary-accent/5">
                                <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                    <DynamicFaIcon name="fa-graduation-cap" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Internships</h4>
                                    <p className="text-xs text-boulder">Students & Freshers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-secondary-dark/50 p-4 rounded-xl border border-primary-accent/5">
                                <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                    <DynamicFaIcon name="fa-briefcase" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Job Openings</h4>
                                    <p className="text-xs text-boulder">Experienced Hire</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/careers"
                            className="inline-flex items-center gap-2 bg-primary-accent text-dark-bg font-semibold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-[0_10px_20px_rgba(229,161,69,0.2)]"
                        >
                            <span>Explore Opportunities</span>
                            <DynamicFaIcon name="fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersTeaser;
