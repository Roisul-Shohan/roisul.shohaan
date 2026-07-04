"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Info, X } from "lucide-react";

import Magnetic from "@/components/animated/magnetic";
import TiltCard from "@/components/animated/tilt-card";
import { Button } from "@/components/ui/button";
import type { ProjectData } from "@/lib/projects";

interface ProjectCardProps {
  project: ProjectData;
  compact?: boolean;
}

export default function ProjectCard({
  project,
  compact = false,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const hasLive = Boolean(project.liveUrl);
  const hasRepo = Boolean(project.repoUrl);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <motion.div className="h-full">
        <TiltCard intensity={7} glow className="h-full">
          <div className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl border-white/10 p-7">
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-linear-to-br ${project.glow} blur-3xl opacity-70 transition-opacity group-hover:opacity-100`}
            />
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r ${project.accent} opacity-80`}
            />

            <div className="relative mb-5 flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-primary/15 to-secondary/15">
              <div className="grid-bg absolute inset-0 opacity-30" />
              <div
                className={`text-6xl bg-linear-to-br ${project.accent} bg-clip-text text-transparent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
              >
                {project.icon}
              </div>
            </div>

            <h3 className="font-display text-xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="mt-3 grow text-sm leading-relaxed text-on-surface-variant">
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.slice(0, compact ? 3 : 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Magnetic strength={0.3}>
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  className="rounded-xl px-4 py-2.5"
                  onClick={() => setOpen(true)}
                >
                  <Info size={15} />
                  Details
                </Button>
              </Magnetic>

              {hasLive && (
                <Magnetic strength={0.3}>
                  <Button
                    asChild
                    size="default"
                    className="rounded-xl px-4 py-2.5"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  </Button>
                </Magnetic>
              )}

              {hasRepo && (
                <Magnetic strength={0.3}>
                  <Button
                    asChild
                    size="default"
                    variant="ghost"
                    className="rounded-xl px-4 py-2.5"
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} source code`}
                    >
                      <Github size={15} />
                    </a>
                  </Button>
                </Magnetic>
              )}
            </div>
          </div>
        </TiltCard>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-surface/70 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-surface-container-high/95 p-6 shadow-2xl"
              initial={{ y: 20, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${project.accent} text-white`}
                >
                  <span className="text-3xl">{project.icon}</span>
                </div>
                <div>
                  <h4 className="font-display text-2xl font-extrabold text-white">
                    {project.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Project details
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      Overview
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      {project.overview}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      Key features
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-on-surface-variant">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      Tech stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {hasLive && (
                      <Button asChild className="rounded-xl px-5 py-2.5">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {hasRepo && (
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-xl px-5 py-2.5"
                      >
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Github size={15} />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
