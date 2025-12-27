import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const isHomePage = location.pathname === '/';

  const handleCareersClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/careers') {
      const jobOpeningsSection = document.getElementById('job-openings');
      if (jobOpeningsSection) {
        jobOpeningsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/careers', { state: { scrollToJobOpenings: true } });
    }
  };

  const renderLink = (item) => {
    if (item === 'calculator') {
      return (
        <RouterLink
          to="/calculator"
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }
    if (item === 'about') {
      return (
        <RouterLink
          to="/about"
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    if (item === 'contact') {
      return (
        <RouterLink
          to="/contact"
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    if (item === 'services') {
      return (
        <RouterLink
          to="/services"
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    if (item === 'courses') {
      return (
        <RouterLink
          to="/courses"
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    if (item === 'careers') {
      return (
        <RouterLink
          to="/careers"
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    if (isHomePage) {
      return (
        <ScrollLink
          to={item}
          smooth={true}
          duration={500}
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={`/#${item}`}
        className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
        onClick={() => setIsMenuOpen(false)}
      >
        {item}
      </RouterLink>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 px-4">
      <div className="container mx-auto">
        <nav
          className={`relative flex justify-between items-center py-4 px-6 md:px-8 rounded-2xl transition-all duration-300 ${isScrolled
            ? 'bg-secondary-dark/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4),0_4px_16px_rgba(229,161,69,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] border border-primary-accent/20'
            : 'bg-secondary-dark/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5),0_6px_20px_rgba(229,161,69,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] border border-primary-accent/30'
            }`}
          style={{
            boxShadow: isScrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(229, 161, 69, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.3)'
              : '0 10px 40px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(229, 161, 69, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 4px 12px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* 3D Top Highlight Effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-accent/40 to-transparent rounded-t-2xl"></div>

          <div className="flex items-center h-[40px] relative z-10">
            <RouterLink to="/">
              <img
                src="/images/logo.webp"
                alt="Acharya Professional Accountants"
                className="h-12 md:h-16 w-auto transition-all duration-300"
              />
            </RouterLink>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 relative z-10">
            <ul className="flex gap-6 lg:gap-8">
              {['home', 'about', 'services', 'calculator', 'courses', 'careers'].map((item) => (
                <li key={item}>
                  {renderLink(item)}
                </li>
              ))}
            </ul>
            <RouterLink
              to="/contact"
              className="bg-primary-accent text-dark-bg px-5 py-2.5 rounded-full font-semibold hover:bg-korma hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 flex items-center gap-2 text-sm lg:text-base group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Talk to Us</span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 z-50 ml-4 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
                }`}
            ></span>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-dark-bg z-40 flex flex-col justify-center items-center pt-24 pb-10 transition-all duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
              }`}
            style={{
              top: isScrolled ? '80px' : '64px',
              height: isScrolled ? 'calc(100vh - 80px)' : 'calc(100vh - 64px)'
            }}
          >
            <ul className="flex flex-col items-center gap-6 w-full px-4">
              {['home', 'about', 'services', 'calculator', 'courses', 'careers'].map((item) => (
                <li key={item} className="w-full text-center">
                  {renderLink(item)}
                </li>
              ))}
              <li className="w-full text-center">
                <RouterLink
                  to="/contact"
                  className="bg-primary-accent text-dark-bg px-6 py-3 rounded-full font-semibold hover:bg-korma hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 inline-flex items-center gap-2 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Talk to Us</span>
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                </RouterLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;