'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import WorkProjectCard from "./WorkProjectCard";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("personal");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Personal projects data
  const personalProjects = [
    {
      title: "🎵 WebRecord Sound App",
      role: "Full Stack Developer",
      description: "Browser-based audio recording with IndexedDB storage, Firebase auth, and privacy-first approach.",
      image: "/project WebRecord1.png",
      technologies: ["React", "TypeScript", "TailwindCSS", "IndexedDB"],
      githubUrl: "https://github.com/unikonkon/React_WebRecord",
      demoUrl: "https://voice-record-phi.vercel.app/",
      featured: true,
      colorScheme: "blue" as const
    },
    {
      title: "📈 CryptoTracker",
      role: "Front-End Developer",
      description: "Modern cryptocurrency tracking with categorized views, search functionality, and 7-day price charts.",
      image: "/project CryptoTracker.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Recharts"],
      githubUrl: "https://github.com/unikonkon/NextJS_CryptoTracker",
      demoUrl: "https://crypto-tracker-drab-eta.vercel.app/",
      colorScheme: "yellow" as const
    },
    {
      title: "🎬 Netflix Clone",
      role: "Front-End Developer",
      description: "Responsive Netflix clone with modern UI/UX, movie browsing, and server-side rendering.",
      image: "/project Netflix.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/unikonkon/NextJS_Netflix_App",
      demoUrl: "https://next-js-netflix-app-5egp.vercel.app/",
      colorScheme: "red" as const
    },
    {
      title: "🗣️ Text-to-Speech App",
      role: "Front-End Developer",
      description: "Web application for text-to-speech conversion with voice selection and multi-language support.",
      image: "/project texttospeech.png",
      technologies: ["Next.js", "TypeScript", "Web Speech API"],
      githubUrl: "https://github.com/unikonkon/NextJS_Text-to-Speech-App",
      demoUrl: "https://text-to-speech-app-kappa.vercel.app/",
      colorScheme: "green" as const
    },
    {
      title: "🇹🇭 PyThaiTTS App",
      role: "Full Stack Developer",
      description: "Full-stack Thai text-to-speech with FastAPI backend and PyThaiTTS integration.",
      image: "/project PyThaiTTS texttospeech.png",
      technologies: ["Next.js", "FastAPI", "Python", "PyThaiTTS"],
      githubUrl: "https://github.com/unikonkon/NextJS_Text-to-Speech-for-PyThaiTTS",
      colorScheme: "purple" as const
    },
    {
      title: "💼 Portfolio V1",
      role: "Front-End Developer",
      description: "Clean and minimalist portfolio website with responsive design principles.",
      image: "/project webport1.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/unikonkon/NextJs_WebProtfolio",
      demoUrl: "https://faradaybanana.vercel.app/",
      colorScheme: "indigo" as const
    }
  ];

  // Work projects data
  const workProjects = [

    {
      title: "ACT Project",
      role: "Full Stack Developer",
      description: "Full-stack development with data fetching from multiple sources, risk assessment logic, and Excel exports.",
      technologies: ["JavaScript", "TypeScript", "React", "Elasticsearch", "Express", "GitLab", "Jenkins", "Postman", "Ant Design"],
      features: [
        "Update the API for fetching data from the web",
        "Update the API for fetching data from the Kibana database",
        "Update the front-end view to reflect data from MA and the new database data sent",
        "Write Python logic for project risk assessment",
        "Redesign the flow for fetching data from 3 web pages: EGP, DBD, GOV",
        "Update the API for fetching data from the 3 web pages (EGP, DBD, GOV) based on the previous version",
        "Set up Jenkins processes to run commands for fetching project and company data",
        "Implement code paths for project and company data as required",
        "Create an Excel export for the required project and company data"
      ],
      icon: "📊",
      colorScheme: "yellow" as const
    },
    {
      title: "ACT Phase 2",
      role: "Full Stack Developer",
      description: "Enhanced project with advanced data fetching flows, database storage, and modern web interface.",
      technologies: ["JavaScript", "TypeScript", "Next.js", "Nodejs", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman", "Puppeteer", "Ant Design"],
      features: [
        "Design the flow for fetching project and company data from 3 web pages: EGP, DBD, and GOV",
        "Develop an API to fetch project data from the 3 web pages (EGP, DBD, GOV) and store it in the database",
        "Set up a Jenkins process to run commands for fetching project and company data",
        "Develop the web view for the front-end of Phase 2"
      ],
      icon: "🚀",
      colorScheme: "purple" as const,
      demoUrl: "https://actai.co/"
    },
    {
      title: "Iapp Speech Flow",
      role: "Full Stack Developer",
      description: "Mobile-to-web migration with Electron desktop app deployment for cross-platform compatibility.",
      technologies: ["JavaScript", "TypeScript", "Next.js", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman", "NextUI", "TailwindCSS", "Electron"],
      features: [
        "Plan the development of Iapp Speech Flow for Web and design the workflow",
        "Convert the mobile code into a web format using Next.js",
        "Design the code flow for Iapp Speech Flow on the Web",
        "Build the application as an Electron app for macOS and Windows"
      ],
      icon: "💬",
      colorScheme: "green" as const
    },
    {
      title: "NBTC - Drone Data Transmission",
      role: "Backend Developer",
      description: "Developed a Proxy API for transmitting drone data to mobile and web platforms, ensuring secure and compliant data transmission with NBTC regulations",
      technologies: ["JavaScript", "TypeScript", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman"],
      features: [
        "Developed an API for transmitting drone data to both mobile and web platforms, ensuring data is transmitted securely and in compliance with NBTC regulations",
        "Provided real-time logging and error handling to track ensure the integrity of data during transmission",
        "Presented the API functionality to the client, explaining how the API works and ensuring they understand how it complies with NBTC regulations"
      ],
      icon: "🚁",
      colorScheme: "blue" as const
    }

  ];
  //
  return (
    <motion.section
      id="projects"
      className="py-24 bg-gradient-to-b"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-8xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>Projects</h2>

        {/* Tab Navigation - Modern Design */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-opacity-10 backdrop-blur-lg rounded-2xl px-3 py-2 border border-opacity-20 gap-2"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <button
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${activeTab === 'personal'
                ? 'text-white shadow-lg transform scale-105'
                : 'text-gray-400 hover:text-gray-200'
                }`}
              style={{
                backgroundColor: activeTab === 'personal' ? 'var(--accent-color)' : 'transparent'
              }}
              onClick={() => handleTabChange('personal')}
            >
              🚀 Personal Projects
            </button>
            <button
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${activeTab === 'projects'
                ? 'text-white shadow-lg transform scale-105'
                : 'text-gray-400 hover:text-gray-200'
                }`}
              style={{
                backgroundColor: activeTab === 'projects' ? 'var(--accent-color)' : 'transparent'
              }}
              onClick={() => handleTabChange('projects')}
            >
              💼 Work Projects
            </button>
          </div>
        </div>

        {/* Personal Projects Content - Grid Layout */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                role={project.role}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                featured={project.featured}
                delay={index * 0.1}
                colorScheme={project.colorScheme}
              />
            ))}
          </div>
        )}

        {/* Work Projects Content - Grid Layout */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workProjects.map((project, index) => (
              <WorkProjectCard
                key={index}
                title={project.title}
                role={project.role}
                description={project.description}
                technologies={project.technologies}
                features={project.features}
                icon={project.icon}
                delay={index * 0.1}
                colorScheme={project.colorScheme}
                demoUrl={project.demoUrl}
              />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}