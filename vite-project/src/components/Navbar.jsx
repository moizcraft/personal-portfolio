import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';
import myResume from '../assets/pdf/Moiz.pdf'

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  const linkVariants = {
    hover: {
      y: -3,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <motion.span
              className="logo-main"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              MOIZ<span className="logo-highlight">CRAFT</span>
            </motion.span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-center desktop-only">
          <div className="navbar-links">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`nav-link ${activeLink === link.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveLink(link.toLowerCase())}
                variants={linkVariants}
                whileHover="hover"
              >
                {link}
                <span className="underline"></span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop Resume Button */}
        <div className="navbar-right desktop-only">
          <motion.a
            href={myResume}
            className="navbar-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-btn" aria-label="Toggle menu">
            {isOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`mobile-nav-link ${activeLink === link.toLowerCase() ? 'active' : ''}`}
                onClick={() => {
                  setActiveLink(link.toLowerCase());
                  setIsOpen(false);
                }}
              >
                {link}
              </a>
            ))}
            <a
              href={myResume}
              className="mobile-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
