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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[rgba(4,4,4,0.98)] shadow-lg shadow-primary-accent/10' : 'bg-[rgba(4,4,4,0.95)] backdrop-blur-md'
      }`}
    >
      <div className="container md:overflow-hidden mx-auto px-5 md:px-20">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4 h-[50px]">
            <img 
              src="/src/assets/images/logo.png" 
              alt="Acharya Professional Accountants" 
              className="h-20 w-auto transition-all duration-300"
            />
          </div>

          <ul className={`md:flex gap-8 ${isMenuOpen ? 'fixed inset-0 bg-dark-bg flex flex-col justify-center items-center' : 'hidden'}`}>
            {['home', 'about', 'services', 'internship', 'careers', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item === 'blog' ? 'Insights' : item}
                </Link>
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden flex flex-col gap-1 z-50"
            >
            <span className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary-accent transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;