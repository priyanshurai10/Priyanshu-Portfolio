'use client';

import { ArrowUp, Github, Linkedin, Mail, MessageSquare, Instagram, Heart } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/priyanshurai10', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/priyanshu-rai2114722ab', icon: Linkedin },
  { name: 'Email', href: 'mailto:priyanshurai121111@gmail.com', icon: Mail },
  { name: 'WhatsApp', href: 'https://wa.me/917541881152', icon: MessageSquare },
  { name: 'Instagram', href: 'https://instagram.com/sanchittrai', icon: Instagram },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/90 text-slate-600 dark:text-slate-400 py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-200 dark:border-slate-800/60">
          
          {/* Brand & Subtitle */}
          <div className="md:col-span-5 space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              Priyanshu Rai
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                Software Engineer
              </span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              Building AI-powered applications, scalable backend systems, and modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex items-center gap-4 flex-wrap">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500 transition-all duration-300 group shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Priyanshu Rai. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Designed & Developed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>by Priyanshu Rai</span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/60 dark:hover:bg-slate-900 transition-colors"
                  title={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}
