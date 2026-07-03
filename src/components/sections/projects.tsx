'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiJavascript,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { LuGraduationCap, LuShoppingCart, LuBrain, LuBookOpen } from 'react-icons/lu';
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
        title: 'CareerSphere',
        description:
            'AI-powered career development platform on Next.js 15 + React 19 with NextAuth.js, Prisma & PostgreSQL. Features AI interview prep, resume builder, cover letter generator, and a professional community feed.',
        tags: [
            { name: 'Next.js 15', icon: <SiNextdotjs />, color: 'text-white' },
            { name: 'React 19', icon: <SiReact />, color: 'text-[#61dafb]' },
            { name: 'Prisma + PostgreSQL', icon: <SiPrisma />, color: 'text-[#2d3748]' },
        ],
        liveUrl: 'https://career-sphere-ik2l.vercel.app/',
        repoUrl: 'https://github.com/Roisul-Shohan/CAREER-SPHERE',
        glow: 'from-primary/40 via-secondary/20 to-transparent',
        accent: 'from-primary to-secondary',
        emojiBg: <LuBrain />,
    },
    {
        title: 'SCATCH — E-Commerce',
        description:
            'Full-stack e-commerce app with Express.js, MongoDB, EJS templating, JWT auth, sessions, and Multer image uploads. Includes shopping cart, product management, and user profile editing.',
        tags: [
            { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-[#339933]' },
            { name: 'Express.js', icon: <SiExpress />, color: 'text-white/80' },
            { name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#47a248]' },
        ],
        liveUrl: 'https://scatch-lac.vercel.app/',
        repoUrl: 'https://github.com/Roisul-Shohan/SCATCH',
        glow: 'from-secondary/40 via-primary/20 to-transparent',
        accent: 'from-secondary to-primary',
        emojiBg: <LuShoppingCart />,
    },
    {
        title: 'Learning Management System',
        description:
            'An LMS platform with student & instructor portals, GridFS video streaming with byte-range support, progress tracking, quizzes, and admin-approved PDF certificates.',
        tags: [
            { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-[#339933]' },
            { name: 'Express', icon: <SiExpress />, color: 'text-white/80' },
            { name: 'MongoDB GridFS', icon: <SiMongodb />, color: 'text-[#47a248]' },
        ],
        liveUrl: 'https://learning-management-system-1-j300.onrender.com',
        repoUrl: 'https://github.com/Roisul-Shohan/Learning-Management-System',
        glow: 'from-primary/40 via-secondary/30 to-transparent',
        accent: 'from-primary to-secondary-container',
        emojiBg: <LuGraduationCap />,
    },
    {
        title: 'Course Management (Java)',
        description:
            'Role-based university course management system built with Java Servlets, JSP, and MongoDB. Separate admin / teacher / student portals with JWT auth, bcrypt password hashing, and Docker support.',
        tags: [
            { name: 'Java', icon: <FaJava />, color: 'text-[#ed8b00]' },
            { name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#47a248]' },
            { name: 'JWT Auth', icon: <SiJavascript />, color: 'text-[#f7df1e]' },
        ],
        liveUrl: 'https://course-management-system-vdic.onrender.com/',
        repoUrl: 'https://github.com/Roisul-Shohan/course-management-system',
        glow: 'from-secondary/40 via-primary/20 to-transparent',
        accent: 'from-secondary-container to-primary',
        emojiBg: <LuBookOpen />,
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
                        Production-grade apps I&apos;ve shipped with the MERN stack, Next.js 15, Prisma, and Java.
                    </p>
                </FadeUp>

                <StaggerContainer
                    className="grid gap-7 md:grid-cols-2"
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
                            href="https://github.com/Roisul-Shohan?tab=repositories"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 rounded-full glass-card border-white/15 px-6 py-3 text-sm font-bold text-white transition-all hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(192,103,255,0.5)]"
                        >
                            <Code2 size={16} className="text-primary" />
                            View all 14 repositories on GitHub
                        </a>
                    </Magnetic>
                </FadeUp>
            </div>
        </section>
    );
}
