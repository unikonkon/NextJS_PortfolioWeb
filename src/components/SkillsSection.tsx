'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGit, faGithub, faDocker } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  theme: string;
}

export default function SkillsSection({ theme }: SkillsSectionProps) {
  // Animation variants for skill icons
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.2,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for skill categories
  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const skills = [
    { icon: faHtml5, color: "#E34F26", name: "HTML5" },
    { icon: faCss3, color: "#1572B6", name: "CSS3" },
    { icon: faJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: faReact, color: "#61DAFB", name: "React" },
    { icon: faNodeJs, color: "#339933", name: "Node.js" },
    { icon: faGit, color: "#F05032", name: "Git" },
    { icon: faGithub, color: theme === 'dark' ? '#fff' : '#000', name: "GitHub" },
    { icon: faDocker, color: "#2496ED", name: "Docker" }
  ];

  return (
    <motion.section
      id="skills"
      className="pt-12 md:pt-24 relative mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Custom CSS for glow effects */}
      <style jsx>{`
        .skill-card {
          backdrop-filter: blur(15px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(123, 104, 238, 0.2),
            transparent
          );
          transition: left 0.8s ease;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card:hover {
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(123, 104, 238, 0.3),
            inset 0 0 30px rgba(123, 104, 238, 0.1);
          transform: translateY(-8px) scale(1.02);
        }

        .skill-icon {
          filter: drop-shadow(0 0 10px currentColor);
          transition: all 0.3s ease;
        }

        .skill-icon:hover {
          filter: drop-shadow(0 0 20px currentColor) brightness(1.2);
        }

        .glow-text {
          text-shadow: 
            0 0 10px rgba(123, 104, 238, 0.5),
            0 0 20px rgba(123, 104, 238, 0.3),
            0 0 30px rgba(123, 104, 238, 0.1);
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        .sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full text-center justify-center items-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 glow-text" 
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Skills
        </motion.h2>

        {/* Skill Icons with Staggered Animation */}
        <motion.div 
          className="flex justify-center items-center sm:space-x-6 md:space-x-16 space-x-2 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={iconVariants}
              whileHover="hover"
              animate="float"
              custom={index}
              className="skill-icon"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FontAwesomeIcon 
                icon={skill.icon} 
                className="w-8 h-8 md:text-4xl text-xl transition-all duration-300" 
                style={{ color: skill.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.div 
            className="skill-card cardSkills"
            variants={skillCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Animated Background Spans */}
            <motion.span
              style={{
                '--top': '10%',
                '--left': '20%',
                '--size': '60px',
                '--delay': '0.1s'
              } as React.CSSProperties}
              className="sparkle"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.1
              }}
            ></motion.span>
            <motion.span
              style={{
                '--top': '10%',
                '--left': '80%',
                '--size': '50px',
                '--delay': '0.3s'
              } as React.CSSProperties}
              className="sparkle"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.7, 0.2]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.3
              }}
            ></motion.span>
            <motion.span
              style={{
                '--top': '60%',
                '--left': '10%',
                '--size': '40px',
                '--delay': '0.5s'
              } as React.CSSProperties}
              className="sparkle"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.9, 0.4]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.5
              }}
            ></motion.span>
            <motion.span
              style={{
                '--top': '30%',
                '--left': '65%',
                '--size': '70px',
                '--delay': '0.7s'
              } as React.CSSProperties}
              className="sparkle"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.6, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.7
              }}
            ></motion.span>
            <motion.span
              style={{
                '--top': '80%',
                '--left': '55%',
                '--size': '45px',
                '--delay': '1.3s'
              } as React.CSSProperties}
              className="sparkle"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: 1.3
              }}
            ></motion.span>
            <motion.span
              style={{
                '--top': '50%',
                '--left': '35%',
                '--size': '55px',
                '--delay': '1.5s'
              } as React.CSSProperties}
              className="sparkle"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.7, 0.2]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 1.5
              }}
            ></motion.span>
            <motion.span
              style={{
                '--top': '15%',
                '--left': '45%',
                '--size': '75px',
                '--delay': '1.7s'
              } as React.CSSProperties}
              className="sparkle"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.9, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1.7
              }}
            ></motion.span>

            <motion.div 
              className="md:p-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="xs:flex-col md:flex text-start">
                <motion.div 
                  className="xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-xl md:text-2xl lg:text-3xl glow-text">Languages</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>HTML, CSS, JavaScript, TypeScript, Dart, SQL(Database)</strong>
                  </p>
                </motion.div>
                <motion.div 
                  className="text-left xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-2xl md:text-3xl glow-text">DevOps & CI/CD Tools</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Git Version Control, Jenkins, Vercel, Docker</strong>
                  </p>
                </motion.div>
              </div>

              <div className="xs:flex-col md:flex text-start">
                <motion.div 
                  className="xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-2xl md:text-3xl glow-text">Frameworks & Libraries</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ReactJS, NextJS, NextUI, Flutter, Express.js, Electron, Tailwindcss, Ant Design, DaisyUI</strong>
                  </p>
                </motion.div>
                <motion.div 
                  className="text-left xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-2xl md:text-3xl glow-text">Databases & Data Tools</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>PostgreSQL, Kibana, Firebase, Prisma</strong>
                  </p>
                </motion.div>
              </div>

              <div className="xs:flex-col md:flex text-start">
                <motion.div 
                  className="xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-2xl md:text-3xl glow-text">Testing & API Tools</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Postman, Jest, SonarQube</strong>
                  </p>
                </motion.div>
                <motion.div 
                  className="text-left xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-2xl md:text-3xl glow-text">Design & Collaboration Tools</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Figma, Draw.io (Diagrams.net), Slack, Lark, Monday, Discord</strong>
                  </p>
                </motion.div>
              </div>

              <div className="xs:flex-col md:flex text-start">
                <motion.div 
                  className="xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-2xl md:text-3xl glow-text">AI Tools</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Cursor, Blackbox.AI, Gemini, Chat GPT</strong>
                  </p>
                </motion.div>
                <motion.div 
                  className="text-left xs:w-full mb-6 pr-4"
                  variants={categoryVariants}
                >
                  <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    <strong className="text-2xl md:text-3xl glow-text">Soft Skills</strong>
                    <br />
                    <strong className={`text-sm md:text-md lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Creativity, Critical thinking, Responsibility, Problem solving, Communication, Teamwork</strong>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated SVG Ellipses */}
        <div className="w-full flex lg:h-[200px] h-[100px] justify-center items-center">
          <motion.svg 
            aria-hidden="true" 
            className="absolute inset-0 w-full h-full mt-[100px]" 
            fill="none" 
            viewBox="0 0 900 400" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.ellipse 
              cx="450" 
              cy="280" 
              rx="380" 
              ry="80" 
              stroke="#6b46c1" 
              strokeOpacity="0.3" 
              strokeWidth="1"
              animate={{
                strokeOpacity: [0.2, 0.5, 0.2],
                rx: [380, 390, 380]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.ellipse 
              cx="450" 
              cy="280" 
              rx="320" 
              ry="70" 
              stroke="#6b46c1" 
              strokeOpacity="0.3" 
              strokeWidth="1"
              animate={{
                strokeOpacity: [0.3, 0.6, 0.3],
                rx: [320, 330, 320]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.ellipse 
              cx="450" 
              cy="280" 
              rx="260" 
              ry="60" 
              stroke="#6b46c1" 
              strokeOpacity="0.3" 
              strokeWidth="1"
              animate={{
                strokeOpacity: [0.4, 0.7, 0.4],
                rx: [260, 270, 260]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.svg>
        </div>
      </div>
    </motion.section>
  );
} 