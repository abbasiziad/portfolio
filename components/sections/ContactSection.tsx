"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import SectionWrapper, {
  SectionHeader,
} from "@/components/ui/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.address,
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
];

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-300";

  return (
    <SectionWrapper id="contact" className="bg-[var(--surface)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <SectionHeader
        eyebrow="Contact"
        title={`Let&apos;s Work <span class='gradient-text'>Together</span>`}
        description="Have a project in mind? I'd love to hear about it. Send me a message and let's create something great."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left side unchanged */}
        <div className="lg:col-span-2 space-y-6">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 glass-card border border-[var(--border)] rounded-2xl hover:border-[var(--accent)]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                <Icon size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-xs mb-0.5">
                  {label}
                </p>
                <p className="text-[var(--text-primary)] text-sm font-medium">
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* FORM (UPDATED ONLY PART) */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={async (e) => {
            e.preventDefault();
            setSubmitState("loading");

            try {
              const formData = new FormData(e.currentTarget);

              const res = await fetch(
                "https://formsubmit.co/ziadabbasi26@gmail.com",
                {
                  method: "POST",
                  body: formData,
                }
              );

              if (!res.ok) throw new Error("Failed");

              setSubmitState("success");
              setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
              });

              setTimeout(() => setSubmitState("idle"), 4000);
            } catch (err) {
              setSubmitState("error");
              setTimeout(() => setSubmitState("idle"), 4000);
            }
          }}
          className="lg:col-span-3 glass-card border border-[var(--border)] rounded-3xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
                Full Name *
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className={inputBase}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputBase}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
              Subject *
            </label>
            <input
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              className={inputBase}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={`${inputBase} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={submitState === "loading" || submitState === "success"}
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed bg-[var(--accent)] hover:bg-[var(--accent-hover)] hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--accent)]/25 active:scale-[0.98]"
          >
            {submitState === "loading" && (
              <Loader2 size={18} className="animate-spin" />
            )}
            {submitState === "success" && <CheckCircle2 size={18} />}
            {submitState === "idle" && <Send size={18} />}

            {submitState === "loading"
              ? "Sending..."
              : submitState === "success"
              ? "Message Sent!"
              : "Send Message"}
          </button>

          {submitState === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-emerald-400 text-sm"
            >
              ✓ Thanks! I'll get back to you within 24 hours.
            </motion.p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}