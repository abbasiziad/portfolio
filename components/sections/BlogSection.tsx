"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import SectionWrapper, {
  SectionHeader,
  StaggerContainer,
  fadeUpVariant,
} from "@/components/ui/SectionWrapper";
import { blogPosts } from "@/data/portfolio";

export default function BlogSection() {
  return (
    <SectionWrapper id="blog" withGrid>
      <SectionHeader
        eyebrow="Blog"
        title={`Latest <span class='gradient-text'>Articles</span>`}
        description="Thoughts on web development, best practices, and the ever-evolving tech landscape."
      />

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={fadeUpVariant}
            whileHover={{ y: -6 }}
            className="group glass-card border border-[var(--border)] rounded-3xl overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/80 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-lg bg-[var(--accent)]/80 text-white text-xs font-semibold backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Meta */}
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs">
                  <Calendar size={11} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 line-clamp-2">
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:gap-3 transition-all duration-300"
              >
                Read Article
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.article>
        ))}
      </StaggerContainer>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card border border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-300"
        >
          View All Posts
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
