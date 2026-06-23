import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages that have a white/light background — navbar should be white with dark text
  const isLightPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Activities', href: '/#activities' },
    { name: 'Blog', href: '/#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  // Nav background
  const navBg = isScrolled
    ? 'bg-primary/95 backdrop-blur-md shadow-sm py-4'
    : isLightPage
      ? 'bg-white shadow-sm py-4'
      : 'bg-transparent py-8';


  // Mobile icon color
  const iconColor = isScrolled
    ? 'text-white'
    : isLightPage
      ? 'text-[#0B1F1E]'
      : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="GCES Girls Tech" className="w-12 h-12" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isContact = link.href.startsWith('#');
            const cls = `text-sm font-medium transition-colors hover:text-secondary ${
              isScrolled
                ? 'text-white'
                : isLightPage
                  ? 'text-[#0B1F1E] hover:text-[#E11D74]'
                  : 'text-white'
            }`;
            return isContact ? (
              <a key={link.name} href={link.href} className={cls}>
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className={cls}>
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`transition-colors ${iconColor}`} />
          ) : (
            <Menu className={`transition-colors ${iconColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => {
                const isContact = link.href.startsWith('#');
                return isContact ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium text-white hover:text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
