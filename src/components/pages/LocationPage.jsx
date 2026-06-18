import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import { Link, useParams } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { locationGroups, cityContent } from '../../data/locationData';
import AnimatedCounter from '../common/AnimatedCounter';
import {
    IconCheck,
    IconPhone,
    IconEnvelope,
    IconMapMarker,
    IconClock
} from '../common/Icons';

const LocationPage = ({ citySlugOverride }) => {
    const params = useParams();
    const citySlug = citySlugOverride || params.citySlug;

    const normalizedSlug = citySlug ? citySlug.toLowerCase() : 'kozhikode';
    const cityData = cityContent[normalizedSlug];

    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [citySlug]);

    if (!cityData) {
        return (
            <div className="min-h-screen pt-32 text-center text-white bg-dark-bg">
                <h1 className="text-3xl font-bold">Location Not Found</h1>
                <p className="mt-4">We are expanding our services. Please contact us for support.</p>
                <Link to="/contact" className="inline-block mt-6 bg-primary-accent px-6 py-2 rounded-full text-white">Contact Us</Link>
            </div>
        );
    }

    const watermark = (cityData.name || '').slice(0, 3).toUpperCase();

    const tickerItems = [
        `GST Filing ${cityData.name}`,
        `Income Tax Consultant ${cityData.name}`,
        `Company Registration ${cityData.name}`,
        `Audit Firm ${cityData.name}`,
        `Bookkeeping Services ${cityData.name}`,
        `NRI Tax Filing ${cityData.name}`,
        `PAN/TAN Registration ${cityData.name}`
    ];

    const serviceIcons = ["📊", "🧾", "🔍", "📒", "🏢", "💻"];

    const whyUs = [
        {
            num: "01",
            title: "Experienced CA & Accounting Professionals",
            desc: `All operations are managed by ICAI-registered chartered accountants. We focus on accuracy, compliance, and long-term support for your business in ${cityData.name}.`
        },
        {
            num: "02",
            title: "Proactive Compliance Calendar",
            desc: "We track your deadlines monthly. Returns are filed on time, reconciled properly, and archived — meaning you never pay surprise penalties."
        },
        {
            num: "03",
            title: "Personalized Single Contact",
            desc: "You get a dedicated relationship manager who understands your books. No customer ticket systems or repeating your queries."
        },
        {
            num: "04",
            title: "Clear, Fixed-Fee Pricing",
            desc: "Transparent packages tailored for startups and mid-size companies. You know the cost before we begin with zero hidden charges."
        },
        {
            num: "05",
            title: "Fully Digital Document Management",
            desc: "Coordinate completely via WhatsApp and email. Send docs digitally, receive filed returns, and keep your business running smoothly."
        }
    ];

    const testimonials = [
        {
            text: `We registered our firm and set up GST in a single week through Acharya. The whole process was handled online — I didn't have to travel at all.`,
            attr: `Proprietor · ${cityData.name}`
        },
        {
            text: `Our accounts were a mess before Acharya took over. Now we have proper monthly reports, and our tax filings are always on time. Complete peace of mind.`,
            attr: `Business Owner · ${cityData.name}`
        },
        {
            text: `Managing tax compliance remotely was stressful. Acharya manages everything via WhatsApp — I just send documents and they handle the rest.`,
            attr: `Client · ${cityData.name}`
        }
    ];

    const faqs = [
        {
            q: `Do you have an office in ${cityData.name}?`,
            a: `Yes, we serve clients across ${cityData.name} and surrounding zones. We coordinate fully online via WhatsApp and email — meaning you get premium CA services without needing to travel to an office.`
        },
        {
            q: `Who needs GST registration in ${cityData.name}?`,
            a: `Any business with an annual turnover exceeding ₹40 lakhs for goods or ₹20 lakhs for services must register for GST. Additionally, e-commerce sellers and businesses making inter-state sales must register regardless of turnover.`
        },
        {
            q: `I am an NRI. Can you manage my Indian tax compliance in ${cityData.name} remotely?`,
            a: "Absolutely. We manage ITR filing, TDS on rental income, capital gains tax, and FEMA compliance for NRI clients remotely. Documents are shared via WhatsApp or email, and filings are confirmed digitally."
        },
        {
            q: `How quickly can you register a new Private Limited Company in ${cityData.name}?`,
            a: "A Private Limited Company registration typically takes 10 to 15 working days. This includes obtaining DSC, DIN, name approval, and the final certificate of incorporation alongside PAN and TAN."
        },
        {
            q: `Do you offer affordable packages for small businesses in ${cityData.name}?`,
            a: `Yes. We provide fixed-fee monthly and annual retainers tailored for sole traders, startups, and mid-sized businesses. All pricing is finalized upfront during the initial consultation.`
        }
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title={cityData.metaTitle}
                description={cityData.metaDescription}
                canonical={`https://www.acharyaprofessionalaccountants.in/accounting-service-in-${cityData.slug}`}
            />

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    {watermark}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · {cityData.name}
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">{cityData.name}</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            {cityData.introText[0] || `We handle your GST, income tax, audit, and compliance in ${cityData.name} — so you can focus entirely on running your business.`}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                Book Free Consultation
                            </ScrollLink>
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                View All Services
                            </ScrollLink>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />
                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={500} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={10} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in {cityData.name}</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={100} suffix="%" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">On-Time Filing</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={0} prefix="₹" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Penalty Record</span>
                            </div>
                            <div className="col-span-2 border-t border-white/10 pt-6 mt-2">
                                <span className="font-montserrat text-3xl font-bold text-primary-accent block leading-none">ICAI Registered</span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-2">Chartered Accountants</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TICKER */}
            <div className="ticker border-y border-white/5 py-4 overflow-hidden bg-secondary-dark/30">
                <div className="animate-marquee-custom">
                    {[...tickerItems, ...tickerItems].map((item, idx) => (
                        <span key={idx} className="flex items-center text-xs tracking-wider uppercase text-boulder gap-2.5 mx-6 whitespace-nowrap">
                            <span className="text-primary-accent font-bold">●</span> {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* ABOUT SECTION */}
            <section id="about" className="py-20 bg-secondary-dark/10 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-primary-accent"></span>
                                <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                    Who We Are
                                </span>
                            </div>
                            <h2 className="font-montserrat text-3xl md:text-4xl font-bold leading-tight">
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in {cityData.name}
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                {cityData.introText.slice(1).map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                                {cityData.introText.length <= 1 && (
                                    <p>
                                        We are Acharya Professional Accountants — a professional CA firm providing reliable accounting, tax planning, GST filing, audit, and company registration support in {cityData.name}.
                                    </p>
                                )}
                            </div>
                            <div className="pt-4">
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="inline-flex items-center bg-primary-accent text-dark-bg px-8 py-3.5 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                >
                                    Talk to Our CA <span className="ml-2">→</span>
                                </ScrollLink>
                            </div>
                        </div>

                        <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl" data-aos="fade-left">
                            <h3 className="font-montserrat text-lg font-bold text-white mb-4 pb-2 border-b border-white/5">
                                Our Client Promises
                            </h3>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🏛️</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">ICAI-Qualified CAs</h4>
                                    <p className="text-boulder text-xs leading-relaxed">All files managed by qualified CAs with industry depth.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Dedicated Support</h4>
                                    <p className="text-boulder text-xs leading-relaxed">Active local presence and WhatsApp connectivity at all times.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">📅</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">On-Time Filing</h4>
                                    <p className="text-boulder text-xs leading-relaxed">Proactive compliance calendaring prevents late fees and penalties.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🔒</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Confidential & Secure</h4>
                                    <p className="text-boulder text-xs leading-relaxed">Your accounts and sensitive files are safe under strict protocols.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Our Services
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Accounting Services in <span className="italic text-primary-accent">{cityData.name}</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            We provide a complete range of professional CA services customized for sole proprietorships, companies, and individuals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cityData.services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-montserrat text-sm font-semibold text-primary-accent/50 block">
                                            {`0${index + 1}`}
                                        </span>
                                        <span className="text-2xl rounded-lg bg-primary-accent/5 w-10 h-10 flex items-center justify-center border border-white/5">
                                            {serviceIcons[index % serviceIcons.length]}
                                        </span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.category}
                                    </h3>
                                    <ul className="space-y-2.5 mb-6">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-boulder">
                                                <span className="text-primary-accent mt-1 flex-shrink-0">
                                                    <IconCheck className="w-3.5 h-3.5" />
                                                </span>
                                                <span className="text-gray-300 text-xs leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section id="why-us" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Clients Choose Our <span className="italic text-primary-accent">CA Firm in {cityData.name}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
                            {whyUs.map((item) => (
                                <div key={item.num} className="flex gap-6 items-start hover:translate-x-1 transition-transform duration-300">
                                    <span className="font-montserrat text-3xl md:text-4xl font-bold text-primary-accent/30 leading-none">
                                        {item.num}
                                    </span>
                                    <div>
                                        <h3 className="font-montserrat text-lg font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-boulder text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
                            {testimonials.map((t, index) => (
                                <div
                                    key={index}
                                    className="bg-secondary-dark border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300"
                                    style={{ borderLeft: index === 1 ? '3px solid #e5a145' : '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <span className="font-serif text-primary-accent/10 text-7xl absolute -top-4 -left-2 select-none pointer-events-none">“</span>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 pt-4 italic relative z-10">
                                        "{t.text}"
                                    </p>
                                    <div className="border-t border-white/5 pt-3 mt-auto">
                                        <span className="text-xs uppercase tracking-wider text-primary-accent font-semibold leading-relaxed block">
                                            {t.attr}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AREAS COVERED */}
            {cityData.areasServed && cityData.areasServed.length > 0 && (
                <section id="areas" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                    <div className="container mx-auto px-5 md:px-12 lg:px-20">
                        <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1px] bg-primary-accent"></span>
                                <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                    Coverage
                                </span>
                            </div>
                            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                                We Serve All of <span className="italic text-primary-accent">{cityData.name}</span>
                            </h2>
                            <p className="text-boulder text-lg">
                                Access direct, professional accounting services in these key sub-locations and business zones:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cityData.areasServed.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <h3 className="font-montserrat text-lg font-bold text-primary-accent mb-2">
                                        {area}
                                    </h3>
                                    <p className="text-boulder text-sm leading-relaxed">
                                        Professional CA, bookkeeping, and GST filing support in the {area} region.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ SECTION */}
            <section id="faq" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                FAQ
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Common Questions — <span className="italic text-primary-accent">CA Services {cityData.name}</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-secondary-dark border border-white/5 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 30}
                            >
                                <summary className="flex items-center justify-between text-base md:text-lg font-bold font-montserrat text-white cursor-pointer select-none">
                                    <span>{faq.q}</span>
                                    <span className="ml-4 flex-shrink-0 rounded-full border border-white/10 p-1.5 text-primary-accent transition group-open:rotate-45">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="mt-4 text-boulder text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* WE COVER STRIP */}
            {cityData.areasServed && cityData.areasServed.length > 0 && (
                <section className="py-8 bg-secondary-dark/40 border-t border-white/5">
                    <div className="container mx-auto px-5 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-4">
                        <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-bold whitespace-nowrap">
                            We Cover
                        </span>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {cityData.areasServed.map((area) => (
                                <span
                                    key={area}
                                    className="bg-white/5 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-white/5 hover:border-primary-accent/30 transition-colors cursor-default"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA SECTION & CONTACT INFO */}
            <section id="contact" className="py-20 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-aos="fade-right">
                            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in {cityData.name}
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Free first consultation. Bring your GST, tax, audit, or registration question — we will give you a straight answer and a clear quote, no obligations.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="tel:+919562069434"
                                    className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                                >
                                    📞 Call Us Now
                                </a>
                                <a
                                    href="https://wa.me/919446369434"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                                >
                                    💬 WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
                            <div className="bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconPhone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Call</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            <a href="tel:+919562069434" className="hover:text-primary-accent transition-colors">+91 9562 06 9434</a><br />
                                            <a href="tel:+919072118877" className="hover:text-primary-accent transition-colors">+91 9072 11 8877</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconEnvelope className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Email</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            <a href="mailto:acharya.apa@gmail.com" className="hover:text-primary-accent transition-colors">acharya.apa@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconMapMarker className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Office</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            Palace Arcade, Palace Road, Mankavu,<br />
                                            Kozhikode, Kerala — 673002
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconClock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Hours</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            Monday – Saturday<br />
                                            9:00 AM – 6:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.6841848514887!2d75.8030430737993!3d11.2358719889422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596ca4d1cb11%3A0xa76f81f9ba68fee1!2sAcharya%20professional%20accountants%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1750755342483!5m2!1sen!2sin"
                                    className="w-full h-full border-0 filter grayscale contrast-125 brightness-75"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OTHER LOCATIONS */}
            <section className="py-16 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20" data-aos="fade-up">
                    <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">
                        Other Locations We Serve
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {locationGroups.map((group, index) => (
                            <div key={index} className="bg-secondary-dark/40 rounded-2xl p-6 border border-white/5">
                                <h3 className="text-primary-accent font-semibold text-lg mb-4 pb-2 border-b border-white/5">
                                    {group.region}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.cities.map((city) => {
                                        let slug = city.toLowerCase();
                                        if (city.includes('Delhi')) slug = 'delhi';
                                        else if (city.includes('Kochi')) slug = 'kochi';
                                        else if (city.includes('Bengaluru')) slug = 'bengaluru';
                                        else if (city.includes('Mangaluru')) slug = 'mangaluru';
                                        else slug = city.trim().toLowerCase().replace(/\s+/g, '-');

                                        return (
                                            <Link
                                                key={city}
                                                to={`/accounting-service-in-${slug}`}
                                                className="inline-block bg-white/5 hover:bg-primary-accent hover:text-dark-bg text-boulder hover:text-white text-xs md:text-sm px-4 py-2 rounded-full transition-all duration-300 border border-white/5 hover:border-transparent"
                                            >
                                                {city}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LocationPage;
