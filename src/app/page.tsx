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
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
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
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                    const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                    if (drawer) drawer.checked = false;
                  }}
                  className={`hover:${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Home
                </a>
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
              I&apos;m looking for a similar role as a Front-End Developer, Back-End Developer, or Full Stack Developer.
              I have 3+ years of experience in web development. I am passionate about developing web applications, continuously learning modern web technologies, and leveraging AI tools to enhance development processes.
            </p>
            <div className="flex gap-6 flex-wrap">
              <button className="px-6 py-3 rounded-md font-medium hover:bg-opacity-50 transition-colors cursor-pointer" style={{ backgroundColor: 'var(--accent-color)' }}>
                <a href="/ResumeSuthep.pdf" download="ResumeSuthep.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>
              <button className="px-6 py-3 rounded-md font-medium hover:bg-opacity-50 transition-colors cursor-pointer" style={{ backgroundColor: 'var(--accent-color)' }}>
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
                <p>
                  <strong>Role:</strong> Front-end Developer
                </p>
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
                <p>
                  <strong>Role:</strong> Full Stack Developer
                </p>
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

      {/* Projects Section with Tabs */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Projects</h2>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="tabs tabs-box mb-8 w-fit">
              <button
                className={`tab text-md md:text-lg  ${activeTab === 'projects' ? 'tab-active font-bold' : ''}`}
                onClick={() => handleTabChange('projects')}
              >
                Work Projects
              </button>
              <button
                className={`tab text-md md:text-lg ${activeTab === 'personal' ? 'tab-active font-bold' : ''}`}
                onClick={() => handleTabChange('personal')}
              >
                Personal Projects
              </button>
            </div>
          </div>


          {/* Personal Projects Content */}
          {activeTab === 'personal' && (
            <div className="space-y-8">

              {/* Netflix App Project */}
              <div className="rounded-xl p-4 sm:p-8 shadow-md flex flex-col md:flex-row" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="xs:w-full md:w-1/2 mb-4 md:mb-0" style={{ color: 'var(--text-secondary)' }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>Netflix Clone App</h3>
                  <p><strong>Role:</strong> Front-End Developer</p>
                  <p><strong>Tools:</strong> Next.js, TypeScript, TailwindCSS, NextUI</p>
                  <li>Developed a responsive Netflix clone with modern UI/UX</li>
                  <li>Implemented movie browsing and categorization features</li>
                  <li>Created a responsive design that works across all devices</li>
                  <li>Used Next.js for server-side rendering and optimized performance</li>
                  <li>Deployed the application on Vercel for seamless hosting</li>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href="https://github.com/unikonkon/NextJS_Netflix_App"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View on GitHub →
                    </a>
                    <button className="btn btn-primary mb-4 w-[110px]" onClick={() => window.open('https://next-js-netflix-app-5egp.vercel.app/', '_blank')}>
                      Live Demo
                    </button>
                  </div>
                </div>
                <div className="xs:w-full md:w-1/2">
                  <a href="https://next-js-netflix-app-5egp.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Image
                      width={500} height={350}
                      className="rounded-xl h-[350px] w-full" src="/project Netflix.png" alt="Netflix Clone App" />
                  </a>
                </div>
              </div>

              {/* Text-to-Speech App Project */}
              <div className="rounded-xl p-8 shadow-md flex flex-col md:flex-row" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="xs:w-full md:w-1/2 mb-4 md:mb-0" style={{ color: 'var(--text-secondary)' }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>Text-to-Speech App</h3>
                  <p><strong>Role:</strong> Front-End Developer</p>
                  <p><strong>Tools:</strong> Next.js, TypeScript, TailwindCSS, Web Speech API</p>
                  <li>Developed a web application for text-to-speech conversion using the Web Speech API and API from IAPP Technology</li>
                  <li>Implemented voice selection and speech rate control features</li>
                  <li>Created a responsive and user-friendly interface</li>
                  <li>Deployed the application on Vercel for easy access</li>
                  <li>Added support for multiple languages and voices</li>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href="https://github.com/unikonkon/NextJS_Text-to-Speech-App"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View on GitHub →
                    </a>
                    <button className="btn btn-primary mb-4 w-[110px]" onClick={() => window.open('https://text-to-speech-app-kappa.vercel.app/', '_blank')}>
                      Live Demo
                    </button>
                  </div>
                </div>
                <div className="xs:w-full md:w-1/2">

                  <a href="https://text-to-speech-app-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Image
                      width={500} height={220}
                      className="rounded-xl h-[350px] w-full" src="/project texttospeech.png" alt="Text-to-Speech App" />
                  </a>
                </div>
              </div>

              {/* PyThaiTTS Text-to-Speech Project */}
              <div className="rounded-xl p-4 sm:p-8 shadow-md flex flex-col md:flex-row" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="xs:w-full md:w-1/2 mb-4 md:mb-0" style={{ color: 'var(--text-secondary)' }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>PyThaiTTS Text-to-Speech</h3>
                  <p><strong>Role:</strong> Full Stack Developer</p>
                  <p><strong>Tools:</strong> Next.js, TypeScript, FastAPI, PyThaiTTS, Python</p>
                  <li>Built a full-stack application for Thai text-to-speech conversion</li>
                  <li>Developed a FastAPI backend service for handling PyThaiTTS processing</li>
                  <li>Created a modern frontend interface using Next.js and TypeScript</li>
                  <li>Implemented real-time text-to-speech conversion</li>
                  <li>Set up a separate backend server for PyThaiTTS processing</li>
                  <li>Integrated PyThaiTTS version 0.3.0 for Thai language support</li>
                  <div className="mt-4">
                    <a
                      href="https://github.com/unikonkon/NextJS_Text-to-Speech-for-PyThaiTTS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
                <div className="xs:w-full md:w-1/2">
                  <a href="https://github.com/unikonkon/NextJS_Text-to-Speech-for-PyThaiTTS" target="_blank" rel="noopener noreferrer">
                    <Image
                      width={500} height={220}
                      className="rounded-xl h-[350px] w-full" src="/project PyThaiTTS texttospeech.png" alt="PyThaiTTS Text-to-Speech" />
                  </a>
                </div>
              </div>


              {/* Portfolio Website Project */}
              <div className="rounded-xl p-4 sm:p-8 shadow-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>Portfolio Website</h3>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>Role:</strong> Front-End Developer</p>
                  <p><strong>Tools:</strong> Next.js, TypeScript, TailwindCSS, Framer Motion</p>
                  <li>Developed a responsive portfolio website showcasing skills and projects</li>
                  <li>Implemented dark/light theme switching functionality</li>
                  <li>Created smooth animations and transitions using Framer Motion</li>
                  <li>Optimized for performance and SEO</li>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/unikonkon/NextJS_PortfolioWeb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Work Projects Content */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              {/* Project 1 */}
              <div className="rounded-xl p-4 sm:p-8 shadow-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>Project: NBTC - Drone Data Transmission</h3>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>Role:</strong> Backend Developer</p>
                  <p><strong>Tools:</strong> JavaScript, TypeScript, PostgreSQL, Express, GitLab, Jenkins, Postman</p>
                  <li>Develop an API for transmitting drone data to both the mobile and web platforms</li>
                  <li>Present the API functionality to the client, explaining how the API works.</li>
                </div>
              </div>

              {/* Project 2 */}
              <div className="rounded-xl p-4 sm:p-8 shadow-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>Project: ACT</h3>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>Role:</strong> Full Stack Developer</p>
                  <p><strong>Tools:</strong> JavaScript, TypeScript, React, Elasticsearch, Express, GitLab, Jenkins, Postman, Ant Design</p>
                  <li>Update the API for fetching data from the web.</li>
                  <li>Update the API for fetching data from the Kibana database.</li>
                  <li>Update the front-end view to reflect data from MA and the new database data sent.</li>
                  <li>Write Python logic for project risk assessment.</li>
                  <li>Redesign the flow for fetching data from 3 web pages: EGP, DBD, GOV.</li>
                  <li>Update the API for fetching data from the 3 web pages (EGP, DBD, GOV) based on the previous version.</li>
                  <li>Set up Jenkins processes to run commands for fetching project and company data.</li>
                  <li>Implement code paths for project and company data as required.</li>
                  <li>Create an Excel export for the required project and company data.</li>
                </div>
              </div>

              {/* Project 3 */}
              <div className="rounded-xl p-4 sm:p-8 shadow-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>Project: ACT Phase 2</h3>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>Role:</strong> Full Stack Developer</p>
                  <p><strong>Tools:</strong> JavaScript, TypeScript, Next.js, Nodejs, PostgreSQL, Express, GitLab, Jenkins, Postman, Puppeteer, Ant Design</p>
                  <li>Design the flow for fetching project and company data from 3 web pages: EGP, DBD, and GOV.</li>
                  <li>Develop an API to fetch project data from the 3 web pages (EGP, DBD, GOV) and store it in the database.</li>
                  <li>Set up a Jenkins process to run commands for fetching project and company data.</li>
                  <li>Develop the web view for the front-end of Phase 2.</li>
                </div>
              </div>

              {/* Project 4 */}
              <div className="rounded-xl p-4 sm:p-8 shadow-md" style={{ backgroundColor: 'var(--card-bg)' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-color)' }}>Product: Iapp Speech Flow for Web</h3>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>Role:</strong> Full Stack Developer</p>
                  <p><strong>Tools:</strong> JavaScript, TypeScript, Next.js, PostgreSQL, Express, GitLab, Jenkins, Postman, NextUI, TailwindCSS, Electron</p>
                  <li>Plan the development of Iapp Speech Flow for Web and design the workflow.</li>
                  <li>Convert the mobile code into a web format using Next.js.</li>
                  <li>Design the code flow for Iapp Speech Flow on the Web.</li>
                  <li>Build the application as an Electron app for macOS and Windows.</li>
                </div>
              </div>
            </div>
          )}
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
