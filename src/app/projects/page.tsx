import Link from "next/link";

import BlobBackground from "@/components/animated/blob-background";
import FadeUp from "@/components/animated/fade-up";
import ProjectCard from "@/components/project-card";
import { allProjects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden px-6 py-28 scroll-mt-20 md:px-12">
      <BlobBackground variant="compact" />

      <div className="mx-auto max-w-300">
        <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block font-label text-xs font-bold uppercase tracking-[0.4em] text-primary md:text-sm">
            All Projects
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Full <span className="accent-text-gradient">portfolio</span>
          </h1>
          <p className="mt-5 text-base text-on-surface-variant sm:text-lg">
            Every project in one place — including the extra work I keep off the
            homepage.
          </p>
        </FadeUp>

        <div className="grid gap-7 md:grid-cols-2">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:border-primary/40 hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
