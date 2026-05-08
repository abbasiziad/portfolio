"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, Download, CheckCircle2 } from "lucide-react";
import SectionWrapper, {
  SectionHeader,
  StaggerContainer,
  fadeUpVariant,
} from "@/components/ui/SectionWrapper";
import { personalInfo, stats } from "@/data/portfolio";

const highlights = [
  "5+ years of professional experience",
  "Passionate about clean, maintainable code",
  "Strong focus on performance & accessibility",
  "Experience with remote & distributed teams",
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-[var(--surface)]">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background shape */}
          <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-br from-[var(--accent)]/10 to-purple-500/10" />

          <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] aspect-[4/5] max-w-md mx-auto">
            <Image
              src={personalInfo.avatar2}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />

            {/* Bottom info badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-card border border-[var(--border)] rounded-2xl p-4">
                <p className="font-display font-bold text-lg text-[var(--text-primary)]">
                  {personalInfo.name}
                </p>
                <p className="text-[var(--accent)] text-sm">{personalInfo.title}</p>
                <div className="flex items-center gap-1.5 mt-2 text-[var(--text-muted)] text-xs">
                  <MapPin size={11} />
                  {personalInfo.address}
                </div>
              </div>
            </div>
          </div>

          {/* Experience badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-12 glass-card border border-[var(--accent)]/30 rounded-2xl p-4 text-center"
          >
            <p className="font-display font-extrabold text-3xl gradient-text">5+</p>
            <p className="text-[var(--text-muted)] text-xs mt-1">Years of<br />Experience</p>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <StaggerContainer>
          <motion.div variants={fadeUpVariant}>
            <SectionHeader
              eyebrow="About Me"
              title="Passionate About <span class='gradient-text'>Crafting</span> Digital Experiences"
            />
          </motion.div>

          <motion.p
            variants={fadeUpVariant}
            className="text-[var(--text-secondary)] text-base leading-relaxed mb-6"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Highlights */}
          <motion.ul variants={fadeUpVariant} className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                <CheckCircle2 size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* Contact info */}
          <motion.div
            variants={fadeUpVariant}
            className="space-y-3 mb-8 p-5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-subtle)]"
          >
            <div className="flex items-center gap-3 text-sm">
              <Mail size={15} className="text-[var(--accent)] shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={15} className="text-[var(--accent)] shrink-0" />
              <a href={`tel:${personalInfo.phone}`} className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={15} className="text-[var(--accent)] shrink-0" />
              <span className="text-[var(--text-secondary)]">{personalInfo.address}</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent)]/20"
            >
              <Download size={17} />
              Download Resume
            </a>
          </motion.div>
        </StaggerContainer>
      </div>

      {/* Stats row */}
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20" delay={0.2}>
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUpVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card border border-[var(--border)] rounded-2xl p-6 text-center hover:border-[var(--accent)]/30 transition-all duration-300"
          >
            <p className="font-display font-extrabold text-4xl gradient-text mb-2">{stat.value}</p>
            <p className="text-[var(--text-muted)] text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
