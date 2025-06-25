import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <img
              src="/images/logo.png"
              alt="Acharya Professional Accountants"
              className="h-12 md:h-16 w-auto transition-all duration-300"
            />
          </div>

          <ul className="hidden md:flex gap-6 lg:gap-8">
            {['home', 'about', 'services', 'internship', 'careers', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-base lg:text-lg"
                >
                  {item === 'blog' ? 'Insights' : item}
                </Link>
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
              {['home', 'about', 'services', 'internship', 'careers', 'blog', 'contact'].map((item) => (
                <li key={item} className="w-full text-center">
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="block py-3 text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item === 'blog' ? 'Insights' : item}
                  </Link>
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