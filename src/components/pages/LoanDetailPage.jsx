
import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import ReactMarkdown from 'react-markdown';
import { loanDetails } from '../../data/loanDetails';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const LoanDetailPage = () => {
    const { loanSlug } = useParams();
    const loan = loanDetails[loanSlug];

    useEffect(() => {
        if (loan) {
            AOS.refresh();
            window.scrollTo(0, 0);
        }
    }, [loanSlug, loan]);

    if (!loan) {
        return <Navigate to="/services/business-loans" replace />;
    }

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            <SEO
                title={loan.title}
                description={loan.seoDescription}
                canonical={`https://acharyaprofessionalaccountants.in/services/business-loans/${loanSlug}`}
            />
            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center" data-aos="fade-up">
                <div>
                    <Link to="/services/business-loans" className="text-primary-accent hover:text-white mb-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors">
                        <DynamicFaIcon name="fa-arrow-left" /> Back to All Loans
                    </Link>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        {loan.title}
                    </h1>
                    <p className="text-lg text-boulder mb-8 max-w-2xl leading-relaxed">
                        {loan.intro}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`https://wa.me/919446369434?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(loan.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center bg-primary-accent text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-[0_4px_14px_rgba(229,161,69,0.3)]"
                        >
                            <DynamicFaIcon name="fa-whatsapp" className="mr-2" /> Enquire Now
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center bg-transparent border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-primary-accent/20" data-aos="fade-left">
                    <img
                        src={loan.image}
                        alt={loan.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
                <div className="bg-secondary-dark/50 border border-white/5 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-10">
                            {loan.content.map((section, idx) => (
                                <div key={idx} className="space-y-4">
                                    <h2 className="font-montserrat text-2xl font-bold text-white">{section.heading}</h2>
                                    {section.text && (
                                        <div className="text-boulder leading-relaxed text-lg">
                                            <ReactMarkdown>{section.text}</ReactMarkdown>
                                        </div>
                                    )}
                                    {section.list && (
                                        <ul className="space-y-3 mt-4">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1.5 shrink-0" />
                                                    <div className="leading-relaxed">
                                                        <ReactMarkdown components={{ p: 'span' }}>{item}</ReactMarkdown>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Sidebar / CTA Box */}
                        <div className="bg-dark-bg p-8 rounded-2xl border border-primary-accent/20 h-fit sticky top-24">
                            <h3 className="font-montserrat text-xl font-bold mb-4">Why Apply Through Acharya?</h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Highest success rate for MSME & Startup loans',
                                    'We prepare the CMA data & Project Report banks actually want',
                                    'Direct coordination with bank managers',
                                    'Transparency in processing fees and hidden charges'
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                        <DynamicFaIcon name="fa-star" className="text-primary-accent shrink-0 mt-1" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="tel:+919446369434"
                                className="block w-full text-center bg-white text-dark-bg font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors mb-4"
                            >
                                <DynamicFaIcon name="fa-phone-alt" className="mr-2" /> Call +91 94463 69434
                            </a>
                            <p className="text-center text-xs text-gray-500">Available Mon-Sat, 9AM to 6PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoanDetailPage;
