'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import ProjectModal, { ProjectType } from './ProjectModal';

const projectsList: ProjectType[] = [
  {
    id: 'nyaya-ai',
    title: 'Nyaya AI',
    subtitle: 'Multilingual AI Legal Consultation Platform',
    category: 'Full Stack & AI',
    description:
      'A full-stack AI-powered legal consultation platform that enables users to interact with an intelligent legal assistant, upload legal documents, request consultations, manage appointments, and securely track payment status.',
    features: [
      'Multilingual AI Legal Assistant',
      'Secure User Authentication & Roles',
      'JWT Authorization System',
      'Comprehensive Admin Dashboard',
      'Document Upload & Parsing',
      'Real-time Payment Status Tracking',
      'Brevo SMTP Automated Email Alerts',
      'PostgreSQL & Supabase Cloud Storage'
    ],
    techStack: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'JWT', 'Brevo SMTP', 'Tailwind CSS'],
    liveUrl: 'https://nyaya-ai-website.vercel.app/',
    githubUrl: 'https://github.com/priyanshurai10/nyaya-ai',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    architectureDetails: [
      'Designed end-to-end full-stack legal consultation architecture with decoupled Next.js frontend & FastAPI backend.',
      'Implemented secure JWT-based access controls for multi-role user & administrator authentication workflows.',
      'Integrated real-time database models on Supabase/PostgreSQL for tracking legal appointments & consultation statuses.',
      'Configured automated email notification pipelines using Brevo SMTP for consultation status updates and payment receipts.'
    ],
  },
  {
    id: 'ai-farmer',
    title: 'AI Farmer Assistance Platform',
    subtitle: 'Smart Agriculture Guidance System (Krishi Dost AI)',
    category: 'AI & Web Solutions',
    description:
      'An AI-powered platform designed to help farmers access agriculture-related guidance, crop health insights, and environmental advice through a simplified, accessible user interface.',
    features: [
      'AI Agriculture Guidance Engine',
      'Smart Farmer Information Hub',
      'Scalable & Light-weight Architecture',
      'Weather-Ready Interface Design',
      'Future Crop Recommendation Modules'
    ],
    techStack: ['Python', 'AI Agents', 'JavaScript', 'FastAPI', 'HTML5/CSS3', 'REST APIs'],
    liveUrl: 'https://krishi-dost-ai.vercel.app/',
    githubUrl: 'https://github.com/priyanshurai10',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    architectureDetails: [
      'Architected user-friendly interface optimized for low-bandwidth rural mobile connectivity and fast response times.',
      'Integrated intelligent AI guidance module delivering practical advice on farming, soil care, and pest prevention.',
      'Structured modular frontend-backend API integration to support upcoming real-time weather alerts & crop disease vision analysis.'
    ],
  },
  {
    id: 'mental-health',
    title: 'Mental Health Support System',
    subtitle: 'Web-Based Awareness & REST API Platform',
    category: 'Backend & Web',
    description:
      'A web-based platform focused on mental health awareness and support with secure backend architecture, structured database management, and REST API integration.',
    features: [
      'Secure Python Flask Backend',
      'MySQL Relational Database Integration',
      'RESTful API Endpoint Communication',
      'Resource & Support Consultation Portal',
      'Rigorous Testing & Debugging Workflow'
    ],
    techStack: ['Python', 'Flask', 'MySQL', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/priyanshurai10',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    architectureDetails: [
      'Engineered complete Python Flask REST backend connecting secure MySQL schemas for user data management.',
      'Implemented clean API request/response validation routines to ensure operational reliability and privacy.',
      'Collaborated closely on application debugging, modular unit testing, and maintainable project documentation.'
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            Featured Engineering Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world applications built with modern AI models, robust backend architectures, and production-ready code.
          </p>
        </motion.div>

        {/* Projects Cards Grid with Motion Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Card Top Accent Header */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live Deployed
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <motion.span
                        whileHover={{ scale: 1.08 }}
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-2">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:from-indigo-500 hover:to-purple-500 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl glass-card border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-white hover:bg-indigo-500/10 font-semibold text-xs sm:text-sm transition-all duration-200"
                  >
                    Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
