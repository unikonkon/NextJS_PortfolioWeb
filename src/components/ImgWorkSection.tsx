'use client';

import '../app/css/ImgWorkSection.css';
import { motion } from "framer-motion";
import Image from "next/image";

const ImgWorkSection = () => {

    const workImages = [
        {
            src: '/profile1.jpg',
            title: 'Development Environment',
            description: 'Professional coding workspace with multiple monitors and modern development tools'
        },
        {
            src: '/profile5.png',
            title: 'Multi-Monitor Setup',
            description: 'Efficient workflow with multiple screens for enhanced productivity'
        },
        {
            src: '/profile2.jpg',
            title: 'Team Collaboration',
            description: 'Working closely with team members in a modern office environment'
        },
        {
            src: '/profile3.png',
            title: 'Interactive Prototyping',
            description: 'Testing and prototyping with tactile interfaces and hardware integration'
        },
        {
            src: '/profile4.png',
            title: 'Code Development',
            description: 'Deep focus coding sessions with ChatGPT assistance and modern development tools'
        },
        {
            src: '/profile6.png',
            title: 'Research & Development',
            description: 'Continuous learning and exploring new technologies in a professional setting'
        }
    ];

    return (
        <motion.section id="work-gallery" className="work-gallery-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.07 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
                background: `linear-gradient(to bottom, var(--primary-bg), var(--secondary-bg))`
            }}
        >
            {/* Neural Network Background */}
            <div className="neural-network">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className={`neural-node node-${i}`}>
                        <div className="node-pulse"></div>
                    </div>
                ))}
                {[...Array(100)].map((_, i) => (
                    <div key={i} className={`neural-connection connection-${i}`}></div>
                ))}
            </div>

            {/* Parallax Planets */}
            <div className="parallax-planets">
                <div className="planet planet-1">
                    <div className="planet-ring ring-1"></div>
                    <div className="planet-ring ring-2"></div>
                </div>
                <div className="planet planet-2">
                    <div className="planet-glow"></div>
                </div>
                <div className="planet planet-3">
                    <div className="planet-surface"></div>
                    <div className="planet-atmosphere"></div>
                </div>
            </div>

            {/* Orbital Elements */}
            <div className="orbital-system">
                <div className="orbit orbit-1">
                    <div className="orbital-element element-1"></div>
                </div>
                <div className="orbit orbit-2">
                    <div className="orbital-element element-2"></div>
                </div>
                <div className="orbit orbit-3">
                    <div className="orbital-element element-3"></div>
                </div>
            </div>

            <div className="container">
                {/* Glitch Title */}
                <div className="section-header">
                    <h2 className="glitch-title" data-text="Work Environment Gallery">
                        Work Environment Gallery
                    </h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>
                        Behind the scenes of development and collaboration
                    </p>
                </div>

                {/* Glass Cards Grid */}
                <div className="work-grid">
                    {workImages.map((image, index) => (
                        <div
                            key={index}
                            className="image-container"
                        >
                            <div className="card-glow"></div>
                            <div className="card-border"></div>

                            <div className="image-container">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    className="work-image"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">{image.title}</h3>
                                        <p className="image-description">{image.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Holographic Effects */}
                            <div className="holographic-layer"></div>
                            <div className="scan-lines"></div>
                        </div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
};

export default ImgWorkSection;