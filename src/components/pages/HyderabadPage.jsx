import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { locationGroups } from '../../data/locationData';
import AnimatedCounter from '../common/AnimatedCounter';
import {
    IconCheck,
    IconPhone,
    IconEnvelope,
    IconMapMarker,
    IconClock
} from '../common/Icons';

const HyderabadPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const miniStats = [
        { num: "750+", label: "Hyderabad Clients" },
        { num: "14+", label: "Years Active" },
        { num: "100%", label: "On-Time Filings" },
        { num: "₹0", label: "Late Penalties" }
    ];

    const tickerItems = [
        "GST Filing Hyderabad",
        "Income Tax Consultant Hyderabad",
        "Company Registration Hyderabad",
        "RERA Compliance Hyderabad",
        "Pharma Export GST",
        "NRI Tax Filing Hyderabad",
        "Bookkeeping & Payroll",
        "Audit Firm Hyderabad",
        "SEZ GST Compliance"
    ];

    const pills = [
        { text: "GST Filing", lit: true },
        { text: "Income Tax", lit: true },
        { text: "Statutory Audit", lit: true },
        { text: "RERA Compliance", lit: true },
        { text: "Pharma Export GST", lit: false },
        { text: "NRI Tax", lit: false },
        { text: "Company Registration", lit: false },
        { text: "Bookkeeping & Payroll", lit: false }
    ];

    const railBadges = [
        {
            label: "Pharma & Biotech",
            text: "Export GST, drug licensing tax compliance, R&D unit accounting"
        },
        {
            label: "IT / ITES — HITEC City",
            text: "SEZ compliance, software export GST, payroll for tech teams"
        },
        {
            label: "Real Estate & RERA",
            text: "Project accounting, RERA financial filings, GST on construction"
        },
        {
            label: "Telugu NRI — USA / Gulf",
            text: "Remote ITR, TDS on rent, FEMA & capital gains compliance"
        }
    ];

    const values = [
        {
            title: "Sector depth",
            desc: "We understand pharma export documentation, RERA financial disclosures, and SEZ compliance — not just generic GST and ITR."
        },
        {
            title: "Dedicated CA",
            desc: "One qualified chartered accountant owns your file from onboarding through every annual cycle."
        },
        {
            title: "Zero missed deadlines",
            desc: "A live compliance calendar tracks every GST, TDS, RERA, and ROC due date for your account."
        },
        {
            title: "Fixed-fee pricing",
            desc: "You know your annual cost before we start — no hourly billing, no year-end surprises."
        },
        {
            title: "Fully digital",
            desc: "Documents via WhatsApp, filed returns by email — no office visit required for routine work."
        }
    ];

    const services = [
        {
            ico: "📊",
            title: "GST Filing Services Hyderabad",
            desc: "We manage your complete GST lifecycle — registration, monthly GSTR-1 and GSTR-3B, GSTR-9 annual reconciliation, and notice replies. For pharma and biotech exporters, we handle LUT filing for zero-rated exports and ITC refund claims on input costs. For SEZ units in HITEC City, we manage the specific GST and customs documentation that SEZ status requires.",
            chips: ["GST Registration", "GSTR-1 / 3B / 9", "Pharma Export LUT", "SEZ GST Compliance", "ITC Refund Claims", "GST Notice Reply"]
        },
        {
            ico: "🧾",
            title: "Income Tax Consultant Hyderabad",
            desc: "ITR filing for salaried professionals, business owners, and companies — plus advance tax planning, TDS compliance, and notice response.",
            chips: ["ITR Filing", "TDS Filing", "Tax Planning", "Notice Response"]
        },
        {
            ico: "🏗️",
            title: "RERA Accounting Hyderabad",
            desc: "Project-wise financial accounting, escrow account reconciliation, and the financial disclosures required for RERA project registration and quarterly filings.",
            chips: ["RERA Filings", "Escrow Reconciliation", "Project Accounting"]
        },
        {
            ico: "🔍",
            title: "Audit Firm in Hyderabad",
            desc: "Statutory, internal, and tax audits for companies, LLPs, and trusts — with board-ready reports and management observations.",
            chips: ["Statutory Audit", "Internal Audit", "Tax Audit"]
        },
        {
            ico: "💊",
            title: "Pharma & Export Compliance",
            desc: "Specialised GST and tax compliance for Hyderabad's pharma and biotech sector — export documentation, drug license-linked tax filings, and R&D unit accounting under applicable tax incentive schemes.",
            chips: ["Export Documentation", "R&D Unit Accounting", "Tax Incentive Claims"]
        },
        {
            ico: "🏢",
            title: "Company Registration Hyderabad",
            desc: "Full incorporation — entity selection, DSC/DIN, MCA filing, PAN/TAN, GST registration, and first-year compliance setup.",
            chips: ["Pvt Ltd / LLP", "MSME / Udyam", "ROC Filing"]
        }
    ];

    const comparisonRows = [
        {
            before: "GST filed close to or after the due date, sometimes with late fee",
            after: "Filed 3–5 days early, every month, with zero late fees — guaranteed"
        },
        {
            before: "Different staff handling your file each time you call",
            after: "One dedicated CA who knows your business, reachable directly"
        },
        {
            before: "Pharma export LUT and refund claims delayed by documentation gaps",
            after: "LUT filed on time, refund claims processed without department queries"
        },
        {
            before: "RERA quarterly filings rushed, escrow reconciliation incomplete",
            after: "Project accounts reconciled monthly, RERA filings always ready on time"
        },
        {
            before: "Variable hourly billing with extra charges at year-end",
            after: "One fixed annual fee, agreed and invoiced exactly as quoted"
        },
        {
            before: "NRI clients needing to travel to India for tax matters",
            after: "Full remote service via WhatsApp — zero travel required, ever"
        }
    ];

    const testimonials = [
        {
            role: "Pharma Export · Genome Valley",
            text: "We manufacture and export bulk drug intermediates. Our GST refund claims used to sit pending for months due to documentation gaps. Acharya restructured our export filing process — refunds now come through in weeks, not months.",
            author: "Dr. Madhavi R.",
            company: "Director, Pharma Manufacturer, Genome Valley"
        },
        {
            role: "Real Estate · Gachibowli",
            text: "We have two RERA-registered residential projects in Gachibowli. Acharya manages our project-wise accounting and quarterly RERA filings — escrow reconciliation that used to take our team two weeks now takes a few days.",
            author: "Srinivas Reddy.",
            company: "Director, Real Estate Developer, Gachibowli"
        },
        {
            role: "Telugu NRI · Texas, USA",
            text: "I have rental property and mutual fund investments in Hyderabad while living in Texas. Acharya manages my ITR, TDS reconciliation, and FEMA paperwork remotely. I haven't had to travel back for tax matters in three years.",
            author: "Anil Kumar V.",
            company: "NRI Client, Texas, USA"
        }
    ];

    const areas = [
        {
            title: "HITEC City & Madhapur",
            desc: "GST, payroll and SEZ compliance for IT, ITES and software companies in the tech corridor."
        },
        {
            title: "Gachibowli",
            desc: "RERA accounting, GST and statutory audit for real estate developers and corporate offices."
        },
        {
            title: "Banjara Hills & Jubilee Hills",
            desc: "Income tax, bookkeeping and company registration for professionals and established businesses."
        },
        {
            title: "Genome Valley",
            desc: "Export GST, R&D accounting and compliance for pharma, biotech and life sciences companies."
        },
        {
            title: "Kukatpally & Miyapur",
            desc: "GST filing, bookkeeping and income tax for retail businesses and trading firms."
        },
        {
            title: "Secunderabad",
            desc: "Company registration, audit and accounting services for businesses across the twin city."
        },
        {
            title: "Hyderabad NRI Clients",
            desc: "Remote ITR, TDS, FEMA and capital gains compliance for Telugu NRIs across the US and Gulf."
        },
        {
            title: "All of Hyderabad — Online",
            desc: "Full digital CA service anywhere in Hyderabad — WhatsApp, email, and video consultations."
        }
    ];

    const faqs = [
        {
            q: "Do you have an office in Hyderabad?",
            a: "Yes. We operate from our Hyderabad office and are available for in-person consultations. We also serve clients across HITEC City, Gachibowli, Banjara Hills, Kukatpally, Secunderabad, and all other parts of the city entirely online via WhatsApp and email."
        },
        {
            q: "We are a pharma exporter in Genome Valley. What GST services do you provide?",
            a: "Pharma and bulk drug exports are zero-rated under GST, which requires filing a Letter of Undertaking (LUT) annually to supply without charging GST. We file your LUT, manage GSTR-1 for export supplies, and handle ITC refund claims on GST paid for raw materials and packaging — a process that often gets delayed due to documentation mismatches. We ensure your shipping bills, export invoices, and bank realisation certificates align correctly so refunds are processed without department queries."
        },
        {
            q: "We have a RERA-registered project in Gachibowli. What accounting support do you provide?",
            a: "RERA-registered real estate projects require maintaining a separate escrow account for at least 70% of customer collections, with quarterly progress and financial disclosures filed with the RERA authority. We handle the escrow account reconciliation, project-wise cost tracking, and the financial statements required for your quarterly RERA filing — ensuring your disclosures match your actual project accounts."
        },
        {
            q: "Our IT company operates from an SEZ unit in HITEC City. What compliance do you handle?",
            a: "SEZ units have specific GST treatment — supplies to SEZ units are typically zero-rated, and SEZ units themselves have separate compliance obligations including Softex filing for software exports, customs bonding requirements, and periodic returns to the Development Commissioner. We manage the GST and tax compliance layer alongside your standard ITR, TDS, and payroll needs."
        },
        {
            q: "I am a Telugu NRI in the USA with property in Hyderabad. Can you manage my taxes remotely?",
            a: "Yes. We handle ITR filing for NRI status, TDS reconciliation on rental income, capital gains computation on property sales, FEMA compliance for repatriating funds, and DTAA benefit claims under the India-USA tax treaty. All coordination happens via WhatsApp and email — you do not need to travel to Hyderabad for any of this."
        },
        {
            q: "How quickly can you register a new company in Hyderabad?",
            a: "A Private Limited Company registration typically takes 10–15 working days from document submission, subject to MCA processing. We manage DSC, DIN, name reservation, incorporation, and immediate post-registration PAN, TAN, and GST registration — so your business is fully operational as quickly as possible."
        },
        {
            q: "What does your GST filing service cost in Hyderabad?",
            a: "Our GST filing packages are fixed-fee, structured by filing frequency and transaction volume. We provide a precise quote in your first consultation based on your business type and GSTIN profile — including specialised pricing for export-heavy businesses requiring LUT and refund management. No hidden charges for routine filings within the agreed scope."
        }
    ];

    const hyderabadAreas = [
        "HITEC City", "Madhapur", "Gachibowli", "Banjara Hills", "Jubilee Hills", "Genome Valley", "Kukatpally", "Miyapur", "Secunderabad"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Hyderabad | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Hyderabad offering GST filing, income tax, statutory audit, RERA compliance, pharma export GST and company registration across HITEC City, Gachibowli, Banjara Hills and Kukatpally."
                keywords="CA firm in Hyderabad, chartered accountant in Hyderabad, GST filing Hyderabad, income tax consultant Hyderabad, audit firm Hyderabad, accounting services Hyderabad, company registration Hyderabad, RERA Hyderabad, NRI tax Hyderabad"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-hyderabad"
                robots="noindex,follow"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Hyderabad",
                    "description": "CA firm in Hyderabad offering GST filing, income tax, statutory audit, RERA compliance, pharma export GST and company registration.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-hyderabad",
                    "telephone": ["+919562069434", "+919072118877"],
                    "email": "acharya.apa@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Hyderabad",
                        "addressLocality": "Hyderabad",
                        "addressRegion": "Telangana",
                        "addressCountry": "IN"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Hyderabad" },
                        { "@type": "City", "name": "HITEC City" },
                        { "@type": "City", "name": "Gachibowli" },
                        { "@type": "City", "name": "Banjara Hills" },
                        { "@type": "City", "name": "Kukatpally" },
                        { "@type": "City", "name": "Secunderabad" },
                        { "@type": "City", "name": "Madhapur" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Statutory Audit", "RERA Compliance", "Pharma Export GST", "NRI Tax", "Company Registration"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative animate-fade-in" data-aos="fade-up">
                {/* Backdrop watermark text HYD */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    HYD
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Hyderabad
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Hyderabad</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            We manage GST compliance, income tax, statutory audit, RERA accounting, pharma export compliance, and company registration for businesses across Hyderabad — accurately, on time, every time.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                Book Free Consultation
                            </Link>
                            <Link
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                View All Services
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-6">
                            {pills.map((pill, idx) => (
                                <span
                                    key={idx}
                                    className={`text-[10px] md:text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border transition-all duration-300 ${pill.lit
                                            ? 'border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold'
                                            : 'border-white/5 text-boulder bg-transparent'
                                        }`}
                                >
                                    {pill.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        {/* Decorative background pulse */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={750} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={14} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years Active</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={100} suffix="%" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">On-Time Filings</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={0} prefix="₹" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Late Penalties</span>
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Hyderabad
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm operating in Hyderabad. We provide GST compliance, income tax filing, statutory audit, RERA-related accounting, export compliance for pharma and biotech companies, NRI tax services, bookkeeping, and company registration — all delivered by qualified CAs assigned directly to your account.
                                </p>
                                <p>
                                    Our Hyderabad client base spans pharmaceutical and biotech manufacturers in Genome Valley, IT and ITES companies across HITEC City and Gachibowli, real estate developers managing RERA-registered projects, government and PSU contractors, and Telugu NRI families with property and investment interests back home. <strong className="text-white font-semibold">Every engagement is handled by a single dedicated CA</strong>, tracked on a live compliance calendar, with zero late filings.
                                </p>
                                <p>
                                    We communicate in Telugu, Hindi, and English — and serve clients in person at our Hyderabad office or entirely online via WhatsApp and email.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="inline-flex items-center bg-primary-accent text-dark-bg px-8 py-3.5 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                >
                                    Talk to Our CA <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right pillars column */}
                        <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl" data-aos="fade-left">
                            <h3 className="font-montserrat text-lg font-bold text-white mb-4 pb-2 border-b border-white/5">
                                What Defines Our Hyderabad Practice
                            </h3>

                            <ul className="space-y-4">
                                {values.map((v, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-boulder">
                                        <span className="text-primary-accent mt-1 flex-shrink-0">
                                            <IconCheck className="w-4.5 h-4.5" />
                                        </span>
                                        <div>
                                            <strong className="text-white font-bold text-sm block">{v.title}</strong>
                                            <span className="text-xs text-boulder leading-relaxed mt-0.5 block">{v.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="font-montserrat text-lg font-bold text-white mt-8 mb-4 pb-2 border-b border-white/5">
                                Sectors We Serve in Hyderabad
                            </h3>

                            <ul className="space-y-4">
                                {railBadges.map((badge, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-boulder">
                                        <span className="text-primary-accent mt-1 flex-shrink-0 font-bold">◆</span>
                                        <div>
                                            <strong className="text-white font-bold text-sm block">{badge.label}</strong>
                                            <span className="text-xs text-boulder leading-relaxed mt-0.5 block">{badge.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
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
                            Accounting Services in <span className="italic text-primary-accent">Hyderabad</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Full-spectrum financial and compliance services for Hyderabad's pharma, IT, real estate, and trading sectors.
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
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-2xl rounded-lg bg-primary-accent/5 w-10 h-10 flex items-center justify-center border border-white/5">
                                            {service.ico}
                                        </span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                    {service.chips.map((tag, idx) => (
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
                            What Changes When You Work With <span className="italic text-primary-accent">Acharya</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Comparison Table */}
                        <div className="lg:col-span-7 overflow-x-auto rounded-2xl border border-white/5 bg-secondary-dark/40 shadow-2xl" data-aos="fade-right">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-secondary-dark/80">
                                        <th className="p-4 text-left text-xs uppercase tracking-wider font-semibold text-silver-sand border-b border-white/5">
                                            Before
                                        </th>
                                        <th className="p-4 text-left text-xs uppercase tracking-wider font-semibold text-primary-accent border-b border-white/5 text-center">
                                            →
                                        </th>
                                        <th className="p-4 text-left text-xs uppercase tracking-wider font-semibold text-silver-sand border-b border-white/5">
                                            After
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row, idx) => (
                                        <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors">
                                            <td className="p-4 text-xs text-boulder leading-relaxed">
                                                {row.before}
                                            </td>
                                            <td className="p-4 text-xs text-primary-accent font-bold text-center">
                                                →
                                            </td>
                                            <td className="p-4 text-xs text-white font-semibold leading-relaxed">
                                                {row.after}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                                            {t.author}
                                        </span>
                                        <span className="text-[10px] text-boulder block">
                                            {t.company}
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
                                Where We Work
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Serving All of <span className="italic text-primary-accent">Hyderabad</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services cover every major business zone across Hyderabad — in person and fully online.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {areas.map((area, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <h3 className="font-montserrat text-sm font-bold text-primary-accent mb-2 leading-tight">
                                    {area.title}
                                </h3>
                                <p className="text-boulder text-xs leading-relaxed">
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Hyderabad</span>
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
                        {hyderabadAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Hyderabad
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                First consultation is free. GST, income tax, RERA accounting, pharma export compliance, or company registration — bring your question and we will give you a direct answer and a fixed-fee quote.
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
                                            Hyderabad, Telangana
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
                                            <RouterLink
                                                key={city}
                                                to={`/accounting-service-in-${slug}`}
                                                className="inline-block bg-white/5 hover:bg-primary-accent hover:text-dark-bg text-boulder hover:text-white text-xs md:text-sm px-4 py-2 rounded-full transition-all duration-300 border border-white/5 hover:border-transparent"
                                            >
                                                {city}
                                            </RouterLink>
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

export default HyderabadPage;
