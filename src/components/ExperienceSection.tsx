'use client';

import { motion } from "framer-motion";

export default function ExperienceSection() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      id="expertise"
      className="bg-gradient-to-b relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Custom CSS for timeline glow effects */}
      <style jsx>{`
        .timeline-line {
          position: relative;
          background: linear-gradient(180deg, var(--accent-color), transparent);
          box-shadow: 0 0 20px rgba(123, 104, 238, 0.5);
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }

        .timeline-dot {
          position: relative;
        }

        .timeline-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          box-shadow: 
            0 0 20px rgba(123, 104, 238, 0.8),
            0 0 40px rgba(123, 104, 238, 0.4);
          animation: dot-glow 2s ease-in-out infinite alternate;
        }

        .timeline-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          z-index: 2;
        }

        @keyframes pulse-glow {
          0% { box-shadow: 0 0 20px rgba(123, 104, 238, 0.5); }
          100% { box-shadow: 0 0 30px rgba(123, 104, 238, 0.8); }
        }

        @keyframes dot-glow {
          0% { 
            box-shadow: 
              0 0 20px rgba(123, 104, 238, 0.8),
              0 0 40px rgba(123, 104, 238, 0.4);
          }
          100% { 
            box-shadow: 
              0 0 30px rgba(123, 104, 238, 1),
              0 0 60px rgba(123, 104, 238, 0.6);
          }
        }

        .experience-card {
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 0 30px rgba(123, 104, 238, 0.2);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8" 
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="flex flex-row items-start">
          {/* Timeline with Glow Effects */}
          <motion.div 
            className="hidden md:flex relative flex-col items-center mr-10" 
            style={{ minWidth: 230 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Year 1 */}
            <div className="flex flex-col items-center">
              <div className="timeline-line w-1 h-20"></div>
              <motion.div 
                className="timeline-dot w-4 h-4 rounded-full mt-2 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.div>
              <motion.span 
                className="text-2xl font-medium mt-2 mb-2" 
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Mar 2022 - Dec 2022
              </motion.span>
            </div>
            
            <div className="timeline-line w-1 h-[200px]"></div>
            
            {/* Year 2 */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="timeline-dot w-4 h-4 rounded-full mt-2 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.div>
              <motion.span 
                className="text-2xl font-medium mt-2 mb-2" 
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Feb 2023 - Present
              </motion.span>
            </div>
          </motion.div>

          {/* Experience Cards */}
          <div className="flex flex-col gap-24 w-full">
            
            {/* Card 1 - Vertobase */}
            <motion.div
              className="experience-card rounded-xl p-6 shadow-md max-w-6xl"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              animate={floatingAnimation}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl md:hidden">March 2022 - December 2022</h3>
                <motion.h3 
                  className="text-2xl font-semibold mb-2 drop-shadow-md" 
                  style={{ color: 'var(--accent-color)' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Vertobase Co., Ltd.
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <strong>Role:</strong> Front-end Developer
                </motion.p>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li 
                    variants={itemVariants}
                    className="text-sm mb-1" 
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Write code front-end from design use React and NextJS
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="text-sm mb-1" 
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Write code Flutter from design detail write process pin login mobile and view page other
                  </motion.li>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Card 2 - iApp Technology */}
            <motion.div
              className="experience-card rounded-xl p-8 shadow-md max-w-6xl"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-2xl md:hidden">Feb 2023 - Present</h3>
                <motion.h3 
                  className="text-2xl font-semibold mb-2 drop-shadow-md" 
                  style={{ color: 'var(--accent-color)' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  iApp Technology
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <strong>Role:</strong> Full Stack Developer
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Created an API for sending data using JavaScript, PostgreSQL, and Express, leveraging backend development skills in JavaScript, SQL, and Express.js.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Developed an API for fetching data from the web using JavaScript, PostgreSQL, Puppeteer and Express, utilizing knowledge of RESTful API design and SQL queries.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Built an API for retrieving data from the Kibana database, integrating database management and data analytics tools.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Edited the API to send data to the homepage using React, JavaScript, PostgreSQL, and Express, combining frontend-backend integration with ReactJS and SQL.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Created a process to run commands in Jenkins for data extraction using Jenkins and Docker, applying CI/CD automation practices.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Edited the web front-end view for MA and fixed bugs using React, Next.js, JavaScript, and TypeScript, with UI improvements via NextUI, TailwindCSS, and Bootstrap.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Migrated Flutter code from mobile to web using Next.js and TypeScript, enhancing cross-platform development experience.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Wrote unit tests for the API and applied clean code principles using Jest, Postman, and Git version control.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Built the application as an Electron app for macOS and Windows, expanding deployment knowledge across desktop platforms.
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Designed a data extraction flow using draw.io (Diagrams.net)
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Wrote Python logic for checking MA, integrating Python scripting with backend processes.
                  </motion.li>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 