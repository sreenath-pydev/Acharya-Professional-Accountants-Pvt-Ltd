import React, { useState } from 'react';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email.trim()) {
      setIsSubscribed(true);
      e.target.reset();
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer data-aos="fade-up" data-aos-delay="50" className="bg-graphite pt-20 border-t border-primary-accent/10 relative overflow-hidden">
      <div  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201000%20600%22%3E%3Crect%20fill%3D%22%231c1c1b%22%20width%3D%221000%22%20height%3D%22600%22/%3E%3Cg%20fill%3D%22%23e5a145%22%20opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2280%22/%3E%3Ccircle%20cx%3D%22800%22%20cy%3D%22500%22%20r%3D%22100%22/%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%22300%22%20r%3D%22120%22/%3E%3C/g%3E%3C/svg%3E')] bg-cover z-0"></div>

      
      <div className="container mx-auto px-5 md:px-20 relative z-10 pb-16">
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div  className="mb-6">
              <img 
                src="/images/logo.png" 
                alt="Acharya Professional Accountants" 
                className="h-32 w-auto mb-5"
              />
              <p className="text-boulder">
                Providing expert accounting solutions that drive business growth and ensure compliance since 2008.
              </p>
            </div>
            
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
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-accent relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary-accent"></span>
            </h3>
            
            <ul className="space-y-3">
              {['home', 'about', 'services', 'internship', 'careers', 'blog', 'contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item}`}
                    className="text-boulder hover:text-primary-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-primary-accent group-hover:translate-x-1 transition-transform duration-300"></i>
                    {item === 'blog' ? 'Insights' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-accent relative pb-2">
              Contact Info
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary-accent"></span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-primary-accent text-lg mt-1"></i>
                <span className="text-boulder">
                   1st Floor Palace Arcade, Palace Road, Mankave, Kozhikode,
                    Kerala 673007
                </span>
              </li>
              
              <li className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-primary-accent text-lg mt-1"></i>
                <span className="text-boulder">
                  <a href="tel:+919562069434" className="hover:text-primary-accent transition-colors duration-300">+91 9562 06 9434</a><br />
                  <a href="tel:+917025546914" className="hover:text-primary-accent transition-colors duration-300">+91 7025 54 6914</a><br />
                    <a href="tel:+919072118877" className="hover:text-primary-accent transition-colors duration-300">+91 9072 11 8877</a>
                </span>
              </li>
              
              <li className="flex items-start gap-4">
                <i className="fas fa-envelope text-primary-accent text-lg mt-1"></i>
                <span className="text-boulder">
                  <a href="mailto:info@acharyapro.com" className="hover:text-primary-accent transition-colors duration-300">acharyas.apa@gmail.com</a><br />
                  <a href="mailto:support@acharyapro.com" className="hover:text-primary-accent transition-colors duration-300">apa@acharya-professional-accountants.in</a>
                </span>
              </li>
              
              <li className="flex items-start gap-4">
                <i className="fas fa-clock text-primary-accent text-lg mt-1"></i>
                <span className="text-boulder">
                  Monday - Saturday:<br /> 9:00 AM - 6:00 PM<br />
                  
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-accent relative pb-2">
              Newsletter
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary-accent"></span>
            </h3>
            
            <p className="text-boulder mb-6">
              Subscribe to our newsletter for the latest industry insights, tax updates, and business strategies.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-5 py-4 pr-36 rounded-full bg-dark-bg border border-friar-gray text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-primary-accent text-dark-bg px-5 py-3 rounded-full font-semibold hover:bg-korma hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary-accent/30 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            
            {isSubscribed && (
              <div className="bg-primary-accent/10 text-primary-accent p-3 rounded-lg text-center animate-fadeIn">
                <i className="fas fa-check-circle mr-2"></i> Thank you for subscribing!
              </div>
            )}
            
            <div className="mt-8">
              <h4 className="text-boulder mb-4">We Accept:</h4>
              <div className="flex flex-wrap gap-3">
                {['cc-visa', 'cc-mastercard', 'cc-paypal', 'cc-apple-pay'].map((icon, index) => (
                  <div key={index} className="w-12 h-8 bg-dark-bg rounded flex items-center justify-center text-boulder">
                    <i className={`fab fa-${icon}`}></i>
                  </div>
                ))}
                <div className="w-12 h-8 bg-dark-bg rounded flex items-center justify-center text-boulder">
                  <i className="fas fa-rupee-sign"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-6 border-t border-primary-accent/10 text-center relative z-10">
        <div className="container mx-auto px-5">
          <p className="text-boulder text-sm">
            &copy; 2025 Acharya Professional Accountants Pvt Ltd. All Rights Reserved. | Designed & Developed by <a href="https://www.sreenathdev.online/" target="_blank" className="text-primary-accent hover:underline"><i className="fas fa-heart text-primary-accent"></i> Sreenath K K</a> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;