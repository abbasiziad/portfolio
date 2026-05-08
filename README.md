# Alex Carter — Personal Portfolio

A modern, fully responsive personal portfolio website built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Next.js 15 App Router** with TypeScript
- **Framer Motion** scroll animations, stagger effects, and hover interactions
- **Dark theme** with glassmorphism cards, gradient accents, and noise texture
- **Responsive** — mobile, tablet, and desktop
- **Typing animation** in the hero section
- **Active section highlighting** in the sticky navbar
- **Mobile drawer menu** with smooth animations
- **Skill progress bars** with scroll-triggered animations
- **Project filter** by category
- **Contact form** with simulated submission
- **SEO-friendly** metadata setup
- **Scroll progress bar** and scroll-to-top button
- **Reusable component library** (`SectionWrapper`, `SectionHeader`, `StaggerContainer`)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Main page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mobile drawer
│   │   └── Footer.tsx      # Footer with quick links + socials
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── SectionWrapper.tsx  # Reusable section + animation container
│       ├── ScrollProgress.tsx  # Top progress bar
│       └── ScrollToTop.tsx     # Floating scroll-to-top button
├── data/
│   └── portfolio.ts        # All dummy content (easy to customize)
├── lib/
│   ├── utils.ts            # cn() utility
│   └── hooks.ts            # useActiveSection, useTypingEffect, etc.
├── styles/
│   └── globals.css         # Global styles + CSS variables + utilities
├── public/                 # Static assets (favicon, images, resume)
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 🎨 Customization

All portfolio content lives in **`data/portfolio.ts`**. Edit it to replace:

- `personalInfo` — your name, title, bio, email, social links
- `typingStrings` — the cycling text in the hero
- `stats` — experience stats (years, projects, clients, awards)
- `skillCategories` — your skills and proficiency levels
- `experiences` — your work history
- `services` — services you offer
- `projects` — your portfolio projects
- `blogPosts` — your blog articles

### CSS Variables (Theme)

Design tokens are defined in `styles/globals.css`. Change colors, fonts, and spacing here:

```css
:root {
  --background: #080b14;
  --accent: #4f8eff;
  --gold: #f5c842;
  /* ... */
}
```

### Fonts

Three fonts are loaded from Google Fonts:
- **Syne** (`font-display`) — headings
- **Outfit** (`font-sans`) — body text
- **Fira Code** (`font-mono`) — code/labels

Swap them in `styles/globals.css` and `tailwind.config.ts`.

## 🌐 Deployment on Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! 🎉

### Environment Variables

No environment variables are required for the base portfolio. If you add form submission (e.g., Resend, EmailJS), add them in Vercel's project settings under **Settings → Environment Variables**.

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15 | Framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 11 | Animations |
| Lucide React | latest | Icons |

## 📄 License

MIT — free to use for personal and commercial projects.
