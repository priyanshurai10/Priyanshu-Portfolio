import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Skills & Technologies Section */}
      <Skills />

      {/* Featured Projects Showcase */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Call To Action Banner */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
