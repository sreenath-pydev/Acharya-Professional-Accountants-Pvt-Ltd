import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
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

const CoimbatorePage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Coimbatore",
        "Income Tax Consultant Coimbatore",
        "Company Registration Coimbatore",
        "Audit Firm Coimbatore",
        "Bookkeeping Services Coimbatore",
        "NRI Tax Filing Coimbatore",
        "GST Consultant Coimbatore"
    ];

    const services = [
        {
            num: "01",
            icon: "📊",
            title: "GST Filing Services Coimbatore",
            intro: "We manage your full GST cycle — registration, monthly GSTR-1 and GSTR-3B, annual GSTR-9 reconciliation, e-way bill setup for goods-heavy businesses, and replies to department notices. For pump, foundry and textile exporters, we manage LUT filing for zero-rated supplies and handle ITC refund claims on accumulated credit.",
            tags: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual", "E-Way Bill Setup", "LUT for Exporters", "GST Notice Reply"]
        },
        {
            num: "02",
            icon: "🧾",
            title: "Income Tax Consultant Coimbatore",
            intro: "We file ITRs for salaried employees, manufacturing business owners, partnership firms, and private limited companies in Coimbatore. For mill and foundry owners with complex depreciation schedules and multiple units, we handle tax computation, advance tax planning, and Section 44AB tax audit filings accurately and on time.",
            tags: ["ITR — All Forms", "Tax Planning", "TDS Filing", "Depreciation Schedules", "Tax Audit Sec 44AB", "IT Notice Response"]
        },
        {
            num: "03",
            icon: "🔍",
            title: "Audit Firm in Coimbatore",
            intro: "We conduct statutory, internal, and tax audits for private limited companies, partnership firms, spinning mills, foundries, and educational trusts in Coimbatore. Each audit comes with a signed report plus a management letter highlighting specific process and inventory control gaps — useful for boards and lenders, not just for filing.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit", "Manufacturing Audit", "Financial Statements"]
        },
        {
            num: "04",
            icon: "📒",
            title: "Bookkeeping Services Coimbatore",
            intro: "We maintain your books every month — purchase and sales ledgers, job-work and stock registers, bank reconciliation, and monthly P&L statements. Whether you need clean financials for a machinery loan, working capital renewal, or year-end audit, your accounts stay current with no closing-week rush.",
            tags: ["Tally Accounting", "Monthly Bookkeeping", "Job-Work & Stock Records", "Payroll Processing", "PF & ESI Filing", "MIS & P&L Reports"]
        },
        {
            num: "05",
            icon: "🏭",
            title: "Export & EOU Compliance Coimbatore",
            intro: "For Coimbatore's pump, motor, foundry and textile exporters — including units feeding the Tirupur garment cluster — we handle LUT filing for zero-rated exports, EOU and bonded warehouse documentation, ITC refund claims, and accurate HSN classification across export invoices. We keep records ready for any DGFT or GST audit.",
            tags: ["LUT Filing", "EOU Documentation", "ITC Refund Claims", "Export HSN Codes", "DGFT Compliance"]
        },
        {
            num: "06",
            icon: "🏢",
            title: "Company Registration Coimbatore",
            intro: "We handle your complete business registration — entity selection, DSC and DIN for directors, MCA name reservation, Certificate of Incorporation, PAN, TAN, and GST registration, plus the first-year ROC compliance calendar. Private Limited, LLP, MSME/Udyam, or partnership — set up cleanly so you can start operating immediately.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "ROC & MCA Filing", "Partnership Deed"]
        },
        {
            num: "07",
            icon: "🎓",
            title: "Education & Trust Audit Coimbatore",
            intro: "Coimbatore's schools, colleges and engineering institutions need annual audits, 12A and 80G compliance, and FCRA reporting where foreign donations apply. We handle trust audits, fee accounting, TDS on staff and faculty payments, and GST applicability on non-academic income such as hostels, transport and canteens.",
            tags: ["Trust Audit", "12A / 80G Filing", "FCRA Reporting", "Fee & Hostel Accounting", "Staff TDS"]
        }
    ];

    const whyUs = [
        {
            num: "01",
            title: "Senior CA on Every File — Not Junior Assistants",
            desc: "Your file is managed and reviewed directly by a qualified CA, ensuring top-tier compliance and deep technical oversight for your accounts."
        },
        {
            num: "02",
            title: "We File Before the Deadline — Zero Late Penalties",
            desc: "We follow a strict, proactive schedule, submitting your returns and audits days before the due date, never on the deadline day."
        },
        {
            num: "03",
            title: "Specialised Industrial & Trust Expertise",
            desc: "Years of experience handling textile mills, foundry and pump manufacturing compliance, exports (LUT, SEZ, refunds), and educational trust audits."
        },
        {
            num: "04",
            title: "Fixed-Fee Pricing — No year-end surprises",
            desc: "A transparent flat-fee quote agreed upon before starting, providing budget predictability for your business."
        },
        {
            num: "05",
            title: "Multilingual Support",
            desc: "Our team communicates in Tamil, Telugu, Kannada, and English, adapting to the language you are most comfortable with."
        }
    ];

    const testimonials = [
        {
            text: "We manufacture submersible pumps and export a portion to the Middle East. Our GST credit was always stuck because of HSN mismatches between our purchase and sales invoices. Acharya cleaned up our master data, and now our monthly returns reconcile correctly the first time, every time.",
            attr: "Selvaraj K. — Director, Pump Manufacturing Unit, Kuniyamuthur"
        },
        {
            text: "Running a spinning mill means tracking yarn stock, job-work to weavers, and machinery depreciation across multiple units. Our previous accountant gave us numbers only at year-end. Acharya gives us a monthly P&L per unit, which has completely changed how we plan production and cash flow.",
            attr: "Krishnamurthy R. — Proprietor, Spinning Mill, Pollachi Road"
        }
    ];

    const areas = [
        { title: "Coimbatore City", desc: "GST, income tax, audit and company registration for businesses and individuals across central Coimbatore." },
        { title: "CA in Peelamedu & Singanallur", desc: "Accounting, GST and tax services for foundries, pump manufacturers and engineering units in the Peelamedu-Singanallur belt." },
        { title: "Tax Consultant Saravanampatti", desc: "GST filing, bookkeeping and audit for IT parks, real estate developers and growing service businesses in Saravanampatti." },
        { title: "CA in Tirupur", desc: "GST, export compliance and ITC refund support for knitwear and garment exporters in the Tirupur cluster." },
        { title: "Kuniyamuthur & Podanur", desc: "Bookkeeping, payroll and tax services for textile mills and engineering workshops in Kuniyamuthur and Podanur." },
        { title: "Pollachi & Annur", desc: "GST, income tax and audit for agri-processing units, oil mills, and farm-related businesses around Pollachi and Annur." },
        { title: "Coimbatore Education Sector", desc: "Trust audit, 12A/80G compliance and fee accounting for schools, colleges and training institutes across the city." },
        { title: "All of Coimbatore District — Online", desc: "Full digital CA service for any location in Coimbatore district — WhatsApp, email, and video consultations." }
    ];

    const faqs = [
        {
            q: "Do you work with textile and spinning mill businesses?",
            a: "Yes — textile spinning, weaving and processing units form a significant part of our Coimbatore client base. We handle GST on yarn and fabric sales, job-work accounting between mills and weavers, stock and inventory records, machinery depreciation schedules, and statutory audit. We also manage GST on by-product sales such as cotton waste, which is often mis-classified."
        },
        {
            q: "We manufacture pumps/motors and export to other countries. What GST process applies?",
            a: "Export of goods is zero-rated under GST. To supply without charging GST to your overseas buyer, you file a Letter of Undertaking (LUT) at the start of each financial year. We file your LUT, prepare GSTR-1 for zero-rated supplies, and file refund claims (RFD-01) for input tax credit accumulated on raw materials and components — tracking the refund on the GST portal until it is credited."
        },
        {
            q: "Can you fix GST returns that were filed incorrectly in the past?",
            a: "Yes. Wrong HSN codes, missed input tax credit, incorrect place of supply, or mismatched outward supplies can be corrected through amendment returns and reconciliation against GSTR-2B. We review your past filings, identify discrepancies, file corrected or amended returns where permitted, and respond to any notices arising from mismatches with suppliers' or buyers' filings."
        },
        {
            q: "Do you handle audit and compliance for schools and colleges in Coimbatore?",
            a: "Yes. We work with schools, colleges and training institutes across Coimbatore on annual trust audits, 12A and 80G registration and renewal, FCRA reporting where the institution receives foreign donations, TDS on staff and faculty salaries, and GST applicability on non-academic income such as hostel fees, transport, and canteen sales. Core educational services remain GST-exempt, but these allied activities still need attention."
        },
        {
            q: "How does e-way bill compliance work for our manufacturing unit?",
            a: "Any movement of goods worth over the prescribed threshold requires an e-way bill, whether for sales, stock transfers between units, or job-work despatches to sub-contractors. We set up your e-way bill generation process — either integrated with your billing software or through the GST portal directly — and train your dispatch team so bills are generated correctly before goods leave the factory, avoiding penalties at checkposts."
        },
        {
            q: "How long does company registration take in Coimbatore?",
            a: "A Private Limited Company registration typically takes 10–15 working days from the date all documents are submitted, subject to MCA processing timelines. LLP and partnership registrations are usually faster. We manage the complete process — DSC, DIN, name reservation, incorporation filing, Certificate of Incorporation, and subsequent PAN, TAN, and GST registration immediately after — so your unit is ready to operate without delay."
        },
        {
            q: "Do I need to visit your office, or can everything be handled online?",
            a: "Most of our Coimbatore clients work with us entirely online — documents shared via WhatsApp or email, filings and acknowledgements returned the same way, and reviews conducted over video calls. In-person visits to your factory or office are available when useful, particularly for audits and stock verification, but they are never a requirement for routine GST, ITR or bookkeeping work."
        }
    ];

    const coimbatoreAreas = [
        "Coimbatore City", "Tirupur", "Peelamedu", "Saravanampatti", "Pollachi", "Kuniyamuthur"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Coimbatore | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Coimbatore offering GST filing, income tax, audit, bookkeeping & company registration for textile mills, pump and foundry manufacturers, exporters and educational institutions across Coimbatore, Tirupur, Peelamedu, Saravanampatti and Pollachi."
                keywords="CA firm in Coimbatore, chartered accountant in Coimbatore, GST filing Coimbatore, income tax consultant Coimbatore, audit firm Coimbatore, accounting services Coimbatore, company registration Coimbatore, NRI tax Coimbatore, GST consultant Coimbatore"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-coimbatore"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Coimbatore",
                    "description": "CA firm in Coimbatore offering GST filing, income tax, audit, export compliance and company registration for textile, engineering, foundry and educational institutions.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-coimbatore",
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
                        { "@type": "City", "name": "Coimbatore" },
                        { "@type": "City", "name": "Tirupur" },
                        { "@type": "City", "name": "Peelamedu" },
                        { "@type": "City", "name": "Saravanampatti" },
                        { "@type": "City", "name": "Pollachi" },
                        { "@type": "City", "name": "Kuniyamuthur" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Audit", "Bookkeeping", "Company Registration", "NRI Tax", "Export Compliance"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative animate-fade-in" data-aos="fade-up">
                {/* Backdrop watermark text CBE */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    CBE
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Coimbatore
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Coimbatore</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            We manage GST, income tax, audit and ROC compliance for textile mills, pump and foundry manufacturers, exporters and educational institutions across Coimbatore — with a dedicated CA, a fixed annual fee, and filings completed well before every deadline.
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
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Export & EOU Compliance</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Company Registration</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Trust & Institution Audit</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Bookkeeping</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Payroll & PF/ESI</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">TDS Filing</span>
                        </div>
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        {/* Decorative background pulse */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={800} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={15} suffix="+" /></span>
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Coimbatore
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm with a dedicated team serving Coimbatore. We provide GST compliance, income tax filing, statutory and tax audit, bookkeeping, company registration, and trust/institution audit services to businesses and individuals across the city and the wider Kongu region.
                                </p>
                                <p>
                                    Our clients include textile spinning and processing mills, pump and motor manufacturers, foundries and precision engineering units, auto-component suppliers, agri-processing and oil mill businesses, garment exporters linked to the Tirupur cluster, and a growing list of schools, colleges and training institutes. <strong className="text-white font-semibold">Every engagement is led by a qualified CA</strong> — never passed down to junior staff — with a dedicated compliance calendar so deadlines are never missed.
                                </p>
                                <p>
                                    We work in Tamil, Telugu, Kannada and English — whichever language helps you discuss your finances most clearly.
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
                                What Every Client Gets
                            </h3>

                            <ul className="space-y-3.5 text-boulder text-xs">
                                {[
                                    "A named, dedicated CA who owns your file end to end",
                                    "A live compliance calendar tracking GST, TDS and ROC dates",
                                    "Returns filed days before the due date, never on it",
                                    "Filed acknowledgements shared with you the same day",
                                    "Quick turnaround on income tax and GST department notices",
                                    "Fixed, pre-agreed fees — no surprise year-end invoices",
                                    "Fully digital workflow — WhatsApp, email and video calls"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <span className="text-primary-accent mt-0.5">◆</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="font-montserrat text-lg font-bold text-white mt-8 mb-4 pb-2 border-b border-white/5">
                                Sectors We Serve in Coimbatore
                            </h3>

                            <ul className="space-y-3.5 text-boulder text-xs">
                                {[
                                    "Textile spinning, weaving and processing mills",
                                    "Pump, motor and foundry manufacturing units",
                                    "Auto-component and precision engineering suppliers",
                                    "Agri-processing, oil mills and FMCG units",
                                    "Garment and knitwear exporters near Tirupur",
                                    "Schools, colleges and engineering institutions",
                                    "Real estate developers and contractors",
                                    "Retail, wholesale and trading businesses"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <span className="text-primary-accent mt-0.5">◆</span>
                                        <span>{item}</span>
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
                            Accounting Services in <span className="italic text-primary-accent">Coimbatore</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Every service delivered by your assigned CA, on a schedule and at a fee agreed before we begin — no exceptions.
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
                            Why Clients Choose Our <span className="italic text-primary-accent">CA Firm in Coimbatore</span>
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
                            Serving All of <span className="italic text-primary-accent">Coimbatore & the Kongu Region</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services cover every major industrial belt across Coimbatore — in person where useful, and fully online for clients anywhere in the region.
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Coimbatore</span>
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
                        {coimbatoreAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Coimbatore
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                First consultation is free. Bring your GST, income tax, export compliance, audit, or company registration question — we give you a straight answer and a fixed-fee quote with no obligation.
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
                                            Coimbatore, Tamil Nadu
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

export default CoimbatorePage;
