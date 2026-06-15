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

const KochiPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Kochi",
        "Income Tax Consultant Kochi",
        "Company Registration Kochi",
        "ESOP Taxation Kochi",
        "Audit Firm Kochi",
        "Transfer Pricing Kochi",
        "Bookkeeping Services Kochi",
        "NRI Tax Filing Kochi",
        "DPIIT Registration Kochi"
    ];

    const features = [
        {
            num: "01",
            title: "Startup-Ready CA Services",
            desc: "From DPIIT registration and founder tax planning to seed-round bookkeeping and compliance setup — we are Kochi's go-to CA for early-stage companies."
        },
        {
            num: "02",
            title: "Corporate & MSME Audit",
            desc: "We conduct statutory, internal, and tax audits for Kochi's companies — from IT service firms to retail chains — with board-ready reports and management observations."
        },
        {
            num: "03",
            title: "NRI & Expat Tax Filing",
            desc: "Kochi's large returning NRI and expat professional community trusts us for ITR filing, FEMA compliance, TDS on property, and capital gains — handled entirely online."
        },
        {
            num: "04",
            title: "RERA & Real Estate Accounting",
            desc: "We provide dedicated accounting, GST, and compliance support for real estate developers and agents operating under RERA in Kochi."
        }
    ];

    const services = [
        {
            icon: "📊",
            title: "GST Filing Services Kochi",
            desc: "We manage your full GST lifecycle — new registration, monthly GSTR-1 and GSTR-3B, quarterly returns for small businesses, annual GSTR-9 reconciliation, and notice replies. For companies with multi-branch operations across Kerala, we coordinate filings across all GSTINs.",
            bullets: [
                "GST Registration Kochi",
                "GSTR-1, 3B Monthly Filing",
                "GSTR-9 & GSTR-9C Annual Return",
                "Input Tax Credit Reconciliation",
                "GST Department Notice Response",
                "Multi-branch GST Coordination"
            ]
        },
        {
            icon: "🧾",
            title: "Income Tax Consultant Kochi",
            desc: "We file income tax returns for salaried professionals, business owners, companies, LLPs, and NRIs with income in India. Beyond filing, we provide year-round tax planning advice — so you structure your income, investments, and business transactions to minimise liability legally.",
            bullets: [
                "ITR Filing — All Categories",
                "Advance Tax Planning & Computation",
                "TDS Filing & TAN Registration",
                "NRI Income Tax & FEMA Compliance",
                "Tax Audit under Section 44AB",
                "Income Tax Notice & Assessment Response"
            ]
        },
        {
            icon: "🔍",
            title: "Audit Firm in Kochi",
            desc: "Our statutory and internal audit practice serves private limited companies, partnership firms, trusts, and co-operatives across Kochi. We deliver audit reports that go beyond compliance — with a management letter that gives your board concrete risk and process observations.",
            bullets: [
                "Statutory Audit — Companies Act",
                "Internal Audit & Process Review",
                "Tax Audit under Section 44AB",
                "Bank Concurrent & Revenue Audit",
                "Trust & Society Audit",
                "Financial Statement Preparation"
            ]
        },
        {
            icon: "📒",
            title: "Bookkeeping Services Kochi",
            desc: "We maintain your books monthly — sales and purchase ledgers, bank reconciliation, employee payroll, PF and ESI filings, and management reports. Your accounts are always current, audit-ready, and formatted for the bank or investor review you have coming up.",
            bullets: [
                "Tally & Cloud Accounting",
                "Monthly Bookkeeping & Reconciliation",
                "Payroll Processing & Payslips",
                "PF, ESI & Professional Tax Filing",
                "MIS Reports & Cash Flow Statements",
                "Accounts Finalisation"
            ]
        },
        {
            icon: "🏢",
            title: "Company Registration Kochi",
            desc: "We handle the full incorporation process for new businesses in Kochi — including entity selection, director KYC and DSC, MCA name reservation, Certificate of Incorporation, and immediate post-registration compliance setup so your company is operational from day one.",
            bullets: [
                "Private Limited Company Registration",
                "LLP & Partnership Firm Registration",
                "MSME / Udyam & Startup India",
                "DPIIT Recognition for Startups",
                "ROC Filing & MCA Annual Compliance",
                "Business Restructuring & Conversion"
            ]
        },
        {
            icon: "💼",
            title: "Virtual CFO Services Kochi",
            desc: "For growing businesses that need financial leadership without a full-time CFO, we provide Virtual CFO services — monthly management accounts, investor reporting, cash flow planning, board-level financial presentations, and strategic tax structuring as your business scales.",
            bullets: [
                "Monthly Management Accounts",
                "Investor & Board Reporting",
                "Cash Flow Forecasting",
                "Business Tax Structuring",
                "Financial Due Diligence Support",
                "Fundraising Financial Preparation"
            ]
        }
    ];

    const whyUs = [
        {
            icon: "🎯",
            title: "Senior CA on Every File — Not Junior Assistants",
            desc: "Your engagement is led by a qualified, ICAI-registered CA from day one. All filings are reviewed at CA level before submission. You get the expertise you are paying for, every time."
        },
        {
            icon: "⚡",
            title: "Fast Turnaround — Kochi Business Timelines",
            desc: "Company incorporations completed in 10–12 working days. GST registrations in 3–5 days. ITR filed and acknowledged same week. We match the pace Kochi businesses operate at."
        },
        {
            icon: "🔗",
            title: "End-to-End Compliance — One Firm for Everything",
            desc: "GST, income tax, audit, payroll, company filings — handled by one team with shared visibility on your account. No gaps between advisors. No overlapping bills. No compliance falling through the cracks."
        },
        {
            icon: "📱",
            title: "Full Digital Service — No Office Visits Required",
            desc: "Every routine compliance task is handled digitally. Submit documents, receive filed returns, and get advice — all via email or WhatsApp. You never need to take time out of your Kochi workday for paperwork."
        },
        {
            icon: "📋",
            title: "Transparent Pricing — Agreed Before We Start",
            desc: "Fixed-fee packages for all standard services. We quote before we engage, invoice exactly what was agreed, and never add extras at year-end. You budget accurately from the first meeting."
        },
        {
            icon: "🛡️",
            title: "Audit-Ready Records — Always, Not Just at Year-End",
            desc: "We maintain your accounts throughout the year in a way that is always audit-ready. When your statutory auditor, bank, or investor asks for financials, we produce them the same day — not after a three-week scramble."
        }
    ];

    const testimonials = [
        {
            text: "We launched our SaaS startup in Kakkanad two years ago. Acharya handled incorporation, GST setup, payroll, and our first statutory audit. Everything was clean and on time. Exactly what a growing startup needs.",
            attr: "Arjun P. · Co-founder, Tech Startup, Kakkanad"
        },
        {
            text: "As a practising doctor running a private clinic in Ernakulam, tax compliance used to stress me out every March. Acharya now handles my ITR, TDS, and GST — I don't think about it at all anymore.",
            attr: "Dr. Nisha R. · Physician, Ernakulam"
        },
        {
            text: "We have three retail outlets across Kochi. Acharya consolidates our bookkeeping, handles all GST returns, and gives us a monthly P&L. For the first time, I know exactly where my business stands financially.",
            attr: "Suresh M. · Retail Business Owner, Edapally"
        }
    ];

    const areas = [
        { title: "Ernakulam", desc: "CA, GST & income tax services for businesses and individuals in the commercial core of Kochi." },
        { title: "Kakkanad", desc: "Startup registration, IT firm payroll, GST & audit for Kochi's tech and business park zone." },
        { title: "Edapally", desc: "Bookkeeping, GST filing and tax consulting for retail businesses and traders in Edapally." },
        { title: "Fort Kochi & Mattancherry", desc: "Accounting and compliance for trading companies, export firms, and heritage businesses." },
        { title: "Aluva", desc: "Company registration, audit and GST services for industrial and manufacturing businesses in Aluva." },
        { title: "Thripunithura & Tripunithura", desc: "Income tax, bookkeeping and compliance services for individuals and small businesses." },
        { title: "Kalamassery", desc: "GST, payroll and audit for manufacturing units and businesses in the Kalamassery industrial area." },
        { title: "All of Kochi — Online", desc: "Fully digital service for any client across Kochi — WhatsApp, email, and video consultations available." }
    ];

    const faqs = [
        {
            q: "Do you have a physical office in Kochi?",
            a: "Yes. We operate from our Kochi office and are available for in-person consultations. We also provide a fully digital service for clients across Ernakulam, Kakkanad, Edapally, Aluva, Fort Kochi, and all other parts of Kochi who prefer to handle compliance remotely via WhatsApp and email."
        },
        {
            q: "Can you register a startup and also handle its ongoing compliance in Kochi?",
            a: "Yes — this is one of our most common engagements. We handle DPIIT startup recognition, Private Limited Company or LLP incorporation, GST registration, TAN registration, first-year bookkeeping setup, payroll structuring, and statutory audit. You get a single firm managing your entire compliance stack from incorporation onwards."
        },
        {
            q: "We are a real estate developer in Kochi. Do you handle RERA-related accounting?",
            a: "Yes. We provide accounting, GST, and financial compliance support specifically for real estate developers and agents registered under Kerala RERA. This includes project-wise accounting, GST on construction services, TDS on contractor payments, and preparing the financial statements required for RERA filings."
        },
        {
            q: "I run an IT company in Kakkanad. What CA services do you offer for tech firms?",
            a: "We work with several IT and software companies in Kakkanad and the surrounding business park zone. Our services include monthly bookkeeping, GST on software and SaaS services (including LUT for exports), payroll processing, PF and ESI compliance, TDS on contractor and consultancy payments, transfer pricing documentation for entities with overseas clients, and statutory audit."
        },
        {
            q: "How do you handle income tax for NRIs returning to or settling in Kochi?",
            a: "We have a dedicated NRI services track — covering ITR filing for NRI/RNOR status years, FEMA compliance for repatriation of overseas earnings, TDS on rental income, capital gains on property sale, and transitioning from NRI to resident status for income tax purposes. All services are available fully online if you are still abroad."
        },
        {
            q: "What are your GST filing fees in Kochi?",
            a: "Our GST filing packages are fixed-fee and transparent — structured by filing frequency (monthly or quarterly) and transaction volume. We provide a precise quote in your first consultation based on your business type, turnover, and the number of GSTINs you hold. There are no hidden charges for routine filings within the agreed scope."
        },
        {
            q: "Can a single CA firm handle both my personal income tax and my company's audit in Kochi?",
            a: "Yes — and this is where working with one firm gives you a clear advantage. Your personal tax position and your company's finances are closely linked, especially for owner-managed businesses. We handle both, which means your tax planning is coherent across your personal and business accounts, and there is no information gap between your ITR and your audit file."
        }
    ];

    const kochiAreas = [
        "Ernakulam", "Kakkanad", "Edapally", "Fort Kochi",
        "Aluva", "Thripunithura", "Kalamassery", "Mattancherry", "Vyttila", "Edappally"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Kochi | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a leading CA firm in Kochi offering GST filing, income tax, statutory audit, company registration & CFO services for startups, MSMEs and corporates across Ernakulam, Kakkanad and Fort Kochi."
                keywords="CA firm in Kochi, chartered accountant in Kochi, GST filing Kochi, income tax consultant Kochi, audit firm Kochi, accounting services Kochi, company registration Kochi, CA Ernakulam"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-kochi"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Kochi",
                    "description": "CA firm in Kochi offering GST filing, income tax, statutory audit, bookkeeping and company registration for startups, MSMEs and corporates.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-kochi",
                    "telephone": ["+919562069434", "+919072118877"],
                    "email": "acharya.apa@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Palace Arcade, Palace Road, Mankavu",
                        "addressLocality": "Kozhikode",
                        "addressRegion": "Kerala",
                        "postalCode": "673002",
                        "addressCountry": "IN"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Kochi" },
                        { "@type": "City", "name": "Ernakulam" },
                        { "@type": "City", "name": "Kakkanad" },
                        { "@type": "City", "name": "Edapally" },
                        { "@type": "City", "name": "Fort Kochi" },
                        { "@type": "City", "name": "Aluva" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Statutory Audit", "Bookkeeping", "Company Registration", "Virtual CFO"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative text-center flex flex-col items-center" data-aos="fade-up">
                {/* Backdrop watermark text COK */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    COK
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-8 h-[1px] bg-primary-accent"></span>
                        <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                            ✦ ICAI Registered · Kochi
                        </span>
                        <span className="w-8 h-[1px] bg-primary-accent"></span>
                    </div>

                    <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        CA Firm in<br />
                        <span className="italic text-primary-accent">Kochi</span>
                    </h1>

                    <p className="text-lg md:text-xl text-boulder max-w-2xl mx-auto">
                        We handle GST, income tax, statutory audit, company registration, and financial compliance for businesses across Kochi — so you stay focused on growth while we keep you compliant.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 justify-center">
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
                            Explore Services
                        </ScrollLink>
                    </div>

                    {/* METRIC BAR */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-secondary-dark/60 border border-white/5 rounded-2xl p-6 max-w-3xl mx-auto mt-12 relative overflow-hidden shadow-2xl">
                        <div className="text-center">
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">800+</span>
                            <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-2">Kochi Clients</span>
                        </div>
                        <div className="text-center border-l border-white/5 md:border-l-0">
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">15+</span>
                            <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-2">Years Active</span>
                        </div>
                        <div className="text-center border-t border-white/5 md:border-t-0 md:border-l border-white/5">
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">100%</span>
                            <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-2">On-Time Filings</span>
                        </div>
                        <div className="text-center border-t border-white/5 border-l border-white/5 md:border-t-0">
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">₹0</span>
                            <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-2">Late Penalties</span>
                        </div>
                        <div className="text-center border-t border-white/5 col-span-2 md:col-span-1 md:border-t-0 md:border-l border-white/5">
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">ICAI</span>
                            <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-2">Registered</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center pt-8">
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">GST Filing</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Income Tax</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Statutory Audit</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Company Registration</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Virtual CFO</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Bookkeeping</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">NRI Tax</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Payroll & PF</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">RERA Compliance</span>
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
            <section id="about" className="py-20 border-t border-white/5 bg-secondary-dark/10">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left intro text */}
                        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-primary-accent"></span>
                                <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                    Who We Are
                                </span>
                            </div>
                            <h2 className="font-montserrat text-3xl md:text-4xl font-bold leading-tight">
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Kochi
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm serving businesses and individuals across Kochi and Ernakulam district. From a single-person startup in Kakkanad to a mid-size export company in Willingdon Island, our clients get the same thing: <strong className="text-white font-semibold">qualified CAs, clean filings, and a team that picks up the phone.</strong>
                                </p>
                                <p>
                                    Kochi's business environment moves fast — new company registrations, RERA projects, IT sector payroll cycles, and multi-state GST transactions all demand accounting support that is both technically sharp and operationally reliable. We provide that. Every engagement is led by a CA, every deadline is tracked, and every filing comes with documentation you can use at your next board meeting or bank review.
                                </p>
                            </div>
                        </div>

                        {/* Right Feature Cards column */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
                            {features.map((feat) => (
                                <div key={feat.num} className="bg-secondary-dark border border-white/5 rounded-2xl p-5 hover:border-primary-accent/30 transition-colors relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-accent to-transparent"></div>
                                    <span className="font-montserrat text-2xl font-bold text-primary-accent/15 block mb-2">
                                        {feat.num}
                                    </span>
                                    <h4 className="text-white font-bold text-xs mb-1.5">{feat.title}</h4>
                                    <p className="text-boulder text-[11px] leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
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
                                What We Do
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Accounting Services in <span className="italic text-primary-accent">Kochi</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Every service delivered from our Kochi office — by the same CA team that knows your business, not a rotating pool of assistants.
                        </p>
                    </div>

                    {/* 2 column grid svc-table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((svc, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-8 hover:border-primary-accent/30 transition-all duration-300 flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-primary-accent/10 border border-primary-accent/30 rounded-xl flex items-center justify-center text-xl flex-shrink-0 text-primary-accent">
                                            {svc.icon}
                                        </div>
                                        <h3 className="font-montserrat text-xl font-bold text-white leading-tight">
                                            {svc.title}
                                        </h3>
                                    </div>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {svc.desc}
                                    </p>
                                    <ul className="space-y-2.5">
                                        {svc.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                                                <span className="text-primary-accent mt-0.5 flex-shrink-0">
                                                    →
                                                </span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section id="why-us" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Kochi Businesses Choose <span className="italic text-primary-accent">Acharya</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Kochi's business community needs a CA team that moves at business speed. We are structured to do exactly that.
                        </p>
                    </div>

                    {/* Icon cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
                        {whyUs.map((card, idx) => (
                            <div key={idx} className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 flex flex-col gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary-accent/10 border border-primary-accent/30 flex items-center justify-center text-xl text-primary-accent flex-shrink-0">
                                    {card.icon}
                                </div>
                                <h4 className="font-montserrat text-base font-bold text-white">{card.title}</h4>
                                <p className="text-boulder text-xs leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials Strip */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" data-aos="fade-up">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300 shadow-xl"
                            >
                                <span className="font-serif text-primary-accent/10 text-8xl absolute top-4 right-4 select-none pointer-events-none">
                                    "
                                </span>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic relative z-10 pt-4">
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
            </section>

            {/* AREAS COVERED SECTION */}
            <section id="areas" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Where We Work
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Serving All of <span className="italic text-primary-accent">Kochi & Ernakulam</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left intro text */}
                        <div className="lg:col-span-4 space-y-6" data-aos="fade-right">
                            <div className="text-boulder text-base md:text-lg leading-relaxed space-y-4">
                                <p>
                                    Our CA and accounting services cover every business hub across Kochi and Ernakulam district — in person at our office or fully online for clients who prefer to work digitally.
                                </p>
                                <p>
                                    Whether you are a startup in Kakkanad's tech corridor, a trader in Broadway, a developer in Aluva, or a returning NRI settling in Thrippunithura — we are your local CA team.
                                </p>
                            </div>
                            <div className="pt-2">
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="bg-primary-accent text-dark-bg px-8 py-3.5 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                                >
                                    Talk to Us <span className="text-lg">→</span>
                                </ScrollLink>
                            </div>
                        </div>

                        {/* Right Area Grid */}
                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-left">
                            {areas.map((area, idx) => (
                                <div
                                    key={idx}
                                    className="bg-secondary-dark border border-white/5 rounded-2xl p-5 hover:border-primary-accent/30 transition-all duration-200"
                                >
                                    <h4 className="font-montserrat text-sm font-bold text-primary-accent mb-1.5">
                                        {area.title}
                                    </h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        {area.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
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
                            Frequently Asked — <span className="italic text-primary-accent">CA Services in Kochi</span>
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
                        {kochiAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Kochi Today
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Your first consultation is free. Bring any question on GST, income tax, audit, company registration, or business compliance — we give you a direct answer and a clear fee quote, with no obligation.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="tel:+919562069434"
                                    className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                                >
                                    📞 Call Now
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
                                            Kochi, Ernakulam, Kerala
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
            <section className="py-16 border-t border-white/5 bg-secondary-dark/10">
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
                                        else if (city.includes('Bengaluru')) slug = 'bangalore';
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

export default KochiPage;
