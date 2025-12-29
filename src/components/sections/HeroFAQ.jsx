import { useState } from 'react';
import { Link } from 'react-scroll';

const HeroFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What accounting services does Acharya Professional Accountants offer?',
      answer:
        'We provide comprehensive accounting services including bookkeeping, financial statement preparation, tax planning and filing, GST services, auditing, business consulting, and financial advisory services tailored to your business needs.'
    },
    {
      question: 'How can I get started with your services?',
      answer:
        'You can get started by contacting us through our "Enquire Now" button, calling our office, or sending us an email. We offer a free initial consultation to understand your requirements and provide a customized solution.'
    },
    {
      question: 'Do you provide services for small businesses and startups?',
      answer:
        'Yes, we serve businesses of all sizes, from startups to established corporations. We offer scalable solutions that grow with your business, ensuring you get the right level of support at every stage.'
    },
    {
      question: 'What is your experience and expertise in the accounting field?',
      answer:
        'Acharya Professional Accountants has been serving clients since 2018 with a team of experienced professionals. We specialize in accounting, taxation, GST compliance, auditing, and financial consulting, helping businesses maintain compliance and optimize their financial operations.'
    },
    {
      question: 'How do you ensure data security and confidentiality?',
      answer:
        'We maintain strict confidentiality protocols and use secure systems to protect your financial data. All our team members are bound by professional confidentiality agreements, and we follow industry best practices for data security.'
    },
    {
      question: 'What are your working hours and how quickly do you respond?',
      answer:
        'Our office hours are Monday to Saturday, 9:00 AM to 6:00 PM. We typically respond to inquiries within 24 hours and provide timely support for urgent matters. You can also reach us via WhatsApp for instant communication.'
    },
    {
      question: 'Do you offer online/remote accounting services?',
      answer:
        'Yes, we offer both in-person and remote accounting services. We use secure cloud-based platforms and digital tools to provide seamless service regardless of your location, making it convenient for clients across different regions.'
    },
    {
      question: 'What makes Acharya Professional Accountants different from other firms?',
      answer:
        'We combine expert knowledge with personalized service, innovative solutions, and unwavering integrity. Our commitment to building long-term relationships, nurturing talent, and providing practical, real-world solutions sets us apart. We focus on understanding your unique needs and delivering results that drive growth.'
    },
    {
      question: 'Can you help with GST registration and compliance?',
      answer:
        'Absolutely! We provide comprehensive GST services including registration, return filing, reconciliation, and compliance support. Our team stays updated with the latest GST regulations to ensure your business remains compliant and avoids penalties.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  // WhatsApp phone numbers (using the numbers from Contact section)
  const whatsappNumbers = [
    { phone: '919562069434', label: 'Primary' },
    { phone: '917025546914', label: 'Secondary' }
  ];

  return (
    <section
      id="hero-faq"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background: 'linear-gradient(180deg, #03102b 0%, #06183a 60%, #071233 100%)'
      }}
    >
      <div className="container mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        {/* Hero Heading Section */}
        <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="50">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            Empowering Businesses Through Expert Accounting & Financial Guidance
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            With innovative solutions, unwavering integrity, and personalized service, we help
            organizations overcome financial challenges and unlock new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-start">
          {/* Left: Image Card */}
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-secondary-dark">
              <picture>
                <source srcSet="/images/about2.webp" type="image/webp" />
                <img
                  src="/images/about2.webp"
                  alt="Acharya Professional Accountants - team reviewing accounts"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="900"
                  height="506"
                />
              </picture>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div
            className="order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <div className="bg-secondary-dark/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-accent/10 shadow-xl">
              <p className="text-primary-accent uppercase tracking-[0.2em] text-xs mb-3 font-semibold">
                FAQ's
              </p>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-white">
                Commonly Asked Questions
              </h2>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-up" data-aos-delay="150">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="bg-[#00C853] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#00a844] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00C853]/30 transition-all duration-300 cursor-pointer text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2"
                  aria-label="Enquire Now"
                >
                  Enquire Now
                </Link>
                {/* <a
                  href="/brochure.pdf"
                  download
                  className="border-2 border-[#00C853] text-[#00C853] bg-transparent px-6 py-3 rounded-full font-semibold hover:bg-[#00C853]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00C853]/20 transition-all duration-300 cursor-pointer text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2"
                  aria-label="Download Brochure"
                >
                  Download Brochure
                </a> */}
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-primary-accent/10 rounded-lg overflow-hidden bg-dark-bg/50 transition-all duration-300 hover:border-primary-accent/30"
                  >
                    <button
                      type="button"
                      className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-inset transition-colors duration-200 hover:bg-primary-accent/5"
                      onClick={() => toggleFAQ(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className="font-semibold text-white pr-4 text-sm md:text-base">
                        {faq.question}
                      </span>
                      <span
                        className={`text-[#00C853] text-xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                          }`}
                        aria-hidden="true"
                      >
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`transition-all duration-[600ms] ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="px-5 pb-4 pt-2">
                        <p className="text-boulder text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {whatsappNumbers.map((item, index) => (
          <a
            key={index}
            href={`https://wa.me/${item.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#00C853] rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:bg-[#00a844] hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:ring-offset-2 focus:ring-offset-dark-bg"
            aria-label={`Contact us on WhatsApp - ${item.label}`}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
            data-aos-duration="400"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroFAQ;

