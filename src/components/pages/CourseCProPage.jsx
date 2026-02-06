import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const CourseCProPage = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28">
      <SEO
        title="Corporate Accounting & Reporting Course | C-PRO"
        description="Master data analysis, MIS reporting, and corporate finance skills with C-PRO. Ideal for commerce graduates and analyst role seekers."
        canonical="https://www.acharyaprofessionalaccountants.in/courses/c-pro"
      />
      <section className="container mx-auto px-4 md:px-20 mb-10 md:mb-14" data-aos="fade-up">
        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Course Detail</p>
        <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-3">
          C-PRO – Corporate Professional Readiness Program
        </h1>
        <p className="text-lg text-boulder max-w-3xl">
          Data Analysis, Interpretation & Corporate Reporting for analyst, MIS, and Big 4-style roles.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-20 space-y-10 md:space-y-12 mb-16" data-aos="fade-up" data-aos-delay="50">
        <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8 md:p-10">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">Program Overview</h2>
          <p className="text-boulder leading-relaxed">
            C-PRO focuses on thinking like analysts, not bookkeepers. You will interpret numbers, craft insights, and report with
            clarity—mirroring the expectations of corporate finance teams and Big 4 workflows.
          </p>
        </div>

        <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8 md:p-10">
          <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-4">Why C-PRO is Different</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-boulder">
            {[
              'Data-driven accounting & finance training',
              'Strong focus on interpretation & insights',
              'Corporate & Big 4 work-style exposure',
              'Real business data & case studies',
              'Advanced Excel & MIS orientation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <DynamicFaIcon name="fa-check-circle" className="text-primary-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-4">What You Will Learn</h3>
            <div className="space-y-4 text-boulder">
              <div>
                <h4 className="text-white font-semibold mb-2">Financial Data Analysis</h4>
                <p>Analyze statements, trends, and variances to surface what matters.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Data Interpretation & Insights</h4>
                <p>Translate numbers into narratives that decision-makers can act on.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Excel for Analysis</h4>
                <p>Pivots, dashboards, and repeatable templates for speed and accuracy.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Corporate Reporting & Documentation</h4>
                <p>Clear MIS packs, board-ready summaries, and audit-friendly files.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Audit, GST & Compliance (Analytical View)</h4>
                <p>Assess controls, review GST data, and connect compliance to business impact.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
              <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-3">Practical & career Exposure</h3>
              <p className="text-boulder leading-relaxed">
                Work with corporate datasets, GST and audit-oriented cases, and gain career exposure at Acharya Professional
                Accountants to experience live corporate-reporting expectations.
              </p>
            </div>

            <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
              <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-3">Certification</h3>
              <p className="text-boulder">
                C-PRO – Corporate Professional Readiness (Data Analysis & Reporting)
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Who Should Join</h3>
            <p className="text-boulder">Commerce & finance students, Big 4 aspirants, analyst-role seekers.</p>
          </div>

          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Career Roles</h3>
            <ul className="space-y-3 text-boulder">
              {[
                'Audit Analyst',
                'MIS Executive',
                'Corporate Accounts Analyst',
                'Finance Analyst',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <DynamicFaIcon name="fa-briefcase" className="text-primary-accent mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-8">
            <h3 className="font-montserrat text-xl font-bold mb-4">Program Details</h3>
            <ul className="space-y-3 text-boulder">
              <li className="flex items-start gap-3">
                <DynamicFaIcon name="fa-clock" className="text-primary-accent mt-1" />
                <span>Duration: 1 / 3 / 6 Months</span>
              </li>
              <li className="flex items-start gap-3">
                <DynamicFaIcon name="fa-chalkboard-teacher" className="text-primary-accent mt-1" />
                <span>Mode: Classroom + Practical Case Training</span>
              </li>
              <li className="flex items-start gap-3">
                <DynamicFaIcon name="fa-map-marker-alt" className="text-primary-accent mt-1" />
                <span>Location: Kozhikode</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-20 pb-16 md:pb-20" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-primary-accent text-dark-bg rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-[0_20px_60px_rgba(229,161,69,0.25)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Apply for C-PRO</h3>
              <p className="text-lg max-w-2xl">Start building the data-driven finance skills corporates and Big 4 teams expect.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919446369434?text=Hi%20I%20want%20to%20apply%20for%20the%20course"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex justify-center items-center bg-dark-bg text-primary-accent font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark transition-all duration-300"
              >
                Apply Now
              </a>
              <Link
                to="/contact"
                className="flex-1 sm:flex-none inline-flex justify-center items-center bg-white text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-300"
              >
                Enquire Now
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-dark-bg font-semibold hover:text-secondary-dark transition-colors duration-300"
            >
              <DynamicFaIcon name="fa-arrow-left" className="text-sm" />
              <span>Back to Courses</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default CourseCProPage;

