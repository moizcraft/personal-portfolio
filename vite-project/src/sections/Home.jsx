import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import profileImage from '../assets/image/moiz.jpg'

export const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = "Frontend Developer";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, pause before deleting
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(fullText.slice(0, text.length - 1));
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, restart
          setIsDeleting(false);
          timer = setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

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
            I am Moiz
            <br />
            <span className="highlight">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="home-subtext"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Turning ideas into beautiful & functional websites.
            Crafting smooth user experiences with modern frontend technologies.

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

        {/* Right Profile Image */}
        <motion.div
          className="home-image-container"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="circular-frame">
            <div className="frame-glow"></div>

            <div className="frame-circle">
              <div className="image-wrapper">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </div>

            <div className="frame-ring"></div>
          </div>
        </motion.div>
      </div>

      {/* Background Blobs */}
      <div className="gradient-blob gradient-blob-1"></div>
      <div className="gradient-blob gradient-blob-2"></div>
    </section>
  );
};
