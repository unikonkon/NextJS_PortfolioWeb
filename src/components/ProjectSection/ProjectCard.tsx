'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  delay?: number;
  colorScheme?: 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'indigo' | 'orange';
}

const colorSchemes = {
  blue: 'bg-blue-500/20 text-blue-300',
  yellow: 'bg-yellow-500/20 text-yellow-300',
  red: 'bg-red-500/20 text-red-300',
  green: 'bg-green-500/20 text-green-300',
  purple: 'bg-purple-500/20 text-purple-300',
  indigo: 'bg-indigo-500/20 text-indigo-300',
  orange: 'bg-orange-500/20 text-orange-300'
};

export default function ProjectCard({
  title,
  role,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  featured = false,
  delay = 0,
  colorScheme = 'blue'
}: ProjectCardProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ 
        backgroundColor: 'var(--card-bg)',
        border: `1px solid var(--border-color)`
      }}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Project Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                ✨ Featured
              </span>
            </div>
          )}
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors" 
            style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          <strong>Role:</strong> {role}
        </p>
        <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className={`px-2 py-1 rounded-lg text-xs ${colorSchemes[colorScheme]}`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-xl text-center text-sm font-medium transition-colors"
            >
              📁 Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-white py-2 px-4 rounded-xl text-center text-sm font-medium transition-colors"
              style={{ backgroundColor: 'var(--accent-color)' }}
            >
              🚀 Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 