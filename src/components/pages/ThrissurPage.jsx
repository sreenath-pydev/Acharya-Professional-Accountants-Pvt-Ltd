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

const ThrissurPage = () => {
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
            tag: "All businesses",
            intro: "We register businesses for GST and manage ongoing compliance for clients across Thrissur — from first registrations to annual reconciliation and notice resolution.",
            items: [
                "New GST registration and threshold-based registration",
                "GSTR-1 and GSTR-3B — filed on time, every month",
                "GSTR-9 annual return with full books-to-returns reconciliation",
                "GSTR-2B mismatch analysis and ITC correction workings",
                "E-invoicing setup and IRN generation for eligible businesses",
                "GST refund applications — exporters and inverted duty cases",
                "Departmental representation for audits, notices, and assessments"
            ],
            note: null
        },
        {
            num: "02",
            title: "Income Tax Filing & Planning",
            tag: "All taxpayers",
            intro: "We file income tax returns for individuals, traders, firms, and companies across Thrissur and plan ahead to reduce legitimate tax outflow across the year.",
            items: [
                "ITR filing for individuals, HUFs, firms, LLPs, and companies",
                "Advance tax computation scheduled across quarters to avoid interest",
                "TDS returns — 24Q (salary), 26Q (non-salary), 27Q (NRI payments), 27EQ (TCS)",
                "Tax planning — 80C, 80D, HRA, business expense structuring",
                "Capital gains planning for property sales and apartment purchases",
                "Income tax notice response — Sections 143(1), 143(2), 148, and 139(9)",
                "NRI income tax filing — rental income, property gains, foreign remittances"
            ],
            note: "Thrissur has high real estate transaction volume — plots, apartments near Swaraj Round, and commercial buildings along MG Road. All trigger capital gains and TDS obligations requiring correct handling from both buyer and seller."
        },
        {
            num: "03",
            title: "Bookkeeping & Accounting",
            tag: "Monthly maintenance",
            intro: "We take over the accounts of businesses in Thrissur that need organised, reliable books — maintained month by month so that GST, income tax, and audit are never a scramble.",
            items: [
                "Monthly bookkeeping across Tally, Zoho Books, or existing platforms",
                "Transaction-level ledger posting and reconciliation",
                "Purchase and sales register aligned with GST returns",
                "Bank statement reconciliation with outstanding payment tracking",
                "Monthly management accounts — income, margin, outstanding liabilities",
                "Year-end finalization with schedules for statutory audit",
                "Project reports and financials for bank loans and working capital"
            ],
            note: "For jewellery businesses and traders with high inventory value, we maintain separate stock registers and reconcile monthly against the books — so the audit doesn't surface surprises at year end."
        },
        {
            num: "04",
            title: "Audit & Assurance",
            tag: "Statutory & internal",
            intro: "We conduct statutory, tax, and internal audits for businesses in Thrissur where compliance is mandatory — and for those who want an independent view of their financial operations.",
            items: [
                "Statutory audit under the Companies Act 2013",
                "Tax audit under Section 44AB of the Income Tax Act",
                "GSTR-9C reconciliation statement preparation and certification",
                "Internal audit — financial controls, operational processes, risk areas",
                "Stock audit — gold inventory, production records, raw material and finished goods",
                "Concurrent audit support for bank branches in Thrissur district"
            ],
            note: "For Thrissur's jewellery manufacturers, stock audit is the most critical compliance activity — reconciling physical gold against purchase records, job work orders, sales, and GST filings. We conduct these with the rigour the sector demands."
        },
        {
            num: "05",
            title: "Company Registration & Compliance",
            tag: "New & existing",
            intro: "We register new businesses in Thrissur and manage the ongoing ROC and MCA obligations for existing companies and LLPs.",
            items: [
                "Private limited company and OPC incorporation",
                "LLP registration with agreement drafting",
                "Partnership firm registration and deed preparation",
                "Proprietorship setup — Udyam, GST, professional tax, trade licence",
                "Annual ROC filings — Form AOC-4, MGT-7, DIR-3 KYC",
                "Director changes, share transfer, and charge creation filings",
                "Section 8 company and trust registration for charitable institutions"
            ],
            note: "Thrissur has a large number of family-owned jewellery and trading businesses being formalised — for bank credit or to bring in the next generation as formal partners. We handle both the registration and the accounting clean-up that comes with it."
        }
    ];

    const industries = [
        { icon: "💍", name: "Gold & Jewellery Manufacturers", desc: "Manufacturing units in Thrissur, Ollur, and Cherpu — job work accounting, stock reconciliation, correct GST rate structure, and annual tax audit." },
        { icon: "🏪", name: "Jewellery Retailers & Wholesalers", desc: "Retail showrooms across Thrissur and Guruvayur — high-value inventory, consignment transactions, hallmarking compliance, and GST obligations." },
        { icon: "🏗️", name: "Real Estate & Builders", desc: "GST on construction — 5% for residential without ITC, 12% for commercial. Project bookkeeping, sub-contractor TDS, and JDA tax implications." },
        { icon: "🌿", name: "Rubber & Agricultural Businesses", desc: "Chalakudy and Irinjalakuda — TDS on Rubber Board payments, agricultural income treatment, and partnership firm accounting." },
        { icon: "🏥", name: "Healthcare & Hospitals", desc: "Private hospitals, dental chains, diagnostic centres — audit, payroll, and careful navigation of GST exemptions on healthcare services." },
        { icon: "🎓", name: "Educational Institutions", desc: "Schools, colleges, and training institutes — staff payroll, fee income accounting, and ROC compliance for registered bodies." },
        { icon: "✈️", name: "NRI Families & Investors", desc: "ITR filing, property transaction compliance, 15CA/15CB certificates, and FEMA filings — fully remote for Thrissur-linked NRI families." },
        { icon: "🛕", name: "Temple Trusts & Religious Institutions", desc: "Devaswom-type bodies and charitable trusts — Section 12A/80G registration, annual compliance, statutory audit, and ITR filing." }
    ];

    const whyUs = [
        { title: "Sector depth, not generic practice", desc: "Gold jewellery accounting, rubber business TDS, real estate GST, temple trust compliance — we've handled enough of each to know exactly where errors happen and how to prevent them before they become notices." },
        { title: "Reachable across the district", desc: "Thrissur city, Guruvayur, Chalakudy, Irinjalakuda, Kunnamkulam, Kodungallur — we work remotely with clients across the district and visit when the engagement requires it." },
        { title: "No black box", desc: "Every return we file, every liability we compute — you see it before it's submitted and understand what it means. We don't work silently and send you a bill at the end of the month." },
        { title: "We take on messy books", desc: "Businesses running on rough numbers, missing purchase records, or incorrect GST filings for years — we start with a clear assessment of what exists, not assumptions about what should." }
    ];

    const testimonials = [
        {
            text: "We run a jewellery manufacturing unit in Thrissur. The previous accountant was filing GST at a flat rate and never separated making charges. When we got a notice, the mismatch went back three years. Acharya corrected everything and restructured our entire billing system. No issues since.",
            attr: "Partner · Gold jewellery manufacturer, Thrissur city"
        },
        {
            text: "I bought a plot in Irinjalakuda as an NRI and had no idea about capital gains and TDS obligations. Acharya handled the full transaction compliance from Dubai — TDS filing, Form 26QB, capital gains computation, and the ITR. Completely remote, no travel needed.",
            attr: "NRI client, Dubai · Property transaction compliance"
        },
        {
            text: "We run a rubber processing business in Chalakudy. The accounts were always last-minute and our ITR had errors from two years back. Acharya cleaned up the books, corrected the past filings, and now handles everything monthly. We don't think about compliance anymore.",
            attr: "Proprietor · Rubber processing business, Chalakudy"
        }
    ];

    const faqs = [
        {
            q: "Do you handle accounting for gold jewellery businesses in Thrissur?",
            a: "Yes, and this is a core part of our Thrissur practice. Gold jewellery accounting has non-standard requirements — job work records under GST Section 143, GST rate split between gold (3%) and making charges (5%), stock valuation for mixed inventory, and TDS on payments to unregistered artisans. Most generalist accountants apply a flat rate across the invoice. That creates mismatches that compound quietly over years into a department notice."
        },
        {
            q: "What does CA services cost in Thrissur?",
            a: "For a small proprietorship or trading business needing monthly GST filing and an annual ITR, fees typically range from ₹2,500 to ₹5,500 per month. Companies needing statutory audit, full bookkeeping, and payroll sit higher. We give a fixed-fee quote after a short conversation about your business — no surprises mid-year."
        },
        {
            q: "Can you handle real estate transaction compliance in Thrissur?",
            a: "Yes. Property transactions trigger capital gains computation, TDS obligations — 1% for resident sellers above ₹50 lakh, 20% plus surcharge for NRI sellers — and sometimes GST on under-construction purchases. We handle the full compliance for both buyer and seller."
        },
        {
            q: "Do you file income tax for NRI clients with Thrissur property?",
            a: "Yes. We file ITR for NRIs with rental income, compute capital gains on land and apartment sales, issue 15CA/15CB certificates for remittances, and manage FEMA compliance. Fully remote — NRI clients don't need to travel to Thrissur."
        },
        {
            q: "Do you work with temple trusts and religious institutions?",
            a: "Yes. We handle Section 12A/80G registration, annual compliance filing, statutory audit, and ITR for charitable trusts and Devaswom-type institutions in Thrissur district."
        },
        {
            q: "How long does it take to sort out neglected accounts?",
            a: "Depends on how far back the gap goes and what was filed. If GST and ITR were filed — even incorrectly — the base data exists on the portals. We assess the gap first, quote a clean-up fee, and work through it in batches. Most businesses are current within six to eight weeks."
        }
    ];

    const thrissurAreas = [
        "Thrissur city", "Guruvayur", "Chalakudy", "Irinjalakuda",
        "Kunnamkulam", "Kodungallur", "Ollur", "Wadakkanchery", "Mala"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA & Accounting Firm in Thrissur - Tax & GST Experts | Acharya"
                description="Acharya provides complete CA and accounting services in Thrissur. We handle your daily bookkeeping, GST returns, income tax filings, and statutory audits."
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-thrissur"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants",
                    "description": "CA firm offering GST, income tax, audit, and bookkeeping services in Thrissur, Kerala",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-thrissur",
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
                    "areaServed": thrissurAreas,
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text TSR */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    TSR
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Thrissur · Est. 2015
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA &amp; Accounting<br />
                            Services in<br />
                            <span className="italic text-primary-accent">Thrissur</span>
                        </h1>
                        <div className="text-lg text-boulder max-w-xl space-y-4">
                            <p>
                                We provide CA and accounting services for businesses across Thrissur district — GST filing, income tax, bookkeeping, audit, payroll, and company compliance.
                            </p>
                            <p>
                                Thrissur has a business profile unlike any other district in Kerala. The gold and jewellery trade, real estate activity, temple-linked commerce in Guruvayur, rubber businesses in Chalakudy — each creates specific compliance requirements a generalist approach handles poorly.
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
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Thrissur district covered</span>
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
                            Our CA &amp; Accounting Services in Thrissur
                        </h2>
                        <p className="text-boulder text-lg">
                            Sector-specific compliance handled by qualified CAs — not a one-size-fits-all practice.
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
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-primary-accent bg-primary-accent/10 px-2 py-0.5 rounded">
                                            {service.tag}
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

            {/* WHO WE SERVE */}
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
                            Businesses We Serve in Thrissur
                        </h2>
                        <p className="text-boulder text-lg">
                            The business types we handle most often across Thrissur district.
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
                            Why Thrissur Businesses Work With Us
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
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
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
                        We Cover
                    </span>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {thrissurAreas.map((area) => (
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
                                Whether it's a gold business GST issue, a property transaction, a tax notice, or you just want to know where your compliance stands — call us. The first conversation is free.
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

export default ThrissurPage;
