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

const PalakkadPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Palakkad",
        "Income Tax Consultant Palakkad",
        "Company Registration Palakkad",
        "ESOP Taxation Palakkad",
        "Audit Firm Palakkad",
        "Transfer Pricing Palakkad",
        "Bookkeeping Services Palakkad",
        "NRI Tax Filing Palakkad",
        "DPIIT Registration Palakkad"
    ];

    const milestones = [
        {
            year: "Our Promise",
            icon: "🏛️",
            title: "Senior CA on Every File",
            desc: "All engagements — from a simple ITR to a full statutory audit — are handled and reviewed by an ICAI-qualified chartered accountant."
        },
        {
            year: "Our Process",
            icon: "📅",
            title: "Compliance Calendar for Every Client",
            desc: "We track every due date for your GST returns, TDS deposits, advance tax, and ROC filings — and complete them before the deadline, every time."
        },
        {
            year: "Our Reach",
            icon: "📍",
            title: "All of Palakkad District",
            desc: "In-person consultations from our Palakkad office; full digital service for clients in Ottapalam, Shoranur, Chittur, Mannarkkad, and Alathur."
        },
        {
            year: "Our Pricing",
            icon: "🔒",
            title: "Fixed Fee — Agreed Upfront",
            desc: "We quote a flat fee before starting any engagement. No surprise bills mid-year, no extra charges for routine follow-up communications."
        },
        {
            year: "Our Languages",
            icon: "💬",
            title: "Malayalam, Tamil & English",
            desc: "Our team communicates fluently in all three — important in Palakkad's bilingual business environment."
        }
    ];

    const services = [
        {
            num: "01",
            icon: "📊",
            title: "GST Filing Services Palakkad",
            intro: "We handle your GST from registration through every monthly, quarterly, and annual return — including GSTR-1, GSTR-3B, and GSTR-9. For businesses dealing with inter-state supplies on the Kerala–Tamil Nadu corridor, we ensure correct classification and ITC matching across state lines.",
            tags: ["GST Registration", "GSTR-1 / 3B Filing", "GSTR-9 Annual Return", "GST Notice Reply", "ITC Reconciliation", "Inter-State GST Compliance"]
        },
        {
            num: "02",
            icon: "🧾",
            title: "Income Tax Consultant Palakkad",
            intro: "We file ITRs for salaried employees, business owners, professionals, firms, and companies in Palakkad. Throughout the year, we provide advance tax planning, TDS compliance, and prompt responses to income tax notices — so no deadline or department query catches you unprepared.",
            tags: ["ITR Filing — All Forms", "Advance Tax Planning", "TDS Filing & TAN", "Tax Audit Sec 44AB", "NRI Tax Filing", "IT Notice Response"]
        },
        {
            num: "03",
            icon: "🔍",
            title: "Audit Firm in Palakkad",
            intro: "We conduct statutory, internal, and tax audits for companies, partnership firms, trusts, and educational institutions in Palakkad. Our audit deliverables include the signed audit report, financial statements, and a management observations letter — giving directors and owners actionable findings, not just compliance paperwork.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit", "Trust & Institution Audit", "Financial Statements"]
        },
        {
            num: "04",
            icon: "📒",
            title: "Bookkeeping Services Palakkad",
            intro: "We maintain your accounts every month — purchase and sales registers, bank reconciliation, expense categorisation, and monthly P&L — so your books are always current, clean, and ready for a bank loan review, tax assessment, or annual audit without a last-minute scramble.",
            tags: ["Tally Accounting", "Monthly Bookkeeping", "Bank Reconciliation", "Payroll & Payslips", "PF & ESI Filing", "MIS & P&L Reports"]
        },
        {
            num: "05",
            icon: "🏢",
            title: "Company Registration Palakkad",
            intro: "Starting a business in Palakkad? We handle the full setup — entity selection advice, director DSC and DIN, MCA name approval, Certificate of Incorporation, PAN and TAN, GST registration, and your first-year compliance calendar — so your business launches correctly from day one.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "Partnership Firm", "ROC & MCA Filing", "Startup Registration"]
        },
        {
            num: "06",
            icon: "💻",
            title: "Online Accounting Services Palakkad",
            intro: "Clients across Palakkad's wider district — from Mannarkkad to Alathur — access our full service range without visiting the office. Documents shared over WhatsApp, returns acknowledged same week, and monthly reports delivered by email. Distance doesn't reduce the quality of service.",
            tags: ["Remote ITR Filing", "Digital GST Returns", "Cloud Bookkeeping", "Virtual CA Support", "WhatsApp Coordination"]
        }
    ];

    const benefits = [
        {
            icon: "🎯",
            title: "One CA Owns Your Account",
            desc: "Every client in Palakkad is assigned a dedicated CA who handles all filings, responds to all queries, and is available directly by phone or WhatsApp. You never speak to someone who doesn't know your file."
        },
        {
            icon: "🗓️",
            title: "Filed Before the Due Date",
            desc: "We work off a live compliance calendar for every client. GST returns, TDS deposits, advance tax instalments, ROC filings — all prepared and submitted ahead of schedule. Not once has a client of ours paid a late filing penalty."
        },
        {
            icon: "🗺️",
            title: "Kerala–Tamil Nadu Border Expertise",
            desc: "Palakkad businesses frequently deal across the state border — supply chains, contract labour, inter-state purchases. We handle the GST implications of cross-state transactions cleanly, including place of supply determinations and reverse charge mechanism compliance."
        },
        {
            icon: "🏭",
            title: "Manufacturing & Trade Experience",
            desc: "Rice mills, agro-processors, textile units, construction contractors, and MSME manufacturers make up a significant part of our Palakkad client base. We know the sector-specific GST rates, input credit structures, and TDS categories that apply to each — and apply them correctly, every filing."
        },
        {
            icon: "💬",
            title: "Malayalam, Tamil & English",
            desc: "Palakkad's business community spans both language communities. Our team communicates fluently in Malayalam, Tamil, and English — so nothing gets lost in translation when discussing your financials or explaining a tax position."
        },
        {
            icon: "📄",
            title: "Flat-Fee, Transparent Pricing",
            desc: "We agree on a fixed fee before any engagement begins. GST filing, bookkeeping retainer, annual audit — all quoted and invoiced at a pre-agreed rate. No escalations mid-year, no extra charges for routine follow-up."
        }
    ];

    const testimonials = [
        {
            text: "We run a rice milling operation near Ottapalam. Acharya handles our full GST, payroll, and year-end audit. The team knows our sector — the filings are always correct and always on time.",
            attr: "Krishnadas N. · Rice Miller, Ottapalam"
        },
        {
            text: "We do government contracts across Palakkad. Our TDS and GST used to be a mess every quarter. Since Acharya took over, we haven't received a single department notice. Complete peace of mind.",
            attr: "Subramaniam R. · Civil Contractor, Palakkad Town"
        },
        {
            text: "I have two textile shops in Shoranur. Acharya manages monthly bookkeeping, GST returns, and my personal income tax. Affordable, reliable, and they explain everything clearly in Malayalam.",
            attr: "Meera V. · Textile Retailer, Shoranur"
        }
    ];

    const areas = [
        { title: "Palakkad Town", desc: "Full CA services — GST, income tax, audit, company registration — for businesses in the district headquarters." },
        { title: "CA in Ottapalam", desc: "Accounting, GST and tax services for agro-businesses, traders and professionals in Ottapalam taluk." },
        { title: "Tax Consultant Shoranur", desc: "GST filing, bookkeeping and income tax for retail businesses, garment traders and individuals in Shoranur." },
        { title: "Accountant Chittur", desc: "Company registration, audit and tax compliance for manufacturing and industrial businesses in Chittur-Thathamangalam." },
        { title: "CA in Mannarkkad", desc: "GST, bookkeeping and income tax services for businesses and individuals in Mannarkkad and surrounding areas." },
        { title: "Alathur & Pattambi", desc: "Full compliance support — GST, payroll, and audit — for businesses in Alathur and Pattambi taluks." },
        { title: "All of Palakkad — Online", desc: "Full digital service for any client across Palakkad district — WhatsApp, email, and video consultations." }
    ];

    const faqs = [
        {
            q: "Do you have an office in Palakkad?",
            a: "Yes. We operate from our Palakkad office and are available for in-person consultations. We also serve clients across Ottapalam, Shoranur, Chittur, Mannarkkad, Alathur, Pattambi, and remote parts of the district entirely online — documents via WhatsApp, returns acknowledged and shared by email."
        },
        {
            q: "My business buys and sells across the Kerala–Tamil Nadu border. Can you handle the GST?",
            a: "Yes. Inter-state supply is a regular part of our work for Palakkad clients. We correctly classify inter-state vs intra-state supplies, handle IGST vs CGST/SGST accounting, manage place of supply determinations, and reconcile ITC claimed on inter-state purchases. If you have a separate registration in Tamil Nadu, we coordinate filings across both states."
        },
        {
            q: "Do you handle GST and accounts for rice mills and agro-processing businesses in Palakkad?",
            a: "Yes. Agricultural commodities, processed food products, and agro-industrial outputs each have specific GST treatment — including exempted categories, 5% applicable items, and RCM on purchases from unregistered farmers. We apply the correct classification for every transaction, which directly protects your ITC claims and audit position."
        },
        {
            q: "I have a government construction contract in Palakkad. What TDS and GST compliance do I need?",
            a: "Government contracts involve TDS deduction by the department (Section 194C for contractors), GST on works contract services (typically 12% with ITC restrictions), reverse charge on certain sub-contracts, and specific invoicing requirements. We manage all of this — TDS reconciliation, GST returns, subcontractor TDS, and the annual tax audit where applicable."
        },
        {
            q: "Can you file income tax returns for both Tamil-speaking and Malayalam-speaking clients in Palakkad?",
            a: "Yes. Our team communicates fluently in Malayalam, Tamil, and English. All our documentation and advisory communication is available in the language you prefer. This is particularly relevant for Palakkad clients near the Coimbatore border who are more comfortable conducting business discussions in Tamil."
        },
        {
            q: "How much does GST filing cost in Palakkad?",
            a: "Our GST filing packages are fixed-fee and depend on your filing frequency (monthly or quarterly), the number of returns per year, and your transaction volume. We provide a precise quote during the first consultation. Packages for small businesses start affordably and scale with your business — there are no hidden charges for routine GSTR filings within the agreed scope."
        },
        {
            q: "Can you register my new company and also manage its ongoing compliance in Palakkad?",
            a: "Yes. We handle incorporation end-to-end — entity type advice, name reservation, ROC filing, Certificate of Incorporation, PAN, TAN, and GST registration. Once incorporated, we continue as your CA firm for bookkeeping, GST returns, ITR, payroll, and statutory audit — so there is no handover gap between setup and ongoing compliance."
        }
    ];

    const palakkadAreas = [
        "Palakkad Town", "Ottapalam", "Shoranur", "Chittur",
        "Mannarkkad", "Alathur", "Pattambi", "Cherpulassery", "Kuzhalmannam", "Kollengode"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Palakkad | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Palakkad offering GST filing, income tax, audit, bookkeeping & company registration across Palakkad town, Ottapalam, Shoranur, Chittur and Mannarkkad."
                keywords="CA firm in Palakkad, chartered accountant in Palakkad, GST filing Palakkad, income tax consultant Palakkad, audit firm Palakkad, accounting services Palakkad, company registration Palakkad, tax consultant Palakkad"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-palakkad"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Palakkad",
                    "description": "CA firm in Palakkad offering GST filing, income tax, audit, bookkeeping and company registration across Palakkad district.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-palakkad",
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
                        { "@type": "City", "name": "Palakkad" },
                        { "@type": "City", "name": "Ottapalam" },
                        { "@type": "City", "name": "Shoranur" },
                        { "@type": "City", "name": "Chittur" },
                        { "@type": "City", "name": "Mannarkkad" },
                        { "@type": "City", "name": "Alathur" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Audit", "Bookkeeping", "Company Registration"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text PKD */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    PKD
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Palakkad
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Palakkad</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            We manage your GST, income tax, audit, and company compliance — completely and on time. Serving businesses and individuals across Palakkad district from our local office.
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
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">TDS Filing</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Tax Planning</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">NRI Tax</span>
                        </div>
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={550} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={13} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in Palakkad</span>
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Palakkad
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm operating in Palakkad. We provide GST compliance, income tax filing, statutory audit, bookkeeping, and company registration to businesses and individuals across the district.
                                </p>
                                <p>
                                    Our Palakkad clients include rice traders and agro-processing firms, textile and garment manufacturers, KSEB and PWD contractors, retail chains, schools and institutions, healthcare providers, and individual professionals. Whatever your sector, <strong className="text-white font-semibold">your engagement is led by a qualified CA from start to finish</strong> — no delegation to unqualified staff, no filing done without review.
                                </p>
                                <p>
                                    We maintain a proactive compliance calendar for every client. You receive reminders, status updates, and copies of every filed return — so you are always informed and never caught off-guard by a due date or department notice.
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
                                Our Promises & Milestones
                            </h3>

                            {milestones.map((milestone, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                                        {milestone.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{milestone.title}</h4>
                                        <p className="text-boulder text-xs leading-relaxed">
                                            {milestone.desc}
                                        </p>
                                    </div>
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
                                Our Services
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Accounting Services in <span className="italic text-primary-accent">Palakkad</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            All services delivered from our Palakkad office — by your assigned CA, on your compliance schedule, with no hidden charges.
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
                                            {service.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {service.intro}
                                    </p>
                                </div>
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
                            Why Clients Choose Our <span className="italic text-primary-accent">CA Firm in Palakkad</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Why us list */}
                        <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex gap-6 items-start hover:translate-x-1 transition-transform duration-300">
                                    <span className="font-montserrat text-3xl md:text-4xl font-bold text-primary-accent/30 leading-none">
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
                            We Serve All of <span className="italic text-primary-accent">Palakkad District</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services cover every taluk and town across Palakkad — in-person at our office and fully online for clients anywhere in the district.
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Palakkad</span>
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
                        {palakkadAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Palakkad
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

export default PalakkadPage;
