import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const location = useLocation();

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 20);
};


window.addEventListener("scroll", handleScroll);

return () => {
  window.removeEventListener("scroll", handleScroll);
};


}, []);

// Close mobile menu whenever route changes
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

const darkTextRoutes = ["/about", "/blog", "/activities", "/team"];
const isDarkTextRoute = darkTextRoutes.includes(location.pathname);

const textClass = isScrolled
? "text-white"
: isDarkTextRoute
? "text-[#0B1F1E]"
: location.pathname !== "/"
? "text-white"
: "text-primary md:text-white";

const iconClass = isScrolled
? "text-white"
: isDarkTextRoute
? "text-[#0B1F1E]"
: "text-white";

return (
<nav
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
> <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
{/* Logo */} <Link to="/"> <img
         src={logo}
         alt="GCES Girls Tech"
         className="w-12 h-12 md:w-14 md:h-14 object-contain"
       /> </Link>

    {/* Desktop Navigation */}
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

    {/* Mobile Menu Button */}
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

  {/* Mobile Menu */}
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
