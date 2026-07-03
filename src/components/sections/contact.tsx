'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';

import FadeUp from '@/components/animated/fade-up';
import Magnetic from '@/components/animated/magnetic';
import BlobBackground from '@/components/animated/blob-background';

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
        label: 'Email',
        value: 'israt@example.com',
        href: 'mailto:israt@example.com',
        color: 'text-primary',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+880 1XXX-XXXXXX',
        href: 'tel:+8801700000000',
        color: 'text-secondary',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Mymensingh, Bangladesh',
        color: 'text-primary-container',
    },
];

const socials = [
    { icon: Github, href: 'https://github.com/isratsamanta21', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/israt-jahan-921451345/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [pending, setPending] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (pending) return;
        setPending(true);
        // Simulated submission — wire up to Formspree / Resend / API route here.
        await new Promise((resolve) => setTimeout(resolve, 900));
        setPending(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        (event.target as HTMLFormElement).reset();
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-28 px-6 md:px-12 scroll-mt-20"
        >
            <BlobBackground variant="compact" />

            <div className="mx-auto max-w-[1100px]">
                <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-primary font-label md:text-sm">
                        Get In Touch
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                        Let&apos;s build <span className="accent-text-gradient">together</span>
                    </h2>
                    <p className="mt-5 text-base text-on-surface-variant sm:text-lg">
                        Have a project in mind, want to collaborate, or just want to say hello? My inbox is always open.
                    </p>
                </FadeUp>

                <div className="grid gap-7 lg:grid-cols-5">
                    {/* Left — Contact Info */}
                    <FadeUp className="lg:col-span-2" delay={0.05}>
                        <div className="glass-card relative h-full overflow-hidden rounded-3xl border-white/10 p-7 sm:p-9">
                            <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-gradient-to-br from-primary/40 to-secondary/30 blur-3xl" />

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
                                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${info.color}`}>
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
                            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 blur-3xl" />

                            <div className="relative grid gap-5 sm:grid-cols-2">
                                <FloatingField label="Your name" name="name" type="text" required />
                                <FloatingField label="Your email" name="email" type="email" required />
                                <div className="sm:col-span-2">
                                    <FloatingField label="Subject" name="subject" type="text" required />
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
                                    Or email me directly at{' '}
                                    <a
                                        href="mailto:israt@example.com"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        israt@example.com
                                    </a>
                                </p>

                                <Magnetic strength={0.25}>
                                    <button
                                        type="submit"
                                        disabled={pending}
                                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_40px_-15px_rgba(192,103,255,0.7)] transition-all hover:shadow-[0_15px_40px_-10px_rgba(192,103,255,0.9)] disabled:opacity-60"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity group-hover:opacity-100" />
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
                                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                                        className="absolute inset-x-7 bottom-7 sm:inset-x-9"
                                    >
                                        <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3.5 backdrop-blur-md">
                                            <CheckCircle2 size={20} className="text-emerald-300" />
                                            <p className="text-sm font-bold text-emerald-100">
                                                Message sent — I&apos;ll reply soon!
                                            </p>
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
    as?: 'input' | 'textarea';
    rows?: number;
}

function FloatingField({
    label,
    name,
    type = 'text',
    required,
    as = 'input',
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
                    color: focused ? '#e3b5ff' : '#a39cb5',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="pointer-events-none absolute left-4 top-3.5 origin-left text-sm font-semibold"
            >
                {label}
            </motion.label>

            {as === 'textarea' ? (
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
