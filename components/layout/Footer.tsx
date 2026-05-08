import { Github, Linkedin, Twitter, Dribbble, Heart, Code2, type LucideIcon } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

const socialIcons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                <Code2 size={18} className="text-[var(--accent)]" />
              </div>
              <span className="font-display font-bold text-lg text-[var(--text-primary)]">
                ziad<span className="text-[var(--accent)]">.</span>dev
              </span>
            </a>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 max-w-xs">
              {personalInfo.bioShort}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {Object.entries(personalInfo.socials).map(([key, url]) => {
                const Icon = socialIcons[key];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass-card border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-300 hover:scale-110"
                    aria-label={key}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition-colors animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="text-[var(--text-secondary)] text-sm">{personalInfo.address}</span>
              </li>
            </ul>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.availability}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm flex items-center gap-1.5">
            © {year} {personalInfo.name}. Made with
            <Heart size={13} className="text-red-400 fill-red-400" />
            and too much coffee.
          </p>
          <p className="text-[var(--text-muted)] text-sm font-mono">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
