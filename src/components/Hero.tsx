'use client';

import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Instagram, 
  Sparkles, 
  ArrowRight,
  Send
} from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/priyanshurai10', icon: Github, color: 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/priyanshu-rai2114722ab', icon: Linkedin, color: 'hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-500/10' },
  { name: 'Email', href: 'mailto:priyanshurai121111@gmail.com', icon: Mail, color: 'hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/10' },
  { name: 'WhatsApp', href: 'https://wa.me/917541881152', icon: MessageSquare, color: 'hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10' },
  { name: 'Instagram', href: 'https://instagram.com/sanchittrai', icon: Instagram, color: 'hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-500/10' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Natural Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Simple Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-300 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative -ml-4.5" />
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 ml-1" />
              <span>Available for Software Engineer Roles & AI Projects</span>
            </motion.div>

            {/* Headline without "Hi, I'm" */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="gradient-text">
                  Priyanshu Rai
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-3">
                Software Engineer
                <span className="hidden sm:inline-block text-slate-400 font-normal text-lg">•</span>
                <span className="hidden sm:inline-block text-slate-600 dark:text-slate-400 text-base font-medium">Full Stack & AI Developer</span>
              </h2>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              I build AI-powered applications, scalable backend systems, and modern web experiences that solve real-world problems. I enjoy transforming ideas into intelligent, scalable, and user-friendly digital products using modern technologies and AI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FolderGit2 className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Priyanshu_Rai_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-slate-800 dark:text-white font-semibold text-sm sm:text-base hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <FileText className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-slate-800 dark:text-white font-semibold text-sm sm:text-base hover:border-purple-500/60 hover:bg-purple-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <Send className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                Contact Me
              </a>

              <a
                href="https://github.com/priyanshurai10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.05] transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Connect With Me:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-400 transition-all duration-300 ${social.color} hover:scale-110 shadow-sm`}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Avatar Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative group">
              {/* Soft Glowing Pulsing Outer Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-40 dark:opacity-60 blur-lg group-hover:opacity-90 transition-opacity duration-700 animate-pulse-glow" />

              {/* Compact Minimized Frame */}
              <div className="relative animate-float p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/20">
                <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden relative bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-inner">
                  <Image
                    src="/profile.jpg"
                    alt="Priyanshu Rai"
                    fill
                    priority
                    sizes="(max-width: 768px) 176px, 224px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
