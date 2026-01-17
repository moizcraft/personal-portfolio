import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

// Skill Bar Component
const SkillBar = ({ name, percentage, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 }
    }
  };

  const barVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut", delay: index * 0.1 + 0.3 }
    }
  };

  return (
    <motion.div
      className="skill-bar-container"
      variants={containerVariants}
    >
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-background">
        <motion.div
          className="skill-bar-fill"
          variants={barVariants}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </motion.div>
  );
};

export const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const skillsData = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 90 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'JavaScript', percentage: 85 }
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="about-wrapper"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-container-new">
          {/* Left Column - Profile & Skills */}
          <motion.div className="about-left" variants={contentVariants}>
            {/* Profile Section */}
            <div className="profile-section">
              {/* Profile Image */}
              <motion.div
                className="profile-image-container"
                variants={imageVariants}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Moiz Nadeem"
                  className="profile-image"
                />
              </motion.div>

              {/* Personal Info */}
              <div className="personal-info">
                <h3 className="person-name">Moiz Nadeem</h3>
                <p className="person-role">Frontend Developer</p>

                <div className="contact-details">
                  <div className="contact-row">
                    <span className="contact-label">Email:</span>
                    <p className="contact-value">moiz@example.com</p>
                  </div>
                  <div className="contact-row">
                    <span className="contact-label">WhatsApp:</span>
                    <p className="contact-value">+92 300 1234567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills with Progress Bars */}
            <motion.div className="skills-progress-section" variants={contentVariants}>
              <h4 className="skills-section-title">Technical Skills</h4>
              <div className="skills-bars-list">
                {skillsData.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Description */}
          <motion.div className="about-right" variants={contentVariants}>
            {/* Heading */}
            <motion.div className="about-heading-section" variants={contentVariants}>
              <h2 className="about-heading-title">About me</h2>
              <div className="heading-underline"></div>
            </motion.div>

            {/* Description Text */}
            <motion.div className="about-text-content" variants={contentVariants}>
              <p className="about-paragraph">
                I'm a passionate frontend developer dedicated to creating beautiful, 
                intuitive, and performant user experiences. With a strong foundation in 
                React, JavaScript, and modern web technologies, I transform complex ideas 
                into elegant digital solutions.
              </p>

              <p className="about-paragraph">
                My approach focuses on clean code, responsive design, and continuous learning. 
                I believe in the power of great UI/UX and take pride in crafting interfaces 
                that not only look stunning but also provide exceptional user interactions.
              </p>

              <p className="about-paragraph">
                I'm committed to staying at the forefront of web development trends and 
                technologies. Every project is an opportunity to solve problems creatively 
                and deliver value to users and businesses alike.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
