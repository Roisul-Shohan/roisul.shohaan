"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  AlertCircle,
} from "lucide-react";

import FadeUp from "@/components/animated/fade-up";
import Magnetic from "@/components/animated/magnetic";
import BlobBackground from "@/components/animated/blob-background";

// EmailJS — public config (these keys are designed to be exposed to the browser)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const EMAILJS_TEMPLATE_INBOUND = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_INBOUND ?? "";
const EMAILJS_TEMPLATE_AUTOREPLY = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY ?? "";

interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "roisul192@gmail.com",
    href: "mailto:roisul192@gmail.com",
    color: "text-primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1603-291012",
    href: "tel:+8801603291012",
    color: "text-secondary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sylhet, Bangladesh",
    color: "text-primary-container",
  },
];

const socials = [
  { icon: Github, href: "https://github.com/Roisul-Shohan", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/md-roisul-islam/",
    label: "LinkedIn",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError(null);

    // Pre-flight: catch the #1 cause of failure — missing env vars on the deployed build.
    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_INBOUND) {
      const missing = [
        !EMAILJS_SERVICE_ID && "service id",
        !EMAILJS_PUBLIC_KEY && "public key",
        !EMAILJS_TEMPLATE_INBOUND && "inbound template id",
        !EMAILJS_TEMPLATE_AUTOREPLY && "auto-reply template id",
      ].filter(Boolean);
      setError(
        `EmailJS is not configured (missing: ${missing.join(", ")}). Add NEXT_PUBLIC_EMAILJS_* to Vercel env vars and redeploy.`
      );
      setPending(false);
      return;
    }

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const visitorEmail = String(data.get("email") ?? "").trim();
    // Template variables must match what each EmailJS template uses:
    //   {{name}}, {{email}}, {{subject}}, {{message}}, {{reply_to}}
    const params = {
      name: String(data.get("name") ?? "").trim(),
      email: visitorEmail,
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      reply_to: visitorEmail,
    };

    try {
      // 1. Send the visitor's message to you (inbound)
      const inbound = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_INBOUND,
        params,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // 2. Send a confirmation back to the visitor (auto-reply) — same params
      const autoReply = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_AUTOREPLY,
        params,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // Wait for the inbound send first (this is the critical one); the
      // auto-reply is best-effort — if it fails, don't block the success UI.
      const inboundResult = await inbound;
      if (inboundResult.status !== 200) {
        throw new Error(
          inboundResult.text ||
            `EmailJS returned status ${inboundResult.status}. Check template variables and service connection.`
        );
      }

      // Fire-and-forget the auto-reply; surface a soft warning if it fails.
      autoReply.catch((err: unknown) => {
        const message =
          err instanceof Error ? err.message : "Auto-reply could not be sent.";
        console.warn("Auto-reply failed:", message);
      });

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      // EmailJS sends back errors with `text` and `status`; surface both.
      let message = "Something went wrong. Please try again.";
      if (typeof err === "object" && err !== null) {
        const e = err as { text?: string; message?: string; status?: number };
        if (e.text) message = `EmailJS: ${e.text}`;
        else if (e.message) message = e.message;
        console.error("EmailJS error:", err);
      }
      setError(message);
    } finally {
      setPending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-6 md:px-12 scroll-mt-20"
    >
      <BlobBackground variant="compact" />

      <div className="mx-auto max-w-275">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-primary font-label md:text-sm">
            Get In Touch
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s build{" "}
            <span className="accent-text-gradient">together</span>
          </h2>
          <p className="mt-5 text-base text-on-surface-variant sm:text-lg">
            Have a project in mind, want to collaborate, or just want to say
            hello? My inbox is always open.
          </p>
        </FadeUp>

        <div className="grid gap-7 lg:grid-cols-5">
          {/* Left — Contact Info */}
          <FadeUp className="lg:col-span-2" delay={0.05}>
            <div className="glass-card relative h-full overflow-hidden rounded-3xl border-white/10 p-7 sm:p-9">
              <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-linear-to-br from-primary/40 to-secondary/30 blur-3xl" />

              <h3 className="font-display text-xl font-extrabold text-white">
                Contact details
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                Feel free to reach out — I usually respond within 24 hours.
              </p>

              <ul className="mt-7 space-y-4">
                {contactInfo.map((info) => {
                  const inner = (
                    <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/15 hover:bg-white/10">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${info.color}`}
                      >
                        <info.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                          {info.label}
                        </p>
                        <p className="truncate text-sm font-bold text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={info.label}>
                      {info.href ? (
                        <a href={info.href} className="block">
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-7 border-t border-white/5 pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Follow me
                </p>
                <div className="flex gap-2">
                  {socials.map((s) => (
                    <Magnetic key={s.label} strength={0.35}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={s.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        <s.icon size={18} />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right — Form */}
          <FadeUp className="lg:col-span-3" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="glass-card relative overflow-hidden rounded-3xl border-white/10 p-7 sm:p-9"
            >
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-linear-to-br from-secondary/30 to-primary/20 blur-3xl" />

              <div className="relative grid gap-5 sm:grid-cols-2">
                <FloatingField
                  label="Your name"
                  name="name"
                  type="text"
                  required
                />
                <FloatingField
                  label="Your email"
                  name="email"
                  type="email"
                  required
                />
                <div className="sm:col-span-2">
                  <FloatingField
                    label="Subject"
                    name="subject"
                    type="text"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <FloatingField
                    label="Your message"
                    name="message"
                    as="textarea"
                    rows={5}
                    required
                  />
                </div>
              </div>

              <div className="relative mt-7 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs text-on-surface-variant">
                  Or email me directly at{" "}
                  <a
                    href="mailto:roisul192@gmail.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    roisul192@gmail.com
                  </a>
                </p>

                <Magnetic strength={0.25}>
                  <button
                    type="submit"
                    disabled={pending}
                    className="group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-primary-container px-7 py-3.5 text-sm font-bold text-white shadow-none transition-all hover:border-primary/50 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="relative inline-flex items-center gap-2">
                      {pending ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send message
                        </>
                      )}
                    </span>
                  </button>
                </Magnetic>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="absolute inset-x-7 bottom-7 sm:inset-x-9"
                  >
                    <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3.5 backdrop-blur-md">
                      <CheckCircle2 size={20} className="text-emerald-300" />
                      <p className="text-sm font-bold text-emerald-100">
                        Message sent &mdash; I&apos;ll reply soon!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="absolute inset-x-7 bottom-7 sm:inset-x-9"
                    role="alert"
                  >
                    <div className="flex items-center gap-3 rounded-2xl border border-rose-400/30 bg-rose-400/10 px-5 py-3.5 backdrop-blur-md">
                      <AlertCircle size={20} className="text-rose-300" />
                      <p className="text-sm font-bold text-rose-100">{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

interface FloatingFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
}

function FloatingField({
  label,
  name,
  type = "text",
  required,
  as = "input",
  rows = 4,
}: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <div className="relative">
      <motion.label
        htmlFor={name}
        animate={{
          y: focused || filled ? -26 : 0,
          scale: focused || filled ? 0.85 : 1,
          color: focused ? "#e3b5ff" : "#a39cb5",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="pointer-events-none absolute left-4 top-3.5 origin-left text-sm font-semibold"
      >
        {label}
      </motion.label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setFilled(Boolean(e.target.value));
          }}
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 pt-5 pb-3 text-sm text-white outline-none transition-all placeholder:text-transparent focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(192,103,255,0.12)]"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setFilled(Boolean(e.target.value));
          }}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 pt-5 pb-2.5 text-sm text-white outline-none transition-all placeholder:text-transparent focus:border-primary/50 focus:bg-white/10 focus:shadow-[0,0,0,4px,rgba(192,103,255,0.12)]"
        />
      )}
    </div>
  );
}
