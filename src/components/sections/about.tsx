"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import {
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";

import Counter from "@/components/animated/counter";
import TiltCard from "@/components/animated/tilt-card";
import StaggerContainer, { staggerItemVariants } from "@/components/animated/stagger-container";
import SectionHeader from "@/components/sections/_section-header";
import BlobBackground from "@/components/animated/blob-background";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "from-primary to-secondary",
  },
  {
    icon: Wrench,
    title: "Currently Learning",
    description: "Node.js, Express, MongoDB, REST APIs",
    color: "from-secondary to-primary",
  },
  {
    icon: Palette,
    title: "UI & Animation",
    description: "Framer Motion, GSAP, accessibility",
    color: "from-primary-container to-secondary-container",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Lazy loading, SEO, 60 FPS interactions",
    color: "from-secondary-container to-primary",
  },
];

const stats = [
  { label: "Years learning", value: 3, suffix: "+" },
  { label: "Side projects", value: 12, suffix: "+" },
  { label: "Lines of code", value: 35, suffix: "k+" },
];

export default function About() {
  const revealRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(revealRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !revealRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".gsap-about-line", {
        scaleX: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, revealRef);
    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      id="about"
      ref={revealRef}
      className="relative overflow-hidden py-28 px-6 md:px-12 scroll-mt-20"
    >
      <BlobBackground variant="compact" />

      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Background"
          title={
            <>
              About <span className="accent-text-gradient">me</span>
            </>
          }
          subtitle="I design and engineer interfaces that feel handcrafted — every interaction considered, every motion intentional."
        />

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 flex items-center justify-center md:order-1"
          >
            <TiltCard intensity={10} className="w-full max-w-md">
              <div className="relative">
                <div className="profile-blob absolute -inset-8 opacity-60" />
                <div className="glass-card-strong relative aspect-square overflow-hidden rounded-3xl border-white/15 p-1.5 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="relative flex h-full w-full items-center justify-center">
                      <Sparkles
                        className="h-40 w-40 text-primary/50"
                        strokeWidth={1}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/40 to-transparent p-6">
                      <p className="font-display text-2xl font-extrabold text-white">
                        Hi, I&apos;m Israt.
                      </p>
                      <p className="mt-1 text-sm text-on-surface-variant">
                        Builder of delightful, performant web apps.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative chips */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-12 glass-card-strong rounded-2xl border-white/15 px-4 py-3 shadow-xl"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Based in
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-white">
                    🇧🇩 Bangladesh
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -left-3 bottom-10 glass-card-strong rounded-2xl border-white/15 px-4 py-3 shadow-xl"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Focus
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-white">
                    UI Engineering
                  </p>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Bio + Highlights Side */}
          <div className="order-1 flex flex-col md:order-2">
            <div className="space-y-6 text-on-surface-variant text-base leading-relaxed sm:text-lg">
              <p>
                I&apos;m a passionate frontend developer who enjoys building clean,
                responsive, and interactive web interfaces using React and
                Next.js. I care about the small details — animation timing,
                typography, and accessibility.
              </p>
              <p>
                Currently, I&apos;m deepening my skills by learning backend
                development with Node.js and Express.js to become a
                well-rounded full-stack engineer.
              </p>
            </div>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl px-3 py-4 text-center"
                >
                  <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Cards */}
            <StaggerContainer
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
              stagger={0.08}
              delay={0.1}
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItemVariants}
                  className="group glass-card relative overflow-hidden rounded-2xl border-white/10 p-5 transition-shadow hover:shadow-[0_20px_40px_-15px_rgba(192,103,255,0.4)]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${item.color} opacity-60`}
                  />
                  <div
                    className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <item.icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
