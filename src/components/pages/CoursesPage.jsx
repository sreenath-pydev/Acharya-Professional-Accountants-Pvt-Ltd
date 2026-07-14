import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import SyllabusLeadForm from '../SyllabusLeadForm';
import {
  FaStar,
  FaClock,
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaFileSignature,
  FaFilePdf,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaDownload
} from 'react-icons/fa';

const CoursesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const testimonials = [
    {
      img: '/images/success_stories/acharya-cpat-student-review-habeeba.webp',
      quote: '“Acharya’s industry-focused C-PAT training and hands-on internship prepared me for real accounting responsibilities and helped me secure placement at Remit Home.”',
      name: 'Habeeba',
      position: 'C-PAT Student',
      alt: 'Google review from Habeeba for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-fida-pervin.webp',
      quote: '“Acharya’s C-PAT training improved my accounting knowledge and helped me secure placement at Al Amal Trading Company.”',
      name: 'Fida Pervin',
      position: 'C-PAT Student',
      alt: 'Google review from Fida Pervin for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-ansa.webp',
      quote: '“Acharya’s C-PAT training provided practical accounting experience and the confidence needed to start my professional career.”',
      name: 'Ansa',
      position: 'C-PAT Student',
      alt: 'Google review from Ansa for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-adarsh.webp',
      quote: '“The C-PAT program at Acharya gave me valuable practical exposure and strengthened my confidence in handling accounting tasks.”',
      name: 'Adarsh',
      position: 'C-PAT Student',
      alt: 'Google review from Adarsh for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-basith-v.webp',
      quote: '“Acharya’s C-PAT training enhanced my practical accounting skills and helped me secure placement at Sweyer Pharmaceuticals Pvt. Ltd.”',
      name: 'Basith V',
      position: 'C-PAT Student',
      alt: 'Google review from Basith V for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-fidha.webp',
      quote: '“Acharya’s C-PAT course helped me bridge the gap between theory and practice, making me better prepared for the accounting profession.”',
      name: 'Fidha',
      position: 'C-PAT Student',
      alt: 'Google review from Fidha for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-hajnas.webp',
      quote: '“Acharya’s C-PAT training provided practical accounting knowledge and helped me secure placement at Solstellar Private Limited.”',
      name: 'Hajnas',
      position: 'C-PAT Student',
      alt: 'Google review from Hajnas for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-sooraj.webp',
      quote: '“Acharya’s practical C-PAT training strengthened my accounting skills and helped me secure placement at Smart Engineering Works.”',
      name: 'Sooraj',
      position: 'C-PAT Student',
      alt: 'Google review from Sooraj for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-nahula-a.webp',
      quote: '“Acharya’s practical C-PAT training helped me develop strong accounting skills and secure placement at Tetla Motors Pvt. Ltd.”',
      name: 'Nahula A',
      position: 'C-PAT Student',
      alt: 'Google review from Nahula A for Acharya C-PAT course'
    },
    {
      img: '/images/success_stories/acharya-cpat-student-review-anjali.webp',
      quote: '“Acharya’s C-PAT training improved my practical accounting knowledge and helped me secure placement at Vivekananda Travels Private Limited.”',
      name: 'Anjali',
      position: 'C-PAT Student',
      alt: 'Google review from Anjali for Acharya C-PAT course'
    }
  ];

  const features = [
    '100% Offline Classroom Training',
    'Real Company Data Training',
    'Live GST Filing',
    'Tally Prime Training',
    'MS Excel Advanced',
    'Winman Income Tax',
    'Auditing & Taxation',
    'TDS Filing',
    'GCC VAT',
    'Practical Accounting Exposure',
    '1 Months Internship',
    'Industry Recognized Certificates'
  ];

  return (
    <main className="relative z-10 font-inter text-white bg-transparent pt-24 md:pt-28 pb-10">
      <SEO
        title="Best Practical Accounting & GST Course in Kozhikode | Acharya"
        description="Enroll in C-PAT - Certified Professional Accounting Training. 4 months practical training + 1 months free internship in GST, Income Tax, Tally, and Auditing."
        canonical="https://www.acharyaprofessionalaccountants.in/courses"
      />
      <style>{`
        .animate-marquee-custom:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ===== C-PAT FEATURED HERO ===== */}
      <section className="container mx-auto px-4 md:px-20 mb-14" data-aos="fade-up">
        <div className="relative overflow-hidden bg-gradient-to-br from-secondary-dark/45 to-dark-bg/25 backdrop-blur-md border border-primary-accent/15 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 p-32 bg-primary-accent/5 rounded-full blur-3xl pointer-events-none"></div>

          <span className="inline-flex items-center gap-2 bg-primary-accent text-dark-bg font-extrabold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full">
            <FaStar className="text-xs" /> FLAGSHIP PROGRAM
          </span>

          <h1 className="font-montserrat text-3xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4 leading-tight flex flex-wrap items-center gap-3 md:gap-4">
            <span>C-PAT – Certified Professional Accounting Training</span>
            <span className="inline-flex items-center bg-primary-accent/5 border border-primary-accent text-primary-accent text-xs md:text-sm font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-[0_0_10px_rgba(229,161,69,0.1)]">
              📍 100% OFFLINE CLASSROOM TRAINING – KOZHIKODE
            </span>
          </h1>

          <p className="text-lg md:text-xl text-boulder max-w-3xl leading-relaxed mb-8">
            Hands-on accounting & GST training that makes you job-ready. Learn how accounting, GST, taxation, and audit actually run inside professional offices.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="bg-secondary-dark/60 border border-primary-accent/20 rounded-full px-6 py-4 flex items-center gap-4 backdrop-blur shadow-lg">
              <span className="text-boulder text-sm md:text-base line-through">₹35,000</span>
              <span className="text-primary-accent text-xl md:text-2xl font-extrabold">₹20,000 ONLY</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl">
            <div className="bg-secondary-dark/50 border border-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                <FaClock />
              </div>
              <div>
                <p className="text-xs text-boulder uppercase">Duration</p>
                <p className="font-bold text-sm">4 Months Training</p>
              </div>
            </div>

            <div className="bg-secondary-dark/50 border border-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                <FaBriefcase />
              </div>
              <div>
                <p className="text-xs text-boulder uppercase">Internship</p>
                <p className="font-bold text-sm">1 Months FREE Internship</p>
              </div>
            </div>

            <div className="bg-secondary-dark/50 border border-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                <FaCertificate />
              </div>
              <div>
                <p className="text-xs text-boulder uppercase">Total Exposure</p>
                <p className="font-bold text-sm">5 Months Total Exposure</p>
              </div>
            </div>

            <div className="bg-secondary-dark/50 border border-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0 text-lg">
                📍
              </div>
              <div>
                <p className="text-xs text-boulder uppercase">Location</p>
                <p className="font-bold text-sm">Kozhikode (Palace Road)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/919562069434?text=Hi%20Acharya,%20I%20am%20interested%20in%20enrolling%20in%20the%20C-PAT%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-primary-accent text-dark-bg font-bold px-8 py-4 rounded-full hover:bg-korma transition-all duration-300 shadow-lg shadow-primary-accent/25"
              >
                <span>Enroll Now</span>
                <FaArrowRight />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex justify-center items-center border border-white/20 bg-white/5 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Download Syllabus
              </button>
            </div>
            <p className="text-xs md:text-sm text-boulder italic mt-1">
              Classroom located at Palace Road, Mankave, Kozhikode
            </p>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATES ===== */}
      <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 relative inline-block">
          3 Valuable Certificates Included
          <span className="absolute left-0 bottom-[-8px] w-16 h-[3px] bg-primary-accent"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary-dark/50 border-l-4 border-primary-accent rounded-r-2xl p-6 shadow-xl flex flex-col gap-3">
            <div className="text-primary-accent text-2xl">
              <FaGraduationCap />
            </div>
            <h4 className="text-white font-bold text-lg">Course Completion Certificate</h4>
            <p className="text-boulder text-sm">Awarded after successful completion of practical classroom training modules.</p>
          </div>

          <div className="bg-secondary-dark/50 border-l-4 border-primary-accent rounded-r-2xl p-6 shadow-xl flex flex-col gap-3">
            <div className="text-primary-accent text-2xl">
              <FaBriefcase />
            </div>
            <h4 className="text-white font-bold text-lg">1-Month Internship Certificate</h4>
            <p className="text-boulder text-sm">Issued upon completion of practical office internship at Acharya Professional Accountants.</p>
          </div>

          <div className="bg-secondary-dark/50 border-l-4 border-primary-accent rounded-r-2xl p-6 shadow-xl flex flex-col gap-3">
            <div className="text-primary-accent text-2xl">
              <FaFileSignature />
            </div>
            <h4 className="text-white font-bold text-lg">5-Month Experience Certificate</h4>
            <p className="text-boulder text-sm">In Audit & Taxation representing your combined training and internship workflows.</p>
          </div>
        </div>
      </section>

      {/* ===== SYLLABUS DOWNLOAD (LEAD CAPTURE MODAL TRIGGER) ===== */}
      <section id="syllabus" className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
        <div className="bg-secondary-dark/40 border-2 border-dashed border-primary-accent/30 rounded-3xl p-8 md:p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="text-red-500 text-4xl mb-4 flex justify-center">
            <FaFilePdf />
          </div>
          <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-2">Download Detailed Syllabus</h3>
          <p className="text-boulder text-sm md:text-base mb-6 max-w-xl mx-auto">
            Enter your details to receive the complete course syllabus, fee structure, career opportunities, and placement information instantly.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-extrabold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-[#1e40af]/20 transform hover:-translate-y-0.5 mx-auto"
          >
            <FaDownload className="text-sm" />
            <span>Get Free Syllabus PDF</span>
          </button>
        </div>
      </section>

      {/* ===== SUCCESS STORIES (auto-scroll) ===== */}
      <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 relative inline-block">
          Success Stories
          <span className="absolute left-0 bottom-[-8px] w-16 h-[3px] bg-primary-accent"></span>
        </h2>

        <div className="relative overflow-hidden w-full py-6 bg-secondary-dark/30 rounded-3xl border border-white/5 shadow-2xl">
          <div className="animate-marquee-custom flex gap-6 px-4">
            {/* Loop through testimonials twice for infinite scroll */}
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[290px] bg-secondary-dark border border-white/5 p-6 rounded-2xl text-center shadow-lg hover:border-primary-accent/30 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.alt || item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-accent mx-auto mb-3"
                />
                <div className="text-primary-accent text-sm tracking-widest mb-2">★★★★★</div>
                <p className="text-boulder text-sm italic min-h-[72px] flex items-center justify-center leading-relaxed">
                  {item.quote}
                </p>
                <div className="w-8 h-[1px] bg-white/10 my-3 mx-auto"></div>
                <div className="text-white font-bold text-sm">{item.name}</div>
                <div className="text-primary-accent text-xs mt-1">{item.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE C-PAT ===== */}
      <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 relative inline-block">
          Why Choose C-PAT?
          <span className="absolute left-0 bottom-[-8px] w-16 h-[3px] bg-primary-accent"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-secondary-dark border border-white/5 px-6 py-4 rounded-full flex items-center gap-3 hover:border-primary-accent/30 transition-all duration-300"
            >
              <div className="text-primary-accent text-base flex-shrink-0">
                <FaCheckCircle />
              </div>
              <span className="text-white font-medium text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BOTTOM CONVERSION CTA ===== */}
      <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
        <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(229,161,69,0.35),transparent_50%)]"></div>

          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Become a Professional Accountant in 4 Months
          </h2>

          <div className="flex flex-wrap justify-center gap-y-3 gap-x-6 text-sm text-boulder mb-8 max-w-4xl mx-auto">
            {['Practical Training', 'Real Company Projects', 'Free Internship', '3 Certificates', 'Audit & Taxation Experience'].map((benefit) => (
              <span key={benefit} className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-accent" />
                <span>{benefit}</span>
              </span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-white mb-6">
            Limited Seats Available – <strong className="text-primary-accent font-extrabold">₹20,000 Only</strong>
          </p>

          <a
            href="https://wa.me/919562069434?text=Hi%20Acharya,%20I%20am%20interested%20in%20enrolling%20in%20the%20C-PAT%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-primary-accent text-dark-bg font-extrabold text-lg px-10 py-4 rounded-full hover:bg-korma transition-all duration-300 shadow-xl shadow-primary-accent/20"
          >
            <span>Enroll Today</span>
            <FaArrowRight />
          </a>
        </div>
      </section>

      {/* ===== CONTACT INFO & GOOGLE MAP ===== */}
      <section className="container mx-auto px-4 md:px-20 mb-16" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Info Block */}
          <div className="lg:col-span-6 bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-2xl">
            <h3 className="font-montserrat text-2xl font-bold mb-4 relative inline-block text-white">
              Contact Info
              <span className="absolute left-0 bottom-[-8px] w-12 h-[3px] bg-primary-accent"></span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0 text-lg">
                  📍
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Office Address</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    1st Floor, Palace Arcade, Palace Road, Mankave, Kozhikode, Kerala 673007
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Phone</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <a href="tel:+919562069434" className="hover:text-primary-accent transition-colors">+91 9562 06 9434</a><br />
                    <a href="tel:+917025546914" className="hover:text-primary-accent transition-colors">+91 7025 54 6914</a><br />
                    <a href="tel:+919072118877" className="hover:text-primary-accent transition-colors">+91 9072 11 8877</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0 text-lg">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Email</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <a href="mailto:acharya.apa@gmail.com" className="hover:text-primary-accent transition-colors">acharya.apa@gmail.com</a><br />
                    <a href="mailto:apa@acharya-professional-accountants.in" className="hover:text-primary-accent transition-colors">apa@acharya-professional-accountants.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="lg:col-span-6 bg-secondary-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-full min-h-[320px] shadow-2xl">
            <div className="flex-grow rounded-2xl overflow-hidden shadow-xl border border-white/5 h-64 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.6841848514887!2d75.8030430737993!3d11.2358719889422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596ca4d1cb11%3A0xa76f81f9ba68fee1!2sAcharya%20professional%20accountants%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1750755342483!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale-30 contrast-110"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-right mt-4">
              <a
                href="https://www.google.com/maps/dir//Acharya+professional+accountants+pvt+ltd,+1st+Floor,+Palace+Arcade,+Palace+Road,+Mankave,+Kozhikode,+Kerala+673007/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-accent hover:underline text-sm inline-flex items-center gap-1.5 font-bold"
              >
                📍 Get Directions <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STICKY FLOATING BUTTONS ===== */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[999]">
        <a
          href="tel:9072418877"
          className="flex items-center justify-center gap-3 bg-secondary-dark text-white border border-white/10 hover:border-white/30 font-bold px-6 py-3.5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5"
        >
          <FaPhoneAlt className="text-primary-accent" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/919562069434"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#25d366] text-white font-bold px-6 py-3.5 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-0.5"
        >
          <FaWhatsapp className="text-xl" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Syllabus Lead Form Modal */}
      <SyllabusLeadForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default CoursesPage;
