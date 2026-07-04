'use client';

import Link from 'next/link';
import { Github, Linkedin, Heart, Mail, FileDown } from 'lucide-react';

import FadeUp from '@/components/animated/fade-up';
import Magnetic from '@/components/animated/magnetic';
import Marquee from '@/components/animated/marquee';

const socials = [
    { icon: Github, href: 'https://github.com/Roisul-Shohan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/md-roisul-islam/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:roisul192@gmail.com', label: 'Email' },
    {
        icon: FileDown,
        href: 'https://drive.google.com/uc?export=download&id=1Uof-mJu3Yv9chbuSU7epUaai3Jbj9vMl',
        label: 'Download Resume',
    },
];

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-surface/40 backdrop-blur-xl">
            {/* Marquee */}
            <div className="relative overflow-hidden border-b border-white/5 py-7">
                <Marquee speed={28} className="[--gap:3rem]">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-6 font-display text-3xl font-extrabold text-white/20 sm:text-5xl"
                        >
                            <span className="accent-text-gradient">Let&apos;s build something</span>
                            <span className="h-3 w-3 rounded-full bg-primary" />
                            <span>amazing together</span>
                            <span className="h-3 w-3 rounded-full bg-secondary" />
                        </span>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
            </div>

            <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-3 md:px-12">
                <FadeUp>
                    <Link
                        href="#home"
                        className="font-display text-2xl font-extrabold text-white"
                    >
                        Roisul<span className="text-primary">.</span>
                    </Link>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-variant">
                        A full-stack developer building performant, end-to-end web applications. Open to new projects &mdash; let&apos;s connect.
                    </p>
                </FadeUp>

                <FadeUp delay={0.05}>
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                        Navigate
                    </p>
                    <ul className="grid grid-cols-2 gap-y-2.5 text-sm font-semibold text-white/80 sm:grid-cols-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
                        Connect
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
                </FadeUp>
            </div>

            <div className="border-t border-white/5">
                <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-on-surface-variant sm:flex-row md:px-12">
                    <p>
                        © {new Date().getFullYear()} Roisul Islam. Crafted with{' '}
                        <Heart size={12} className="inline-block -translate-y-px text-primary" /> using
                        Next.js &amp; Framer Motion.
                    </p>
                    <p className="font-label uppercase tracking-widest text-[10px]">
                        Designed &amp; engineered in Bangladesh
                    </p>
                </div>
            </div>
        </footer>
    );
}
