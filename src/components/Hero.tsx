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
  Send,
  Code,
  Terminal,
  Cpu
} from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/priyanshurai10', icon: Github, color: 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/priyanshu-rai2114722ab', icon: Linkedin, color: 'hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-500/10' },
  { name: 'Email', href: 'mailto:priyanshurai121111@gmail.com', icon: Mail, color: 'hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/10' },
  { name: 'WhatsApp', href: 'https://wa.me/917541881152', icon: MessageSquare, color: 'hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10' },
  { name: 'Instagram', href: 'https://instagram.com/sanchittrai', icon: Instagram, color: 'hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-500/10' },
];

// Floating particles for background visual dynamism
const floatingItems = [
  { icon: Code, top: '15%', left: '10%', delay: 0, duration: 7 },
  { icon: Terminal, top: '65%', left: '5%', delay: 1, duration: 9 },
  { icon: Cpu, top: '25%', right: '12%', delay: 2, duration: 8 },
  { icon: Sparkles, top: '75%', right: '8%', delay: 0.5, duration: 6 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Animated Background Mesh Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 45, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/15 blur-[130px] rounded-full pointer-events-none -z-10" 
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none -z-10" 
      />

      {/* Floating Background Icons */}
      {floatingItems.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={idx}
            style={{ top: item.top, left: item.left, right: item.right }}
            animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
            className="absolute hidden md:block text-indigo-500/20 dark:text-indigo-400/20 pointer-events-none -z-10"
          >
            <IconComponent className="w-8 h-8" />
          </motion.div>
        );
      })}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Animated Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Animated Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-300 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative -ml-4.5" />
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 ml-1" />
              <span>Available for Software Engineer Roles & AI Projects</span>
            </motion.div>

            {/* Hero Headline with Animated Gradient */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I&apos;m{' '}
                <span className="gradient-text bg-300% animate-gradient-x">
                  Priyanshu Rai
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-3">
                Software Engineer
                <span className="hidden sm:inline-block text-slate-400 font-normal text-lg">•</span>
                <span className="hidden sm:inline-block text-slate-600 dark:text-slate-400 text-base font-medium">Full Stack & AI Developer</span>
              </h2>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              I build AI-powered applications, scalable backend systems, and modern web experiences that solve real-world problems. I enjoy transforming ideas into intelligent, scalable, and user-friendly digital products using modern technologies and AI.
            </motion.p>

            {/* Action Buttons with Magnetic Spring Hover Animations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <FolderGit2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Priyanshu_Rai_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-slate-800 dark:text-white font-semibold text-sm sm:text-base hover:border-indigo-500/60 hover:bg-indigo-500/10 transition-all duration-300 shadow-sm"
              >
                <FileText className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-slate-800 dark:text-white font-semibold text-sm sm:text-base hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300 shadow-sm"
              >
                <Send className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                Contact Me
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/priyanshurai10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Connect With Me:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-400 transition-all duration-300 ${social.color} shadow-sm`}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Avatar Frame with Interactive Pulsing Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative group cursor-pointer">
              {/* Animated Rotating Gradient Aura */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-50 dark:opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-700" 
              />

              {/* Compact Minimized Frame */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/30"
              >
                <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden relative bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-inner">
                  <Image
                    src="/profile.jpg"
                    alt="Priyanshu Rai"
                    fill
                    priority
                    sizes="(max-width: 768px) 176px, 224px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
