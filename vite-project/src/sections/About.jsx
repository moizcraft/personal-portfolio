import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import profileImage from '../assets/image/moiz.jpg'

// Circular Skill Component
const SkillCircle = ({ name, percentage, index }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: index * 0.08 }
    }
  };

  const circleVariants = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset: offset,
      transition: { duration: 1.2, ease: "easeOut", delay: index * 0.08 + 0.2 }
    }
  };




  return (
    <motion.div
      className="skill-circle-container"
      variants={containerVariants}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg width="90" height="90" viewBox="0 0 90 90" className="skill-circle-svg">
        {/* Background Circle */}
        <circle
          cx="45"
          cy="45"
          r={radius}
          stroke="#1a1a1a"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Progress Circle */}
        <motion.circle
          cx="45"
          cy="45"
          r={radius}
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          variants={circleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </svg>

      {/* Percentage Text */}
      <div className="skill-circle-text">
        <span className="skill-percentage">{percentage}%</span>
      </div>

      {/* Skill Name */}
      <p className="skill-name">{name}</p>
    </motion.div>
  );
};

// Skill Category Component
const SkillCategory = ({ title, skills, index }) => {
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.15 }
    }
  };

  return (
    <motion.div
      className="skill-category"
      variants={categoryVariants}
    >
      <h4 className="skill-category-title">{title}</h4>
      <div className="skill-circles-grid">
        {skills.map((skill, idx) => (
          <SkillCircle
            key={idx}
            name={skill.name}
            percentage={skill.percentage}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const About = () => {


    // calculate/update age

  function getAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}

// Usage
const age = getAge("2005-09-26");
console.log("Age:", age);

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
    {
      category: 'Frontend Core',
      skills: [
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3', percentage: 80 },
        { name: 'Tailwind CSS', percentage: 70 }
      ]
    },
    {
      category: 'JavaScript & Frameworks',
      skills: [
        { name: 'JavaScript', percentage: 75 },
        { name: 'React.js', percentage: 70 }
      ]
    },
    {
      category: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', percentage: 70 }
      ]
    }
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
                  src={profileImage}
                  alt="Moiz"
                  className="profile-image"
                />
              </motion.div>

              {/* Personal Info */}
              <div className="personal-info">
                <div>
                  <span className="info-label">Name:</span>
                  <h3 className="person-name">Moiz</h3>
                </div>
                <div>
                  <span className="info-label">City:</span>
                  <h3 className="person-city">Karachi, Pakistan</h3>
                </div>
                <div>
                  <span className="info-label">Age:</span>
                  <h3 className="person-age">{age}</h3>
                </div>
                <div>
                  <span className="info-label">Profile:</span>
                  <p className="person-role">Frontend Developer</p>
                </div>
                <div>
                  <span className="info-label">Email:</span>
                  <p className="person-role">moizxcraft@gmail.com</p>
                </div>
                <div>
                  <span className="info-label">What's App:</span>
                  <p className="person-role">+92 3172863617</p>
                </div>
              </div>
            </div>

            {/* Skills with Circular Progress */}
            <motion.div className="skills-progress-section" variants={contentVariants}>
              <h4 className="skills-section-title">Skills</h4>
              <div className="skills-categories">
                {skillsData.map((category, idx) => (
                  <SkillCategory
                    key={idx}
                    title={category.category}
                    skills={category.skills}
                    index={idx}
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
                I’m a passionate Frontend Developer focused on building
                clean, responsive, and user-friendly websites.
              </p>

              <p className="about-paragraph">
                I work with HTML, CSS, JavaScript, React, and Tailwind CSS
                to create modern web interfaces with smooth animations
                and great user experience.
              </p>

              <p className="about-paragraph">

                I have a strong interest in research and enjoy exploring
                new technologies, tools, and best practices to improve
                my development skills.
              </p>

              <p className="about-paragraph">
                Currently, I’m learning backend development to expand my
                skill set and move towards full-stack development.
                My long-term goal is to grow as a Software Engineer
                and build scalable, real-world applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
