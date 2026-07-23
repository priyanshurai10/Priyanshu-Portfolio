'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';

const coursework = [
  'Data Structures & Algorithms (DSA)',
  'Object-Oriented Programming (Java)',
  'Database Management Systems (DBMS)',
  'Operating Systems & Computer Networks',
  'Software Engineering & System Architecture',
  'Artificial Intelligence & Machine Learning',
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-100/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-purple-500/20 text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            Education & Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Solid foundations in Computer Science principles, Software Engineering, and Artificial Intelligence.
          </p>
        </motion.div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-2xl hover:border-purple-500/40 transition-all duration-300"
          >
            {/* Background Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20 shrink-0">
                  <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-indigo-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    Computer Science & Engineering
                  </div>
                  <div className="text-base text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                    Guru Nanak Institute of Technology
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold border border-indigo-500/20">
                  <Calendar className="w-4 h-4" />
                  2022 – 2026
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  Kolkata, West Bengal
                </div>
              </div>
            </div>

            {/* Performance Badge & Description */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 items-center">
              
              <div className="md:col-span-4 bg-gradient-to-br from-indigo-50 via-slate-100 to-purple-50 dark:from-indigo-950/60 dark:via-slate-900/60 dark:to-purple-950/60 p-6 rounded-2xl border border-indigo-500/20 dark:border-indigo-500/30 text-center shadow-lg">
                <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-300 font-bold mb-1">
                  Cumulative Grade Point Average
                </div>
                <div className="text-4xl font-extrabold text-indigo-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-amber-400 dark:via-indigo-300 dark:to-purple-300 my-2">
                  7.8 <span className="text-xl text-slate-500 dark:text-slate-400 font-normal">/ 10</span>
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <Award className="w-3.5 h-3.5" />
                  Consistent Academic Performance
                </div>
              </div>

              <div className="md:col-span-8 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Core Computer Science Subjects & Practical Focus:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
