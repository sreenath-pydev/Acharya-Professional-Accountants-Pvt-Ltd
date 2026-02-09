import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { navbarServices } from '../../data/navbarServices';
import { loanDetails } from '../../data/loanDetails';
import { IconChevronDown, IconArrowRight } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isLoansHovered, setIsLoansHovered] = useState(false);
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

  const isActive = (item) => {
    const path = location.pathname;
    switch (item) {
      case 'home':
        return path === '/';
      case 'about':
        return path === '/about';
      case 'services':
        // Highlight services for all sub-services EXCEPT business-loans
        return path.startsWith('/services') && path !== '/services/business-loans';
      case 'business loans':
        return path === '/services/business-loans';
      case 'income tax calculator':
        return path === '/calculator';
      case 'internship':
        return path === '/Internship';
      case 'courses':
        return path.startsWith('/courses');
      case 'careers':
        return path === '/careers';
      case 'contact':
        return path === '/contact';
      default:
        return false;
    }
  };

  const getLinkClasses = (item) => {
    const baseClasses = "transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg whitespace-nowrap";
    const activeClasses = "text-primary-accent font-medium"; // Added font-medium for better visibility
    const inactiveClasses = "text-white hover:text-primary-accent";

    return `${baseClasses} ${isActive(item) ? activeClasses : inactiveClasses}`;
  };

  const renderLink = (item) => {
    if (item === 'income tax calculator') {
      return (
        <RouterLink
          to="/calculator"
          className={getLinkClasses(item)}
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    if (item === 'internship') {
      return (
        <RouterLink
          to="/Internship"
          className={getLinkClasses(item)}
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
          className={getLinkClasses(item)}
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
          className={getLinkClasses(item)}
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    if (item === 'business loans') {
      return (
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => setIsLoansHovered(true)}
          onMouseLeave={() => setIsLoansHovered(false)}
        >
          <RouterLink
            to="/services/business-loans"
            className={getLinkClasses(item)}
            onClick={() => setIsMenuOpen(false)}
          >
            {item} <IconChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 inline-block ${isLoansHovered ? 'rotate-180' : ''}`} />
          </RouterLink>

          {/* Business Loans Dropdown */}
          <div
            className={`absolute top-full left-0 w-64 bg-secondary-dark/95 backdrop-blur-xl border border-primary-accent/20 shadow-2xl transition-all duration-300 transform origin-top rounded-b-xl ${isLoansHovered ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
              }`}
          >
            <ul className="py-2">
              {Object.entries(loanDetails).map(([slug, details]) => (
                <li key={slug}>
                  <RouterLink
                    to={`/services/business-loans/${slug}`}
                    className="block px-4 py-3 text-sm text-boulder hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                    onClick={() => {
                      setIsLoansHovered(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {details.title}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (item === 'services') {
      return (
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          <RouterLink
            to="/services"
            className={getLinkClasses(item)}
            onClick={() => setIsMenuOpen(false)}
          >
            {item} <IconChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 inline-block ${isServicesHovered ? 'rotate-180' : ''}`} />
          </RouterLink>

          {/* Mega Menu Dropdown */}
          <div
            className={`fixed left-0 right-0 top-[60px] md:top-[80px] bg-secondary-dark/95 backdrop-blur-xl border-t border-b border-primary-accent/20 shadow-2xl transition-all duration-300 transform origin-top ${isServicesHovered ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
              }`}
            style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {navbarServices.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <RouterLink
                      to={section.link}
                      className="block font-montserrat font-bold text-primary-accent text-lg border-b border-white/10 pb-2 hover:text-white transition-colors"
                      onClick={() => setIsServicesHovered(false)}
                    >
                      {section.title}
                    </RouterLink>
                    <ul className="space-y-2">
                      {section.items.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <RouterLink
                            to={subItem.link}
                            className="text-boulder text-sm hover:text-white transition-colors block py-0.5"
                            onClick={() => setIsServicesHovered(false)}
                          >
                            {subItem.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item === 'courses') {
      return (
        <RouterLink
          to="/courses"
          className={getLinkClasses(item)}
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
          className={getLinkClasses(item)}
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
          className={getLinkClasses(item)}
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={`/#${item}`}
        className={getLinkClasses(item)}
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
                width="64"
                height="64"
              />
            </RouterLink>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 relative z-10">
            <ul className="flex gap-6 lg:gap-8">
              {['home', 'about', 'services', 'business loans', 'income tax calculator', 'internship', 'courses', 'careers'].map((item) => (
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
              <IconArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
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
              {['home', 'about', 'services', 'business loans', 'income tax calculator', 'internship', 'courses', 'careers'].map((item) => (
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
                  <IconArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
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