"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, Calendar } from "lucide-react";
import SectionWrapper, {
  SectionHeader,
} from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-[var(--surface)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <SectionHeader
        eyebrow="Experience"
        title={`My Professional <span class='gradient-text'>Journey</span>`}
        description="A timeline of roles, companies, and impact throughout my career."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative sm:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center z-10 border-2 transition-colors ${
                    exp.type === "current"
                      ? "bg-[var(--accent)]/10 border-[var(--accent)]/50"
                      : "bg-[var(--surface-2)] border-[var(--border)]"
                  }`}
                >
                  <Briefcase
                    size={20}
                    className={exp.type === "current" ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}
                  />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="glass-card border border-[var(--border)] rounded-3xl p-6 hover:border-[var(--accent)]/20 transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[var(--accent)] text-sm font-medium hover:underline"
                    >
                      {exp.company}
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs mb-1">
                      <Calendar size={11} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs">
                      <MapPin size={11} />
                      {exp.location}
                    </div>
                    {exp.type === "current" && (
                      <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-muted)] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
