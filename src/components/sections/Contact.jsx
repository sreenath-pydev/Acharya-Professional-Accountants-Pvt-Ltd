import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, proceed with submission
    setErrors({});
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(44,14,9,0.1)] to-[rgba(4,4,4,0.9)] z-0"></div>
      
      <div className="container mx-auto px-5 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div data-aos="fade-right" data-aos-delay="50" className="bg-secondary-dark p-10 rounded-2xl border border-primary-accent/10 shadow-lg">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-primary-accent relative pb-4">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-accent"></span>
            </h2>
            <p className="text-boulder mb-8 leading-relaxed">
              Have questions or need professional accounting services? Reach out to our team for personalized assistance and expert guidance.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Our Office</h4>
                  <p className="text-boulder">
                    1st Floor Palace Arcade,<br /> Palace Road, Mankave,<br /> Kozhikode,
                    Kerala 673007<br />
                    
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Phone</h4>
                  <p className="text-boulder">
                    <a href="tel:+9195620694348" className="hover:text-primary-accent transition-colors duration-300">+91 9562 06 9434</a><br />
                    <a href="tel:+919876543210" className="hover:text-primary-accent transition-colors duration-300">+91 7025 54 6914</a><br />
                    <a href="tel:+919072118877" className="hover:text-primary-accent transition-colors duration-300">+91 9072 11 8877</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Email</h4>
                  <p className="text-boulder">
                    <a href="mailto:acharya.apa@gmail.com" className="hover:text-primary-accent transition-colors duration-300">acharya.apa@gmail.com</a><br />
                    <a href="mailto:apa@acharya-professional-accountants.in" className="hover:text-primary-accent transition-colors duration-300">apa@acharya-professional-accountants.in</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Working Hours</h4>
                  <p className="text-boulder">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-xl mb-5">Connect With Us</h3>
              <div className="flex gap-4">
              {[
                { icon: 'linkedin-in', url: '#' },
                { icon: 'twitter', url: '#' },
                { icon: 'facebook-f', url: 'https://www.facebook.com/APAinCLT' },
                { icon: 'instagram', url: 'https://www.instagram.com/acharya_professional_accounts?utm_source=ig_web_button_share_sheet&igsh=MTJhMXk5YzNxYnUxZQ==' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-dark-bg rounded-full flex items-center justify-center text-primary-accent text-lg hover:bg-primary-accent hover:text-dark-bg hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-delay="50" className="bg-secondary-dark p-10 rounded-2xl border border-primary-accent/10 shadow-lg">
            {!isSubmitted ? (
              <>
                <h2 className="font-montserrat text-3xl font-bold mb-8 text-primary-accent relative pb-4">
                  Send a Message
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-accent"></span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-boulder font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.name ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-boulder font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.email ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-boulder font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.subject ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                      placeholder="Enter message subject"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-boulder font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.message ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                  >
                    Send Message <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center p-10 bg-primary-accent/10 rounded-xl animate-fadeIn">
                <div className="text-6xl text-primary-accent mb-5 animate-bounce">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                <p className="text-boulder mb-6">
                  Thank you for contacting Acharya Professional Accountings. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="bg-primary-accent text-dark-bg px-8 py-3 rounded-full font-semibold hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="50" className="h-96 rounded-2xl overflow-hidden shadow-lg border border-primary-accent/10">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.6841848514887!2d75.8030430737993!3d11.2358719889422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596ca4d1cb11%3A0xa76f81f9ba68fee1!2sAcharya%20professional%20accountants%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1750755342483!5m2!1sen!2sin" className="w-full h-full border-0 filter grayscale-30 contrast-110" allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;