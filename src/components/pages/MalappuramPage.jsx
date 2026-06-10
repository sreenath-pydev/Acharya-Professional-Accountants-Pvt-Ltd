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

const MalappuramPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const services = [
        {
            num: "01",
            title: "GST Registration & Filing",
            intro: "We handle GST registration and filing for businesses across Malappuram — from new shops registering for the first time to established traders reconciling years of ITC.",
            items: [
                "GST registration for new businesses and threshold crossings",
                "Monthly and quarterly GSTR-1 and GSTR-3B filing",
                "Annual GSTR-9 reconciliation",
                "ITC verification and GSTR-2B reconciliation",
                "E-invoicing setup for applicable businesses",
                "GST notice response and departmental representation"
            ],
            note: "If your ITC claims don't match GSTR-2B, or you've received a mismatch notice, we sort it out — and put systems in place so it doesn't recur."
        },
        {
            num: "02",
            title: "NRI Taxation & Foreign Income",
            intro: "We provide NRI tax filing and compliance services for Malappuram families managing income, property, and remittances from the Gulf and abroad.",
            items: [
                "ITR filing for NRIs — rental, capital gains, interest income",
                "15CA/15CB certificates for foreign remittances",
                "FEMA compliance — NRO to NRE transfers, repatriation",
                "TDS on NRI property transactions — buyer and seller",
                "Capital gains on property sales, shares, mutual funds",
                "RBI filing for property purchases and investments",
                "Power of Attorney-based accounting — fully remote"
            ],
            note: "Most of our NRI clients in Malappuram never need to visit our office. Filings, reports, and queries are all handled remotely."
        },
        {
            num: "03",
            title: "Income Tax Filing & Planning",
            intro: "We file income tax returns for individuals, businesses, HUFs, and companies in Malappuram — and plan ahead to reduce legitimate tax liability.",
            items: [
                "ITR filing for individuals, HUFs, firms, LLPs, and companies",
                "Advance tax — avoiding Section 234B and 234C interest",
                "TDS filing — Form 24Q, 26Q, 27Q, 27EQ",
                "Tax planning — 80C, 80D, capital gains exemptions 54 & 54F",
                "Notice response — Sections 143(1), 143(2), 148",
                "PAN and TAN applications"
            ],
            note: "We also advise on tax-efficient structuring for Gulf returnees setting up businesses — a decision that affects your tax liability for years ahead."
        },
        {
            num: "04",
            title: "Bookkeeping & Accounting",
            intro: "We maintain clean, audit-ready books for businesses in Malappuram — monthly, on time, with reports you can actually read.",
            items: [
                "Monthly bookkeeping in Tally, Zoho Books, or QuickBooks",
                "Ledger maintenance and reconciliation",
                "P&L statements and balance sheets",
                "Bank reconciliation statements (BRS)",
                "MIS reports for business decisions",
                "Year-end accounts finalization",
                "Accounts preparation for bank loan applications"
            ],
            note: "If your books are currently unreconciled or running on rough estimates — we take over without disruption and bring them up to standard within the first quarter."
        },
        {
            num: "05",
            title: "Audit & Assurance",
            intro: "We conduct statutory audits, tax audits, and internal audits for companies and businesses across Malappuram that are required to comply under the Companies Act and Income Tax Act.",
            items: [
                "Statutory audit under the Companies Act 2013",
                "Tax audit under Section 44AB of the Income Tax Act",
                "GST audit and annual return (GSTR-9C)",
                "Internal audit for process and financial controls",
                "Stock audit for businesses with large inventory",
                "Bank audit support"
            ],
            note: "We work with trading companies, manufacturing units, clinics, and schools across the district. The audit report you get is one you can use, not just file."
        },
        {
            num: "06",
            title: "Company Registration & Compliance",
            intro: "We register new businesses and handle ongoing compliance for companies, LLPs, and firms operating in Malappuram.",
            items: [
                "Private limited company incorporation",
                "LLP and partnership firm registration",
                "Sole proprietorship setup — Udyam, GST, professional tax",
                "ROC filings — annual returns, director changes",
                "MCA compliance for active companies",
                "MSME / Udyam registration"
            ],
            note: "Before registering, we advise on the right structure for your business. Getting this right from day one saves you compliance cost and tax for years."
        }
    ];

    const industries = [
        { icon: "🏪", name: "Wholesale & Retail Traders", desc: "High-volume businesses in Perinthalmanna and Manjeri with complex GST obligations, interstate transactions, and ITC reconciliation requirements." },
        { icon: "✈️", name: "NRI Families & Gulf-Linked Businesses", desc: "ITR filing, property income reporting, FEMA compliance, and business setup support for those managing Indian income from abroad." },
        { icon: "🔄", name: "Gulf Returnees Starting Businesses", desc: "Registration, accounting setup, and first-year compliance for entrepreneurs setting up after returning from the Middle East." },
        { icon: "🧵", name: "Textile & Export Businesses", desc: "GST for interstate and export transactions, refund filings, and documentation compliance for Tirur-based exporters." },
        { icon: "🏥", name: "Healthcare & Clinics", desc: "Statutory audit, payroll, TDS, and careful navigation of GST on exempt vs. taxable healthcare services." },
        { icon: "🏗️", name: "Construction & Real Estate", desc: "Project-based bookkeeping, sub-contractor TDS, and GST on works contracts handled properly from the start." },
        { icon: "🎓", name: "Educational Institutions", desc: "ROC compliance, payroll, and GST applicability for schools, colleges, and coaching centres across Malappuram." },
        { icon: "💻", name: "Freelancers & Consultants", desc: "Tax planning, GST registration, advance tax, and foreign income declarations for professionals with international clients." }
    ];

    const whyUs = [
        { num: "01", title: "We're accessible from anywhere in the district", desc: "Our Kozhikode office is reachable from Manjeri in under an hour. For most clients, we work remotely — calls, WhatsApp, and digital documents. For audits, we visit." },
        { num: "02", title: "We explain what we're doing", desc: "You'll know what's being filed, when, and why. We don't work silently in the background and send you a bill at the end of the month." },
        { num: "03", title: "We fix what others left behind", desc: "If your previous accountant stopped responding or left your books in disarray, we've seen it before. We start with a compliance review — no judgment, just a clear picture of where things stand." },
        { num: "04", title: "Fixed-fee pricing", desc: "We quote before we start. The scope, the fee, and the deliverables are agreed upfront. No per-filing surprises, no scope creep billing." }
    ];

    const testimonials = [
        {
            text: "We've had rental property in Malappuram for years but were filing returns inconsistently from Dubai. Acharya sorted the backlog, handled two notices, and now manages everything on an annual basis. Never had to travel back for it.",
            attr: "NRI Client, Dubai · Rental income & property compliance"
        },
        {
            text: "Our wholesale business in Perinthalmanna had GST mismatches going back two years. The team identified them, filed the corrections, and set up a proper reconciliation process. We haven't had a notice since.",
            attr: "Proprietor · Wholesale Trader, Perinthalmanna"
        },
        {
            text: "I came back from Qatar and wanted to start a trading business in Manjeri. Acharya helped me decide between a proprietorship and a private limited company, handled the registration, and set up the books. Straightforward from day one.",
            attr: "Gulf Returnee · Business Owner, Manjeri"
        }
    ];

    const faqs = [
        {
            q: "Do you file income tax returns for NRIs in Malappuram?",
            a: "Yes. We handle ITR-2 and ITR-3 for NRIs with rental income, property gains, and foreign remittances. We also manage 15CA/15CB filings and FEMA compliance. Everything is handled remotely — NRI clients don't need to visit our office."
        },
        {
            q: "What does GST filing cost for a small business in Malappuram?",
            a: "For a small business with regular monthly transactions, GST filing starts from ₹1,500–₹2,500 per month depending on volume. Full bookkeeping plus GST typically ranges from ₹3,000–₹7,000 per month. We give a fixed quote after a brief conversation about your business."
        },
        {
            q: "Can you manage accounts for a business run remotely from the Gulf?",
            a: "Yes. We work with several Malappuram businesses co-managed by NRIs abroad. Books are maintained digitally, GST and income tax are filed on schedule, and financial reports are shared monthly. No in-person presence needed for routine compliance."
        },
        {
            q: "I received an income tax notice — can you help?",
            a: "Yes. We handle notice responses and representation before the Assessing Officer. Common notice types: non-filing, high-value transaction flags, TDS mismatches, and scrutiny assessments under Section 143(2). We assess the notice, advise on the response, and represent you if required."
        },
        {
            q: "My previous accountant is unavailable and I don't know what's been filed.",
            a: "The first step is pulling your filing history from the Income Tax portal and the GST portal — everything filed under your PAN or GSTIN is visible there. When you come to us, we do a compliance review first — we assess what's been filed, what's outstanding, and what needs correction — before taking anything over."
        },
        {
            q: "Do you handle business registration in Malappuram?",
            a: "Yes — private limited company, LLP, partnership, sole proprietorship. We also cover Udyam registration, GST, PF, ESI, and professional tax setup. If you're a Gulf returnee setting up a new business, we walk you through the structure decision before filing anything."
        }
    ];

    const malappuramAreas = [
        "Malappuram", "Manjeri", "Perinthalmanna", "Tirur", "Kottakkal",
        "Nilambur", "Kondotty", "Valanchery", "Tirurangangadi", "Ponnani"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA & Accounting Services in Malappuram | Acharya PA"
                description="Acharya Professional Accountants offers GST filing, income tax, NRI taxation, audit & bookkeeping for businesses across Malappuram. Call for a free consultation."
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-malappuram"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants",
                    "description": "CA firm offering GST, income tax, audit, and bookkeeping services in Malappuram, Kerala",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-malappuram",
                    "telephone": ["+919561694914", "+919012118877"],
                    "email": "acharya.apa@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "1st Floor, Palace Arcade, Palace Road, Mankavu",
                        "addressLocality": "Kozhikode",
                        "addressRegion": "Kerala",
                        "postalCode": "673002",
                        "addressCountry": "IN"
                    },
                    "areaServed": malappuramAreas,
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text MLP */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    MLP
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Malappuram · ICAI Registered · Est. 2015
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA &amp; Accounting<br />
                            Services in<br />
                            <span className="italic text-primary-accent">Malappuram</span>
                        </h1>
                        <div className="text-lg text-boulder max-w-xl space-y-4">
                            <p>
                                We work with businesses, traders, professionals, and NRI families across Malappuram district — handling their accounting, GST, income tax, and compliance so they don't have to.
                            </p>
                            <p>
                                Whether you run a wholesale trading firm in Perinthalmanna, a clinic in Tirur, a textile business in Manjeri, or manage property income from abroad — we know what your compliance looks like and we handle it properly.
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

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        {/* Decorative background pulse */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">10+</span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in practice</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">500+</span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Clients across Kerala</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">ICAI</span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Registered firm</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">All</span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Malappuram covered</span>
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
                                What we do
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Our CA &amp; Accounting Services in Malappuram
                        </h2>
                        <p className="text-boulder text-lg">
                            Handled by qualified CAs — not outsourced to a junior team.
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

            {/* WHO WE WORK WITH */}
            <section className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Who we work with
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Businesses We Serve in Malappuram
                        </h2>
                        <p className="text-boulder text-lg">
                            We work across most sectors in the district. The business types we handle most often.
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
                            Why Businesses in Malappuram Work With Us
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
                            What Our Clients Say
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

            {/* LOCATIONS STRIP */}
            <section className="py-8 bg-secondary-dark/40 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-4">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-bold whitespace-nowrap">
                        We Serve
                    </span>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {malappuramAreas.map((area) => (
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

            {/* CTA SECTION & OFFICE INFO */}
            <section id="contact" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact details text */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-aos="fade-right">
                            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Talk to a CA —<br />No Obligation
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Whether it's a GST issue, a tax notice, a backlog to clear, or just wanting to understand your current compliance position — call us. The first conversation is free.
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
                                            Kozhikode, Kerala 673002
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

export default MalappuramPage;
