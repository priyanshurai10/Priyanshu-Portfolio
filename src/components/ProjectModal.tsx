'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, Layers } from 'lucide-react';

export type ProjectType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  gradient: string;
  architectureDetails: string[];
};

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border border-slate-300 dark:border-slate-700/60 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col justify-between"
        >
          {/* Header Banner */}
          <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-700/40">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5" />
                Case Study Breakdown
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full glass-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="py-6 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Description */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
                Project Overview
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Engineering Architecture & Workflow
              </h4>
              <div className="space-y-2.5">
                {project.architectureDetails.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Grid */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                Key Platform Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2.5">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Website
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 text-sm font-semibold"
              >
                <Github className="w-4 h-4" />
                GitHub Code
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
