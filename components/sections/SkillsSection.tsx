"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Layout, Wrench, type LucideIcon } from "lucide-react";
import SectionWrapper, {
  SectionHeader,
  StaggerContainer,
  fadeUpVariant,
} from "@/components/ui/SectionWrapper";
import { skillCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Layout,
  Wrench,
};

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[var(--text-secondary)] text-sm font-medium">{name}</span>
        <span className="font-mono text-xs font-semibold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const active = skillCategories[activeCategory];
  const ActiveIcon = iconMap[active.icon] || Monitor;

  return (
    <SectionWrapper id="skills" withGrid>
      <SectionHeader
        eyebrow="My Skills"
        title={`Technical <span class='gradient-text'>Expertise</span>`}
        description="A snapshot of the technologies and tools I use to build modern, performant applications."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Category selector */}
        <StaggerContainer className="space-y-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Monitor;
            const isActive = i === activeCategory;
            return (
              <motion.button
                key={cat.name}
                variants={fadeUpVariant}
                onClick={() => setActiveCategory(i)}
                whileHover={{ x: 4 }}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 text-left",
                  isActive
                    ? "border-[var(--accent)]/40 bg-[var(--accent)]/5"
                    : "border-[var(--border)] glass-card hover:border-[var(--border)]"
                )}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: isActive ? `${cat.color}20` : "var(--surface-2)",
                    border: `1px solid ${isActive ? cat.color + "40" : "transparent"}`,
                  }}
                >
                  <Icon size={18} className={isActive ? "" : "text-[var(--text-muted)]"} style={{ color: isActive ? cat.color : undefined }} />
                </div>
                <div>
                  <p
                    className={cn(
                      "font-display font-semibold text-sm transition-colors",
                      isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                    )}
                  >
                    {cat.name}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs mt-0.5">
                    {cat.skills.length} skills
                  </p>
                </div>
                {isActive && (
                  <div className="ml-auto w-1.5 h-6 rounded-full" style={{ background: cat.color }} />
                )}
              </motion.button>
            );
          })}
        </StaggerContainer>

        {/* Skills display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass-card border border-[var(--border)] rounded-3xl p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}
            >
              <ActiveIcon size={22} className="" style={{ color: active.color }} />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                {active.name}
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                {active.skills.length} technologies
              </p>
            </div>
          </div>

          {/* Progress bars */}
          <div>
            {active.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={active.color}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Average level indicator */}
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-muted)] text-xs font-mono">CATEGORY PROFICIENCY</span>
              <span className="font-mono text-sm font-semibold" style={{ color: active.color }}>
                {Math.round(active.skills.reduce((a, s) => a + s.level, 0) / active.skills.length)}%
                AVG
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech badges grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16"
      >
        <p className="text-center text-[var(--text-muted)] text-sm font-mono mb-8 tracking-widest uppercase">
          Tools I work with
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React", "Next.js", "TypeScript",
            "WordPress",  "AWS", "Vercel", "Figma", "Git", "Tailwind CSS",
            "MySQL", "PHP", "STRAPI","WooCommerce",
          ].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-xl glass-card border border-[var(--border)] text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
