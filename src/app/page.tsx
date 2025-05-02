'use client';

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGit, faGithub, faDocker } from "@fortawesome/free-brands-svg-icons";
import "./css/cardSkills.css";
import "./css/backgroud.css";
import "./css/switchTheme.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Add splitText function
const splitText = (text: string) => {
  return {
    chars: text.split(""),
    charsName: text.split(""),
    charsFullStack: text.split(""),
  };
};

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Split text for animation
  const { chars } = splitText("Hi, I am");
  const { charsName } = splitText("Test Developer");
  const { charsFullStack } = splitText("Full Stack Developer");

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

      {/* Navigation Bar */}
      <nav className="w-full backdrop-blur-sm flex justify-between items-center px-3 md:px-8 py-3 mx-auto fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--nav-bg)' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center pt-1" style={{ backgroundColor: 'var(--accent-color)' }}>
            <Image src="/person.png" alt="logo" width={32} height={32} />
          </div>
          <span className="text-xl font-semibold">Developer</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 items-center">

          <button
            onClick={() => scrollToSection("skills")}
            className="btn btn-soft"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("expertise")}
            className="btn btn-soft"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="btn btn-soft"
            style={{ color: 'var(--text-primary)' }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-soft"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        <div className="drawer drawer-end md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-end">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className={`menu p-4 w-80 min-h-full ${theme === 'dark' ? 'bg-[#272642] text-white' : 'bg-white text-black'}`}>
              {/* Close button */}
              <li className="flex justify-end items-end mb-4">
                <label htmlFor="my-drawer" className="btn btn-circle btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </li>

              <li className="mb-4">
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                    const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                    if (drawer) drawer.checked = false;
                  }}
                  className={`hover:${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Skills
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#expertise"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("expertise");
                    const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                    if (drawer) drawer.checked = false;
                  }}
                  className={`hover:${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Experience
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                    const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                    if (drawer) drawer.checked = false;
                  }}
                  className={`hover:${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Projects
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                    const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                    if (drawer) drawer.checked = false;
                  }}
                  className={`hover:${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Theme Toggle Button */}
        <div className="">
          <label htmlFor="switchTheme" className="switchTheme">
            <input id="switchTheme" type="checkbox" onChange={toggleTheme} />
            <span className="sliderTheme"></span>
            <span className="decorationTheme"></span>
          </label>
        </div>

      </nav>

      {/* Background */}
      <div className="background">
        <div className="heading"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-14 py-16 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-12 w-full mt-16 ">
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
            <p className="mb-10 max-w-md" style={{ color: 'var(--text-secondary)' }}>
              I am a full stack developer with a passion for building web applications.
            </p>
            <div className="flex gap-6 flex-wrap">
              <button className="px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors" style={{ backgroundColor: 'var(--accent-color)' }}>
                <a href="/resume.pdf" download="resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>
              <button className="px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors" style={{ backgroundColor: 'var(--accent-color)' }}>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
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
            <div className="hidden md:flex md:absolute top-25 right-48 md:right-96 bg-[#e76f51] rounded-full w-16 h-16  items-center justify-center">
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

      {/* Skills & Technologies Section */}
      <motion.section
        id="skills"
        className="pt-24 relative mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.07 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full text-center justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>Skills</h2>

          <div className="flex justify-center items-center sm:space-x-6 md:space-x-16 space-x-2 mb-10">
            <FontAwesomeIcon icon={faHtml5} className="w-8 h-8 text-[#E34F26] md:text-4xl text-xl" />
            <FontAwesomeIcon icon={faCss3} className="w-8 h-8 text-[#1572B6] md:text-4xl text-xl" />
            <FontAwesomeIcon icon={faJs} className="w-8 h-8 text-[#F7DF1E] md:text-4xl text-xl" />
            <FontAwesomeIcon icon={faReact} className="w-8 h-8 text-[#61DAFB] md:text-4xl text-xl" />
            <FontAwesomeIcon icon={faNodeJs} className="w-8 h-8 text-[#339933] md:text-4xl text-xl" />
            <FontAwesomeIcon icon={faGit} className="w-8 h-8 text-[#F05032] md:text-4xl text-xl" />
            <FontAwesomeIcon icon={faGithub} className={`w-8 h-8 ${theme === 'dark' ? 'text-white' : 'text-black'} md:text-4xl text-xl`} />
            <FontAwesomeIcon icon={faDocker} className="w-8 h-8 text-[#2496ED] md:text-4xl text-xl" />
          </div>

          <div className="flex justify-center items-center">
            <div className="cardSkills">
              <span
                style={{
                  '--top': '10%',
                  '--left': '20%',
                  '--size': '60px',
                  '--delay': '0.1s'
                } as React.CSSProperties}
              ></span>
              <span
                style={{
                  '--top': '10%',
                  '--left': '80%',
                  '--size': '50px',
                  '--delay': '0.3s'
                } as React.CSSProperties}
              ></span>
              <span
                style={{
                  '--top': '60%',
                  '--left': '10%',
                  '--size': '40px',
                  '--delay': '0.5s'
                } as React.CSSProperties}
              ></span>
              <span
                style={{
                  '--top': '30%',
                  '--left': '65%',
                  '--size': '70px',
                  '--delay': '0.7s'
                } as React.CSSProperties}
              ></span>
              <span
                style={{
                  '--top': '80%',
                  '--left': '55%',
                  '--size': '45px',
                  '--delay': '1.3s'
                } as React.CSSProperties}
              ></span>
              <span
                style={{
                  '--top': '50%',
                  '--left': '35%',
                  '--size': '55px',
                  '--delay': '1.5s'
                } as React.CSSProperties}
              ></span>
              <span
                style={{
                  '--top': '15%',
                  '--left': '45%',
                  '--size': '75px',
                  '--delay': '1.7s'
                } as React.CSSProperties}
              ></span>

              <div>
                <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                  <strong className="text-2xl md:text-3xl">Language</strong>
                  <br />
                  <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>HTML, CSS, JavaScript, TypeScript, Dart, SQL</strong>
                </p>

                <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                  <strong className="text-2xl md:text-3xl">Framework & Library</strong>
                  <br />
                  <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ReactJS, NextJS, Flutter, Bootstrap, Tailwindcss, NextUI</strong>
                </p>

                <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                  <strong className="text-2xl md:text-3xl">Tool</strong>
                  <br />
                  <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Git Version Control, VSCode, Figma, Slack, Diagrams.net, Confluence Jira Software, Vercel</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex h-[200px] justify-center items-center">
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full mt-[100px]" fill="none" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="450" cy="280" rx="380" ry="80" stroke="#6b46c1" strokeOpacity="0.3" strokeWidth="1">
              </ellipse>
              <ellipse cx="450" cy="280" rx="320" ry="70" stroke="#6b46c1" strokeOpacity="0.3" strokeWidth="1">
              </ellipse>
              <ellipse cx="450" cy="280" rx="260" ry="60" stroke="#6b46c1" strokeOpacity="0.3" strokeWidth="1">
              </ellipse>
            </svg>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="expertise"
        className="bg-gradient-to-b"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.07 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Experience</h2>
          <div className="flex flex-row items-start">
            {/* Timeline */}
            <div className="hidden md:flex relative flex-col items-center mr-10" style={{ minWidth: 160 }}>
              {/* Year 1 */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-20" style={{ backgroundColor: 'var(--border-color)' }}></div>
                <span className="text-2xl font-medium mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>2020 - 2021</span>
              </div>
              <div className="w-1 h-[200px]" style={{ backgroundColor: 'var(--border-color)' }}></div>
              {/* Year 2 */}
              <div className="flex flex-col items-center">
                <span className="text-2xl font-medium mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>2022 - Current</span>
              </div>
            </div>
            {/* Experience Cards */}
            <div className="flex flex-col gap-24 w-full">
              {/* Card 1 */}
              <div className="rounded-xl p-6 shadow-md max-w-3xl" style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}>
                <h3 className="text-2xl md:hidden">2020 - 2021</h3>
                <h3 className="text-2xl font-semibold mb-2 drop-shadow-md" style={{ color: 'var(--accent-color)' }}>Experience1</h3>
                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Developed and maintained multiple web applications using React, Next.js, and TypeScript</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Implemented responsive designs and interactive UI components following best practices</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Collaborated with team members using Git version control and agile methodologies</p>
              </div>
              {/* Card 2 */}
              <div className="rounded-xl p-8 shadow-md max-w-3xl" style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}>
                <h3 className="text-2xl md:hidden">2022 - Current</h3>
                <h3 className="text-2xl font-semibold mb-2 drop-shadow-md" style={{ color: 'var(--accent-color)' }}>Experience2</h3>
                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Developed and maintained multiple web applications using React, Next.js, and TypeScript</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Implemented responsive designs and interactive UI components following best practices</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Collaborated with team members using Git version control and agile methodologies</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24 bg-gradient-to-b"
        style={{
          background: `linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg))`
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.07 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          {/* Project 1 */}
          <div className="mb-40">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left Content */}
              <div className="md:w-1/2 mt-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Example Project 1</h2>

                {/* Project Description Card */}
                <div className="rounded-xl p-8 max-w-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                  </p>
                </div>
              </div>

              {/* Right Content - Project Image */}
              <div className="md:w-1/2 relative">
                <div className="shadow-2xl rounded-lg overflow-hidden w-full h-[390px]" style={{ border: `1px solid var(--border-color)` }}>
                  <Image
                    src="/programmer.png"
                    alt="Project mockup showing a website wireframe"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Reversed layout */}
          <div>
            {/* Project 2 */}
            <div className="mb-40">
              <div className="flex flex-col md:flex-row items-start gap-10">
                {/* Left Content */}
                <div className="md:w-1/2 mt-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Example Project 2</h2>

                  {/* Project Description Card */}
                  <div className="rounded-xl p-8 max-w-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                    </p>
                  </div>
                </div>

                {/* Right Content - Project Image */}
                <div className="md:w-1/2 relative">
                  <div className="shadow-2xl rounded-lg overflow-hidden w-full h-[390px]" style={{ border: `1px solid var(--border-color)` }}>
                    <Image
                      src="/programmer.png"
                      alt="Project mockup showing a website wireframe"
                      width={600}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 bg-gradient-to-b"
        style={{
          background: `linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg))`
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.07 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Contact Information</h2>
          <div className="text-sm btn btn-soft w-[270px] mb-5" style={{ color: 'var(--text-secondary)' }}>
            Email: <a href="mailto:contact@example.com">contact@example.com</a>
          </div>
          <div className="text-sm btn btn-soft w-[270px]" style={{ color: 'var(--text-secondary)' }}>
            Phone: <a href="tel:+1234567890">+1234567890</a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
