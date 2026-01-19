import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';
import ecommerceImage from '../assets/image/ecommerceImage.png';
import inProgressImage from '../assets/image/inProgressImage.png';
import pitchCraftImage from '../assets/image/pitchCraftImage.png';
import dashboardtImage from '../assets/image/dashboardImage.png';

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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.15 + i * 0.1 }
    }),
    exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.05 + i * 0.1 }
    }),
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="group relative h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Card Container */}
      <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-[18px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]">
        
        {/* Image Section */}
        <div className="relative w-full h-56 overflow-hidden bg-gradient-to-b from-slate-700 to-slate-900">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Dark Blur Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Action Buttons */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-5"
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            {/* Demo Button */}
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              custom={0}
              variants={buttonVariants}
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:scale-110"
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
            </motion.a>

            {/* Source Code Button */}
            <motion.a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              custom={1}
              variants={buttonVariants}
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:scale-110"
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="px-5 py-4">
          {/* Title - Always visible but animates */}
          <motion.h3
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg font-bold text-white mb-2 line-clamp-2"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-gray-400 line-clamp-2 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
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
      title: 'E-Commerce Store',
      description: 'A basic React-based e-commerce store featuring routing, Firebase authentication for login/signup, and a simple add-to-cart system using localStorage. Currently in progress, with database integration planned.',
      image: ecommerceImage,
      demoUrl: 'https://iandmstore.netlify.app/',
      sourceUrl: 'https://github.com/moizcraft/I-M-Store'
    },
    {
      title: 'Pitch Craft Ai',
      description: 'A web-based AI tool in progress that allows users to generate business ideas, chat with AI, and create resumes based on their prompts. Currently under development.',
      image: pitchCraftImage,
      demoUrl: inProgressImage ,
      sourceUrl: 'https://github.com/example/taskapp'
    },
    {
      title: 'Smart Productivity Dashboard',
      description: 'React productivity dashboard with Firebase login, task management, offline sync via localStorage, and progress tracking. Work-in-progress with AI suggestions planned.',
      image: dashboardtImage,
      demoUrl: inProgressImage,
      sourceUrl: 'https://github.com/example/weather'
    }
  ];

  return (
    <section id="projects" className=" min-h-screen bg-black py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={contentVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of recent projects showcasing my skills in frontend development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
