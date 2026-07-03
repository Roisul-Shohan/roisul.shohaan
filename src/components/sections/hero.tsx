"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useRef } from "react";

import Magnetic from "@/components/animated/magnetic";
import Parallax from "@/components/animated/parallax";
import Counter from "@/components/animated/counter";
import TypingEffect from "@/components/animated/typing-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroBackground = dynamic(
  () => import("@/components/three/hero-background"),
  { ssr: false },
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stats = [
  { label: "Projects Shipped", value: 6 },
  { label: "Technologies", value: 12 },
  { label: "Cups of Coffee", value: 480 },
];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32"
    >
      {/* Three.js animated hero background */}
      <div className="absolute inset-0 -z-10">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-surface" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: textY }}
        className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 md:grid-cols-12 md:px-12"
      >
        {/* Left Column */}
        <div className="z-10 flex flex-col items-start text-left md:col-span-7">
          <motion.div variants={itemVariants}>
            <Badge
              variant="primary"
              className="mb-6 gap-2 px-4 py-1.5 text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Crafting modern
            <br />
            <span className="accent-text-gradient">full-stack</span>
            <br />
            <span className="text-shimmer">web experiences.</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex h-9 items-center text-xl font-semibold text-on-surface-variant sm:text-2xl"
          >
            <span className="mr-2 text-on-surface-variant">I build</span>
            <TypingEffect
              words={[
                "scalable web apps",
                "RESTful APIs",
                "dynamic UIs",
                "full-stack solutions",
              ]}
              className="text-primary"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl"
          >
            I&apos;m <span className="font-semibold text-white">Roisul Islam</span>, a
            CSE student and full-stack developer from Sylhet, Bangladesh. I
            build scalable end-to-end web apps with the MERN stack, Next.js 15,
            Python, Docker, and modern databases.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.3}>
              <Button asChild size="lg" className="group">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-14 grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl px-3 py-4 text-center sm:px-4 sm:py-5"
              >
                <div className="font-display text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                  <Counter value={stat.value} suffix="+" />
                </div>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-3"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Follow
            </span>
            <div className="h-px w-12 bg-white/10" />
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/Roisul-Shohan", Icon: Github, label: "GitHub" },
                {
                  href: "https://www.linkedin.com/in/md-roisul-islam/",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <Magnetic key={label} strength={0.5}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:text-primary"
                  >
                    <Icon size={16} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <Parallax
          offset={40}
          className="relative mx-auto flex w-full items-center justify-center md:col-span-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative aspect-[3/4] w-full max-w-sm"
          >
            {/* Glow + Blob */}
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0"
            >
              {/* Soft purple halo behind the photo (matches the reference) */}
              <div className="absolute inset-[-15%] photo-blob-halo rounded-[inherit] blur-2xl" />

              {/* Avatar — organic blob silhouette like the reference */}
              <div className="absolute inset-0">
                <div className="photo-blob-clip photo-blob-morph relative h-full w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/d/1TBc8XkF9R9DjfphRCLHv0m9h3589VUOW=w1200"
                    alt="Roisul Islam — Full Stack Developer"
                    className="absolute inset-0 h-full w-full object-cover scale-[1.15] -translate-y-[2%]"
                    style={{ objectPosition: 'center 22%' }}
                    loading="eager"
                  />
                  {/* Subtle bottom shading to anchor the figure */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface/70 via-surface/20 to-transparent mix-blend-multiply" />
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-12 z-20 glass-card-strong rounded-2xl border border-white/15 px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-white">
                  Building daily
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-6 top-1/3 z-20 glass-card-strong rounded-2xl border border-white/15 px-4 py-3 shadow-2xl"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Stack
              </p>
              <p className="mt-0.5 text-sm font-bold text-white">
                MERN · Next.js · Java
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-2 left-2 z-20 glass-card-strong rounded-2xl border border-white/15 px-4 py-3 shadow-2xl"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                Speciality
              </p>
              <p className="mt-0.5 text-sm font-bold text-white">
                Full Stack Dev
              </p>
            </motion.div>
          </motion.div>
        </Parallax>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant">
          Scroll
        </span>
        <div className="relative h-10 w-6 overflow-hidden rounded-full border border-white/15">
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1 h-2 w-1 -translate-x-1/2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
