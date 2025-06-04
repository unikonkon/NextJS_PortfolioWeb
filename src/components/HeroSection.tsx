'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  theme: string;
  scrollToSection: (sectionId: string) => void;
}

// Add splitText function
const splitText = (text: string) => {
  return {
    chars: text.split(""),
    charsName: text.split(""),
    charsFullStack: text.split(""),
  };
};

// Fixed positions for neural lines (no Math.random)
const neuralLines = [
  { top: 15, left: 10, width: 30, delay: 0 },
  { top: 25, left: 45, width: 25, delay: 0.6 },
  { top: 35, left: 20, width: 35, delay: 1.2 },
  { top: 75, left: 25, width: 28, delay: 3.6 },
  { top: 85, left: 40, width: 35, delay: 4.2 },
  { top: 20, left: 70, width: 20, delay: 4.8 },
  { top: 40, left: 5, width: 25, delay: 5.4 },
  { top: 60, left: 75, width: 22, delay: 6.0 },
  { top: 80, left: 10, width: 30, delay: 6.6 },
  { top: 10, left: 30, width: 35, delay: 7.2 },
  { top: 30, left: 65, width: 25, delay: 7.8 },
  { top: 50, left: 35, width: 30, delay: 8.4 },
  { top: 70, left: 55, width: 28, delay: 9.0 },
  { top: 90, left: 20, width: 32, delay: 9.6 },
  { top: 5, left: 80, width: 18, delay: 10.2 },
  { top: 95, left: 60, width: 25, delay: 10.8 },
  { top: 18, left: 50, width: 27, delay: 11.4 },
  { top: 38, left: 85, width: 15, delay: 12.0 },
  { top: 58, left: 30, width: 33, delay: 12.6 },
  { top: 78, left: 70, width: 22, delay: 13.2 },
  { top: 12, left: 15, width: 28, delay: 13.8 },
  { top: 32, left: 40, width: 30, delay: 14.4 },
  { top: 52, left: 65, width: 25, delay: 15.0 },
  { top: 72, left: 45, width: 35, delay: 15.6 },
  { top: 92, left: 80, width: 20, delay: 16.2 },
  { top: 8, left: 25, width: 32, delay: 16.8 },
  { top: 88, left: 35, width: 28, delay: 17.4 }
];

// Fixed positions for quantum particles (no Math.random)
const quantumParticles = [
  { top: 10, left: 15, delay: 0 },
  { top: 20, left: 85, delay: 0.8 },
  { top: 30, left: 25, delay: 1.6 },
  { top: 70, left: 45, delay: 4.8 },
  { top: 80, left: 55, delay: 5.6 },
  { top: 90, left: 25, delay: 6.4 },
  { top: 15, left: 70, delay: 7.2 },
  { top: 25, left: 40, delay: 0.4 },
  { top: 35, left: 80, delay: 1.2 },
  { top: 45, left: 20, delay: 2.0 },
  { top: 55, left: 60, delay: 2.8 },
  { top: 65, left: 30, delay: 3.6 },
  { top: 75, left: 70, delay: 4.4 },
  { top: 85, left: 50, delay: 5.2 },
  { top: 95, left: 40, delay: 6.0 },
  { top: 5, left: 90, delay: 6.8 },
  { top: 12, left: 55, delay: 7.6 },
  { top: 22, left: 10, delay: 0.2 },
  { top: 32, left: 95, delay: 1.0 },
  { top: 42, left: 30, delay: 1.8 },
  { top: 52, left: 80, delay: 2.6 },
  { top: 62, left: 15, delay: 3.4 },
  { top: 72, left: 85, delay: 4.2 },
  { top: 82, left: 25, delay: 5.0 },
  { top: 92, left: 75, delay: 5.8 },
  { top: 8, left: 45, delay: 6.6 },
  { top: 18, left: 35, delay: 7.4 },
  { top: 28, left: 65, delay: 0.6 },
  { top: 38, left: 50, delay: 1.4 },
  { top: 48, left: 90, delay: 2.2 },
  { top: 58, left: 20, delay: 3.0 },
  { top: 68, left: 60, delay: 3.8 },
  { top: 78, left: 40, delay: 4.6 },
  { top: 88, left: 80, delay: 5.4 },
  { top: 98, left: 30, delay: 6.2 },
  { top: 2, left: 70, delay: 7.0 },
  { top: 95, left: 55, delay: 7.8 }
];

export default function HeroSection({ theme, scrollToSection }: HeroSectionProps) {
  // Split text for animation
  const { chars } = splitText("Hi, I am");
  const { charsName } = splitText("Suthep Jantawee");
  const { charsFullStack } = splitText("Full Stack Developer");

  return (
    <motion.section
      id="home"
      className="max-w-7xl mx-auto px-14 py-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Space Theme CSS */}
      <style jsx>{`
        .cosmic-button {
          position: relative;
          background: linear-gradient(45deg, rgba(139, 69, 255, 0.2), rgba(123, 104, 238, 0.2));
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
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(139, 69, 255, 0.4),
            0 0 25px rgba(123, 104, 238, 0.3);
          border-color: rgba(139, 69, 255, 0.6);
        }

        .neural-network {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.1;
          z-index: 1;
        }

        .neural-network, .quantum-particles, .orbital-ring {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .neural-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139, 69, 255, 0.8), transparent);
          animation: neural-pulse 5s ease-in-out infinite;
        }

        @keyframes neural-pulse {
          0%, 100% { opacity: 0.1; transform: scaleX(0.7); }
          50% { opacity: 0.8; transform: scaleX(1.3); }
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
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(139, 69, 255, 0.9), transparent);
          border-radius: 50%;
          animation: quantum-float 7s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes quantum-float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-25px) scale(1.8);
            opacity: 1;
          }
        }

        .orbital-ring {
          position: absolute;
          border: 1px solid rgba(139, 69, 255, 0.3);
          border-radius: 50%;
          animation: orbital-spin 25s linear infinite;
          will-change: transform;
        }

        .orbital-ring:nth-child(1) {
          width: 180px;
          height: 180px;
          top: 15%;
          right: 15%;
          animation-duration: 30s;
        }

        .orbital-ring:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 50%;
          left: 10%;
          animation-duration: 40s;
          animation-direction: reverse;
        }

        .orbital-ring:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 25%;
          right: 25%;
          animation-duration: 35s;
        }

        @keyframes orbital-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .glitch-text {
          position: relative;
          animation: glitch-effect 5s ease-in-out infinite;
        }

        @keyframes glitch-effect {
          0%, 92%, 100% { transform: translate(0); }
          93% { transform: translate(-1px, 1px); }
          94% { transform: translate(1px, -1px); }
          95% { transform: translate(-1px, -1px); }
          96% { transform: translate(1px, 1px); }
          97% { transform: translate(0); }
        }

        .cosmic-circle {
          background: linear-gradient(45deg, rgba(139, 69, 255, 0.8), rgba(123, 104, 238, 0.6));
          box-shadow: 
            0 0 40px rgba(139, 69, 255, 0.4),
            inset 0 0 20px rgba(123, 104, 238, 0.2);
          border: 2px solid rgba(139, 69, 255, 0.3);
          animation: cosmic-pulse 4s ease-in-out infinite;
        }

        @keyframes cosmic-pulse {
          0%, 100% { 
            box-shadow: 
              0 0 40px rgba(139, 69, 255, 0.4),
              inset 0 0 20px rgba(123, 104, 238, 0.2);
          }
          50% { 
            box-shadow: 
              0 0 60px rgba(139, 69, 255, 0.6),
              inset 0 0 30px rgba(123, 104, 238, 0.4);
          }
        }

        .cosmic-star {
          background: linear-gradient(45deg, #ff6b6b, #e76f51);
          box-shadow: 0 0 25px rgba(231, 111, 81, 0.5);
          animation: star-twinkle 3s ease-in-out infinite;
        }

        @keyframes star-twinkle {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 25px rgba(231, 111, 81, 0.5);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 0 0 35px rgba(231, 111, 81, 0.8);
          }
        }

        .cosmic-yellow {
          background: linear-gradient(45deg, rgba(255, 193, 7, 0.8), rgba(255, 205, 86, 0.6));
          box-shadow: 0 0 30px rgba(255, 193, 7, 0.4);
          animation: yellow-glow 6s ease-in-out infinite;
        }

        @keyframes yellow-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(255, 193, 7, 0.4);
          }
          50% { 
            box-shadow: 0 0 50px rgba(255, 193, 7, 0.7);
          }
        }

        .data-flow {
          position: absolute;
          width: 1px;
          height: 15px;
          background: linear-gradient(to bottom, rgba(139, 69, 255, 0.8), transparent);
          animation: data-stream 3s ease-in-out infinite;
        }

        .data-flow:nth-child(1) { top: 25%; right: 20%; animation-delay: 0s; }
        .data-flow:nth-child(2) { top: 45%; right: 25%; animation-delay: 0.5s; }
        .data-flow:nth-child(3) { top: 65%; right: 15%; animation-delay: 1s; }

        @keyframes data-stream {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(15px); }
        }
      `}</style>

      {/* Neural Network Background */}
      <div className="neural-network">
        {neuralLines.map((line, i) => (
          <div
            key={`neural-${i}`}
            className="neural-line"
            style={{
              top: `${line.top}%`,
              left: `${line.left}%`,
              width: `${line.width}%`,
              animationDelay: `${line.delay}s`
            }}
          />
        ))}
      </div>

      {/* Quantum Particles */}
      <div className="quantum-particles">
        {quantumParticles.map((particle, i) => (
          <div
            key={`quantum-${i}`}
            className="quantum-particle"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Orbital Elements */}
      <div className="orbital-ring"></div>
      <div className="orbital-ring"></div>
      <div className="orbital-ring"></div>

      {/* Data Flow Streams */}
      <div className="data-flow"></div>
      <div className="data-flow"></div>
      <div className="data-flow"></div>

      <div className="flex flex-col md:flex-row gap-12 w-full mt-16 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 z-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 glitch-text" style={{ color: 'var(--text-primary)' }}>
            {chars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="text-purple-400"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {charsName.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {charsFullStack.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <p
            className="mb-10 max-w-xl md:text-lg text-sm rounded-xl p-4 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(139,69,255,0.15), rgba(123,104,238,0.08))',
              border: '1px solid rgba(139, 69, 255, 0.4)',
              color: 'var(--text-primary)',
              boxShadow: '0 0 12px rgba(139,69,255,0.2)',
              backdropFilter: 'blur(4px)'
            }}
          >
            I&apos;m looking for a similar role as a <span style={{ color: 'var(--text-purple-300)' }} className="font-semibold">Front-End Developer</span>, <span style={{ color: 'var(--text-purple-300)' }} className="font-semibold">Back-End Developer</span>, or <span style={{ color: 'var(--text-purple-300)' }} className="font-semibold">Full Stack Developer</span>.
            <br />
            I have <span style={{ color: 'var(--text-yellow-300)' }} className="font-bold">3+ years</span> of experience in web development. I am passionate about building intuitive interfaces, exploring modern frameworks, and leveraging <span style={{ color: 'var(--text-pink-400)' }} className="font-semibold">AI tools</span> to enhance developer workflows.
          </p>

          <div className="flex sm:gap-6 gap-2 flex-wrap">
            <button className="cosmic-button buttonResume cursor-pointer rounded-xl px-3 py-3" style={{ backgroundColor: 'var(--accent-color)' }}>
              <a href="/Resume Sutep Jantawee.pdf" download="Resume Sutep Jantawee.pdf" target="_blank" rel="noopener noreferrer">
                🚀 Resume
              </a>
            </button>
            <button className="cosmic-button buttonResume cursor-pointer rounded-xl px-3 py-3" style={{ backgroundColor: 'var(--accent-color)' }}>
              <a href="https://github.com/unikonkon" target="_blank" rel="noopener noreferrer">
                👾 Github
              </a>
            </button>
            <button className="cosmic-button buttonResume cursor-pointer rounded-xl px-3 py-3" onClick={() => scrollToSection("projects")} style={{ backgroundColor: 'var(--accent-color)' }}>
              👨‍🚀 View Projects
            </button>
          </div>
        </div>

        {/* Right Content - Enhanced Graphics */}
        <div className="w-full mx-10 md:w-1/2 md:absolute right-0 md:min-h-[400px] relative z-5">
          {/* Enhanced Purple Circle with Cosmic Effect */}
          <div className="cosmic-circle absolute top-0 right-10 md:right-20 rounded-full w-40 h-40 mt-32 md:mt-10 sm:w-60 sm:h-60 flex items-center justify-center">
            <Image
              src="/person.png"
              alt="Cosmic Avatar"
              width={500}
              height={220}
              className="filter drop-shadow-lg"
            />
          </div>

          {/* Enhanced Orange Circle with Star Effect */}
          <div className="cosmic-star hidden md:flex md:absolute top-25 right-48 md:right-96 rounded-full w-16 h-16 items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.5 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9.5L12 2Z" fill="white" />
            </svg>
          </div>

          {/* Enhanced Yellow Circle with Cosmic Glow */}
          <div className="cosmic-yellow hidden md:flex md:absolute top-40 right-50 rounded-full w-44 h-44 md:w-64 md:h-64 overflow-hidden">
          </div>

          {/* Enhanced Squiggly lines */}
          <svg className="hidden md:flex md:absolute top-20 right-0 w-24 h-24 text-purple-400" viewBox="0 0 100 100">
            <path d="M10,30 Q30,5 50,30 T90,30" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Enhanced Document illustration */}
          <div className={`hidden md:flex md:absolute bottom-20 right-44 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg w-44 h-24 shadow-lg border border-purple-400`}>
            <div className="flex p-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="ml-3">
                <div className="h-2 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded mb-2"></div>
                <div className="h-2 w-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded mb-2"></div>
                <div className="h-2 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Curved arrow */}
          <svg className="hidden md:flex md:absolute bottom-20 right-20 w-32 h-32 text-purple-400" viewBox="0 0 100 100">
            <path d="M10,80 Q50,10 90,80" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="90,80 85,70 95,70" fill="currentColor" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
} 