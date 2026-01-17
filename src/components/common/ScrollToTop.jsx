import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicFaIcon from './FontAwesomeRegistry';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname, hash } = useLocation();

  // Handle scroll visibility for the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Handle automatic scrolling on route changes
  useEffect(() => {
    // If no hash, scroll to top
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // If hash exists, scroll to element after short delay
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed z-50 bottom-8 right-8 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919446369434"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-[#20BA5A] hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-dark-bg"
      >
        <DynamicFaIcon name="fa-whatsapp" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`w-12 h-12 bg-primary-accent text-dark-bg rounded-full flex items-center justify-center text-xl transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          } hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/40 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-opacity-50`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;