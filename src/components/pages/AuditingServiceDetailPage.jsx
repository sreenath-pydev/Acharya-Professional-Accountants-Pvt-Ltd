
import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import { auditingServices } from '../../data/auditingServices.jsx';
import SEO from '../common/SEO';

const AuditingServiceDetailPage = () => {
    const { serviceId } = useParams();
    const service = auditingServices[serviceId];

    useEffect(() => {
        if (service) {
            AOS.refresh();
            window.scrollTo(0, 0);
        }
    }, [service, serviceId]);

    if (!service) {
        return <Navigate to="/services/auditing" replace />;
    }

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            <SEO
                title={service.seoTitle}
                description={service.seoDescription}
                keywords={service.keywords}
                canonical={`https://acharyaprofessionalaccountants.in/services/auditing/${serviceId}`}
            />
            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-20 mb-12" data-aos="fade-up">
                <Link to="/services/auditing" className="inline-flex items-center gap-2 text-primary-accent text-sm mb-4 hover:underline">
                    <i className="fas fa-arrow-left"></i> Back to Auditing Services
                </Link>
                <div className="bg-secondary-dark border border-primary-accent/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 md:opacity-10">
                        <i className={`fas ${service.icon} text-9xl text-primary-accent`}></i>
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6">{service.title}</h1>
                        <p className="text-lg text-boulder leading-relaxed">
                            {service.seoDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up" data-aos-delay="50">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
                    <div className="space-y-6 text-boulder leading-relaxed text-lg">
                        {service.content}
                    </div>

                    {/* Sidebar CTA */}
                    <div className="space-y-6">
                        <div className="bg-secondary-dark/80 p-6 rounded-2xl border border-primary-accent/10 sticky top-28">
                            <h4 className="text-xl font-bold text-white mb-4">Need Help with {service.title}?</h4>
                            <p className="text-sm text-boulder mb-6">
                                Our experts are ready to assist you. Ensure compliance and accuracy.
                            </p>
                            <a
                                href={`https://wa.me/919446369434?text=Hi,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(service.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center bg-primary-accent text-dark-bg font-bold py-3 px-4 rounded-full hover:bg-korma transition-all duration-300 w-full mb-3"
                            >
                                <i className="fab fa-whatsapp mr-2 text-lg"></i> Chat on WhatsApp
                            </a>
                            <Link
                                to="/contact"
                                className="flex justify-center items-center border border-primary-accent/30 text-white font-semibold py-3 px-4 rounded-full hover:bg-primary-accent/10 transition-all duration-300 w-full"
                            >
                                Request Callback
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services Navigation */}
            <section className="container mx-auto px-4 md:px-20 mb-16 pb-10 border-t border-primary-accent/10 pt-10">
                <h3 className="text-xl font-bold text-white mb-6">Explore Other Auditing Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.entries(auditingServices).slice(0, 4).map(([key, item]) => {
                        if (key === serviceId) return null;
                        return (
                            <Link key={key} to={`/services/auditing/${key}`} className="block bg-secondary-dark border border-primary-accent/5 hover:border-primary-accent/30 p-4 rounded-xl transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-sm">
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <span className="font-semibold text-sm text-white">{item.title}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </main>
    );
};

export default AuditingServiceDetailPage;
