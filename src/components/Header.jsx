import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, FileText, CheckCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/IMG_logo.png" alt="Pragna Industries Logo" className="h-9 sm:h-11 md:h-12 object-contain" />
          <div className="flex flex-col justify-center leading-tight">
            <span className={`font-bold text-xl sm:text-2xl md:text-3xl leading-none tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>PRAGNA</span>
            <span className={`text-[0.55rem] sm:text-[0.65rem] md:text-[0.85rem] tracking-[0.3em] sm:tracking-[0.34em] font-bold text-pragna-maroon mt-0.5`}>INDUSTRIES</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-pragna-maroon ${location.pathname === link.path ? 'text-pragna-maroon' : 'text-gray-700'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a href="tel:9824659668" className="flex items-center space-x-1 text-sm font-semibold text-gray-700 border-r pr-3 border-gray-300">
            <Phone size={16} className="text-pragna-maroon" />
            <span>Call Us</span>
          </a>
          <Link to="/contact" className="btn-primary flex items-center space-x-1 py-1.5 px-4 rounded shadow-lg">
            <CheckCircle size={16} />
            <span>Get Job Done</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fade-in">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-gray-700 border-b pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <a href="tel:9824659668" className="flex items-center space-x-2 text-gray-700">
                <Phone size={20} className="text-pragna-maroon" />
                <span>Call Us: 9824659668</span>
              </a>
              <Link 
                to="/contact" 
                className="btn-primary w-full py-3 flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Job Done
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
