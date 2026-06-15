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

const ChennaiPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Chennai",
        "Income Tax Consultant Chennai",
        "Company Registration Chennai",
        "Audit Firm Chennai",
        "Bookkeeping Services Chennai",
        "NRI Tax Filing Chennai",
        "GST Consultant Chennai"
    ];

    const services = [
        {
            num: "01",
            icon: "📊",
            title: "GST Filing Services Chennai",
            intro: "We manage your complete GST cycle — registration, monthly GSTR-1 and GSTR-3B, annual GSTR-9 reconciliation, e-invoicing setup, and responses to department notices. For IT companies and manufacturers exporting under SEZ or LUT, we manage zero-rated supply documentation and ITC refund claims.",
            tags: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual", "E-Invoicing Setup", "SEZ / LUT Filing", "GST Notice Reply"]
        },
        {
            num: "02",
            icon: "🧾",
            title: "Income Tax Consultant Chennai",
            intro: "We file ITRs for salaried employees, IT and consulting professionals, partnership firms, and private limited companies in Chennai. For NRI clients with rental income, property sales, or investments in India, we handle full FEMA and ITR compliance remotely, with year-round tax planning to manage advance tax and TDS.",
            tags: ["ITR — All Forms", "Tax Planning", "TDS Filing", "NRI Tax & FEMA", "Tax Audit Sec 44AB", "IT Notice Response"]
        },
        {
            num: "03",
            icon: "🔍",
            title: "Audit Firm in Chennai",
            intro: "We conduct statutory, internal, and tax audits for private limited companies, LLPs, manufacturing units, hospitals, and trusts in Chennai. Each audit comes with a signed report plus a management letter flagging specific process gaps — useful for boards, lenders, and investors, not just for ROC filing.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit", "Manufacturing Audit", "Financial Statements"]
        },
        {
            num: "04",
            icon: "📒",
            title: "Bookkeeping Services Chennai",
            intro: "We maintain your books every month — sales and purchase registers, bank reconciliation, inventory accounts, and monthly P&L and balance sheet drafts. Whether you need clean financials for a working capital loan, a due-diligence round, or your statutory audit, your accounts stay current with no year-end catch-up.",
            tags: ["Tally / Zoho Books", "Monthly Bookkeeping", "Bank Reconciliation", "Payroll Processing", "PF & ESI Filing", "MIS & P&L Reports"]
        },
        {
            num: "05",
            icon: "🚀",
            title: "Startup Compliance Chennai",
            intro: "We support founders from incorporation through their first funding rounds — ROC annual returns, ESOP pool accounting, cap table tracking, investor MIS reports, and DPIIT startup recognition. We also handle the accounting clean-up most due diligence processes flag before a term sheet closes.",
            tags: ["ROC Annual Filing", "ESOP Accounting", "Investor MIS", "DPIIT Recognition", "Due Diligence Prep"]
        },
        {
            num: "06",
            icon: "🏢",
            title: "Company Registration Chennai",
            intro: "We handle your complete business registration — entity selection, DSC and DIN for directors, MCA name reservation, Certificate of Incorporation, PAN, TAN, and GST registration, plus the first-year ROC compliance calendar. Private Limited, LLP, OPC, or proprietorship — set up cleanly so you can operate from day one.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "ROC & MCA Filing", "Startup Registration"]
        },
        {
            num: "07",
            icon: "🏭",
            title: "Export & Manufacturing GST",
            intro: "For Chennai's auto-ancillary, engineering, and garment exporters, we manage LUT filing for zero-rated supplies, ITC refund claims on input GST, accurate HSN classification for export invoices, and IGST compliance on raw material imports — keeping your records audit-ready for any DGFT or GST review.",
            tags: ["LUT Filing", "ITC Refund Claims", "Export HSN Codes", "IGST on Imports", "DGFT Documentation"]
        }
    ];

    const whyUs = [
        {
            num: "01",
            title: "Senior CA on Every File — Not Junior Assistants",
            desc: "Your file is owned and managed by a qualified CA from day one, ensuring the highest standards of financial accuracy and regulatory compliance."
        },
        {
            num: "02",
            title: "We File Before the Deadline — Zero Late Penalties",
            desc: "Our active compliance tracking guarantees your GST, TDS, and ROC filings are submitted days before the due date, never on it."
        },
        {
            num: "03",
            title: "Dedicated Startups, Exports & NRI Expertise",
            desc: "Specialised compliance tracks for IT/SaaS startups, manufacturing/garment exporters, and NRI tax compliance handled completely remotely."
        },
        {
            num: "04",
            title: "Fixed-Fee Pricing — No surprise billing",
            desc: "Agree on a flat-fee quote at the start of the engagement. No hourly billing, no surprise invoices at year-end."
        },
        {
            num: "05",
            title: "Multilingual Support",
            desc: "Our Chennai team communicates in Tamil, Telugu, Hindi, and English to help you discuss your business finances comfortably."
        }
    ];

    const testimonials = [
        {
            text: "Before our seed round, our books were a mess across three different tools. Acharya cleaned up two years of accounting, set up monthly closes, and prepared the financial pack our investors asked for. The due diligence process went through without a single accounting query.",
            attr: "Aravind N. — Founder, SaaS Startup, OMR"
        },
        {
            text: "We supply precision components to OEMs and export a portion under LUT. Our ITC refunds used to get stuck for months over documentation issues. Since Acharya took over our GST filings, refunds are processed without queries and our HSN codes are finally consistent across invoices.",
            attr: "Murali S. — Director, Auto-Ancillary Unit, Ambattur"
        }
    ];

    const areas = [
        { title: "Chennai City", desc: "GST, income tax, audit and company registration for businesses and individuals across central Chennai." },
        { title: "CA on OMR / Sholinganallur", desc: "Accounting, GST and startup compliance for IT companies, SaaS firms and BPOs along the OMR IT corridor." },
        { title: "Tax Consultant Ambattur", desc: "GST filing, bookkeeping and audit for auto-ancillary and engineering manufacturing units in Ambattur Industrial Estate." },
        { title: "CA in Tambaram", desc: "Income tax, GST and bookkeeping for traders, professionals and small businesses across Tambaram and surrounding areas." },
        { title: "Accountant Porur & Vadapalani", desc: "GST, payroll and income tax services for retail chains, clinics and service businesses in West Chennai." },
        { title: "Sriperumbudur & SIPCOT", desc: "GST, export compliance and audit for manufacturing and electronics units in the Sriperumbudur SIPCOT belt." },
        { title: "Chennai NRI Clients", desc: "Remote ITR, TDS, FEMA and capital gains compliance for Chennai professionals settled in the US, UK, Gulf and Singapore." },
        { title: "All of Chennai Metro — Online", desc: "Full digital CA service for any location in the Chennai metropolitan area — WhatsApp, email, and video consultations." }
    ];

    const faqs = [
        {
            q: "Do you work with IT and software companies in Chennai?",
            a: "Yes — IT, ITES and SaaS companies make up a large part of our Chennai client base. We handle GST on export of services, LUT filing for zero-rated revenue, monthly bookkeeping in tools like Zoho Books, payroll for distributed teams, and ROC compliance. For companies preparing for funding, we also clean up historical books and prepare investor-ready financial statements."
        },
        {
            q: "We're a startup and haven't filed our ROC returns on time. Can you help?",
            a: "Yes. Late ROC filings attract additional government fees that increase the longer they remain pending, so the priority is to file as soon as possible. We review your incorporation documents, prepare and file the pending annual returns (MGT-7, AGM resolutions, financial statements), and then set up a compliance calendar so future filings happen on schedule, well before due dates."
        },
        {
            q: "I'm an NRI based in the US/UK/Gulf with property in Chennai. Can you manage my Indian tax filings?",
            a: "Yes — this is one of our core service tracks. We handle ITR filing under NRI status, TDS reconciliation on rental income via Form 26AS, capital gains computation on property sales, FEMA compliance for repatriating sale proceeds, and guidance on the residency status transition if you return to India. All of this is coordinated by WhatsApp and email, with no need to travel back for routine filings."
        },
        {
            q: "Can you fix GST returns that were filed incorrectly in the past?",
            a: "Yes. Incorrect HSN codes, missed input tax credit, wrong place-of-supply classification, or mismatched outward supplies can be corrected through amendment returns and reconciliation against your GSTR-2B. We review prior filings, identify the discrepancies, file corrected or amended returns where the GST portal allows, and respond to any notices triggered by mismatches with your buyers' or suppliers' filings."
        },
        {
            q: "Do you handle GST and ITC refunds for exporters under LUT?",
            a: "Yes. For IT services exporters and manufacturing units supplying under a Letter of Undertaking, we file the LUT at the start of each financial year, prepare GSTR-1 for zero-rated supplies, and file the refund applications (RFD-01) for accumulated input tax credit. We track refund status on the GST portal and respond to any deficiency memos to keep the process moving without repeated follow-ups."
        },
        {
            q: "How long does company registration take in Chennai?",
            a: "A Private Limited Company registration typically takes 10–15 working days from the date all documents are submitted, subject to MCA processing timelines. LLP and OPC registrations are usually faster. We manage the complete process — DSC, DIN, name reservation, incorporation filing, Certificate of Incorporation, and PAN, TAN, and GST registration immediately after — so you have everything needed to start operating quickly."
        },
        {
            q: "Do I need to visit your office, or can everything be handled online?",
            a: "Most of our Chennai clients work with us entirely online — documents shared via WhatsApp or email, filings and acknowledgements sent back the same way, and reviews done over video calls. In-person meetings are available when useful, particularly for audits or company registration sign-offs, but they're never a requirement for routine GST, ITR or bookkeeping work."
        }
    ];

    const chennaiAreas = [
        "Chennai City", "Tambaram", "Ambattur", "OMR", "Sriperumbudur", "Porur"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Chennai | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Chennai offering GST filing, income tax, audit, bookkeeping & company registration for IT companies, startups, manufacturers, exporters and NRI clients across Chennai, Tambaram, Ambattur, OMR and Sriperumbudur."
                keywords="CA firm in Chennai, chartered accountant in Chennai, GST filing Chennai, income tax consultant Chennai, audit firm Chennai, accounting services Chennai, company registration Chennai, NRI tax Chennai, GST consultant Chennai"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-chennai"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Chennai",
                    "description": "CA firm in Chennai offering GST filing, income tax, audit, startup compliance, NRI tax and company registration for IT companies, manufacturers and exporters.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-chennai",
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
                        { "@type": "City", "name": "Chennai" },
                        { "@type": "City", "name": "Tambaram" },
                        { "@type": "City", "name": "Ambattur" },
                        { "@type": "City", "name": "OMR / Sholinganallur" },
                        { "@type": "City", "name": "Sriperumbudur" },
                        { "@type": "City", "name": "Porur" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Audit", "Bookkeeping", "Company Registration", "NRI Tax", "Startup Compliance"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative text-center flex flex-col items-center" data-aos="fade-up">
                {/* Backdrop watermark text MAA */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    MAA
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-8 h-[1px] bg-primary-accent"></span>
                        <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                            ✦ ICAI Registered · Chennai
                        </span>
                        <span className="w-8 h-[1px] bg-primary-accent"></span>
                    </div>

                    <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        CA Firm in<br />
                        <span className="italic text-primary-accent">Chennai</span>
                    </h1>

                    <p className="text-lg md:text-xl text-boulder max-w-2xl mx-auto">
                        We manage GST, income tax, statutory audit and ROC compliance for IT companies, startups, manufacturers and exporters across Chennai — with a dedicated CA, a fixed annual fee, and zero missed deadlines.
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
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">900+</span>
                            <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-2">Active Clients</span>
                        </div>
                        <div className="text-center border-l border-white/5 md:border-l-0">
                            <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">16+</span>
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
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Startup Compliance</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Company Registration</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">NRI Tax & FEMA</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Bookkeeping</span>
                        <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Payroll & PF/ESI</span>
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Chennai
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm with a dedicated team serving Chennai. We handle GST compliance, income tax filing, statutory and tax audit, bookkeeping, company registration, and NRI tax services for businesses and individuals across the city and the wider metropolitan region.
                                </p>
                                <p>
                                    Our client base spans IT and ITES companies, early-stage startups, auto-ancillary and engineering manufacturers, garment and textile exporters, real estate developers, healthcare groups, and professionals who have moved abroad but retain property or income in Chennai. <strong className="text-white font-semibold">Every engagement is led by a qualified CA</strong> — never handed off to a junior — with a dedicated compliance calendar so nothing is ever filed late.
                                </p>
                                <p>
                                    We communicate in Tamil, Telugu, Hindi and English — whichever language helps you discuss your finances most clearly.
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
                                        "A named, dedicated CA who owns your file end to end",
                                        "A live compliance calendar tracking GST, TDS and ROC dates",
                                        "Returns filed days before the due date, never on it",
                                        "Filed acknowledgements shared with you the same day",
                                        "Fast turnaround on income tax and GST department notices",
                                        "Fixed, pre-agreed fees — no surprise year-end invoices",
                                        "Fully digital workflow — WhatsApp, email and video calls"
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
                                <h3 className="text-white font-bold text-sm mb-3">Sectors We Serve in Chennai</h3>
                                <ul className="space-y-2 text-boulder text-xs">
                                    {[
                                        "IT, ITES and SaaS companies on OMR and in Guindy",
                                        "Early-stage startups raising seed and Series A rounds",
                                        "Auto-ancillary and precision engineering manufacturers",
                                        "Garment, leather and textile exporters",
                                        "Real estate developers and construction firms",
                                        "Healthcare groups, hospitals and diagnostic chains",
                                        "NRI professionals in the US, UK, Gulf and Singapore",
                                        "Retail chains, restaurants and trading businesses"
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
                            Accounting Services in <span className="italic text-primary-accent">Chennai</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Every service delivered by your assigned CA, on a schedule and at a fee agreed before we start — no exceptions.
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
                            Every Chennai client moves through the same structured onboarding and compliance process — so nothing is missed, nothing is late, and you always know where things stand.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" data-aos="fade-up">
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
                            Serving All of <span className="italic text-primary-accent">Chennai & the Metro Region</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services cover every major business corridor across Chennai — in person where useful, and fully online for clients anywhere in the metro region.
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Chennai</span>
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
                        {chennaiAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Chennai
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                First consultation is free. Bring your GST, income tax, startup compliance, NRI tax, or company registration question — we give you a straight answer and a fixed-fee quote with no obligation.
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
                                            Chennai, Tamil Nadu
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

export default ChennaiPage;
