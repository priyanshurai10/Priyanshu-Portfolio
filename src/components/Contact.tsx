'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  Send,
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const contactInfo = [
  {
    title: 'Email',
    value: 'priyanshurai121111@gmail.com',
    href: 'mailto:priyanshurai121111@gmail.com',
    icon: Mail,
    action: 'email',
    color: 'from-red-500/20 to-pink-500/20 text-red-600 dark:text-red-400',
  },
  {
    title: 'Phone & WhatsApp',
    value: '+91 7541881152',
    href: 'https://wa.me/917541881152',
    icon: Phone,
    action: 'phone',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Location',
    value: 'Bhabua, Bihar, India',
    href: 'https://maps.google.com/?q=Bhabua,Bihar,India',
    icon: MapPin,
    action: 'location',
    color: 'from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400',
  },
];

const socialProfiles = [
  { name: 'GitHub', href: 'https://github.com/priyanshurai10', icon: Github, label: '@priyanshurai10' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/priyanshu-rai2114722ab', icon: Linkedin, label: 'Priyanshu Rai' },
  { name: 'WhatsApp', href: 'https://wa.me/917541881152', icon: MessageSquare, label: '+91 7541881152' },
  { name: 'Instagram', href: 'https://instagram.com/sanchittrai', icon: Instagram, label: '@sanchittrai' },
];

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      setFormData({ name: '', email: '', message: '', subject: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project idea, software opportunity, or collaboration in mind? Reach out anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg flex items-center justify-between group hover:border-indigo-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                          {info.title}
                        </div>
                        <a
                          href={info.href}
                          target={info.action === 'location' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>

                    {(info.action === 'email' || info.action === 'phone') && (
                      <button
                        onClick={() => handleCopy(info.value, info.action)}
                        className="p-2.5 rounded-xl glass-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedField === info.action ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Channels Box */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                Connect Across Platforms
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialProfiles.map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group"
                    >
                      <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-200">{social.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{social.label}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below and I will respond to your message promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Thank you! Your message has been prepared. I will get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Priyanshu Rai"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Priyanshu, I'd like to discuss a project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm resize-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
