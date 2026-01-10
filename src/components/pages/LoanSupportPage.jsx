import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { setCanonical } from '../../utils/seo';

const LoanSupportPage = () => {
    useEffect(() => {
        setCanonical('https://acharyaprofessionalaccountants.in/services/business-loans');
        AOS.refresh();
        window.scrollTo(0, 0);
        document.title = 'Business Loan Support & Project Reports | Acharya Professional Accountants';

        // Set meta description manually if not present in index.html or needs override
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'End-to-end business loan assistance: Eligibility checks, bank-approved project reports, and documentation support for Startups and MSMEs in Kerala.');
        }
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center" data-aos="fade-up">
                <div>
                    <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Loan Support</p>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Business Loans & <br className="hidden md:block" />
                        <span className="text-primary-accent">Project Report Support</span>
                    </h1>
                    <p className="text-lg text-boulder mb-8 max-w-2xl">
                        From eligibility checks to bank approval—we help Startups, MSMEs, and Professionals secure loans with proper documentation and bank-ready project reports.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/919446369434?text=Hi%2C%20I%20need%20a%20Loan%20Eligibility%20Check"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center bg-primary-accent text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-[0_4px_14px_rgba(229,161,69,0.3)]"
                        >
                            <i className="fab fa-whatsapp mr-2"></i> Free Eligibility Check
                        </a>
                        <a
                            href="#project-reports"
                            className="inline-flex justify-center items-center bg-transparent border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Get Project Report Sample
                        </a>
                    </div>
                </div>
                <div className="relative" data-aos="fade-left">
                    {/* Hero Image */}
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-primary-accent/20">
                        <img
                            src="/images/business_loan_hero.webp"
                            alt="Business Loan Consultation"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <p className="text-primary-accent font-bold text-sm mb-1"><i className="fas fa-check-circle mr-2"></i>Approved by Top Banks</p>
                            <p className="text-xs text-gray-300">We ensure your project report meets every compliance standard.</p>
                        </div>
                    </div>

                    {/* Decorative blurred background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary-accent/20 blur-[80px] -z-10 rounded-full"></div>
                </div>
            </section>

            {/* Loan Types Section */}
            <section className="bg-secondary-dark/50 py-16" data-aos="fade-up">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="text-center mb-12">
                        <h2 className="font-montserrat text-2xl md:text-4xl font-bold mb-4">Types of Business Loans We Support</h2>
                        <p className="text-boulder max-w-2xl mx-auto">We assist you in choosing the right loan instrument based on your business profile and financial needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'MSME / Small Business', icon: 'fa-store', desc: 'For retail, trading, and small manufacturing units.', slug: 'msme-loans' },
                            { title: 'Startup Loans', icon: 'fa-rocket', desc: 'Funding for new ventures with scalable business models.', slug: 'msme-loans' },
                            { title: 'MUDRA Loans', icon: 'fa-hand-holding-usd', desc: 'Shishu, Kishore, and Tarun schemes for micro-units.', slug: 'mudra-loans' },
                            { title: 'Working Capital', icon: 'fa-chart-line', desc: 'CC/OD limits to manage day-to-day operations.', slug: 'term-loans' },
                            { title: 'Term Loans', icon: 'fa-clock', desc: 'Long-term funding for expansion and assets.', slug: 'term-loans' },
                            { title: 'Professional Loans', icon: 'fa-user-md', desc: 'For Doctors, CAs, Architects, and Consultants.', slug: 'private-bank-loans' },
                            { title: 'Machinery Loans', icon: 'fa-cogs', desc: 'Purchase of new equipment and technology.', slug: 'machinery-loans' },
                            { title: 'Expansion Loans', icon: 'fa-expand-arrows-alt', desc: 'Scaling operations to new markets or verticals.', slug: 'unsecured-business-loans' },
                        ].map((loan, index) => (
                            <Link
                                to={`/services/business-loans/${loan.slug}`}
                                key={index}
                                className="bg-dark-bg border border-white/5 p-6 rounded-xl hover:border-primary-accent/30 transition-all duration-300 group block"
                            >
                                <div className="w-12 h-12 bg-secondary-dark rounded-lg flex items-center justify-center text-primary-accent text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <i className={`fas ${loan.icon}`}></i>
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-primary-accent transition-colors">{loan.title}</h3>
                                <p className="text-sm text-boulder">{loan.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-gray-400 mb-4">Not sure which loan suits you?</p>
                        <Link to="/contact" className="text-primary-accent hover:text-white font-semibold transition-colors">
                            Talk to Our Loan Support Team <i className="fas fa-arrow-right ml-1"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Project Report Section */}
            <section id="project-reports" className="container mx-auto px-4 md:px-20 py-16 md:py-24" data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary-accent font-bold tracking-wider uppercase text-sm">Financial Documentation</span>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mt-2 mb-6">
                            Bank-Approved <span className="text-primary-accent">Project Reports</span>
                        </h2>
                        <p className="text-boulder text-lg mb-6">
                            We prepare customized project reports strictly as per bank formats, accepted by Nationalized Banks, Private Banks, and NBFCs.
                            <span className="block mt-2 text-white font-semibold text-sm">📌 No copied templates. Every report is business-specific.</span>
                        </p>

                        <div className="bg-secondary-dark border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold mb-4 text-white">What Our Report Includes:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                {[
                                    'Business & Industry Overview',
                                    'Cost of Project & Means of Finance',
                                    '3–5 Year Profit & Loss Projection',
                                    'Cash Flow & Funds Flow',
                                    'Projected Balance Sheet',
                                    'Break-Even Analysis',
                                    'DSCR & Key Financial Ratios',
                                    'Ratio Analysis & Justification'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                        <i className="fas fa-check text-primary-accent mt-1"></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <a href="https://wa.me/919446369434?text=I%20want%20to%20know%20Project%20Report%20Costs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-dark-bg px-6 py-3 rounded-full font-bold hover:bg-primary-accent transition-colors duration-300">
                                Get Project Report Cost
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="/images/project_report.webp"
                                alt="Bank Approved Project Report Sample"
                                className="w-full max-w-md mx-auto drop-shadow-2xl"
                            />
                        </div>
                        {/* Back glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-accent/10 rounded-full blur-[60px] -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Rejection vs Help Section */}
            <section className="bg-secondary-dark py-16" data-aos="fade-up">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Rejection */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-400">
                                <i className="fas fa-times-circle"></i> Why Loans Get Rejected
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Poor or copied project reports (templates)',
                                    'Unrealistic financial projections',
                                    'Mismatch between declared income & loan amount',
                                    'Missing or incorrect primary documents',
                                    'Lack of proper follow-up with bank officials'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-dark-bg/50 p-4 rounded-lg border-l-4 border-red-400/50">
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Acharya Help */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-400">
                                <i className="fas fa-check-circle"></i> How Acharya Helps
                            </h3>
                            <div className="bg-dark-bg/50 p-6 rounded-lg border-l-4 border-green-400/50 h-full">
                                <p className="text-lg text-white mb-4 leading-relaxed">
                                    We identify issues <span className="text-green-400 font-bold">before submission</span>.
                                </p>
                                <p className="text-boulder mb-6">
                                    By pre-verifying your eligibility and preparing watertight documentation, we significantly improve your approval chances. We don't just write reports; we guide you through the banking query process.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-400"></i> Kerala-focused support</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-400"></i> Practical banking experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="container mx-auto px-4 md:px-20 py-16" data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className="font-montserrat text-3xl font-bold mb-4">Our Simple Loan Assistance Process</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 relkative">
                    {[
                        { step: '1', title: 'Eligibility Check', desc: 'Free assessment of your profile' },
                        { step: '2', title: 'Doc Review', desc: 'Guidance on missing papers' },
                        { step: '3', title: 'Report Prep', desc: 'Detailed financial projections' },
                        { step: '4', title: 'Submission', desc: 'Bank-ready file preparation' },
                        { step: '5', title: 'Follow-up', desc: 'Clarification assistance' }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center flex-1 relative group">
                            {/* Connector Line (Desktop) */}
                            {index < 4 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10 -z-10"></div>
                            )}

                            <div className="w-16 h-16 rounded-full bg-secondary-dark border border-primary-accent/30 flex items-center justify-center text-xl font-bold text-primary-accent mb-4 group-hover:bg-primary-accent group-hover:text-dark-bg transition-colors duration-300 shadow-lg">
                                {item.step}
                            </div>
                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-400 px-2">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://wa.me/919446369434?text=Start%20Loan%20Process" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform">
                        Start My Loan Process Today
                    </a>
                </div>
            </section>

            {/* Who Can Take Support */}
            <section className="bg-secondary-dark/30 py-16" data-aos="fade-up">
                <div className="container mx-auto px-4 md:px-20 text-center">
                    <h2 className="font-montserrat text-2xl font-bold mb-8">Who Can Take Our Support?</h2>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {[
                            'Startup Founders', 'Small Business Owners', 'Shop Owners & Traders',
                            'Manufacturers', 'Service Businesses', 'Doctors & Clinics',
                            'Freelancers', 'Consultants', 'Exporters'
                        ].map((tag, i) => (
                            <span key={i} className="bg-dark-bg border border-white/10 px-4 py-2 rounded-full text-gray-300 text-sm md:text-base hover:border-primary-accent/50 transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Footer-ish area */}
            <section className="container mx-auto px-4 md:px-20 py-16" data-aos="fade-up">
                <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/5 rounded-full blur-[80px]"></div>

                    <h2 className="font-montserrat text-3xl font-bold mb-4 relative z-10">Talk to a Loan Expert Today</h2>
                    <p className="text-lg text-boulder mb-8 max-w-2xl mx-auto relative z-10">
                        Don’t let documentation stop your business growth. Get professional support and improve your chances of bank approval.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <a href="https://wa.me/919446369434?text=Hi%2C%20I%20want%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                            <i className="fab fa-whatsapp"></i> WhatsApp Us Instantly
                        </a>
                        <Link to="/contact" className="bg-white text-dark-bg font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                            Book a Free Consultation
                        </Link>
                    </div>

                    <p className="mt-8 text-xs text-gray-500 max-w-3xl mx-auto relative z-10">
                        * Important Note: Loan approval depends on bank policies, eligibility, and financial viability. We provide professional documentation and support to improve approval chances, but do not guarantee loans.
                    </p>
                </div>
            </section>
        </main >
    );
};

export default LoanSupportPage;
