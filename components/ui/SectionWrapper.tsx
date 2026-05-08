"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withGrid?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  withGrid = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative py-24 lg:py-32 overflow-hidden",
        withGrid && "grid-pattern",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Reusable Section Header
interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("dflexcenter mb-16", centered ? "text-center" : "")}>
      <span className="font-mono text-sm text-[var(--accent)] tracking-[0.2em] uppercase mb-3 block">
        {eyebrow}
      </span>
      <h2
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {centered && <div className="section-accent-line mx-auto mb-6" />}
      {!centered && <div className="section-accent-line mb-6" />}
      {description && (
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// Staggered children animation wrapper
export function StaggerContainer({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
