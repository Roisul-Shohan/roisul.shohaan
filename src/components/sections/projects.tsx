'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';
import { FaNewspaper, FaBookOpen, FaProjectDiagram } from 'react-icons/fa';
import { ExternalLink, Github, Code2 } from 'lucide-react';

import FadeUp from '@/components/animated/fade-up';
import TiltCard from '@/components/animated/tilt-card';
import Magnetic from '@/components/animated/magnetic';
import StaggerContainer, { staggerItemVariants } from '@/components/animated/stagger-container';
import BlobBackground from '@/components/animated/blob-background';

interface Project {
    title: string;
    description: string;
    tags: { name: string; icon: React.ReactNode; color: string }[];
    liveUrl: string;
    repoUrl: string;
    glow: string;
    accent: string;
    emojiBg: React.ReactNode;
}

const projects: Project[] = [
    {
        title: 'SkillSphere',
        description:
            'A skill exchange platform where users can post available skills and request lessons. Built with a fully responsive UI and dynamic category filtering.',
        tags: [
            { name: 'React', icon: <SiReact />, color: 'text-[#61dafb]' },
            { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#38bdf8]' },
            { name: 'JavaScript', icon: <SiJavascript />, color: 'text-[#f7df1e]' },
        ],
        liveUrl: 'https://skill-exchange-2cd09.web.app',
        repoUrl: 'https://github.com/isratsamanta21/skill-exchange-app',
        glow: 'from-primary/40 via-secondary/20 to-transparent',
        accent: 'from-primary to-secondary',
        emojiBg: <FaProjectDiagram />,
    },
    {
        title: 'Dragon News',
        description:
            'A modern news portal featuring category filtering, article details, and a clean reading layout inspired by premium news apps.',
        tags: [
            { name: 'React', icon: <SiReact />, color: 'text-[#61dafb]' },
            { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#38bdf8]' },
            { name: 'JavaScript', icon: <SiJavascript />, color: 'text-[#f7df1e]' },
        ],
        liveUrl: 'https://dragon-news-pro.firebaseapp.com',
        repoUrl: 'https://github.com/isratsamanta21/dragon-news-app',
        glow: 'from-secondary/40 via-primary/20 to-transparent',
        accent: 'from-secondary to-primary',
        emojiBg: <FaNewspaper />,
    },
    {
        title: 'Book Vibe',
        description:
            'A vibrant book-listing experience with favorites, sorting, and reading lists. Designed to celebrate the joy of reading.',
        tags: [
            { name: 'React', icon: <SiReact />, color: 'text-[#61dafb]' },
            { name: 'CSS', icon: <SiTailwindcss />, color: 'text-[#38bdf8]' },
            { name: 'JavaScript', icon: <SiJavascript />, color: 'text-[#f7df1e]' },
        ],
        liveUrl: 'https://endearing-fairy-007020.netlify.app',
        repoUrl: 'https://github.com/isratsamanta21/Book-vibe-App',
        glow: 'from-primary/40 via-secondary/30 to-transparent',
        accent: 'from-primary to-secondary-container',
        emojiBg: <FaBookOpen />,
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden py-28 px-6 md:px-12 scroll-mt-20"
        >
            <BlobBackground variant="compact" />

            <div className="mx-auto max-w-[1200px]">
                <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-primary font-label md:text-sm">
                        Selected Work
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                        Featured <span className="accent-text-gradient">projects</span>
                    </h2>
                    <p className="mt-5 text-base text-on-surface-variant sm:text-lg">
                        A small selection of side projects that helped me grow as a frontend developer.
                    </p>
                </FadeUp>

                <StaggerContainer
                    className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
                    stagger={0.12}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={staggerItemVariants}
                            className="h-full"
                        >
                            <TiltCard intensity={7} glow className="h-full">
                                <div className="glass-card group relative h-full overflow-hidden rounded-3xl border-white/10 p-7 flex flex-col">
                                    {/* Glow */}
                                    <div
                                        className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.glow} blur-3xl opacity-70 transition-opacity group-hover:opacity-100`}
                                    />
                                    <div
                                        className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent} opacity-80`}
                                    />

                                    {/* Logo placeholder */}
                                    <div className="relative mb-5 flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 border border-white/5">
                                        <div className="grid-bg absolute inset-0 opacity-30" />
                                        <div
                                            className={`text-6xl bg-gradient-to-br ${project.accent} bg-clip-text text-transparent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                                        >
                                            {project.emojiBg}
                                        </div>
                                    </div>

                                    <h3 className="font-display text-xl font-extrabold text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag.name}
                                                className={`flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-semibold text-white/80 ${tag.color}`}
                                            >
                                                <span className="text-sm">{tag.icon}</span>
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 flex items-center gap-2.5">
                                        <Magnetic strength={0.3}>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(192,103,255,0.6)] transition-all hover:shadow-[0_10px_30px_-8px_rgba(192,103,255,0.8)]"
                                            >
                                                <ExternalLink size={15} />
                                                Live Demo
                                            </a>
                                        </Magnetic>
                                        <Magnetic strength={0.3}>
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="group/btn relative inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/25"
                                                aria-label={`${project.title} source code`}
                                            >
                                                <Github size={15} />
                                            </a>
                                        </Magnetic>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* View more callout */}
                <FadeUp className="mt-14 text-center" delay={0.2}>
                    <Magnetic strength={0.2}>
                        <a
                            href="https://github.com/isratsamanta21"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 rounded-full glass-card border-white/15 px-6 py-3 text-sm font-bold text-white transition-all hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(192,103,255,0.5)]"
                        >
                            <Code2 size={16} className="text-primary" />
                            View more on GitHub
                        </a>
                    </Magnetic>
                </FadeUp>
            </div>
        </section>
    );
}
