import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import myResume from '../assets/pdf/Moiz.pdf'

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  const linkVariants = {
    hover: {
      y: -3,
      transition: { duration: 0.3 }
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

        {/* Navigation Links */}
        <div className="navbar-center">
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
        
        {/* Resume Button */}
        <div className="navbar-right">
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
      </div>
    </motion.nav>
  );
};
