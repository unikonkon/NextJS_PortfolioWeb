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
  const { charsName } = splitText("Suthep Jantawee");
  const { charsFullStack } = splitText("Full Stack Developer");

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

      {/* Navigation Bar */}
      <nav className="w-full backdrop-blur-sm flex justify-between items-center px-3 md:px-8 py-3 mx-auto fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--nav-bg)' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center pt-1" style={{ backgroundColor: 'var(--accent-color)' }}>
            <Image src="/person.png" alt="logo" width={32} height={32} />
          </div>
          <span className="text-xl font-semibold">FaradayBanana</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="btn btn-ghost cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="btn btn-ghost cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("expertise")}
            className="btn btn-ghost cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="btn btn-ghost cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-ghost cursor-pointer"
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
        id="home"
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
            <p className="mb-10 max-w-md md:text-lg text-sm  bg-gray-400 rounded-lg p-4 lg:bg-transparent lg:p-0" style={{ color: 'var(--text-secondary)' }}>
              I’m looking for a similar role as a Front-End Developer, Back-End Developer, or Full Stack Developer.
              I have 3+ years of experience in web development. I am passionate about developing web applications, continuously learning modern web technologies, and leveraging AI tools to enhance development processes.
            </p>
            <div className="flex gap-6 flex-wrap">
              <button className="px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors" style={{ backgroundColor: 'var(--accent-color)' }}>
                <a href="/resume.pdf" download="resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>
              <button className="px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors" style={{ backgroundColor: 'var(--accent-color)' }}>
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
        className="pt-12 md:pt-24 relative mt-20"
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

              <div className="md:p-6">

                <div className="xs:flex-col md:flex text-start">
                  <div className="xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-xl md:text-2xl lg:text-3xl">Languages</strong>
                      <br />
                      <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>HTML, CSS, JavaScript, TypeScript, Dart, SQL(Database)</strong>
                    </p>
                  </div>
                  <div className="text-left xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-2xl md:text-3xl">DevOps & CI/CD Tools</strong>
                      <br />
                      <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Git Version Control, Jenkins, Vercel, Docker</strong>
                    </p>
                  </div>
                </div>

                <div className="xs:flex-col md:flex text-start ">
                  <div className="xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-2xl md:text-3xl">Frameworks & Libraries</strong>
                      <br />
                      <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ReactJS, NextJS, NextUI, Flutter, Express.js, Electron, Jest, Tailwindcss, Ant Design, DaisyUI</strong>
                    </p>
                  </div>
                  <div className="text-left xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-2xl md:text-3xl">Databases & Data Tools</strong>
                      <br />
                      <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>PostgreSQL, Kibana, Firebase, Prisma</strong>
                    </p>
                  </div>
                </div>


                <div className="xs:flex-col md:flex text-start">
                  <div className="xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-2xl md:text-3xl">Testing & API Tools</strong>
                      <br />
                      <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Postman, Jest</strong>
                    </p>
                  </div>
                  <div className="text-left xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-2xl md:text-3xl">Design & Collaboration Tools</strong>
                      <br />
                      <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Figma, Draw.io (Diagrams.net), Slack, Lark, Monday, Discord</strong>
                    </p>
                  </div>
                </div>

                <div className="xs:flex-col md:flex text-start">
                  <div className="xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-2xl md:text-3xl">AI Tools</strong>
                      <br />
                      <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Cursor, Blackbox.AI, Gemini, Chat GPT</strong>
                    </p>
                  </div>
                  <div className="text-left xs:w-full mb-6">
                    <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      <strong className="text-2xl md:text-3xl">Soft Skills</strong>
                      <br />
                      <strong className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Creativity, Critical thinking, Responsibility, Problem solving, Communication, Teamwork</strong>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex lg:h-[200px] h-[100px] justify-center items-center">
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
            <div className="hidden md:flex relative flex-col items-center mr-10" style={{ minWidth: 230 }}>
              {/* Year 1 */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-20" style={{ backgroundColor: 'var(--border-color)' }}></div>
                <span className="text-2xl font-medium mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>Mar 2022 - Dec 2022</span>
              </div>
              <div className="w-1 h-[200px]" style={{ backgroundColor: 'var(--border-color)' }}></div>
              {/* Year 2 */}
              <div className="flex flex-col items-center">
                <span className="text-2xl font-medium mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>Feb 2023 - Present</span>
              </div>
            </div>
            {/* Experience Cards */}
            <div className="flex flex-col gap-24 w-full">
              {/* Card 1 */}
              <div className="rounded-xl p-6 shadow-md max-w-6xl" style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}>
                <h3 className="text-2xl md:hidden">March 2022 - December 2022</h3>
                <h3 className="text-2xl font-semibold mb-2 drop-shadow-md" style={{ color: 'var(--accent-color)' }}>Vertobase Co., Ltd.</h3>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Write code front-end from design use React and NextJS </li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Write code Flutter from design detail write process pin login mobile and view page other</li>
              </div>
              {/* Card 2 */}
              <div className="rounded-xl p-8 shadow-md max-w-6xl" style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}>
                <h3 className="text-2xl md:hidden">Feb 2023 - Present</h3>
                <h3 className="text-2xl font-semibold mb-2 drop-shadow-md" style={{ color: 'var(--accent-color)' }}>iApp Technology</h3>

                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Created an API for sending data using JavaScript, PostgreSQL, and Express, leveraging backend development skills in JavaScript, SQL, and Express.js.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Developed an API for fetching data from the web using JavaScript, PostgreSQL, Puppeteer and Express, utilizing knowledge of RESTful API design and SQL queries.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Built an API for retrieving data from the Kibana database, integrating database management and data analytics tools.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Edited the API to send data to the homepage using React, JavaScript, PostgreSQL, and Express, combining frontend-backend integration with ReactJS and SQL.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Created a process to run commands in Jenkins for data extraction using Jenkins and Docker, applying CI/CD automation practices.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Edited the web front-end view for MA and fixed bugs using React, Next.js, JavaScript, and TypeScript, with UI improvements via NextUI, TailwindCSS, and Bootstrap.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Migrated Flutter code from mobile to web using Next.js and TypeScript, enhancing cross-platform development experience.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Wrote unit tests for the API and applied clean code principles using Jest, Postman, and Git version control.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Built the application as an Electron app for macOS and Windows, expanding deployment knowledge across desktop platforms.</li>
                <li className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Designed a data extraction flow using draw.io (Diagrams.net)</li>
                <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>Wrote Python logic for checking MA, integrating Python scripting with backend processes.</li>

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
        <div className="max-w-7xl mx-auto md:px-8 px-4">

          {/* Project 1 */}
          <div className="md:mb-28 mb-16">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left Content */}
              <div className="w-full mt-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Project: NBTC - Drone Data Transmission</h2>

                {/* Project Description Card */}
                <div className="rounded-xl md:p-8 p-2 shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <li>
                      Develop an API for transmitting drone data to both the mobile and web platforms.
                    </li>
                    <li>
                      Present the API functionality to the client, explaining how the API works.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Project 2 */}
          <div className="md:mb-28 mb-16">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left Content */}
              <div className="w-full mt-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Project: ACT</h2>

                {/* Project Description Card */}
                <div className="rounded-xl md:p-8 p-2 shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <li>
                      Update the API for fetching data from the web.
                    </li>
                    <li>
                      Update the API for fetching data from the Kibana database.
                    </li>
                    <li>
                      Update the front-end view to reflect data from MA and the new database data sent.
                    </li>
                    <li>
                      Write Python logic for project risk assessment.
                    </li>
                    <li>
                      Redesign the flow for fetching data from 3 web pages: EGP, DBD, GOV.
                    </li>
                    <li>
                      Update the API for fetching data from the 3 web pages (EGP, DBD, GOV) based on the previous version.
                    </li>
                    <li>
                      Set up Jenkins processes to run commands for fetching project and company data.
                    </li>
                    <li>
                      Implement code paths for project and company data as required.
                    </li>
                    <li>
                      Create an Excel export for the required project and company data.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="md:mb-28 mb-16">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left Content */}
              <div className="w-full mt-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Project: ACT Phase 2</h2>

                {/* Project Description Card */}
                <div className="rounded-xl md:p-8 p-2 shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <li>
                      Design the flow for fetching project and company data from 3 web pages: EGP, DBD, and GOV.
                    </li>
                    <li>
                      Develop an API to fetch project data from the 3 web pages (EGP, DBD, GOV) and store it in the database.
                    </li>
                    <li>
                      Set up a Jenkins process to run commands for fetching project and company data.
                    </li>
                    <li>
                      Develop the web view for the front-end of Phase 2.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Project 4 */}
          <div className="md:mb-28 mb-16">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left Content */}
              <div className="w-full mt-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Product: Iapp Speech Flow for Web</h2>

                {/* Project Description Card */}
                <div className="rounded-xl md:p-8 p-2 shadow-sm" style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>
                    <li>
                      Plan the development of Iapp Speech Flow for Web and design the workflow.
                    </li>
                    <li>
                      Convert the mobile code into a web format using Next.js.
                    </li>
                    <li>
                      Design the code flow for Iapp Speech Flow on the Web.
                    </li>
                    <li>
                      Build the application as an Electron app for macOS and Windows.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Reversed layout */}
          {/* <div>
            <div className="mb-40">
              <div className="flex flex-col md:flex-row items-start gap-10">
                <div className="md:w-1/2 mt-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Example Project 2</h2>

                  <div className="rounded-xl p-8 max-w-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                    </p>
                  </div>
                </div>

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
          </div> */}
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
            Email: <a href="mailto:contact@example.com">bananammm0001@gmail.com</a>
          </div>
          <div className="text-sm btn btn-soft w-[270px] mb-5" style={{ color: 'var(--text-secondary)' }}>
            Phone: <a href="tel:+1234567890">0901834036</a>
          </div>
          <div className="text-sm btn btn-soft w-[270px]" style={{ color: 'var(--text-secondary)' }}>
            Linkedin: <a href="https://www.linkedin.com/in/suthep-jantawee" target="_blank" rel="noopener noreferrer">in/suthep-jantawee</a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
