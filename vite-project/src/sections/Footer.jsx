import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Parent footer animation (fade-in for all children with stagger)
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // children animate one after another
        delayChildren: 0.2,   // wait 0.2s before starting
      },
    },
  };

  // Each child animation (fade-in + slide-up)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Social links array
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moiz-nadeem-463b1937b/",
      color: "hover:border-[#778873]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/moizcraft",
      color: "hover:border-[#778873]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/lostxcode/",
      color: "hover:border-[#778873]",
    },
  ];

  // Social Icon Component
  const SocialIcon = ({ icon: Icon, label, href, color }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer" // security for _blank
      aria-label={label}
      className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#555555] text-white transition-all duration-300 hover:bg-[#778873]/10 ${color}`}
      whileHover={{ scale: 1.1 }} // enlarge on hover
      whileTap={{ scale: 0.95 }}  // press animation
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );

  return (
    <footer className="w-full bg-black border-t border-[#1a1a1a]">
      {/* Footer container with motion for fade-in */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Copyright Text */}
        <motion.div className="mb-8 sm:mb-10" variants={itemVariants}>
          <p className="text-xs sm:text-sm text-[#888888] tracking-wide">
            © {currentYear} MoizCraft Portfolio. All Rights Reserved
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex justify-center items-center gap-6 sm:gap-8 mb-8 sm:mb-10" variants={itemVariants}>
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              icon={social.icon}
              label={social.label}
              href={social.href}
              color={social.color}
            />
          ))}
        </motion.div>

        {/* Designer Credit */}
        <motion.div variants={itemVariants}>
          <p className="text-xs sm:text-sm text-[#555555]">
            Designed by <span className="text-white font-semibold">Moiz</span>
          </p>
        </motion.div>

        {/* Subtle Divider */}
        <motion.div
          className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#555555] to-transparent mx-auto mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </footer>
  );
};
