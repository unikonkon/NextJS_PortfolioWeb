'use client';

import { useEffect, useState } from "react";
import "./css/cardSkills.css";
import "./css/backgroud.css";
import "./css/switchTheme.css";
import "./css/contact.css";
import "./css/ContactSection.css";
import "./css/buttonResume.css";

// Import components
import Navigation from "@/components/Navigation";
import Background from "@/components/Background";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectSection/ProjectsSection";
import ContactSection from "@/components/ContactSection";

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

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Navigation Bar */}
      <Navigation 
        theme={theme} 
        toggleTheme={toggleTheme} 
        scrollToSection={scrollToSection} 
      />

      {/* Background */}
      <Background />

      {/* Hero Section */}
      <HeroSection theme={theme} />

      {/* Skills & Technologies Section */}
      <SkillsSection theme={theme} />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section with Tabs */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
