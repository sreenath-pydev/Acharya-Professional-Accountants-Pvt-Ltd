import { useState } from 'react';
import { Link } from 'react-scroll';

const FAQ = () => {
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
        'Acharya Professional Accountants has been serving clients since 2021 with a team of experienced professionals. We specialize in accounting, taxation, GST compliance, auditing, and financial consulting, helping businesses maintain compliance and optimize their financial operations.'
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

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-16 md:py-24 bg-dark-bg"
    >
      <div className="container mx-auto px-5 md:px-12 lg:px-20 relative z-10">
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
                <source srcSet="/images/f&q.webp" type="image/webp" />
                <img
                  src="/images/about.jpg"
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
                  className="bg-primary-accent text-dark-bg px-6 py-3 rounded-full font-semibold hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                  aria-label="Enquire Now"
                >
                  Enquire Now
                </Link>
                {/* <a
                  href="/brochure.pdf"
                  download
                  className="border-2 border-primary-accent text-primary-accent bg-transparent px-6 py-3 rounded-full font-semibold hover:bg-primary-accent/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300 cursor-pointer text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
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
                      className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-inset transition-colors duration-200 hover:bg-primary-accent/5"
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
                        className={`text-primary-accent text-xl transition-transform duration-300 flex-shrink-0 ${
                          openIndex === index ? 'rotate-180' : ''
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
                      className={`transition-all duration-[600ms] ease-in-out overflow-hidden ${
                        openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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
    </section>
  );
};

export default FAQ;

