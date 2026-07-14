import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaStar, FaWhatsapp } from 'react-icons/fa';

const CoursesTeaser = () => {
    return (
        <section className="relative z-10 py-20 bg-transparent border-b border-primary-accent/10">
            <div className="container mx-auto px-4 md:px-20" data-aos="fade-up">
                <div className="text-center mb-12">
                    <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3 font-semibold">
                        Flagship Career Training
                    </p>
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-white">
                        Practical Accounting & GST Training
                    </h2>
                    <p className="text-boulder text-lg max-w-2xl mx-auto">
                        Bridge the gap between academic learning and corporate requirements with our professional certification program.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-secondary-dark/50 border border-primary-accent/15 rounded-3xl p-8 md:p-12 hover:border-primary-accent/30 transition-all duration-300 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-24 bg-primary-accent/5 rounded-full blur-2xl pointer-events-none"></div>
                        
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                            <div>
                                <span className="inline-flex items-center gap-1.5 bg-primary-accent/10 text-primary-accent font-extrabold uppercase tracking-wide text-xs px-3.5 py-1 rounded-full mb-3">
                                    <FaStar className="text-xs" /> FLAGSHIP PROGRAM
                                </span>
                                <h3 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white">
                                    C-PAT – Certified Professional Accounting Training
                                </h3>
                            </div>
                            <div className="bg-dark-bg/60 border border-primary-accent/20 rounded-full px-5 py-2.5 text-center flex-shrink-0 backdrop-blur shadow">
                                <span className="text-primary-accent font-extrabold text-xl">₹20,000 Only</span>
                            </div>
                        </div>

                        <p className="text-boulder mb-8 text-sm md:text-base leading-relaxed">
                            Hands-on accounting & GST training that makes you job-ready. Learn how accounting, GST, taxation, and audit actually run inside professional offices, followed by a 2-month internship.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm text-boulder">
                            <div className="flex items-center gap-2.5">
                                <FaCheckCircle className="text-primary-accent" />
                                <span>4 Months Training + 2 Months Free Internship</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FaCheckCircle className="text-primary-accent" />
                                <span>Tally Prime, Excel, Winman GST & IT</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FaCheckCircle className="text-primary-accent" />
                                <span>Practical Experience with Real Company Data</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FaCheckCircle className="text-primary-accent" />
                                <span>3 Industry Recognized Certificates Included</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <Link
                                to="/courses"
                                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary-accent text-dark-bg font-extrabold px-8 py-3.5 rounded-full hover:bg-korma transition-all duration-300 shadow-lg shadow-primary-accent/20"
                            >
                                <span>View Course Details</span>
                                <FaArrowRight />
                            </Link>

                            <a
                                href="https://wa.me/919562069434?text=Hi%20Acharya,%20I%20am%20interested%20in%20the%20C-PAT%20course."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/5 transition-all duration-300"
                            >
                                <FaWhatsapp className="text-lg text-[#25d366]" />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesTeaser;
