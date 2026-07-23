'use client';

import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Download, ArrowRight, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTA() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-14 glass-card border border-indigo-500/40 shadow-2xl text-center space-y-8"
        >
          {/* Animated Background Gradients */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full pointer-events-none animate-pulse-glow" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            Open For Software Engineering Roles & Projects
          </div>

          {/* Main Callout */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">
              Amazing Together.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new opportunities, innovative ideas, freelance projects, collaborations, or full-time software engineering roles.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              onClick={triggerConfetti}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-base shadow-xl shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="/resume.pdf"
              download="Priyanshu_Rai_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card text-slate-800 dark:text-white font-bold text-base hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            >
              <Download className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Download Resume
            </a>

            <a
              href="https://wa.me/917541881152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl glass-card text-emerald-600 dark:text-emerald-400 font-semibold text-base hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Me
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
