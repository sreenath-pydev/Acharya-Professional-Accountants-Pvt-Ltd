import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { locationGroups } from '../../data/locationData';
import {
    IconCheck,
    IconPhone,
    IconEnvelope,
    IconMapMarker,
    IconClock
} from '../common/Icons';

const MumbaiPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const miniStats = [
        { num: "1000+", label: "Mumbai Clients" },
        { num: "17+", label: "Years Active" },
        { num: "100%", label: "On-Time Filings" },
        { num: "₹0", label: "Late Penalties" }
    ];

    const tickerItems = [
        "GST Filing Mumbai",
        "Income Tax Consultant Mumbai",
        "Company Registration Mumbai",
        "Statutory Audit Mumbai",
        "HNI Tax Planning Mumbai",
        "NRI Tax Filing Mumbai",
        "Bookkeeping Services Mumbai",
        "Audit Firm Mumbai",
        "Listed Co. Compliance"
    ];

    const pills = [
        { text: "GST Filing", lit: true },
        { text: "Income Tax", lit: true },
        { text: "Statutory Audit", lit: true },
        { text: "HNI Tax Planning", lit: true },
        { text: "Company Registration", lit: false },
        { text: "NRI Tax", lit: false },
        { text: "Listed Co. Compliance", lit: false },
        { text: "Bookkeeping", lit: false }
    ];

    const proofCards = [
        {
            num: "1000+",
            title: "Mumbai Clients",
            desc: "Across BFSI, fintech, corporate offices, trading houses, HNI family offices, and professionals."
        },
        {
            num: "17+",
            title: "Years Active",
            desc: "Over a decade and a half of dedicated compliance experience serving Mumbai's business community."
        },
        {
            num: "100%",
            title: "On-Time Filing",
            desc: "Not a single client has ever paid a late filing penalty under our compliance management."
        },
        {
            num: "ICAI",
            title: "Registered CAs",
            desc: "All compliance filings structured and reviewed directly by ICAI-registered CAs."
        }
    ];

    const services = [
        {
            ico: "📊",
            title: "GST Filing Services Mumbai",
            desc: "Complete GST lifecycle — registration, GSTR-1, GSTR-3B, GSTR-9 annual reconciliation, and notice replies. For BFSI and fintech companies, we handle GST on financial services exemptions correctly, and for trading houses, we manage multi-branch ITC reconciliation across Mumbai, Thane, and Navi Mumbai GSTINs.",
            chips: ["GST Registration", "GSTR-1 / 3B / 9", "BFSI GST Exemptions", "Multi-Branch ITC"]
        },
        {
            ico: "🧾",
            title: "Income Tax Consultant Mumbai",
            desc: "ITR filing for salaried professionals, business owners, and companies — with year-round advance tax planning, TDS compliance, and capital gains computation across equity, mutual fund, and property transactions common in Mumbai's investor community.",
            chips: ["ITR — All Forms", "Capital Gains Tax", "TDS Filing", "IT Notice Response"]
        },
        {
            ico: "💼",
            title: "HNI Wealth & Tax Planning",
            desc: "For high-net-worth families and family businesses, we provide year-round tax structuring across investments, business income, property holdings, and inheritance planning — coordinating with your wealth manager and legal advisors to keep your tax position optimised and defensible.",
            chips: ["Wealth Structuring", "Inheritance Planning", "Trust Taxation", "Portfolio Tax Advisory"]
        },
        {
            ico: "🔍",
            title: "Statutory & Listed Co. Audit",
            desc: "Statutory, internal, and tax audits for private and listed companies in Mumbai. For listed entities, we coordinate financial disclosures and audit timelines with your statutory auditor and company secretary to support SEBI compliance and board reporting requirements.",
            chips: ["Statutory Audit", "Internal Audit", "Listed Co. Support", "Board Reporting"]
        },
        {
            ico: "🌐",
            title: "NRI Tax Filing Mumbai",
            desc: "ITR, TDS on rent, capital gains on Mumbai property sales, and FEMA compliance for Maharashtrian NRI families settled abroad — handled entirely online via WhatsApp and email, with DTAA benefit claims under the relevant tax treaty applied correctly.",
            chips: ["NRI ITR Filing", "FEMA Compliance", "DTAA Benefits", "Repatriation"]
        },
        {
            ico: "🚀",
            title: "Company Registration Mumbai",
            desc: "Full incorporation — entity selection, DSC/DIN, MCA filing, PAN/TAN, GST registration, and first-year compliance setup for Private Limited Companies, LLPs, and trading partnership firms across Mumbai.",
            chips: ["Pvt Ltd / LLP", "MSME / Udyam", "ROC & MCA Filing"]
        }
    ];

    const comparisonRows = [
        {
            metric: "Who handles your file",
            us: "A dedicated, named CA — available by phone and WhatsApp",
            typical: "Rotating junior staff; CA reviews only at submission"
        },
        {
            metric: "GST filing turnaround",
            us: "Filed 3–5 days before the due date, every month",
            typical: "Often filed on the due date, sometimes after"
        },
        {
            metric: "Family office tax planning",
            us: "✓ Year-round tax structuring across portfolios, HUF, and property",
            typical: "✗ Typically handled only as standalone filing",
            isBoolean: true
        },
        {
            metric: "BFSI & Listed Co. expertise",
            us: "✓ Experienced with SEBI disclosures and GST exemptions",
            typical: "✗ General compliance only",
            isBoolean: true
        },
        {
            metric: "Pricing clarity",
            us: "Fixed fee agreed before engagement starts — no surprises",
            typical: "Hourly or variable billing; extras added at year-end"
        },
        {
            metric: "Communication language",
            us: "Marathi, Hindi, Gujarati, English",
            typical: "English only, or inconsistent"
        }
    ];

    const testimonials = [
        {
            role: "Family Office · Malabar Hill",
            text: "Our family has business income, rental property across three cities, and investment portfolios managed by two different wealth advisors. Acharya is the one constant — they coordinate our entire tax position annually, something no previous CA managed to do coherently.",
            author: "Jayesh Shah.",
            company: "Family Business Head, Malabar Hill"
        },
        {
            role: "Fintech · BKC",
            text: "GST on financial services has specific exemptions most CAs get wrong. Acharya filed it correctly from day one — no department queries since we onboarded two years ago.",
            author: "Rohan D.",
            company: "Founder, Fintech Startup, BKC"
        },
        {
            role: "NRI · London",
            text: "I have a flat in Andheri and mutual funds in India while based in London. Acharya files my ITR and handles FEMA every year — entirely over WhatsApp.",
            author: "Snehal P.",
            company: "NRI Client, London"
        }
    ];

    const areas = [
        {
            title: "Bandra Kurla Complex",
            desc: "GST, statutory audit and compliance for BFSI, fintech and corporate offices in BKC."
        },
        {
            title: "Andheri",
            desc: "Income tax, bookkeeping and company registration for professionals and businesses in Andheri East and West."
        },
        {
            title: "Lower Parel & Worli",
            desc: "Listed company audit support, HNI tax planning and statutory compliance for corporate Mumbai."
        },
        {
            title: "Borivali & Malad",
            desc: "GST filing, payroll and income tax for trading businesses and professionals in the western suburbs."
        },
        {
            title: "Thane",
            desc: "Full CA services — GST, audit, company registration — for businesses across Thane and surrounding areas."
        },
        {
            title: "Navi Mumbai",
            desc: "Accounting, GST and tax services for businesses and professionals across Navi Mumbai and Vashi."
        },
        {
            title: "Mumbai NRI Clients",
            desc: "Remote ITR, TDS, FEMA and capital gains compliance for Maharashtrian NRIs in the UK, US and beyond."
        },
        {
            title: "All of Mumbai — Online",
            desc: "Full digital CA service anywhere in Mumbai — WhatsApp, email, and video consultations available."
        }
    ];

    const faqs = [
        {
            q: "Do you have an office in Mumbai?",
            a: "Yes. We operate from our Mumbai office and are available for in-person consultations. We also serve clients across BKC, Andheri, Lower Parel, Borivali, Thane, Navi Mumbai, and all other parts of the city entirely online via WhatsApp and email."
        },
        {
            q: "What does \"HNI wealth and tax planning\" actually involve?",
            a: "For high-net-worth individuals and families, tax planning goes beyond annual ITR filing. We review your income sources — salary, business profits, capital gains from equity and mutual funds, rental income, and any foreign assets — and structure transactions before the financial year closes to legally minimise tax. This includes timing capital gains realisation, using available exemptions under Sections 54/54F for property reinvestment, structuring HUF income where applicable, and coordinating with your wealth manager so your investment decisions and tax position move together rather than being addressed separately at filing time."
        },
        {
            q: "Can you handle statutory audit support for a listed company in Mumbai?",
            a: "We work alongside your statutory auditor and company secretary to ensure financial disclosures, audit committee reporting, and the underlying accounting support a listed company's SEBI compliance timelines. This includes preparing supporting schedules, reconciling related party transactions, and ensuring your books are structured for the disclosures required under LODR regulations. We do not replace your statutory auditor of record for a listed entity but provide the underlying accounting and compliance support that makes audit and disclosure timelines achievable."
        },
        {
            q: "I'm an NRI from Mumbai settled in the UK. Can you manage my property and investment taxes remotely?",
            a: "Yes. We handle ITR filing for NRI status, TDS reconciliation on rental income from your Mumbai property, capital gains computation on equity or property sales, FEMA compliance for repatriating funds, and DTAA benefit claims under the India-UK tax treaty to avoid double taxation. Everything is coordinated via WhatsApp and email — no travel to Mumbai required."
        },
        {
            q: "What GST treatment applies to financial services and fintech companies in Mumbai?",
            a: "Financial services have specific GST treatment — certain services like interest income are exempt, while fee-based services (advisory, processing fees, platform charges) are taxable. For fintech companies, correctly classifying revenue streams between exempt and taxable supplies is critical to avoid both under-payment notices and unnecessary GST collection. We review your revenue model and apply the correct classification from the start."
        },
        {
            q: "Do you handle Professional Tax and Shops & Establishment registration for Maharashtra?",
            a: "Yes. We manage Professional Tax registration and monthly compliance for employers and self-employed professionals in Maharashtra, along with Shops & Establishment Act registration required for most commercial premises in Mumbai. These are typically bundled into our company registration and payroll retainer services."
        },
        {
            q: "What does your fee structure look like for complex, multi-entity family businesses?",
            a: "For family businesses with multiple entities — HUF, individual filings, partnership firms, and private limited companies — we provide a consolidated fixed-fee proposal covering the full group's compliance needs, rather than pricing each entity separately and inconsistently. This typically reduces overall cost while ensuring tax positions across entities are coherent rather than handled in isolation by different consultants."
        }
    ];

    const mumbaiAreas = [
        "Bandra Kurla Complex", "BKC", "Andheri", "Lower Parel", "Worli", "Borivali", "Malad", "Thane", "Navi Mumbai", "Malabar Hill"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Mumbai | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a leading CA firm in Mumbai offering GST filing, income tax, statutory audit, HNI tax planning, listed company compliance and company registration across BKC, Andheri, Lower Parel and Thane."
                keywords="CA firm in Mumbai, chartered accountant in Mumbai, GST filing Mumbai, income tax consultant Mumbai, audit firm Mumbai, accounting services Mumbai, company registration Mumbai, HNI tax planning Mumbai, NRI tax Mumbai"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-mumbai"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Mumbai",
                    "description": "CA firm in Mumbai offering GST filing, income tax, statutory audit, HNI tax planning, listed company compliance and company registration.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-mumbai",
                    "telephone": ["+919562069434", "+919072118877"],
                    "email": "acharya.apa@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Mumbai",
                        "addressLocality": "Mumbai",
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Mumbai" },
                        { "@type": "City", "name": "Bandra Kurla Complex" },
                        { "@type": "City", "name": "Andheri" },
                        { "@type": "City", "name": "Lower Parel" },
                        { "@type": "City", "name": "Borivali" },
                        { "@type": "City", "name": "Thane" },
                        { "@type": "City", "name": "Navi Mumbai" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Statutory Audit", "HNI Tax Planning", "Listed Company Compliance", "NRI Tax", "Company Registration"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text MUM */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    MUM
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Mumbai
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Mumbai</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            We manage GST, income tax, statutory audit, HNI wealth tax planning, and company compliance for businesses, professionals, and families across Mumbai — precisely, and on time.
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
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Mini Stats Column */}
                    <div className="lg:col-span-4 flex flex-col justify-center gap-4 relative">
                        {miniStats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-5 border-l-2 border-l-primary-accent hover:border-primary-accent/30 transition-colors shadow-xl"
                            >
                                <span className="font-montserrat text-2xl md:text-3xl font-bold text-primary-accent block leading-none">
                                    {stat.num}
                                </span>
                                <span className="text-[10px] md:text-xs text-silver-sand font-medium uppercase tracking-wider block mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
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

            {/* SERVICE PILLS */}
            <div className="flex flex-wrap gap-2.5 justify-center py-6 px-5 md:px-12 lg:px-20 border-b border-white/5 bg-secondary-dark/30">
                {pills.map((pill, idx) => (
                    <span
                        key={idx}
                        className={`text-[10px] md:text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${pill.lit
                                ? 'border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold shadow-sm shadow-primary-accent/10'
                                : 'border-white/5 text-boulder bg-transparent hover:border-white/10'
                            }`}
                    >
                        {pill.text}
                    </span>
                ))}
            </div>

            {/* ABOUT SECTION */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Who We Are
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold leading-tight">
                            Your <span className="italic text-primary-accent">Chartered Accountant</span> in Mumbai
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left description block */}
                        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm operating in Mumbai. We provide GST compliance, income tax filing, statutory audit, HNI wealth and tax planning, NRI tax services, bookkeeping, and company registration — handled by qualified CAs directly accountable to you.
                                </p>
                                <p>
                                    Our Mumbai clients span BFSI and fintech companies in BKC, listed and unlisted corporates requiring statutory and tax audit, high-net-worth families and family offices structuring wealth across generations, professionals in media and entertainment, established Gujarati and Marwari trading houses, and Maharashtrian NRI families settled in the UK and US. <strong className="text-white font-semibold">Every engagement gets a dedicated CA</strong>, tracked against a live compliance calendar, with zero late filings — regardless of how complex your financial structure is.
                                </p>
                                <p>
                                    We communicate in Marathi, Hindi, Gujarati, and English, and serve clients both in-person and entirely online via WhatsApp and email.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="bg-primary-accent text-dark-bg px-8 py-3.5 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                                >
                                    Talk to Our CA <span className="text-lg">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right proof cards grid */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
                            {proofCards.map((proof, idx) => (
                                <div
                                    key={idx}
                                    className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-colors relative overflow-hidden group shadow-xl"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-accent to-transparent"></div>
                                    <span className="font-montserrat text-3xl font-bold text-primary-accent block mb-2">
                                        {proof.num}
                                    </span>
                                    <h4 className="text-white font-bold text-sm mb-1.5 leading-tight">{proof.title}</h4>
                                    <p className="text-boulder text-xs leading-relaxed">{proof.desc}</p>
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
                            Accounting Services in <span className="italic text-primary-accent">Mumbai</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Full-spectrum financial and compliance services for Mumbai's corporate, BFSI, and high-net-worth community.
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
                                    {service.chips.map((chip, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] uppercase tracking-wider font-semibold text-silver-sand bg-white/5 px-2 py-1 rounded"
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section id="why-us" className="py-20 bg-secondary-dark/10 border-b border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Mumbai Clients Choose <span className="italic text-primary-accent">Acharya</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            A look at what makes our Mumbai practice different — for businesses and families with complex financial lives.
                        </p>
                    </div>

                    {/* comparison table */}
                    <div className="overflow-x-auto rounded-2xl border border-white/5 bg-secondary-dark/40 shadow-2xl" data-aos="fade-up">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-secondary-dark/80">
                                    <th className="p-4 md:p-5 text-left text-xs uppercase tracking-wider font-semibold text-silver-sand border-b border-white/5 w-[28%]">
                                        What Matters to You
                                    </th>
                                    <th className="p-4 md:p-5 text-left text-xs uppercase tracking-wider font-semibold text-primary-accent border-b border-white/5 w-[36%]">
                                        ✦ Acharya Professional Accountants
                                    </th>
                                    <th className="p-4 md:p-5 text-left text-xs uppercase tracking-wider font-semibold text-silver-sand border-b border-white/5 w-[36%]">
                                        Typical CA Firm
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors">
                                        <td className="p-4 md:p-5 text-xs md:text-sm font-semibold text-white">
                                            {row.metric}
                                        </td>
                                        <td className="p-4 md:p-5 text-xs md:text-sm text-gray-200">
                                            {row.isBoolean ? (
                                                <span className="text-primary-accent font-bold">{row.us}</span>
                                            ) : row.us}
                                        </td>
                                        <td className="p-4 md:p-5 text-xs md:text-sm text-white/20">
                                            {row.typical}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Testimonials grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" data-aos="fade-up">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                                        <span className="text-xs text-primary-accent font-semibold">{t.role}</span>
                                        <span className="text-[9px] uppercase tracking-wider font-semibold text-primary-accent bg-primary-accent/15 px-2 py-0.5 rounded">
                                            Verified Client
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                                        "{t.text}"
                                    </p>
                                </div>
                                <div className="mt-auto pt-3 border-t border-white/5">
                                    <span className="text-xs uppercase tracking-wider text-primary-accent font-semibold block">
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
                            Serving All of <span className="italic text-primary-accent">Mumbai</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA and accounting services cover every major business and residential zone in Mumbai — in person and fully online.
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Mumbai</span>
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
                        {mumbaiAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Mumbai
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                First consultation is free. GST, income tax, HNI wealth planning, listed company audit, or company registration — bring your question and we give you a direct answer and a clear fee quote.
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
                                            Mumbai, Maharashtra
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

export default MumbaiPage;
