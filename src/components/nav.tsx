"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

import Magnetic from "@/components/animated/magnetic";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrolled(v > 0.02);
  });

  useEffect(() => {
    const sections = navLinks
      .map((l) => l.href)
      .map((id) => document.querySelector(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/70 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-300 items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <Magnetic strength={0.2}>
            <Link
              href="#home"
              className="group flex items-center gap-2 font-display text-xl font-extrabold text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-container text-white shadow-none transition-transform group-hover:rotate-6">
                <Sparkles size={16} />
              </span>
              <span>
                Roisul<span className="text-primary">.</span>
              </span>
            </Link>
          </Magnetic>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.name}>
                    <Magnetic strength={0.25}>
                      <Link
                        href={link.href}
                        className="relative inline-block rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 28,
                            }}
                          />
                        )}
                        <span className="relative">{link.name}</span>
                      </Link>
                    </Magnetic>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-primary-container px-5 py-2.5 text-sm font-bold text-white shadow-none transition-all hover:border-primary/50 hover:bg-primary/90"
              >
                Let&apos;s Talk
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX }}
          className="h-0.5 origin-left bg-linear-to-r from-primary via-secondary to-primary"
        />
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-surface/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-4 mt-20 rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-bold text-white/80 transition-all hover:bg-white/5 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-2xl border border-white/10 bg-primary-container px-4 py-3 text-center text-sm font-bold text-white"
              >
                Let&apos;s Talk
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
