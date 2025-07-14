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
    if (location.pathname === '/internship') {
      // If already on internship page, scroll to job-openings section
      const jobOpeningsSection = document.getElementById('job-openings');
      if (jobOpeningsSection) {
        jobOpeningsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to internship page and then scroll to job-openings
      navigate('/internship', { state: { scrollToJobOpenings: true } });
    }
  };

  const renderLink = (item) => {
    if (item === 'careers') {
      return (
        <RouterLink
          to="/internship"
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </RouterLink>
      );
    }

    // if (item === 'careers') {
    //   return (
    //     <button
    //       onClick={handleCareersClick}
    //       className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
    //     >
    //       Careers
    //     </button>
    //   );
    // }

    if (isHomePage) {
      return (
        <ScrollLink
          to={item}
          smooth={true}
          duration={500}
          className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          {item === 'blog' ? 'Insights' : item}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={`/#${item}`}
        className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
        onClick={() => setIsMenuOpen(false)}
      >
        {item === 'blog' ? 'Insights' : item}
      </RouterLink>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(4,4,4,0.98)] shadow-lg shadow-primary-accent/10'
          : 'bg-[rgba(4,4,4,0.95)] backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-3 w-full">
          <div className="flex items-center h-[40px]">
            <RouterLink to="/">
              <img
                src="/images/logo.png"
                alt="Acharya Professional Accountants"
                className="h-12 md:h-16 w-auto transition-all duration-300"
              />
            </RouterLink>
          </div>

          <ul className="hidden md:flex gap-6 lg:gap-8">
            {['home', 'about', 'services', 'careers','blog', 'contact'].map((item) => (
              <li key={item}>
                {renderLink(item)}
              </li>
            ))}
          </ul>
          <button
            className="md:hidden flex flex-col gap-1 z-50 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${
                isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-dark-bg z-40 flex flex-col justify-center items-center pt-24 pb-10">
            <ul className="flex flex-col items-center gap-6 w-full px-4">
              {['home', 'about', 'services', 'careers', 'blog', 'contact'].map((item) => (
                <li key={item} className="w-full text-center">
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;