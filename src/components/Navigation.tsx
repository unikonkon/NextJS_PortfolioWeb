'use client';

import Image from "next/image";
import '../app/css/Navigation.css';

interface NavigationProps {
  toggleTheme: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ toggleTheme, scrollToSection }: NavigationProps) {
  return (
    <nav className="glass-navigation w-full flex justify-between items-center px-3 md:px-8 py-3 mx-auto fixed top-0 left-0 right-0 z-50">
      {/* Background Effects */}
      {/* <div className="nav-glow"></div> */}
      <div className="nav-scan-lines"></div>
      <div className="nav-holographic-border"></div>

      {/* Neural Network Background */}
      {/* <div className="nav-neural-network">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`nav-neural-node nav-node-${i}`}></div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="nav-neural-connection"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div> */}

      {/* Parallax Planets */}
      <div className="nav-parallax-planets">
        <div className="nav-planet nav-planet-1"></div>
        <div className="nav-planet nav-planet-2 hidden lg:block"></div>
        <div className="nav-planet nav-planet-3 hidden lg:block"></div>
      </div>

      {/* Logo with Glass Effect */}
      <div className="flex items-center gap-3">
        <div className="logo-container w-10 h-10 rounded-md flex items-center justify-center pt-1">
          <Image src="/person.png" alt="logo" width={32} height={32} />
        </div>
        <span className="brand-text text-xl font-semibold" data-text="FaradayBanana">
          FaradayBanana
        </span>
      </div>

      {/* Desktop Navigation with Glass Buttons */}
      <div className="hidden lg:flex gap-4 items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="nav-button btn btn-ghost cursor-pointer px-4 py-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="nav-button btn btn-ghost cursor-pointer px-4 py-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("expertise")}
          className="nav-button btn btn-ghost cursor-pointer px-4 py-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-button btn btn-ghost cursor-pointer px-4 py-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("work-gallery")}
          className="nav-button btn btn-ghost cursor-pointer px-4 py-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Gallery
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-button btn btn-ghost cursor-pointer px-4 py-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Contact
        </button>
      </div>

      {/* Mobile Navigation Drawer with Glass Effect */}
      <div className="drawer drawer-end lg:hidden ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end">
          <label htmlFor="my-drawer" className="nav-button btn btn-ghost drawer-button mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="mobile-menu-glass menu p-4 w-80 min-h-full">
            {/* Close button */}
            <li className="flex justify-end items-end mb-4">
              <label htmlFor="my-drawer" className="nav-button btn btn-ghost cursor-pointer px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </li>

            <li className="mobile-menu-item mb-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                  const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                  if (drawer) drawer.checked = false;
                }}
                className="text-white hover:text-cyan-300"
              >
                Home
              </a>
            </li>
            <li className="mobile-menu-item mb-4">
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                  const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                  if (drawer) drawer.checked = false;
                }}
                className="text-white hover:text-cyan-300"
              >
                Skills
              </a>
            </li>
            <li className="mobile-menu-item mb-4">
              <a
                href="#expertise"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("expertise");
                  const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                  if (drawer) drawer.checked = false;
                }}
                className="text-white hover:text-cyan-300"
              >
                Experience
              </a>
            </li>
            <li className="mobile-menu-item mb-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                  const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                  if (drawer) drawer.checked = false;
                }}
                className="text-white hover:text-cyan-300"
              >
                Projects
              </a>
            </li>
            <li className="mobile-menu-item mb-4">
              <a
                href="#work-gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("work-gallery");
                  const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                  if (drawer) drawer.checked = false;
                }}
                className="text-white hover:text-cyan-300"
              >
                Gallery
              </a>
            </li>
            <li className="mobile-menu-item mb-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  const drawer = document.getElementById('my-drawer') as HTMLInputElement;
                  if (drawer) drawer.checked = false;
                }}
                className="text-white hover:text-cyan-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>


      {/* Theme Toggle with Glass Effect */}
      <div className="theme-toggle-container">
        <label htmlFor="switchTheme" className="switchTheme">
          <input id="switchTheme" type="checkbox" onChange={toggleTheme} />
          <span className="sliderTheme"></span>
          <span className="decorationTheme"></span>
        </label>
      </div>
    </nav>
  );
} 