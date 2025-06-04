'use client';

import Image from "next/image";

interface NavigationProps {
  theme: string;
  toggleTheme: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ theme, toggleTheme, scrollToSection }: NavigationProps) {
  return (
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
  );
} 