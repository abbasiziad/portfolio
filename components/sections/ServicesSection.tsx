"use client";

import { motion } from "framer-motion";
import { Globe, FileCode, Plug, Palette, CheckCircle2, type LucideIcon } from "lucide-react";
import SectionWrapper, {
  SectionHeader,
  StaggerContainer,
  fadeUpVariant,
} from "@/components/ui/SectionWrapper";
import { services } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  FileCode,
  Plug,
  Palette,
};

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" withGrid>
      <SectionHeader
        eyebrow="Services"
        title={`What I <span class='gradient-text'>Offer</span>`}
        description="From concept to deployment — comprehensive services tailored to bring your vision to life."
        centered
      />

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Globe;
          return (
            <motion.div
              key={service.id}
              variants={fadeUpVariant}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative glass-card border border-[var(--border)] rounded-3xl p-6 overflow-hidden cursor-default transition-all duration-500 hover:border-opacity-50"
              style={
                {
                  "--card-accent": service.accentColor,
                } as React.CSSProperties
              }
            >
              {/* Hover gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              />

              {/* Glowing blob on hover */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: service.accentColor }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${service.accentColor}15`,
                    borderColor: `${service.accentColor}30`,
                  }}
                >
                  <Icon size={24} style={{ color: service.accentColor }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-[var(--text-muted)] text-xs"
                    >
                      <CheckCircle2
                        size={13}
                        className="shrink-0"
                        style={{ color: service.accentColor }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div
                  className="mt-6 pt-5 border-t border-[var(--border-subtle)]"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300"
                    style={{ color: service.accentColor }}
                  >
                    Get Started
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
