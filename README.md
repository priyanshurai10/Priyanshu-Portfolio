# Priyanshu Rai — Personal Portfolio Website 🚀

An award-winning, ultra-premium developer portfolio website built for **Priyanshu Rai** (Software Engineer & AI Developer).

🌐 **Live Website**: [https://priyanshurai-portfolio.vercel.app/](https://priyanshurai-portfolio.vercel.app/)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-priyanshurai--portfolio.vercel.app-emerald?style=for-the-badge&logo=vercel)](https://priyanshurai-portfolio.vercel.app/)
![Next.js 14](https://img.shields.io/badge/Next.js-14.2%20(App%20Router)-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-purple?style=for-the-badge&logo=framer)

---

## ✨ Features & Highlights

- **Live Deployed Link**: [https://priyanshurai-portfolio.vercel.app/](https://priyanshurai-portfolio.vercel.app/)
- **Hero Showcase**:
  - Clean profile avatar with an animated multi-layered glowing aura.
  - Quick action buttons: **View Projects**, **Download Resume**, **Contact Me**, and **GitHub**.
  - Social media shortcuts: GitHub, LinkedIn, Email, WhatsApp, Instagram.

- **Theme System**:
  - **Dark Mode by default** with a smooth **Light Mode toggle**.
  - `localStorage` memory and OS color scheme fallback.
  - Glassmorphic UI cards (`backdrop-blur-md`), ambient cursor glow spotlight, and top scroll progress bar.

- **Sections Included**:
  1. **Hero**: Headline, status badge, role, bio, and quick CTA buttons.
  2. **About Me**: Career objective, CS background, soft skills matrix, and hobbies.
  3. **Education**: B.Tech in Computer Science & Engineering, Guru Nanak Institute of Technology (CGPA: 7.8, 2022–2026).
  4. **Technical Skills**: Categorized progress grid (Languages, Core CS, Frontend, Backend & DB, AI & Agentic Systems, Tools & Analytics).
  5. **Featured Projects**: Interactive cards + detailed **Case Study Drawers**:
     - **Nyaya AI** (*Multilingual AI Legal Consultation Platform*) — [Live Demo](https://nyaya-ai-website.vercel.app/)
     - **AI Farmer Assistance Platform (Krishi Dost AI)** (*Smart Agriculture Guidance System*) — [Live Demo](https://krishi-dost-ai.vercel.app/)
     - **Mental Health Support System** (*Python / Flask / MySQL REST API*)
  6. **Contact**: Interactive form with live validation, toast notification, celebratory confetti trigger, and 1-click copy buttons for email and phone.
  7. **Call To Action & Footer**: Direct WhatsApp shortcut, back-to-top trigger, and 2026 copyright.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14.2](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with Glassmorphism & Custom CSS Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Document Generation**: Custom PDF Resume generation engine

---

## 📁 Project Structure

```text
├── public/
│   ├── profile.jpg          # Profile photo
│   ├── profile.png          # High-resolution avatar fallback
│   ├── resume.pdf           # 1-click downloadable 2-page PDF resume
│   └── Priyanshu_Rai_Resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css      # CSS variables, glassmorphism tokens, keyframe animations
│   │   ├── layout.tsx       # Root layout, SEO metadata, theme hydration script
│   │   ├── not-found.tsx    # Custom 404 fallback page
│   │   └── page.tsx         # Main single-page scroll portfolio container
│   └── components/
│       ├── Navbar.tsx       # Glassmorphism navbar with theme switcher & mobile drawer
│       ├── Hero.tsx         # Compact avatar hero section & quick actions
│       ├── About.tsx        # Bio, soft skills, and hobbies grid
│       ├── Education.tsx    # Academic degree breakdown (B.Tech CSE - GNIT)
│       ├── Skills.tsx       # Categorized skill cards with filter tabs
│       ├── Projects.tsx     # Project cards with live demo links
│       ├── ProjectModal.tsx # Case study modal window
│       ├── Contact.tsx      # Contact form, copy buttons & confetti trigger
│       ├── CTA.tsx          # Call-to-action banner
│       ├── Footer.tsx       # Footer links & copyright
│       ├── CursorGlow.tsx   # Mouse spotlight tracking effect
│       ├── ScrollProgress.tsx# Top scroll progress bar
│       └── ThemeToggle.tsx  # Smooth Dark/Light theme switcher
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/priyanshurai10/priyanshu-portfolio.git
   cd priyanshu-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## ☁️ Deployment on Vercel

This Next.js portfolio is live at **[https://priyanshurai-portfolio.vercel.app/](https://priyanshurai-portfolio.vercel.app/)** and is deployed automatically on every push to GitHub!

---

## 📬 Contact & Connect

- **Portfolio**: [https://priyanshurai-portfolio.vercel.app/](https://priyanshurai-portfolio.vercel.app/)
- **Email**: [priyanshurai121111@gmail.com](mailto:priyanshurai121111@gmail.com)
- **Phone / WhatsApp**: [+91 7541881152](https://wa.me/917541881152)
- **GitHub**: [github.com/priyanshurai10](https://github.com/priyanshurai10)
- **LinkedIn**: [linkedin.com/in/priyanshu-rai-2114722ab](https://linkedin.com/in/priyanshu-rai2114722ab)
- **Location**: Bhabua, Bihar, India

---

© 2026 Priyanshu Rai. Designed & Developed with ❤️ by Priyanshu Rai.
