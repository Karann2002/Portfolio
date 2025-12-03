import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" }, // Updated to match previous component
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Section */}
        <div 
            className="flex gap-3 items-center cursor-pointer" 
            onClick={() => scrollToSection('home')}
        >
          <img
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
            src="./the.shadoows-20251109-0007.jpg"
            alt="Logo"
          />
          <h1 className={`font-bold text-xl tracking-tight ${scrolled ? "text-black" : "text-black"}`}>
            Karan Kushwah
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-black rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 
            hover:bg-black hover:text-white hover:scale-105 active:scale-95"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className="text-lg font-medium text-gray-800 cursor-pointer hover:text-blue-600"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-black text-white px-8 py-3 rounded-full font-medium"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;