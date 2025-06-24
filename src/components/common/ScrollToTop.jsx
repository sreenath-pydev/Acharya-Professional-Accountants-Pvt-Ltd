import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-primary-accent text-dark-bg rounded-full flex items-center justify-center text-xl transition-all duration-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/40`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;