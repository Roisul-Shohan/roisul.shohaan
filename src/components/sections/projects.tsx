"use client";

import FadeUp from "@/components/animated/fade-up";
import BlobBackground from "@/components/animated/blob-background";
import ProjectCard from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 scroll-mt-20 md:px-12"
    >
      <BlobBackground variant="compact" />

      <div className="mx-auto max-w-300">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block font-label text-xs font-bold uppercase tracking-[0.4em] text-primary md:text-sm">
            Selected Work
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Featured <span className="accent-text-gradient">projects</span>
          </h2>
          <p className="mt-5 text-base text-on-surface-variant sm:text-lg">
            Production-grade apps I&apos;ve shipped with the MERN stack, Next.js
            15, Java, and modern web tooling.
          </p>
        </FadeUp>

        <div className="grid gap-7 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>

        <FadeUp className="mt-14 text-center" delay={0.2}>
          <a
            href="/projects"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full glass-card border border-white/15 px-6 py-3 text-sm font-bold text-white transition-all hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(192,103,255,0.5)]"
          >
            View all projects
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
