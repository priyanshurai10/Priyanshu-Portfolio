'use client';

import { motion } from 'framer-motion';
import { User, Cpu, Code, Rocket, Award, CheckCircle2, GraduationCap, Heart, Brain, Lightbulb } from 'lucide-react';

const stats = [
  { label: 'Degree', value: 'B.Tech CSE', sub: 'Guru Nanak Inst. of Tech' },
  { label: 'CGPA', value: '7.8', sub: 'Academic Excellence' },
  { label: 'Core Focus', value: 'AI & Backend', sub: 'Scalable Systems' },
  { label: 'Location', value: 'Bhabua, India', sub: 'Open to Remote/Relocation' },
];

const highlights = [
  'Full Stack AI Application Engineering',
  'Scalable Backend REST & Microservice APIs',
  'Database Design (MySQL, PostgreSQL, Supabase)',
  'Data Structures & Algorithms (DSA)',
];

const hobbies = [
  'Learning New Technologies',
  'Travelling & Exploring',
  'Solving Logical Problems',
  'Watching Thriller & Suspense Movies',
  'AI Tools & Applications',
  'Database Technologies',
];

const softSkills = [
  'Teamwork & Communication',
  'Problem Solving & Logic',
  'Analytical Thinking',
  'Quick Learning Ability',
  'Adaptability',
  'Client-Focused Thinking',
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">Priyanshu Rai</span>
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Software Engineer & AI Developer
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I build AI-powered applications, scalable backend systems, and modern web experiences that solve real-world problems.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Main Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Career Objective & Background
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I am <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Priyanshu Rai</strong>, a Computer Science and Engineering graduate (B.Tech, 2026) with hands-on experience in web development, AI, and backend systems.
                </p>
                <p>
                  I enjoy building clean, easy-to-use interfaces with HTML, CSS, and JavaScript, and connecting them to working backends using APIs, databases, and frameworks like Next.js and FastAPI. I have built and deployed real production projects, including an AI-based legal consultation platform (<strong className="text-indigo-500">Nyaya AI</strong>) and a farmer assistance tool (<strong className="text-emerald-500">Krishi Dost AI</strong>).
                </p>
                <p>
                  Looking for a software developer role where I can keep learning, solve real problems, and grow as an engineer.
                </p>
              </div>

              {/* Key Bullet Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg flex flex-col justify-between group hover:border-indigo-500/40"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  {index === 0 ? (
                    <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  ) : index === 1 ? (
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  ) : index === 2 ? (
                    <Cpu className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  ) : (
                    <Rocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Soft Skills & Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg"
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
              <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Soft Skills & Mindset
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {softSkills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg"
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              Hobbies & Interests
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hobbies.map((hobby, hIdx) => (
                <div key={hIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  <span>{hobby}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
