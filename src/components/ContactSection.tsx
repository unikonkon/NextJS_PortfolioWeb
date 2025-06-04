'use client';

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:bananammm0001@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      id="contact"
      className="py-24 bg-gradient-to-b min-h-screen"
      style={{
        background: `linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg))`
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--accent-color)' }}>
                Launch a Conversation with Me
              </h2>
              
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                I&apos;m always excited to work on innovative projects and collaborate
                with like-minded individuals. Whether you have a specific project
                in mind or just want to discuss ideas, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-color)' }}>
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Email</p>
                  <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    bananammm0001@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-color)' }}>
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Phone</p>
                  <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    0901834036
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/unikonkon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'var(--border-color)',
                    backgroundColor: 'var(--card-bg)'
                  }}
                >
                  <FaGithub className="text-xl" style={{ color: 'var(--text-primary)' }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suthep-jantawee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'var(--border-color)',
                    backgroundColor: 'var(--card-bg)'
                  }}
                >
                  <FaLinkedin className="text-xl text-blue-500" />
                </a>
                <a
                  href="https://www.youtube.com/@FaradayBanana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'var(--border-color)',
                    backgroundColor: 'var(--card-bg)'
                  }}
                >
                  <FaYoutube className="text-xl text-red-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="rounded-3xl p-8 border-2"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--accent-color)'
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-105"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-105"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-105 resize-none"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #00D4FF, #7B68EE)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-color)' }}>
            FaradayBanana
          </h3>
          <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
            Creating digital experiences in the cosmic realm
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2025 FaradayBanana. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
} 