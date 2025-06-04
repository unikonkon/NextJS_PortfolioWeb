'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  theme: string;
}

// Add splitText function
const splitText = (text: string) => {
  return {
    chars: text.split(""),
    charsName: text.split(""),
    charsFullStack: text.split(""),
  };
};

export default function HeroSection({ theme }: HeroSectionProps) {
  // Split text for animation
  const { chars } = splitText("Hi, I am");
  const { charsName } = splitText("Suthep Jantawee");
  const { charsFullStack } = splitText("Full Stack Developer");

  return (
    <motion.section
      id="home"
      className="max-w-7xl mx-auto px-14 py-16 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row gap-12 w-full mt-16">
        {/* Left Content */}
        <div className="md:w-1/2 z-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            {chars.map((char, index) => (
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
          <p className="mb-10 max-w-md md:text-lg text-sm bg-gray-400 rounded-lg p-4 lg:bg-transparent lg:p-0" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m looking for a similar role as a Front-End Developer, Back-End Developer, or Full Stack Developer.
            I have 3+ years of experience in web development. I am passionate about developing web applications, continuously learning modern web technologies, and leveraging AI tools to enhance development processes.
          </p>
          <div className="flex gap-6 flex-wrap">
            <button className="buttonResume cursor-pointer" style={{ backgroundColor: 'var(--accent-color)' }}>
              <a href="/Resume Sutep Jantawee.pdf" download="Resume Sutep Jantawee.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </button>
            <button className="buttonResume cursor-pointer" style={{ backgroundColor: 'var(--accent-color)' }}>
              <a href="https://github.com/unikonkon" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </button>
          </div>
        </div>

        {/* Right Content - Images & Graphics */}
        <div className="w-full mx-10 md:w-1/2 md:absolute right-0 md:min-h-[400px]">
          {/* Purple Circle with Laptop */}
          <div className="absolute top-0 right-10 md:right-20 bg-purple-500 rounded-full w-40 h-40 mt-32 md:mt-10 sm:w-60 sm:h-60 flex items-center justify-center">
            <Image
              src="/person.png"
              alt="Laptop illustration"
              width={500}
              height={220}
              className=""
            />
          </div>

          {/* Orange Circle with Stars */}
          <div className="hidden md:flex md:absolute top-25 right-48 md:right-96 bg-[#e76f51] rounded-full w-16 h-16 items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.5 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9.5L12 2Z" fill="white" />
            </svg>
          </div>

          {/* Yellow Circle with Person */}
          <div className="hidden md:flex md:absolute top-40 right-50 bg-yellow-400 rounded-full w-44 h-44 md:w-64 md:h-64 overflow-hidden">
          </div>

          {/* Squiggly lines - top right */}
          <svg className="hidden md:flex md:absolute top-20 right-0 w-24 h-24 text-gray-400" viewBox="0 0 100 100">
            <path d="M10,30 Q30,5 50,30 T90,30" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Document illustration - bottom */}
          <div className={`hidden md:flex md:absolute bottom-20 right-44 ${theme === 'dark' ? 'bg-white' : 'bg-gray-100'} rounded-lg w-44 h-24 shadow-lg`}>
            <div className="flex p-3">
              <div className="w-8 h-8 rounded-full bg-[#e76f51]"></div>
              <div className="ml-3">
                <div className="h-2 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Curved arrow */}
          <svg className="hidden md:flex md:absolute bottom-20 right-20 w-32 h-32 text-gray-400" viewBox="0 0 100 100">
            <path d="M10,80 Q50,10 90,80" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="90,80 85,70 95,70" fill="currentColor" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
} 