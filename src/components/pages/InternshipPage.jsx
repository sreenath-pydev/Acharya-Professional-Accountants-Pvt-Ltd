import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';
import { Link } from 'react-router-dom';

const InternshipPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
            <SEO
                title="Accounting & Finance Internship in Kerala | Acharya"
                description="Join Acharya's Accounting & Finance Internship in Kozhikode. Practical training in GST, Income Tax, Audit for BCom, MCom, MBA, CMA, ACCA students."
                canonical="https://www.acharyaprofessionalaccountants.in/Internship"
            />

            {/* =========================
          Page Intro
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
                data-aos="fade-up"
            >
                <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                    Careers
                </p>

                <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6">
                    Accounting & Finance Internship in Kerala
                </h1>

                <div className="bg-secondary-dark border border-primary-accent/15 rounded-2xl p-6 md:p-8 mb-8">
                    <p className="text-lg text-boulder leading-relaxed">
                        Acharya Professional Accountants offers practical accounting training in Kozhikode that bridges college learning with real corporate work. As a GST course Kerala learners trust, each program blends classroom clarity, GST and finance workflows, and career-style practice to make you career ready.
                    </p>
                </div>
            </section>

            {/* =========================
          Internship Section (Degree/PG)
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-16 md:mb-20"
                data-aos="fade-up"
            >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                            Internship Program
                        </p>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-5 leading-tight">
                            Accounting & Finance Internship for Degree & Post-Graduation Students
                        </h2>
                        <p className="text-lg text-boulder mb-6 leading-relaxed">
                            At Acharya Professional Accountants, we provide a job-oriented
                            accounting and finance internship designed for degree and
                            post-graduation students (BCom, BBA, BSc Finance, MBA, MCom) who
                            want practical exposure, real office experience, and confidence to
                            start their careers.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-secondary-dark border border-primary-accent/20 rounded-xl p-5">
                                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                                    <DynamicFaIcon name="fa-briefcase" className="text-primary-accent" />
                                    What You Will Learn
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                    {[
                                        'Accounting & Bookkeeping',
                                        'GST Filing & Compliance',
                                        'Income Tax & TDS',
                                        'Audit & Compliance Support',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-boulder text-sm">
                                            <i className="fas fa-check text-primary-accent mt-1 text-xs"></i>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-calendar-alt" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Duration</p>
                                        <p>1 - 3 Months</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-laptop-house" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Mode</p>
                                        <p>Onsite & Hybrid</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-certificate" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Benefit</p>
                                        <p>Certificate & Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/919446369434?text=Hi%20I%20am%20interested%20in%20the%20Accounting%20Internship"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center bg-primary-accent text-dark-bg font-semibold px-8 py-3 rounded-full hover:bg-korma transition-all duration-300 shadow-lg shadow-primary-accent/25"
                            >
                                Apply for Internship
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-accent/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
                        <img
                            src="/images/internship_office.webp"
                            alt="Students working in a modern accounting office during internship"
                            className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                            <p className="text-white text-sm font-medium text-center">
                                "Gain real work experience on live business cases under professional guidance."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          Internship Section (CMA/ACCA)
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-16 md:mb-24"
                data-aos="fade-up"
                data-aos-delay="50"
            >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                            Specialized Internship
                        </p>
                        <h2 className="font-montserrat text-3xl md:text-3xl font-bold mb-5 leading-tight">
                            Finance Internship for CMA US, CMA India & ACCA Students
                        </h2>
                        <p className="text-lg text-boulder mb-6 leading-relaxed">
                            Designed for CMA and ACCA students, this internship bridges the gap
                            between professional qualifications and industry reality. Gain confidence
                            to work in corporate finance, audit firms, and GST consulting practices.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-secondary-dark border border-primary-accent/20 rounded-xl p-5">
                                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                                    <DynamicFaIcon name="fa-chart-line" className="text-primary-accent" />
                                    Technical Exposure
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                    {[
                                        'GST & Tax Compliance',
                                        'Financial Reporting',
                                        'Audit Procedures',
                                        'Corporate Finance Basics',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-boulder text-sm">
                                            <i className="fas fa-check text-primary-accent mt-1 text-xs"></i>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-clock" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Timing</p>
                                        <p>Flexible Schedule</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-file-alt" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Proof</p>
                                        <p>Work Experience Letter</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/919446369434?text=Hi%20I%20am%20a%20CMA/ACCA%20student%20interested%20in%20work%20experience"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center bg-white text-dark-bg font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
                            >
                                Join for Work Experience
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-bl from-primary-accent/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
                        <img
                            src="/images/finance_internship_cma_acca.webp"
                            alt="Finance professionals and interns discussing financial reports"
                            className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
                        />
                        <div className="absolute top-6 right-6 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <DynamicFaIcon name="fa-user-graduate" className="text-primary-accent text-xl" />
                                <p className="text-white text-sm font-bold">Career & Exam Friendly</p>
                            </div>
                            <p className="text-boulder text-xs">
                                "Work on real client files without disturbing your exam preparation."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default InternshipPage;
