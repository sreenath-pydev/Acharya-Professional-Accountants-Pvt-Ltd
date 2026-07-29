import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { locationGroups } from '../../data/locationData';
import AnimatedCounter from '../common/AnimatedCounter';
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
            note: "Businesses that file GSTR-3B but never reconcile it with their purchase register build up ITC mismatches over years. We catch these before they become a department problem.",
            tags: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual", "GST Notice Reply", "ITC Reconciliation"]
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
            note: "Common mistake: mixing personal and business expenses. This causes disallowances during assessments. Proper bookkeeping prevents it from the start.",
            tags: ["ITR Filing", "Tax Planning", "TDS Filing", "NRI Tax Filing", "Tax Audit", "Notice Response"]
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
            note: "Most clients see a cleaner picture of their business within the first three months — without disrupting how they currently work.",
            tags: ["Tally Accounting", "Bank Reconciliation", "Payroll", "PF & ESI Filing", "MIS Reports"]
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
            note: "We conduct audits across manufacturing, trading, healthcare, and services — not just for compliance, but to give owners a report they can actually use.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit", "Audit & Assurance", "Financial Statements"]
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
            note: "Business structure affects your tax liability, your ability to raise funds, and your personal liability exposure. Worth getting right from day one.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "Startup Registration", "ROC Filing"]
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
            note: null,
            tags: ["PF & ESI Filing", "Payroll Processing", "Form 16", "Professional Tax"]
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
        {
            num: "01",
            title: "We're in Kozhikode",
            desc: "Not a remote firm operating from Bengaluru or Delhi. Our office is in Mankavu — and we meet clients in person when that's what they need."
        },
        {
            num: "02",
            title: "No Rotating Relationship Managers",
            desc: "The CA or senior accountant who handles your file is who you actually talk to. Not a helpdesk ticket system."
        },
        {
            num: "03",
            title: "We Flag Problems Early",
            desc: "Most tax notices are predictable. We catch the issues during filing, not after the fact when options are limited."
        },
        {
            num: "04",
            title: "We Don't Work with Everyone",
            desc: "We take on clients we can actually serve well. If your business needs something outside our expertise, we'll tell you honestly."
        }
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

    const areas = [
        {
            title: "CA in Mankavu",
            desc: "Our main head office is located in Mankavu, Kozhikode, providing convenient walk-in support and full in-person consultations."
        },
        {
            title: "SM Street & Mavoor Road",
            desc: "Comprehensive accounting and GST compliance support for retail traders and merchant businesses in the business hubs."
        },
        {
            title: "Kallai Timber & Industrial Zone",
            desc: "Statutory audits, cost records, and tax filings for timber operators and local manufacturers."
        },
        {
            title: "Vadakara & Koyilandy",
            desc: "GST returns, NRI taxation advice, and business registration for clients across Northern Kozhikode district."
        },
        {
            title: "Feroke & Ramanattukara",
            desc: "Bookkeeping and payroll management for tile factories, trading houses, and clay processing units."
        },
        {
            title: "All of Kozhikode — Online",
            desc: "Remote consulting via WhatsApp, documents via email, and zero-travel digital compliance workflows."
        }
    ];

    const faqs = [
        {
            q: "What services does a CA in Kozhikode provide?",
            a: "A CA may help with GST registration and filing, income tax returns, bookkeeping, audits, company registration, tax planning and other compliance requirements. The exact service depends on your business or personal situation."
        },
        {
            q: "How much do accounting and tax services cost in Kozhikode?",
            a: "For a small proprietorship needing GST filing and ITR, monthly retainer costs typically range from ₹2,500 to ₹6,000. Companies needing statutory audit, payroll and full compliance fall in a higher range. We provide a fixed-fee quote after understanding your business."
        },
        {
            q: "Do you provide accounting services in Kozhikode for small businesses?",
            a: "Yes. Accounting requirements vary from business to business. We can discuss regular bookkeeping, reconciliation, financial reports and the compliance work connected to your business."
        },
        {
            q: "Do I need to visit the office for tax or accounting work?",
            a: "Not always. Many routine services can be handled through digital document sharing, phone calls and online communication. Some requirements may need an in-person meeting depending on the nature of the work."
        },
        {
            q: "Do you have a CA firm in Calicut?",
            a: "Calicut is the older, more commonly used name for Kozhikode. Our office in Mankavu serves the same city under both names, so if you are comparing CA firms in Calicut, we are one of the options based right here."
        },
        {
            q: "What should I look for in a CA firm in Kozhikode?",
            a: "Look at how directly you can reach the person handling your work, whether the fee is clear before you start, and whether they explain filings in plain language instead of just submitting paperwork. A track record of on-time filing and no penalty history is worth asking about directly."
        },
        {
            q: "Can you help NRIs with Indian income and property taxation?",
            a: "Yes. NRI tax requirements can involve rental income, capital gains, TDS and other Indian tax matters. We first understand the details of the income or transaction and then advise on the relevant compliance work."
        },
        {
            q: "Can you help if my previous accounts or filings are not up to date?",
            a: "We can review the available records and explain what is pending. The steps required depend on the condition of the accounts, previous filings and the nature of the issue."
        }
    ];

    const kozhikodeAreas = [
        "Mankavu", "Mavoor Road", "SM Street", "Kallai", "Vadakara", "Koyilandy", "Feroke", "Ramanattukara", "Kallai Road"
    ];

    const accountingServiceSchema = {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        "name": "Acharya Professional Accountants",
        "image": "https://www.acharyaprofessionalaccountants.in/images/Acharya-Professional-Accountants-OG-image.webp",
        "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-kozhikode",
        "telephone": "+919562069434",
        "email": "acharya.apa@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, Palace Arcade, Palace Road, Mankavu",
            "addressLocality": "Kozhikode",
            "addressRegion": "Kerala",
            "postalCode": "673002",
            "addressCountry": "IN"
        },
        "areaServed": ["Kozhikode", "Vadakara", "Koyilandy", "Ramanattukara", "Feroke", "Beypore"],
        "priceRange": "₹₹",
        "foundingDate": "2015",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "96"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Accounting and Tax Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Registration & Filing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Income Tax Filing & Planning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accounting & Bookkeeping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audit & Assurance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Registration" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NRI Tax & Property Income" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm & Accounting Services in Kozhikode | Acharya"
                description="CA firm in Kozhikode with 500+ clients and a zero penalty record. GST, income tax, bookkeeping, audit, and NRI tax support. Get your free consultation now."
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-kozhikode"
                schema={[accountingServiceSchema, faqSchema]}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingServiceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text KKD */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    KKD
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Kozhikode
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Kozhikode</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            We handle GST filing, income tax, bookkeeping, audit, payroll, and company compliance — from small proprietorships in Mavoor Road to established trading companies in Kallai.
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

                        <div className="flex flex-wrap gap-2 pt-6">
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">GST Filing</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Income Tax</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Audit & Assurance</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Bookkeeping</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Company Registration</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Payroll & PF</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">NRI Tax</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">TDS Filing</span>
                        </div>
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={500} suffix="+" />
                                </span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={10} suffix="+" />
                                </span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in Kozhikode</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={100} suffix="%" />
                                </span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">On-Time Filing</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={0} prefix="₹" />
                                </span>
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

            {/* WHO WE ARE (ABOUT) SECTION */}
            <section id="about" className="py-20 bg-secondary-dark/10 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Content column */}
                        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-primary-accent"></span>
                                <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                    Who We Are
                                </span>
                            </div>
                            <h2 className="font-montserrat text-3xl md:text-4xl font-bold leading-tight">
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Kozhikode
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — a CA firm operating in Kozhikode, providing accounting, tax, and compliance services to businesses and individuals across the district. Our main office is located here in Mankavu, and we've been serving the local trade ecosystem since 2015.
                                </p>
                                <p>
                                    Whether you need to file your GST returns before the deadline, register your new company, respond to an income tax notice, or simply get your books in order before year-end — <strong className="text-white font-semibold">we handle it all under one roof</strong>, with qualified CAs who are directly accessible to you.
                                </p>
                                <p>
                                    We work with sole traders, MSMEs, partnership firms, private limited companies, wholesalers, restaurants, and NRI clients. If you have a financial compliance need in Kozhikode, our doors are always open.
                                </p>
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

                        {/* Right pillars column */}
                        <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl" data-aos="fade-left">
                            <h3 className="font-montserrat text-lg font-bold text-white mb-4 pb-2 border-b border-white/5">
                                Our Client Promises
                            </h3>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🏛️</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">ICAI-Qualified CAs</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        All engagements are led by ICAI-registered chartered accountants. No delegation to unqualified staff.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Based in Kozhikode</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Our office is in Mankavu. Walk in, call, or WhatsApp — we are always reachable in Malayalam or English.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">📅</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Deadline-Driven Process</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Every client file has a compliance calendar. We file before the due date — you never pay a late fee.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🔒</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Confidential & Secure</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Your financial data stays private. We follow strict document handling and data security protocols.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">💬</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Jargon-Free Advice</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        We explain your tax position in plain language so you always know where you stand — no confusing accounting-speak.
                                    </p>
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
                            Accounting Services in <span className="italic text-primary-accent">Kozhikode</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            We offer a complete range of financial and compliance services — all delivered by qualified CAs, tailored to the scale of your business.
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
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-montserrat text-sm font-semibold text-primary-accent/50 block">
                                            {service.num}
                                        </span>
                                        <span className="text-2xl rounded-lg bg-primary-accent/5 w-10 h-10 flex items-center justify-center border border-white/5">
                                            {index === 0 ? "📊" : index === 1 ? "🧾" : index === 2 ? "📒" : index === 3 ? "🔍" : index === 4 ? "🏢" : "💻"}
                                        </span>
                                    </div>
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
                                                <span className="text-xs leading-relaxed text-boulder">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {service.note && (
                                    <div className="border-l-2 border-primary-accent pl-4 py-2 mt-4 bg-primary-accent/5 rounded-r-xl">
                                        <p className="text-[11px] text-boulder italic leading-relaxed">
                                            {service.note}
                                        </p>
                                    </div>
                                )}
                                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] uppercase tracking-wider font-semibold text-silver-sand bg-white/5 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
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
                            We work across most industries in the Kozhikode district. A few of the business types we handle most often:
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
            <section id="why-us" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Clients Choose Our <span className="italic text-primary-accent">CA Firm in Kozhikode</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Why us list */}
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

                        {/* Testimonials stack */}
                        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
                            {testimonials.map((t, index) => (
                                <div
                                    key={index}
                                    className="bg-secondary-dark border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300"
                                    style={{ borderLeft: index === 1 ? '3px solid #e5a145' : '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <span className="font-serif text-primary-accent/10 text-7xl absolute -top-4 -left-2 select-none pointer-events-none">
                                        “
                                    </span>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 pt-4 italic relative z-10">
                                        {t.text}
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

            {/* AREAS COVERED SECTION */}
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
                            We Serve All of <span className="italic text-primary-accent">Kozhikode</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services reach every corner of Kozhikode district — in person at our Mankavu office and online.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {areas.map((area, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <h3 className="font-montserrat text-lg font-bold text-primary-accent mb-2">
                                    {area.title}
                                </h3>
                                <p className="text-boulder text-sm leading-relaxed">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                            Common Questions — <span className="italic text-primary-accent">CA Services Kozhikode</span>
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
            <section className="py-8 bg-secondary-dark/40 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-4">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-bold whitespace-nowrap">
                        We Cover
                    </span>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {kozhikodeAreas.map((area) => (
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

            {/* CTA SECTION & CONTACT INFO */}
            <section id="contact" className="py-20 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact details text */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-aos="fade-right">
                            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Kozhikode
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Free first consultation. Bring your GST, tax, audit, or registration question — we will give you a straight answer and a clear quote, no obligations.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="tel:+919561694914"
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

                            {/* Map Embed */}
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

export default KozhikodePage;
