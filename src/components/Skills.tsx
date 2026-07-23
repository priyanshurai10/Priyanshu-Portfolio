'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Layout, 
  Terminal, 
  Sparkles,
  Layers,
  BarChart3
} from 'lucide-react';

type SkillCategory = {
  id: string;
  title: string;
  icon: any;
  description: string;
  skills: { name: string; level: number; tag?: string }[];
};

const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code2,
    description: 'Object-oriented & functional language foundations',
    skills: [
      { name: 'Java', level: 88, tag: 'OOP & Data Structures' },
      { name: 'Python', level: 90, tag: 'AI/ML & Backend' },
      { name: 'JavaScript', level: 85, tag: 'ES6+ & Async JS' },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core CS & Data Structures',
    icon: Terminal,
    description: 'Computer science algorithms & software engineering fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', level: 88, tag: 'Problem Solving & Logic' },
      { name: 'API Integration', level: 92, tag: 'REST Architectures' },
      { name: 'System Architecture', level: 84, tag: 'Modular Design' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    description: 'Modern, responsive user interfaces & web architecture',
    skills: [
      { name: 'HTML5', level: 92, tag: 'Semantic Layout' },
      { name: 'CSS3', level: 88, tag: 'Responsive Design & Flex/Grid' },
      { name: 'JavaScript', level: 85, tag: 'DOM Manipulation & SPA' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    description: 'High-performance microservices, RESTful interfaces & databases',
    skills: [
      { name: 'Node.js', level: 85, tag: 'Event-driven Architecture' },
      { name: 'FastAPI', level: 88, tag: 'Python Async APIs' },
      { name: 'Database Management', level: 90, tag: 'MySQL, PostgreSQL, Supabase' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Cloud Storage',
    icon: Database,
    description: 'Relational data modeling, querying & cloud backend suites',
    skills: [
      { name: 'MySQL', level: 86, tag: 'Relational Schema & Queries' },
      { name: 'PostgreSQL', level: 88, tag: 'Production Database' },
      { name: 'Supabase', level: 84, tag: 'Realtime Backend & Auth' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: BrainCircuit,
    description: 'Intelligent agent integration, ML workflows & prompt engineering',
    skills: [
      { name: 'Machine Learning', level: 82, tag: 'Supervised Models & Logic' },
      { name: 'AI Agentic Systems', level: 88, tag: 'Autonomous Workflows' },
      { name: 'Prompt Engineering', level: 92, tag: 'LLM Optimization' },
      { name: 'AI Tool Integration', level: 90, tag: 'API Pipelines & Automation' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    description: 'Version control, environment management & developer tooling',
    skills: [
      { name: 'VS Code', level: 95, tag: 'Primary IDE' },
      { name: 'Git & GitHub', level: 90, tag: 'Version Control & CI/CD' },
      { name: 'Linux', level: 80, tag: 'CLI & Shell Commands' },
      { name: 'Chrome DevTools', level: 88, tag: 'Debugging & Performance' },
    ],
  },
  {
    id: 'analytics',
    title: 'MS Office & Analytics',
    icon: BarChart3,
    description: 'Data analytics, documentation & business presentation',
    skills: [
      { name: 'Power BI', level: 82, tag: 'Data Visualization' },
      { name: 'MS Excel', level: 88, tag: 'Data Processing' },
      { name: 'MS Word & PowerPoint', level: 90, tag: 'Technical Documentation' },
    ],
  },
];

const filterTabs = [
  { id: 'all', label: 'All Skills', icon: Layers },
  { id: 'programming', label: 'Languages & Core CS', icon: Code2 },
  { id: 'backend', label: 'Backend & DB', icon: Server },
  { id: 'ai', label: 'Artificial Intelligence', icon: BrainCircuit },
  { id: 'tools', label: 'Tools & Analytics', icon: Wrench },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => {
        if (activeTab === 'programming') return cat.id === 'programming' || cat.id === 'core-cs' || cat.id === 'frontend';
        if (activeTab === 'backend') return cat.id === 'backend' || cat.id === 'database';
        if (activeTab === 'tools') return cat.id === 'tools' || cat.id === 'analytics';
        return cat.id === activeTab;
      });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            <BrainCircuit className="w-4 h-4" />
            Technical Skills & Tools
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Technologies, frameworks, and developer tools I leverage to build production-grade web systems and AI applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'glass-card text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={category.id}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                        <CategoryIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800/50">
                        {category.skills.length} Stack Items
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                      {category.description}
                    </p>

                    <div className="space-y-4">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                              <Sparkles className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                              {skill.name}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 font-normal">{skill.tag}</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800/60 overflow-hidden p-0.5 border border-slate-300/40 dark:border-slate-700/30">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Proficient & Practical</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Verified Resume Skills</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
