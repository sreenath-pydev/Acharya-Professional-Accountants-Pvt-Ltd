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

const MangaluruPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Mangalore",
        "Income Tax Consultant Mangalore",
        "Company Registration Mangalore",
        "Audit Firm Mangalore",
        "Bookkeeping Services Mangalore",
        "NRI Tax Filing Mangalore",
        "GST Consultant Mangalore"
    ];

    const services = [
        {
            num: "01",
            icon: "📊",
            title: "GST Filing Services Mangalore",
            intro: "We manage your full GST compliance — registration, monthly GSTR-1 and GSTR-3B, annual GSTR-9 reconciliation, and notice replies. For exporters in Mangalore's seafood and cashew sectors, we file your Letter of Undertaking (LUT) for zero-rated exports and manage refund claims on GST paid on inputs.",
            tags: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual", "LUT for Exporters", "Export Refund Claims", "GST Notice Reply"]
        },
        {
            num: "02",
            icon: "🧾",
            title: "Income Tax Consultant Mangalore",
            intro: "We file ITRs for salaried employees, self-employed professionals, business owners, partnership firms, and companies in Mangalore. For NRI clients with rental income, property sales, or business interests in India, we handle full FEMA and ITR compliance — all digitally, without requiring travel back to India.",
            tags: ["ITR — All Forms", "Tax Planning", "TDS Filing", "NRI Tax & FEMA", "Tax Audit Sec 44AB", "IT Notice Response"]
        },
        {
            num: "03",
            icon: "🔍",
            title: "Audit Firm in Mangalore",
            intro: "We conduct statutory, internal, and tax audits for private limited companies, LLPs, partnership firms, educational institutions, and trusts in Mangalore. Our audit reports are signed, thorough, and accompanied by a management letter with specific risk and process observations — giving your board something actionable, not just a compliance certificate.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit", "Institution Audit", "Financial Statements"]
        },
        {
            num: "04",
            icon: "📒",
            title: "Bookkeeping Services Mangalore",
            intro: "We maintain your books every month — purchase and sales ledgers, bank reconciliation, stock accounts, and monthly P&L statements. Whether you need clean financials for a bank loan, a property mortgage, or your year-end audit, your accounts are always current and ready — no end-of-year scramble.",
            tags: ["Tally Accounting", "Monthly Bookkeeping", "Bank Reconciliation", "Payroll Processing", "PF & ESI Filing", "MIS & P&L Reports"]
        },
        {
            num: "05",
            icon: "🌍",
            title: "NRI Tax Filing Mangalore",
            intro: "We manage Indian tax compliance for Mangalore's Gulf NRI community — ITR filing, TDS on rental income, capital gains on property sales, FEMA compliance for repatriation, and advice on transitioning between NRI and resident status. All handled remotely. You send documents via WhatsApp; we deliver filed returns by email.",
            tags: ["NRI ITR Filing", "TDS on Rent", "Capital Gains", "FEMA Compliance", "Repatriation"]
        },
        {
            num: "06",
            icon: "🏢",
            title: "Company Registration Mangalore",
            intro: "We handle your full business registration — entity selection, DSC and DIN for directors, MCA name reservation, Certificate of Incorporation, PAN, TAN, GST registration, and the first-year ROC compliance calendar. Private Limited, LLP, MSME/Udyam, or sole proprietorship — we complete the setup cleanly so you can start operating from day one.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "ROC & MCA Filing", "Startup Registration"]
        },
        {
            num: "07",
            icon: "🚢",
            title: "Export GST & Trade Compliance",
            intro: "For Mangalore's export community — seafood processors, cashew exporters, and tile traders — we handle LUT registration for zero-rated exports, GST refund claims on input tax credit, HSN code accuracy for export invoices, and IGST compliance on imports. We keep your export documentation audit-ready for any customs or GST department review.",
            tags: ["LUT Filing", "GST Refund Claims", "Export HSN Codes", "IGST on Imports", "Customs Audit Support"]
        }
    ];

    const whyUs = [
        {
            num: "01",
            title: "Senior CA on Every File — Not Junior Assistants",
            desc: "Every engagement is led by a qualified CA — not passed to junior staff — ensuring high-level oversight for all your accounting, auditing, and tax matters."
        },
        {
            num: "02",
            title: "We File Before the Deadline — Zero Late Penalties",
            desc: "We set up a dedicated compliance calendar for you. Returns are prepared and reviewed systematically, ensuring they are submitted well before the due date."
        },
        {
            num: "03",
            title: "Specialised Exporters & NRI Compliance",
            desc: "Expert support for seafood and cashew exports (LUT, GST refunds) and remote Indian tax filing and FEMA compliance for the Gulf NRI community."
        },
        {
            num: "04",
            title: "Fixed-Fee Pricing — No Billing Surprises",
            desc: "We agree on a flat-fee quote before we start. No hourly billing, no year-end surprises, and total budget predictability for your business."
        },
        {
            num: "05",
            title: "Multilingual Support in Tulu & Kannada",
            desc: "We communicate in Tulu, Kannada, Malayalam, and English to ensure you can discuss your financial matters in the language you are most comfortable with."
        }
    ];

    const testimonials = [
        {
            text: "We export frozen seafood and our GST refund claims used to take months because of documentation errors. Since Acharya took over — LUT filing, export invoices, refund claims — everything is done right the first time. Refunds come faster, no queries from the department.",
            attr: "Harish K. · Seafood Exporter, Mangalore Port"
        },
        {
            text: "I have been working in Dubai for nine years. My parents manage two rental properties in Mangalore and I had no idea about TDS, ITR, or FEMA rules for NRIs. Acharya handles everything — taxes, compliance, repatriation — without me having to come back to India.",
            attr: "Roshan D. · NRI Client, Mangalore"
        },
        {
            text: "We trade ceramic tiles across Karnataka and Kerala. Our GST used to be filed incorrectly every quarter — wrong HSN codes, missed ITC on inter-state purchases. Acharya corrected three years of returns and now files everything cleanly each month. No more notices.",
            attr: "Suresh B. · Tiles Trader, Surathkal"
        }
    ];

    const areas = [
        { title: "Mangalore City", desc: "GST, income tax, audit and company registration for all businesses and individuals in Mangalore city." },
        { title: "CA in Surathkal", desc: "Accounting and tax services for traders, port logistics businesses, and tile industry firms in Surathkal." },
        { title: "Tax Consultant Bantwal", desc: "GST filing, bookkeeping and income tax for businesses and professionals in Bantwal taluk." },
        { title: "CA in Puttur", desc: "Full compliance services — GST, audit, company registration — for businesses across Puttur and Sullia." },
        { title: "Accountant Ullal", desc: "GST, bookkeeping and income tax services for businesses in Ullal and the coastal Dakshina Kannada belt." },
        { title: "Udupi & Manipal", desc: "CA, GST and tax services for businesses, healthcare professionals and institutions in Udupi district." },
        { title: "Mangalore NRI Clients", desc: "Remote ITR, TDS, FEMA and capital gains compliance for Mangalore's large Gulf NRI community." },
        { title: "All of DK District — Online", desc: "Full digital CA service for any location in Dakshina Kannada — WhatsApp, email, and video consultations." }
    ];

    const faqs = [
        {
            q: "Do you have an office in Mangalore?",
            a: "Yes. We operate from our Mangalore office and are available for in-person consultations. We also serve clients across Surathkal, Bantwal, Puttur, Ullal, Udupi, and remote areas of Dakshina Kannada entirely online — documents via WhatsApp, filed returns by email, no travel required for routine compliance."
        },
        {
            q: "We export seafood from Mangalore. What GST filings do we need?",
            a: "Export of goods including seafood is zero-rated under GST. To supply without collecting GST from your overseas buyer, you must file a Letter of Undertaking (LUT) at the start of each financial year. We file your LUT, handle GSTR-1 for zero-rated supplies, claim your input tax credit refund on domestic inputs (packaging, cold chain, processing), and ensure your export invoices and shipping bills are correctly documented for refund processing."
        },
        {
            q: "I am an NRI from Mangalore working in the Gulf. Can you manage my Indian tax compliance?",
            a: "Yes — and this is one of our most common service tracks. We handle ITR filing for NRI status, TDS deducted on your rental income (reconciled via Form 26AS), capital gains computation if you sell property in Mangalore, FEMA compliance for repatriating earnings, and the transition to resident status when you return. All coordination happens via WhatsApp and email. You do not need to fly back to India for any of this."
        },
        {
            q: "Can you fix past GST returns that were filed incorrectly?",
            a: "Yes. Incorrect HSN codes, missed ITC claims, wrong place of supply, or under-reported outward supplies can be corrected through amendment returns and reconciliation. We review your past filings, identify discrepancies, and file corrected returns or GSTR-1A amendments as applicable. We also respond to any department notices triggered by mismatches between your filings and your buyers' returns."
        },
        {
            q: "Do you handle accounts and GST for educational institutions in Mangalore?",
            a: "Yes. We work with private schools, pre-university colleges, and coaching institutions in Mangalore. Educational services are largely GST-exempt, but institutions still have compliance obligations — TDS on staff salaries and contractor payments, GST on commercial activities (canteen, transport, stationery sales), and income tax for the institution as an entity. We manage all of this, along with monthly bookkeeping and annual audit."
        },
        {
            q: "How long does company registration take in Mangalore?",
            a: "A Private Limited Company registration typically takes 10–15 working days from the date all documents are submitted, subject to MCA processing. LLP and proprietorship registrations are faster. We handle the complete process — DSC, DIN, name reservation, incorporation filing, Certificate of Incorporation, and subsequent PAN, TAN, and GST registration immediately after — so you have all credentials to begin operating as quickly as possible."
        },
        {
            q: "Do you communicate in Tulu or Kannada?",
            a: "Yes. Our team communicates in Tulu, Kannada, Malayalam, and English. Mangalore's business community spans multiple language communities, and we adapt to whichever language you are most comfortable discussing your financial matters in. This applies to both in-person meetings and WhatsApp / email communication."
        }
    ];

    const mangaluruAreas = [
        "Mangalore City", "Surathkal", "Ullal", "Bantwal", "Puttur", "Udupi"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Mangalore | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Mangalore offering GST filing, income tax, audit, bookkeeping & company registration for traders, exporters, NRI clients and businesses across Mangalore, Surathkal, Bantwal, Puttur and Udupi."
                keywords="CA firm in Mangalore, chartered accountant in Mangalore, GST filing Mangalore, income tax consultant Mangalore, audit firm Mangalore, accounting services Mangalore, company registration Mangalore, NRI tax Mangalore, GST consultant Mangalore"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-mangaluru"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Mangalore",
                    "description": "CA firm in Mangalore offering GST filing, income tax, audit, NRI tax compliance and company registration for exporters, traders and businesses.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-mangaluru",
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
                        { "@type": "City", "name": "Mangalore" },
                        { "@type": "City", "name": "Surathkal" },
                        { "@type": "City", "name": "Ullal" },
                        { "@type": "City", "name": "Bantwal" },
                        { "@type": "City", "name": "Puttur" },
                        { "@type": "City", "name": "Udupi" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Audit", "Bookkeeping", "Company Registration", "NRI Tax", "Export Compliance"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative text-center flex flex-col items-center" data-aos="fade-up">
                {/* Backdrop watermark text IXE */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    IXE
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-8 h-[1px] bg-primary-accent"></span>
                        <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                            ✦ ICAI Registered · Mangalore
                        </span>
                        <span className="w-8 h-[1px] bg-primary-accent"></span>
                    </div>

                    <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        CA Firm in<br />
                        <span className="italic text-primary-accent">Mangalore</span>
                    </h1>

                    <p className="text-lg md:text-xl text-boulder max-w-2xl mx-auto">
                        We handle your GST, income tax, audit, and company compliance — accurately, on time, every time. Serving businesses, exporters, and NRI clients across Mangalore and the Dakshina Kannada district.
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
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">650+</span>
                            <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-2">Active Clients</span>
                        </div>
                        <div className="text-center border-l border-white/5 md:border-l-0">
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">14+</span>
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
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Audit & Assurance</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">NRI Tax</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Company Registration</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Export GST Compliance</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Bookkeeping</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Payroll & PF</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">TDS Filing</span>
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Mangalore
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm with a permanent office in Mangalore. We provide GST compliance, income tax filing, statutory audit, bookkeeping, company registration, and NRI tax services to businesses and individuals across Dakshina Kannada district.
                                </p>
                                <p>
                                    Our clients include seafood and marine product exporters, ceramic and tile traders, port-linked logistics businesses, private educational institutions, Gulf NRI families managing property and rental income, retail chains, healthcare professionals, and growing MSMEs. <strong className="text-white font-semibold">Every engagement is led by a qualified CA</strong> — not passed to junior staff — with a dedicated compliance calendar so nothing is ever filed late.
                                </p>
                                <p>
                                    We work in Tulu, Kannada, Malayalam, and English — whichever helps you communicate most clearly about your finances.
                                </p>
                            </div>
                        </div>

                        {/* Right lists column */}
                        <div className="lg:col-span-5 grid grid-cols-1 gap-6" data-aos="fade-left">
                            <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-accent to-transparent"></div>
                                <h3 className="text-white font-bold text-sm mb-3">What Every Client Gets</h3>
                                <ul className="space-y-2 text-boulder text-xs">
                                    {[
                                        "A named, dedicated CA who handles your file from start to finish",
                                        "A live compliance calendar tracking every GST, TDS, and ROC deadline",
                                        "Returns filed before the due date — never the day of",
                                        "Copies of every filed return delivered to you on the same day",
                                        "Prompt response to income tax and GST department notices",
                                        "Fixed, agreed-upfront fees with no year-end billing surprises",
                                        "Full digital service — WhatsApp and email, no office visit needed"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-primary-accent mt-0.5">◆</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-accent to-transparent"></div>
                                <h3 className="text-white font-bold text-sm mb-3">Sectors We Serve in Mangalore</h3>
                                <ul className="space-y-2 text-boulder text-xs">
                                    {[
                                        "Seafood & marine product exporters",
                                        "Cashew processing and export businesses",
                                        "Ceramic, tile and building materials traders",
                                        "Port logistics and freight forwarding firms",
                                        "Gulf NRI clients — property, rental, FEMA",
                                        "Private schools, colleges and institutions",
                                        "Healthcare clinics and diagnostic centres",
                                        "Retail and trading businesses — all sizes"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-primary-accent mt-0.5">◆</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
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
                                What We Do
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Accounting Services in <span className="italic text-primary-accent">Mangalore</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Every service delivered from our Mangalore office — by your assigned CA, on your schedule, at a fee you agreed before we started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-montserrat text-sm font-semibold text-primary-accent/50 block">
                                            {svc.num}
                                        </span>
                                        <span className="text-2xl rounded-lg bg-primary-accent/5 w-10 h-10 flex items-center justify-center border border-white/5">
                                            {svc.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {svc.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {svc.intro}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                    {svc.tags.map((tag, idx) => (
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
                                How We Work
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Our Process — From First Call to <span className="italic text-primary-accent">Filed Return</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Every Mangalore client goes through the same structured onboarding and compliance process — so nothing is missed, nothing is late, and you are always informed.
                        </p>
                    </div>

                    <div className="max-w-4xl space-y-8" data-aos="fade-up">
                        {whyUs.map((item) => (
                            <div key={item.num} className="flex gap-6 items-start border-b border-white/5 pb-8 last:border-0 hover:translate-x-1 transition-transform duration-300">
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

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" data-aos="fade-up">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300"
                                style={{ borderBottom: '3px solid #e5a145' }}
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
                            Serving All of <span className="italic text-primary-accent">Mangalore & Dakshina Kannada</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services cover every major town across Mangalore and Dakshina Kannada district — in person at our office and fully online for clients anywhere in the region.
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Mangalore</span>
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
                        {mangaluruAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Mangalore
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                First consultation is free. Bring your GST, income tax, export compliance, NRI tax, or company registration question — we give you a straight answer and a fixed-fee quote with no obligation.
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
                                            Mangalore, Karnataka
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

export default MangaluruPage;
