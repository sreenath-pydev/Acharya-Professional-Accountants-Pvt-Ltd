import { Link } from 'react-router-dom';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const TaxCalculatorTeaser = () => {
    return (
        <section className="relative z-10 py-16 bg-gradient-to-r from-secondary-dark/45 to-dark-bg/25 backdrop-blur-md border-y border-primary-accent/10">
            <div className="container mx-auto px-4 md:px-20" data-aos="fade-up">
                <div className="bg-primary-accent/5 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary-accent/20">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-accent/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary-accent/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="md:w-2/3">
                            <p className="text-primary-accent uppercase tracking-widest text-xs font-bold mb-3">
                                New Feature
                            </p>
                            <h2 className="font-montserrat text-2xl md:text-4xl font-bold mb-4 text-white">
                                Plan Your Taxes in Minutes – FY 2025-26
                            </h2>
                            <p className="text-boulder text-lg max-w-2xl">
                                Confused between the Old and New Regime? Use our free, advanced tax calculator to estimate your liability and optimize savings instantly.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center md:justify-end">
                            <Link
                                to="/calculator"
                                className="group relative inline-flex items-center gap-3 bg-primary-accent text-dark-bg font-semibold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-[0_10px_20px_rgba(229,161,69,0.2)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
                            >
                                <span>Open Tax Calculator</span>
                                <DynamicFaIcon name="fa-arrow-right" className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxCalculatorTeaser;
