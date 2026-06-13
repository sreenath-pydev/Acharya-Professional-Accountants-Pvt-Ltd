import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { locationGroups } from '../../data/locationData';
import {
    IconCheck,
    IconPhone,
    IconEnvelope,
    IconMapMarker,
    IconClock
} from '../common/Icons';

const KozhikodePage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Kozhikode",
        "Income Tax Consultant Kozhikode",
        "Startup CA Kozhikode",
        "Company Registration Kozhikode",
        "ESOP Taxation Kozhikode",
        "Audit Firm Kozhikode",
        "Transfer Pricing Kozhikode",
        "Bookkeeping Services Kozhikode",
        "NRI Tax Filing Kozhikode",
        "DPIIT Registration Kozhikode"
    ];

    const services = [
        {
            num: "01",
            title: "GST Registration & Filing",
            intro: "Most businesses in Kozhikode come to us first with a GST problem — a missed GSTR-3B deadline, an ITC mismatch, or a notice they don't know how to respond to.",
            items: [
                "GST registration for new businesses and those crossing the threshold",
                "Monthly and quarterly GSTR-1 and GSTR-3B filing",
                "Annual GSTR-9 reconciliation",
                "ITC verification and reconciliation",
                "E-invoicing setup",
                "GST notice response and representation"
            ],
            note: "Businesses that file GSTR-3B but never reconcile it with their purchase register build up ITC mismatches over years. We catch these before they become a department problem."
        },
        {
            num: "02",
            title: "Income Tax Filing & Planning",
            intro: "Whether you're a proprietor, a partnership firm, a private limited company, or an NRI with income from Kozhikode — your tax situation is different and needs to be handled accordingly.",
            items: [
                "ITR filing for individuals, HUFs, firms, and companies",
                "Advance tax computation (Section 234B & 234C)",
                "TDS filing — Form 24Q, 26Q, 27Q",
                "Tax planning — structuring income and expenses",
                "Response to income tax notices and scrutiny assessments",
                "PAN and TAN applications"
            ],
            note: "Common mistake: mixing personal and business expenses. This causes disallowances during assessments. Proper bookkeeping prevents it from the start."
        },
        {
            num: "03",
            title: "Bookkeeping & Accounting",
            intro: "Clean books are not just about compliance. They tell you whether your business is actually profitable, which clients are worth keeping, and where your cash is leaking.",
            items: [
                "Monthly bookkeeping — Tally, QuickBooks, or cloud-based",
                "Ledger maintenance and reconciliation",
                "P&L statements and balance sheets",
                "Bank reconciliation statements (BRS)",
                "MIS reports for business decisions",
                "Year-end accounts finalization"
            ],
            note: "Most clients see a cleaner picture of their business within the first three months — without disrupting how they currently work."
        },
        {
            num: "04",
            title: "Audit & Assurance",
            intro: "Statutory audit is a legal requirement for many companies. Internal audit is something you do because you want to actually know what's happening in your business.",
            items: [
                "Statutory audit under the Companies Act 2013",
                "Tax audit under Section 44AB of the Income Tax Act",
                "GST audit and annual return (GSTR-9C)",
                "Internal audit for process and control review",
                "Stock audit for businesses with large inventory",
                "Bank audit support"
            ],
            note: "We conduct audits across manufacturing, trading, healthcare, and services — not just for compliance, but to give owners a report they can actually use."
        },
        {
            num: "05",
            title: "Company Registration & Compliance",
            intro: "Starting a new business in Kozhikode? Or converting a proprietorship to a private limited company? We handle the paperwork end to end.",
            items: [
                "Private limited company incorporation",
                "LLP registration",
                "Partnership firm registration",
                "Sole proprietorship setup — MSME/Udyam, GST",
                "ROC filing — annual returns, director changes",
                "MCA compliance for existing companies"
            ],
            note: "Business structure affects your tax liability, your ability to raise funds, and your personal liability exposure. Worth getting right from day one."
        },
        {
            num: "06",
            title: "Payroll & HR Compliance",
            intro: "If you employ more than a handful of people, payroll compliance adds up fast — PF, ESI, professional tax, TDS on salary. We manage it so you don't have to track it yourself.",
            items: [
                "Monthly payroll processing",
                "PF and ESI filing",
                "Professional Tax (Kerala) compliance",
                "TDS on salary computation and filing",
                "Payslip generation",
                "Form 16 issuance"
            ],
            note: null
        }
    ];

    const industries = [
        { icon: "🏪", name: "Wholesale & Retail Traders", desc: "Especially those dealing with interstate supply, where GST compliance is complex and ITC claims need careful reconciliation." },
        { icon: "✈️", name: "Gulf-Linked Businesses & NRIs", desc: "NRI taxation, foreign remittance accounting, and Kerala-based income reporting for those managing assets from abroad." },
        { icon: "🍽️", name: "Restaurants & Food Businesses", desc: "GST for hospitality has its own rules — 5% without ITC or 12% with. We get it right the first time." },
        { icon: "🏥", name: "Healthcare & Clinics", desc: "Clinic owners often don't realize which services are GST-exempt and which are not. We prevent those mistakes before they happen." },
        { icon: "🏗️", name: "Construction & Real Estate", desc: "Project-based accounting, sub-contractor TDS, and WCT compliance — handled properly from the start." },
        { icon: "💻", name: "Freelancers & Consultants", desc: "Especially IT professionals with international clients who need to manage GST, advance tax, and foreign income declarations." },
        { icon: "📦", name: "E-Commerce Sellers", desc: "Sellers on Amazon, Flipkart, or Meesho need TCS reconciliation and correct GSTR filings. This is a common gap we fill." }
    ];

    const whyUs = [
        { num: "01", title: "We're in Kozhikode", desc: "Not a remote firm operating from Bengaluru or Delhi. Our office is in Mankavu — and we meet clients in person when that's what they need." },
        { num: "02", title: "No rotating relationship managers", desc: "The CA or senior accountant who handles your file is who you actually talk to. Not a helpdesk ticket system." },
        { num: "03", title: "We flag problems early", desc: "Most tax notices are predictable. We catch the issues during filing, not after the fact when options are limited." },
        { num: "04", title: "We don't work with everyone", desc: "We take on clients we can actually serve well. If your business needs something outside our expertise, we'll tell you honestly." }
    ];

    const testimonials = [
        {
            text: "We were running three retail shops and handling GST ourselves. When we got a notice for ITC mismatch, we didn't know what to do. Acharya's team resolved it within two weeks and cleaned up two years of filings. We've been with them since.",
            attr: "Proprietor, garment trader · SM Street area, Kozhikode"
        },
        {
            text: "As an NRI managing my family's property income in Kozhikode, I was struggling to understand what to file and when. The team explained everything clearly and handled the whole thing remotely. No need to come back just for tax filings.",
            attr: "Client, Dubai · NRI income reporting"
        },
        {
            text: "Our startup registered as a private limited company based on their advice. They explained the compliance requirements upfront — ROC filing, statutory audit, MCA — and now handle everything so we can focus on the product.",
            attr: "Co-founder, tech startup · Kozhikode"
        }
    ];

    const faqs = [
        {
            q: "What does it cost to hire a CA firm in Kozhikode?",
            a: "It depends on the services. For a small proprietorship needing GST filing and ITR, monthly retainer costs typically range from ₹2,500 to ₹6,000. For companies needing statutory audit, payroll, and full compliance, the range is higher. We provide a fixed-fee quote after understanding your business — no surprises."
        },
        {
            q: "Do I need a CA for GST filing, or can I do it myself?",
            a: "You can file GST yourself. Many business owners do. But ITC reconciliation, annual GSTR-9 filing, and responding to notices are where errors happen — and where the penalties are significant. Most of our clients started filing themselves and came to us after a mismatch or notice."
        },
        {
            q: "Can you work with businesses outside Kozhikode city?",
            a: "Yes. We work with clients across Kozhikode district — including Kalpetta, Vadakara, Koyilandy, and Feroke — and also with NRI clients managing Kerala-based businesses from abroad. Most work is done remotely; we visit for audits when needed."
        },
        {
            q: "How quickly can you take over if my previous accountant left?",
            a: "Usually within 2–3 weeks. We need access to the previous returns, books, and login credentials. We've done this transition many times — including cases where the previous accountant left the records in rough shape. We'll give you an honest assessment of where things stand before we start."
        },
        {
            q: "Is my financial data safe with you?",
            a: "We operate under ICAI's code of ethics, which includes strict confidentiality obligations. We don't share client data. Ever. For cloud-based accounting, we use only platforms with standard security protocols — Tally on Prime, Zoho Books, QuickBooks."
        },
        {
            q: "Do you handle income tax notices?",
            a: "Yes. Notice response and representation before the Assessing Officer is part of our work. We handle notices under Section 143(1), 143(2), 148, and 139(9) defective return notices."
        }
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA & Accounting Services in Kozhikode | Acharya PA"
                description="Acharya Professional Accountants — CA firm in Kozhikode offering GST filing, income tax, audit, and bookkeeping for businesses across Malabar. Call for a free consultation."
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-kozhikode"
            />

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20" data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Kozhikode · Est. 2015
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA &amp; Accounting<br />
                            Services in<br />
                            <span className="italic text-primary-accent">Kozhikode</span>
                        </h1>
                        <div className="text-lg text-boulder max-w-xl space-y-4">
                            <p>
                                We are a Kozhikode-based CA firm. Our office is in Mankavu, our clients are across the city and district, and we've been doing this since 2015.
                            </p>
                            <p>
                                We handle GST filing, income tax, bookkeeping, audit, payroll, and company compliance — from small proprietorships in Mavoor Road filing their first GST return to established trading companies in Kallai managing multi-state transactions.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                Get a Free Consultation
                            </ScrollLink>
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                Our Services
                            </ScrollLink>
                        </div>
                    </div>

                    {/* Right Quote & Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        {/* Decorative background pulse */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 mb-8 md:mb-12">
                            <div className="w-10 h-1 bg-primary-accent mb-6 rounded-full"></div>
                            <p className="font-montserrat text-lg md:text-xl italic text-gray-200 leading-relaxed mb-4">
                                "We were running three retail shops and handling GST ourselves. Acharya's team resolved it within two weeks and cleaned up two years of filings."
                            </p>
                            <span className="text-xs uppercase tracking-widest text-primary-accent font-semibold block">
                                Garment trader, SM Street · Kozhikode
                            </span>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                            <div>
                                <span className="font-montserrat text-3xl font-bold text-primary-accent block">10+</span>
                                <span className="text-xs text-silver-sand font-medium uppercase tracking-wider block mt-1">Years in practice</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-3xl font-bold text-primary-accent block">500+</span>
                                <span className="text-xs text-silver-sand font-medium uppercase tracking-wider block mt-1">Businesses served</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-3xl font-bold text-primary-accent block">ICAI</span>
                                <span className="text-xs text-silver-sand font-medium uppercase tracking-wider block mt-1">Registered firm</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-3xl font-bold text-primary-accent block">In-Person</span>
                                <span className="text-xs text-silver-sand font-medium uppercase tracking-wider block mt-1">Mankavu office</span>
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

            {/* SERVICES SECTION */}
            <section id="services" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                What we do
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Our CA &amp; Accounting Services in Kozhikode
                        </h2>
                        <p className="text-boulder text-lg">
                            From GST filing to statutory audit — handled by qualified CAs, not outsourced to a junior team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div>
                                    <span className="font-montserrat text-sm font-semibold text-primary-accent/50 block mb-4">
                                        {service.num}
                                    </span>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {service.intro}
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                                <span className="text-primary-accent mt-0.5 flex-shrink-0">
                                                    <IconCheck className="w-4 h-4" />
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {service.note && (
                                    <div className="border-l-2 border-primary-accent pl-4 py-2 mt-4 bg-primary-accent/5 rounded-r-xl">
                                        <p className="text-xs text-boulder italic leading-relaxed">
                                            {service.note}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO WE WORK WITH (INDUSTRIES) */}
            <section className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Industries served
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Who We Work With in Kozhikode
                        </h2>
                        <p className="text-boulder text-lg">
                            We work across most industries in the Kozhikode district. A few of the business types we handle most often.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {industries.map((ind, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/5"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-2xl mb-4">
                                    {ind.icon}
                                </div>
                                <h3 className="font-montserrat text-lg font-bold text-white mb-2">
                                    {ind.name}
                                </h3>
                                <p className="text-boulder text-sm leading-relaxed">
                                    {ind.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Acharya PA
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Businesses in Kozhikode Work With Us
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyUs.map((item, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-8 hover:border-primary-accent/30 transition-all duration-300 flex items-start gap-6"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <span className="font-montserrat text-4xl font-bold text-primary-accent/20 flex-shrink-0 leading-none">
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
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                From our clients
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Trusted by Businesses Across Kozhikode
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <span className="font-serif text-primary-accent/10 text-8xl absolute -top-4 -left-2 select-none pointer-events-none">
                                    “
                                </span>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6 pt-4 italic relative z-10">
                                    {t.text}
                                </p>
                                <div className="border-t border-white/5 pt-4 mt-auto">
                                    <span className="text-xs uppercase tracking-wider text-primary-accent font-semibold leading-relaxed block">
                                        {t.attr}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Common questions
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
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

            {/* CTA SECTION & OFFICE INFO */}
            <section id="contact" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact details text */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-aos="fade-right">
                            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Talk to a CA in Kozhikode —<br />No Obligation
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Most people who call us first want to understand what they're missing. We're comfortable with that conversation. If we can help, we'll tell you how. If you're better served by someone else, we'll tell you that too.
                            </p>
                            <div className="pt-2">
                                <a
                                    href="tel:+919561694914"
                                    className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                                >
                                    Book a Free Consultation
                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Office Detail Cards & Map */}
                        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
                            <div className="bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconPhone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Call</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            <a href="tel:+919561694914" className="hover:text-primary-accent transition-colors">+91 95616 94914</a><br />
                                            <a href="tel:+919012118877" className="hover:text-primary-accent transition-colors">+91 90121 18877</a>
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
                                            1st Floor, Palace Arcade,<br />
                                            Palace Road, Mankavu,<br />
                                            Kozhikode 673002
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

                            {/* Map Embed matching standard look */}
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

            {/* OTHER LOCATIONS LINKS */}
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

export default KozhikodePage;
