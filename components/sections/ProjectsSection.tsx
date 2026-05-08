"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";
import SectionWrapper, {
  SectionHeader,
} from "@/components/ui/SectionWrapper";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="bg-[var(--surface)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <SectionHeader
        eyebrow="Portfolio"
        title={`Featured <span class='gradient-text'>Projects</span>`}
        description="A selection of work I&apos;m proud of — spanning SaaS, e-commerce, AI, and open source."
      />

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
              activeFilter === cat
                ? "bg-[var(--accent)] text-white"
                : "glass-card border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/30"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group glass-card border border-[var(--border)] rounded-3xl overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/90 via-transparent to-transparent" />

                {/* Category & Featured badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[var(--accent)]/80 text-white text-xs font-semibold backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--gold)]/80 text-[var(--background)] text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
                      <Star size={10} className="fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Action buttons on hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={13} />
                  </a>
                  
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                

                {/* Links row */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* More projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
      </motion.div>
    </SectionWrapper>
  );
}
