import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Contact.css';

// Info Item Component
const InfoItem = ({ icon: Icon, title, value }) => {
  return (
    <div className="info-item">
      <div className="info-icon">
        <Icon className="info-icon-svg" />
      </div>
      <div className="info-text">
        <h3 className="info-title">{title}</h3>
        <p className="info-value">{value}</p>
      </div>
    </div>
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const infoCards = [
    {
      icon: MapPin,
      title: 'Address',
      value: 'Karachi, Pakistan'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+92 3172863617'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'moizxcraft@gmail.com'
    }
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-wrapper"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Heading */}
        <motion.div
          className="contact-heading"
          variants={contentVariants}
        >
          <h2 className="contact-title">Contact</h2>
          <div className="contact-underline"></div>
          <p className="contact-subtitle">
            Get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </motion.div>

        {/* Info Bar */}
        <motion.div
          className="info-bar"
          variants={contentVariants}
        >
          {infoCards.map((card, index) => (
            <InfoItem
              key={index}
              icon={card.icon}
              title={card.title}
              value={card.value}
            />
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form-container"
          variants={contentVariants}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject Row */}
            <div className="form-group full-width">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Message Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message Row */}
            <div className="form-group full-width">
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your message here..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-submit">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};
