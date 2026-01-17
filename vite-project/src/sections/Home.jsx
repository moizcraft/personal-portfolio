import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      }
    }
  };

  // Animated headline with character-level animation
  const headlineText = "I'm a Frontend      Developer";
  const highlightStartIndex = 7; // "Frontend Developer" starts at index 7
  
  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.03,
      }
    })
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        {/* Left Content */}
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Headline */}
          <h1 className="home-headline">
            {headlineText.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className={index >= highlightStartIndex ? 'highlight' : ''}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p 
            className="home-subtext"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            I craft modern, elegant user interfaces with a focus on performance and user experience. Specialized in React, JavaScript, and responsive web design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="home-buttons"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.button>

            <motion.button
              onClick={() => handleScrollTo('projects')}
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Profile Image - Circular Frame */}
        <motion.div 
          className="home-image-container"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="circular-frame">
            {/* Outer glow effect */}
            <div className="frame-glow"></div>
            
            {/* Main circular border */}
            <div className="frame-circle">
              {/* Image wrapper */}
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </div>
            
            {/* Offset ring for depth */}
            <div className="frame-ring"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating Gradient Background Elements */}
      <div className="gradient-blob gradient-blob-1"></div>
      <div className="gradient-blob gradient-blob-2"></div>
    </section>
  );
};
