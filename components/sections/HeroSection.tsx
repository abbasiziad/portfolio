"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Dribbble, Download, Send } from "lucide-react";
import Image from "next/image";
import { personalInfo, typingStrings } from "@/data/portfolio";
import { useTypingEffect } from "@/lib/hooks";

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  const typedText = useTypingEffect(typingStrings);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)]/8 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/8 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-[var(--accent)] text-base mb-2 tracking-wider"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.05]"
            >
              <span className="text-[var(--text-primary)]">{personalInfo.name.split(" ")[0]} </span>
              <span className="gradient-text">{personalInfo.name.split(" ")[1]}</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-0 font-display text-2xl sm:text-3xl lg:text-3xl font-semibold text-[var(--text-secondary)] mb-6"
            >
              <span className="font-mono text-[var(--accent)] mr-2">{">"}</span>
              <span>{typedText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-xl"
            >
              {personalInfo.bioShort}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent)]/20"
              >
                <Send size={17} />
                Hire Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card border border-[var(--border)] text-[var(--text-primary)] font-semibold hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 transition-all duration-300 hover:scale-105"
              >
                <Download size={17} />
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-[var(--text-muted)] text-sm font-medium">Follow me:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass-card border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Avatar + decorative ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Outer ring */}
            <div className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-[var(--accent)]/20 animate-spin-slow" />

            {/* Tech badges orbiting */}
            {["React", "Next", "PHP", "WordPress"].map((tech, i) => (
              <div
                key={tech}
                className={`tech-${i} absolute w-12 h-12 rounded-xl glass-card border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] font-mono text-xs font-semibold`}
                style={{
                  transform: `rotate(${i * 90}deg) translateX(210px) rotate(-${i * 90}deg)`,
                }}
              >
                {tech}
              </div>
            ))}

            {/* Inner glow ring */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[var(--accent)]/10 to-purple-500/10 blur-xl" />

            {/* Avatar container */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-[var(--accent)]/20 accent-glow">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/3 glass-card border border-[var(--border)] rounded-2xl px-4 py-3"
            >
              <p className="font-display font-bold text-2xl text-[var(--accent)]">5+</p>
              <p className="text-[var(--text-muted)] text-xs">Years Exp.</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-8 bottom-1/3 glass-card border border-[var(--border)] rounded-2xl px-4 py-3"
            >
              <p className="font-display font-bold text-2xl text-[var(--gold)]">120+</p>
              <p className="text-[var(--text-muted)] text-xs">Projects</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors"
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
