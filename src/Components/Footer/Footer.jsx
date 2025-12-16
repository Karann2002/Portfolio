import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Karann2002" },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/karan-kushwah-6848b3250/",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/karan___kushwah/?hl=en",
    },
    {
      icon: <Phone size={20} />,
      href: "https://wa.me/+918889172655",
    },
  ];  

  const navLinks = ["Home", "About", "Projects","Services"];

  return (
    <footer className="bg-[#111] text-white py-20 px-5 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Bottom Section: Copyright & Back to Top */}
        <div className="flex hidden flex-col md:flex-row justify-between items-center pb-10 gap-5">
          <p className="text-gray-500 text-sm">
            {/* © {new Date().getFullYear()} Karan Kushwah. All rights reserved. */}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
          >
            Back to Top
            <span className="p-2 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
              <ArrowUp size={16} />
            </span>
          </motion.button>
        </div>
        {/* Divider */}
        {/* <div className="h-px w-full bg-white mb-8"></div> */}
        {/* Top Section: CTA & Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 ">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                src="MyImage.png"
                alt="Profile"
              />
              <span className="text-2xl font-bold tracking-tight">
                Karan Kushwah
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting scalable web applications with React, Node.js, and modern
              UI/UX principles. Let's build something amazing together.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                whileHover={{ x: 5, color: "#9ca3af" }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm font-medium"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* CTA & Socials */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    backgroundColor: "#333",
                  }}
                  className="p-3 bg-gray-900 rounded-full border border-gray-700 text-gray-300 hover:text-white transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="mailto:karankush2312@gmail.com"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mt-2"
            >
              <Mail size={16} /> karankush2312@gmail.com
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
