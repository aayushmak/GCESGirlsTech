import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const lightPagePrefixes = ["/about", "/blog", "/activities", "/team"];

const isLightPageRoute = (pathname) =>
  lightPagePrefixes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLightPage = isLightPageRoute(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Activities", href: "/activities" },
    { name: "Blog", href: "/blog" },
    { name: "Our Team", href: "/team" },
  ];

  const navBg = isScrolled
    ? "bg-primary/95 backdrop-blur-md shadow-md py-3"
    : isLightPage
      ? "bg-white shadow-sm py-4"
      : "bg-transparent py-5";

  const textClass = isScrolled
    ? "text-white"
    : isLightPage
      ? "text-[#0B1F1E] hover:text-[#E11D74]"
      : location.pathname !== "/"
        ? "text-white"
        : "text-primary md:text-white";

  const iconClass = isScrolled
    ? "text-white"
    : isLightPage
      ? "text-[#0B1F1E]"
      : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="GCES Girls Tech"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${textClass}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-7 h-7 ${iconClass}`} />
          ) : (
            <Menu className={`w-7 h-7 ${iconClass}`} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-primary/95 backdrop-blur-md overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="py-4 text-lg font-medium text-white border-b border-white/10 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
