'use client';

import { motion } from "framer-motion";

interface WorkProjectCardProps {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: string;
  delay?: number;
  colorScheme?: 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'indigo' | 'orange';
  demoUrl?: string;
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

export default function WorkProjectCard({
  title,
  role,
  description,
  technologies,
  features,
  icon,
  delay = 0,
  colorScheme = 'blue',
  demoUrl
}: WorkProjectCardProps) {
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
      <div className="p-6 xl:p-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
            style={{ backgroundColor: 'var(--accent-color)' }}>
            <span className="text-2xl">{icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {role}
            </p>
          </div>
        </div>

        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className={`px-2 py-1 rounded-lg text-xs ${colorSchemes[colorScheme]}`}>
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 mr-3"></span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
        {demoUrl && (
          <div className="mt-6">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-white py-2 px-10 rounded-xl text-center text-sm font-medium transition-colors"
              style={{ backgroundColor: 'var(--accent-color)' }}
            >
              🚀 Website Link ACT AI
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
} 