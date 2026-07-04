"use client";

"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { Code2, Palette, Rocket, Wrench } from "lucide-react";

import Counter from "@/components/animated/counter";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animated/stagger-container";
import SectionHeader from "@/components/sections/_section-header";
import BlobBackground from "@/components/animated/blob-background";
import PhotoFrame from "@/components/photo-frame";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion",
    color: "from-primary to-secondary",
  },
  {
    icon: Rocket,
    title: "Backend & APIs",
    description:
      "Node.js, Express, Python, REST APIs, JWT, sessions, MVC pattern",
    color: "from-secondary to-primary",
  },
  {
    icon: Wrench,
    title: "Databases & DevOps",
    description: "MongoDB, MySQL, PostgreSQL, Prisma, Docker, GridFS, Git",
    color: "from-primary-container to-secondary-container",
  },
  {
    icon: Palette,
    title: "Other Languages",
    description: "Java (Servlets, JSP), EJS templating, academic coursework",
    color: "from-secondary-container to-primary",
  },
];

const stats = [
  { label: "Public repos", value: 6, suffix: "+" },
  { label: "Stacks shipped", value: 5, suffix: "+" },
  { label: "Lines of code", value: 50, suffix: "k+" },
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

      <div className="mx-auto max-w-300">
        <SectionHeader
          eyebrow="Background"
          title={
            <>
              About <span className="accent-text-gradient">me</span>
            </>
          }
          subtitle="CSE student at SUST and full-stack developer turning real-world problems into scalable, end-to-end web apps."
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
            <div className="w-full max-w-md">
              <PhotoFrame loading="lazy" />
            </div>
          </motion.div>

          {/* Bio + Highlights Side */}
          <div className="order-1 flex flex-col md:order-2">
            <div className="space-y-6 text-on-surface-variant text-base leading-relaxed sm:text-lg">
              <p>
                I&apos;m{" "}
                <span className="font-semibold text-white">Roisul Islam</span>,
                a CSE student at Shahjalal University of Science and Technology
                (SUST) in Sylhet, Bangladesh. I ship production-grade web apps
                end-to-end — clean UI, scalable APIs, and databases that
                don&apos;t buckle under pressure.
              </p>
              <p>
                My core toolkit is the MERN stack (MongoDB, Express, React,
                Node) plus Next.js 15, TypeScript, Python, Docker, MySQL, and
                Git. I&apos;ve also built enterprise coursework projects with
                Java Servlets + JSP, and I love picking up new tooling as the
                problem demands.
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
                    className={`absolute inset-x-0 top-0 h-px bg-linear-to-r ${item.color} opacity-60`}
                  />
                  <div
                    className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white shadow-lg`}
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
