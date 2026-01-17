import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

// Project Card Component
const ProjectCard = ({ title, description, image, demoUrl, sourceUrl, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.15 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
        
        <motion.div
          className="project-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn demo-btn"
            variants={iconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </motion.a>

          <motion.a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn source-btn"
            variants={iconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Redux. Features include product filtering, shopping cart, and secure checkout process.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=375&fit=crop',
      demoUrl: 'https://example.com/ecommerce',
      sourceUrl: 'https://github.com/example/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user authentication, and team workspace features.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=375&fit=crop',
      demoUrl: 'https://example.com/taskapp',
      sourceUrl: 'https://github.com/example/taskapp'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time data, location search, and 7-day forecast. Built with React and OpenWeather API.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=375&fit=crop',
      demoUrl: 'https://example.com/weather',
      sourceUrl: 'https://github.com/example/weather'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with interactive charts, dark mode, and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afd651a1b5f6?w=600&h=375&fit=crop',
      demoUrl: 'https://example.com/socialdash',
      sourceUrl: 'https://github.com/example/socialdash'
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-wrapper"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="projects-header" variants={contentVariants}>
          <h2 className="projects-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="projects-subtitle">
            A selection of recent projects showcasing my skills in frontend development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              demoUrl={project.demoUrl}
              sourceUrl={project.sourceUrl}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
