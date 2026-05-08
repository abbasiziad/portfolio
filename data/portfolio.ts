// data/portfolio.ts

export const personalInfo = {
  name: "Ziad Abbasi",
  title: "Web Developer",
  tagline: "Building digital experiences that matter",
  email: "ziadabbasi333@gmail.com",
  phone: "+92 342 094 2359",
  address: "Gulbgerg Green Islamabad, Pakistan",
  avatar: "https://lh3.googleusercontent.com/d/1PrJ6nvecN4VQWTzEp78FJOA2Qt0jOXA2",
  avatar2: "https://lh3.googleusercontent.com/d/1KV2poI6RZif1lKZndd5t1m5OE0uZqsFt",
  bio: "I'm a passionate Web developer with 5+ years of experience crafting performant, scalable web applications. I specialize in Wordpress and React ecosystems, PH backends, and modern CMS solutions. I love turning complex problems into elegant, user-friendly experiences.",
  bioShort: "Full-stack developer specializing in React, Next.js, and Fullstack Wordpress. I build fast, scalable digital products with clean code and intuitive UIs.",
  resumeUrl: "https://drive.google.com/file/d/1L9bpBqc9W0FlWTsp0v6dy9j3HVh4VFiR/view?usp=sharing",
  availability: "Available for freelance",
  socials: {
    github: "https://github.com/abbasiziad/",
    linkedin: "https://www.linkedin.com/in/ziad-abbasi-0b1900220/",
    twitter: "https://x.com/ziadabbasi333",
  },
};

export const typingStrings = [
  "Full-Stack Developer",
  "React Specialist",
  "Next.js Expert",
  "WordPress Developer",
  "UI/UX Enthusiast",
  "WooCommerce Expert",
];

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "15+", label: "Awards Won" },
];

export const skillCategories = [
  {
    name: "Frontend",
    icon: "Monitor",
    color: "#4f8eff",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    color: "#a78bfa",
    skills: [
      { name: "PHP", level: 88 },
      { name: "MySQL", level: 82 }
    ],
  },
  {
    name: "CMS",
    icon: "Layout",
    color: "#f5c842",
    skills: [
      { name: "WordPress", level: 95 },
      { name: "Strapi", level: 78 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "Wrench",
    color: "#34d399",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "AWS / Vercel", level: 82 },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "WEB DEVELOPER",
    company: "Now Software",
    companyUrl: "https://now.net.pk/",
    duration: "Jan 2026 – Present",
    location: "Islamabad, Pakistan",
    description:
      "Leading frontend architecture for a SaaS platform serving 500k+ users. Built component libraries, optimized Core Web Vitals by 40%, and mentored a team of 4 junior developers. Spearheaded migration from CRA to Next.js App Router.",
    tags: ["Next.js", "TypeScript", "AWS", "WordPress"],
    type: "current",
  },
  {
    id: 2,
    role: "Web Developer Wordpress and React",
    company: "Ikonic Solution",
    companyUrl: "https://ikonicsolution.com/",
    duration: "Mar 2022 – May 2024",
    location: "Islamabad, Pakistan",
    description:
      "Developed and maintained 30+ client websites and e-commerce stores. Implemented custom WordPress themes and WooCommerce extensions. Reduced average page load by 2.3s across all projects through aggressive performance optimization.",
    tags: ["React", "WordPress", "WooCommerce", "SCSS", "PHP"],
    type: "past",
  },
  {
    id: 3,
    role: "WordPress & Plugin Developer",
    company: "United Sol",
    companyUrl: "https://www.unitedsol.net/",
    duration: "Aug 2020 – Apr 2022",
    location: "Islamabad, Pakistan",
    description:
      "Built bespoke WordPress plugins for enterprise clients, integrating CRM systems, payment gateways, and third-party APIs. Established coding standards that improved team delivery speed by 25%.",
    tags: ["PHP", "WordPress", "MySQL", "REST API", "JavaScript"],
    type: "past",
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "Globe",
    description:
      "End-to-end web applications built with modern frameworks like Next.js, React, and TypeScript. Performant, scalable, and SEO-optimized.",
    features: ["Next.js & React", "REST / GraphQL APIs", "Performance Optimization", "SEO & Accessibility"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    accentColor: "#4f8eff",
  },
  {
    id: 2,
    title: "WordPress Development",
    icon: "FileCode",
    description:
      "Custom WordPress themes and sites tailored to your brand. Fast-loading, mobile-first, and easy for you to manage.",
    features: ["Custom Themes", "WooCommerce", "Performance Tuning", "Security Hardening"],
    gradient: "from-purple-500/20 to-violet-500/20",
    accentColor: "#a78bfa",
  },
  {
    id: 3,
    title: "Plugin Development",
    icon: "Plug",
    description:
      "Bespoke WordPress and React plugins that extend your platform's functionality without bloat. Clean, well-documented code.",
    features: ["Custom Plugins", "API Integrations", "Payment Gateways", "CRM Connectors"],
    gradient: "from-yellow-500/20 to-amber-500/20",
    accentColor: "#f5c842",
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: "Palette",
    description:
      "User-centered design that combines aesthetics with function. From wireframes to pixel-perfect Figma prototypes.",
    features: ["Figma Prototypes", "Design Systems", "User Research", "Responsive Design"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "#34d399",
  },
];

export const projects = [
  {
    id: 1,
    title: "Tube Lease",
    description: "Rent and Sale Tubes E-commerce platform with custom WordPress.",
    image: "https://lh3.googleusercontent.com/d/1P5gmuRK1u93w-PxXejF-pfPful_1X2y3",
    liveUrl: "https://www.tublease.com/",
    category: "E-COMMERCE",
    featured: true,
  },
  {
    id: 2,
    title: "Trend Property",
    description: "A property rental platform built with, featuring advanced search, booking, and payment integration.",
    image: "https://lh3.googleusercontent.com/d/1twPR5S3ns65fHx6aPZNrOSiev-etp-Hk",
    liveUrl: "https://trendproperty.com/",
    category: "PROPERTY RENTAL",
    featured: false,
  },
  {
    id: 3,
    title: "Trail Tales",
    description: "A travel blog and guide platform, featuring dynamic content, user reviews, and interactive maps.",
    image: "https://lh3.googleusercontent.com/d/1-rCnua2UQVbjymuAZZaSIpcRBjYD8k1e",
    tags: ["Next.js", "OpenAI", "Prisma", "Tailwind", "Supabase"],
    liveUrl: "https://trail-tales.com/",
    githubUrl: "https://github.com",
    category: "ALBUM",
    featured: false,
  },
  {
    id: 4,
    title: "Ticket Show",
    description: "Sale ticketing platform for events, featuring real-time availability and secure checkout.",
    image: "https://lh3.googleusercontent.com/d/14L1uuWNVdF6jDxZAEIYtOdYvGTg0QOxn",
    tags: ["Next.js", "Sanity.io", "TypeScript", "Vercel", "MDX"],
    liveUrl: "https://www.ticket-show.com/",
    githubUrl: "https://github.com",
    category: "E-COMMERCE",
    featured: false,
  },
  {
    id: 5,
    title: "Istonova",
    description: "Give web development services to clients and manage projects with a custom-built dashboard for tracking and analytics.",
    image: "https://lh3.googleusercontent.com/d/1OBmXDVXrH-Iv-GTuocuCyRm59WB7q03D",
    tags: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
    liveUrl: "https://istonova.com/",
    githubUrl: "https://github.com",
    category: "WEB DEVELOPMENT",
    featured: false,
  },
  {
    id: 6,
    title: "Powerhouse Systems",
    description: "Powerhouse Systems provides data center decommissioning and buy/sell services for generators, UPS systems, and critical power infrastructure across the U.S.",
    image: "https://lh3.googleusercontent.com/d/1hFLI7SKn4uYtn6mDOsfTJC9BSndqHGAP",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "Figma"],
    liveUrl: "https://powerhouse-systems.com/",
    githubUrl: "https://github.com",
    category: "E-COMMERCE",
    featured: true,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Mastering Next.js 15 App Router: A Complete Guide",
    excerpt: "Deep dive into the new server components model, streaming, and the powerful caching strategies that make Next.js 15 a game-changer.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop",
    category: "Next.js",
    readTime: "12 min read",
    date: "April 15, 2025",
    slug: "mastering-nextjs-15-app-router",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt: "Learn how to architect production-ready REST APIs with proper validation, error handling, and testing strategies that scale.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop",
    category: "Backend",
    readTime: "9 min read",
    date: "March 28, 2025",
    slug: "scalable-apis-nodejs-typescript",
  },
  {
    id: 3,
    title: "The Future of WordPress: Full-Site Editing & Block Themes",
    excerpt: "How WordPress's FSE paradigm is reshaping the CMS landscape and what it means for developers in 2025.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    category: "WordPress",
    readTime: "7 min read",
    date: "February 12, 2025",
    slug: "future-of-wordpress-fse",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
