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
      className="py-24 bg-gradient-to-b min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg))`
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Space Theme CSS */}
      <style jsx>{`
        .cosmic-button {
          position: relative;
          background: linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(123, 104, 238, 0.2));
          border: 2px solid transparent;
          background-clip: padding-box;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          overflow: hidden;
          will-change: transform;
        }

        .cosmic-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .cosmic-button:hover::before {
          left: 100%;
        }

        .cosmic-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 15px 35px rgba(0, 212, 255, 0.3),
            0 0 25px rgba(123, 104, 238, 0.2);
          border-color: rgba(0, 212, 255, 0.5);
        }

        .neural-network {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.15;
          z-index: 1;
        }

        .neural-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6), transparent);
          animation: neural-pulse 4s ease-in-out infinite;
        }

        .neural-line:nth-child(1) { top: 10%; left: 5%; width: 25%; animation-delay: 0s; }
        .neural-line:nth-child(2) { top: 25%; left: 20%; width: 30%; animation-delay: 0.8s; }
        .neural-line:nth-child(3) { top: 40%; left: 10%; width: 20%; animation-delay: 1.6s; }
        .neural-line:nth-child(4) { top: 55%; left: 30%; width: 35%; animation-delay: 2.4s; }
        .neural-line:nth-child(5) { top: 70%; left: 15%; width: 25%; animation-delay: 3.2s; }
        .neural-line:nth-child(6) { top: 85%; left: 25%; width: 30%; animation-delay: 4s; }

        @keyframes neural-pulse {
          0%, 100% { opacity: 0.1; transform: scaleX(0.8); }
          50% { opacity: 0.6; transform: scaleX(1.2); }
        }

        .quantum-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .quantum-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.8), transparent);
          border-radius: 50%;
          animation: quantum-float 6s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .quantum-particle:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
        .quantum-particle:nth-child(2) { top: 35%; left: 80%; animation-delay: 1s; }
        .quantum-particle:nth-child(3) { top: 60%; left: 20%; animation-delay: 2s; }
        .quantum-particle:nth-child(4) { top: 80%; left: 70%; animation-delay: 3s; }
        .quantum-particle:nth-child(5) { top: 25%; left: 60%; animation-delay: 4s; }
        .quantum-particle:nth-child(6) { top: 45%; left: 85%; animation-delay: 5s; }

        @keyframes quantum-float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) scale(1.5);
            opacity: 0.8;
          }
        }

        .orbital-ring {
          position: absolute;
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 50%;
          animation: orbital-spin 20s linear infinite;
          will-change: transform;
        }

        .orbital-ring:nth-child(1) {
          width: 200px;
          height: 200px;
          top: 20%;
          right: 10%;
          animation-duration: 25s;
        }

        .orbital-ring:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 60%;
          left: 5%;
          animation-duration: 30s;
          animation-direction: reverse;
        }

        .orbital-ring:nth-child(3) {
          width: 100px;
          height: 100px;
          bottom: 20%;
          right: 20%;
          animation-duration: 35s;
        }

        @keyframes orbital-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .glitch-text {
          position: relative;
          animation: glitch-effect 4s ease-in-out infinite;
        }

        @keyframes glitch-effect {
          0%, 90%, 100% { transform: translate(0); }
          91% { transform: translate(-1px, 1px); }
          92% { transform: translate(1px, -1px); }
          93% { transform: translate(-1px, -1px); }
          94% { transform: translate(1px, 1px); }
          95% { transform: translate(0); }
        }

        .cosmic-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 212, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .cosmic-form::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, 
            rgba(0, 212, 255, 0.3), 
            rgba(123, 104, 238, 0.3), 
            rgba(255, 107, 107, 0.3),
            rgba(0, 212, 255, 0.3)
          );
          background-size: 300% 300%;
          border-radius: inherit;
          z-index: -1;
          animation: cosmic-border 6s ease infinite;
        }

        @keyframes cosmic-border {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .cosmic-input {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
        }

        .cosmic-input:focus {
          border-color: rgba(0, 212, 255, 0.6);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
          transform: scale(1.02);
        }

        .cosmic-input:hover {
          border-color: rgba(0, 212, 255, 0.4);
        }
      `}</style>

      {/* Neural Network Background */}
      <div className="neural-network">
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
      </div>

      {/* Quantum Particles */}
      <div className="quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>

      {/* Orbital Elements */}
      <div className="orbital-ring"></div>
      <div className="orbital-ring"></div>
      <div className="orbital-ring"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glitch-text"
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center cosmic-button"
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center cosmic-button"
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
                  className="w-12 h-12 rounded-xl border-2 flex items-center justify-center cosmic-button"
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
                  className="w-12 h-12 rounded-xl border-2 flex items-center justify-center cosmic-button"
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
                  className="w-12 h-12 rounded-xl border-2 flex items-center justify-center cosmic-button"
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
            className="cosmic-form rounded-3xl p-8 border-2"
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
                  className="cosmic-input w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
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
                  className="cosmic-input w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
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
                  className="cosmic-input w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="cosmic-button w-full py-4 px-6 rounded-xl font-semibold text-white text-lg"
                style={{
                  background: 'linear-gradient(45deg, #00D4FF, #7B68EE)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🚀 Send Message to Space
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
          <h3 className="text-3xl font-bold mb-2 glitch-text" style={{ color: 'var(--accent-color)' }}>
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