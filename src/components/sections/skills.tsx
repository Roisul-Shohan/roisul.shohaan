'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaGitAlt } from 'react-icons/fa6';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiPostgresql, SiTypescript, SiPrisma, SiJsonwebtokens, SiMysql, SiDocker } from 'react-icons/si';
import { IconType } from 'react-icons';

import FadeUp from '@/components/animated/fade-up';
import Marquee from '@/components/animated/marquee';
import TiltCard from '@/components/animated/tilt-card';
import Counter from '@/components/animated/counter';
import BlobBackground from '@/components/animated/blob-background';

interface TechItem {
    name: string;
    icon: IconType;
    color: string;
    category: 'frontend' | 'backend' | 'tools';
}

const techItems: TechItem[] = [
    { name: 'React 19', icon: FaReact, color: 'text-[#61dafb]', category: 'frontend' },
    { name: 'Next.js 15', icon: SiNextdotjs, color: 'text-white', category: 'frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178c6]', category: 'frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#38bdf8]', category: 'frontend' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', category: 'backend' },
    { name: 'Express.js', icon: SiExpress, color: 'text-white/80', category: 'backend' },
    { name: 'Python', icon: FaPython, color: 'text-[#3776ab]', category: 'backend' },
    { name: 'Java', icon: FaJava, color: 'text-[#ed8b00]', category: 'backend' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47a248]', category: 'backend' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479a1]', category: 'backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#336791]', category: 'backend' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-[#2d3748]', category: 'backend' },
    { name: 'Docker', icon: SiDocker, color: 'text-[#2496ed]', category: 'tools' },
    { name: 'Git', icon: FaGitAlt, color: 'text-[#f05032]', category: 'tools' },
    { name: 'JWT Auth', icon: SiJsonwebtokens, color: 'text-[#d63aff]', category: 'tools' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white', category: 'tools' },
];

const marqueeStack = [
    'React 19', 'Next.js 15', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python', 'Java', 'MongoDB', 'MySQL', 'PostgreSQL', 'Prisma', 'Docker', 'Git', 'JWT', 'NextAuth.js', 'Vercel', 'GitHub',
];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    const frontendSkills = techItems.filter((i) => i.category === 'frontend');
    const backendSkills = techItems.filter((i) => i.category === 'backend');

    return (
        <div className="scroll-mt-20 relative">
            <BlobBackground variant="compact" />

            {/* 1. Tech Stack Grid Section */}
            <section id="tech" className="relative py-24 px-6 md:px-12 max-w-[1200px] mx-auto text-center border-b border-white/5">
                <FadeUp>
                    <span className="text-primary font-label font-bold tracking-[0.4em] uppercase mb-4 text-xs md:text-sm">
                        Core Toolkit
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-5 text-white leading-tight">
                        Tech <span className="accent-text-gradient">Stack</span>
                    </h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto mb-14 text-sm sm:text-base font-body">
                        The MERN stack plus Next.js, Python, Docker, MySQL, Git, and Java — the tools I reach for daily.
                    </p>
                </FadeUp>

                {/* Marquee ribbon */}
                <FadeUp delay={0.1} className="mb-14">
                    <div className="glass-card relative overflow-hidden rounded-2xl border-white/10 py-4">
                        <Marquee speed={32} className="[--gap:2.5rem]">
                            {marqueeStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="flex items-center gap-2.5 font-display text-base font-bold text-white/40 transition-colors hover:text-white sm:text-lg"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {tech}
                                </span>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent" />
                    </div>
                </FadeUp>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
                >
                    {techItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                className="h-full"
                            >
                                <TiltCard intensity={6} className="h-full">
                                    <div className="glass-card group relative h-full overflow-hidden rounded-2xl border-white/10 p-7 flex flex-col items-center justify-center gap-4 transition-shadow hover:shadow-[0_18px_40px_-15px_rgba(192,103,255,0.4)] cursor-default">
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                        <div className={`${item.color} text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110`}>
                                            <Icon />
                                        </div>
                                        <span className="font-bold text-sm sm:text-base text-white tracking-wide">{item.name}</span>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* 2. Categorized Skills Section */}
            <section id="skills" className="relative py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
                <FadeUp className="text-center mb-16">
                    <span className="text-secondary font-label font-bold tracking-[0.4em] uppercase mb-4 text-xs md:text-sm">
                        Frontend & Backend
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-5 text-white leading-tight">
                        Skills & <span className="accent-text-gradient">Stack</span>
                    </h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base font-body">
                        A clear breakdown of my frontend and backend strengths across multiple stacks.
                    </p>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-7">
                    {/* Frontend Card */}
                    <FadeUp delay={0.05}>
                        <TiltCard intensity={5} glow>
                            <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-lg border-white/10 h-full">
                                <FaReact
                                    size={120}
                                    className="absolute -top-2 -right-2 text-primary opacity-5 select-none pointer-events-none"
                                />

                                <h3 className="text-center text-primary font-display font-extrabold tracking-wider mb-10 text-lg sm:text-xl uppercase border-b border-white/10 pb-4">
                                    Frontend Development
                                </h3>

                                <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                                    {frontendSkills.map((skill) => {
                                        const Icon = skill.icon;
                                        return (
                                            <div key={skill.name} className="flex flex-col items-center gap-3 transition-transform hover:scale-105 group/item">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl group-hover/item:bg-primary/25 transition-all">
                                                    <Icon className={skill.color} />
                                                </div>
                                                <span className="font-body text-sm font-semibold text-white/80 group-hover/item:text-primary transition-colors">{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </TiltCard>
                    </FadeUp>

                    {/* Backend (Learning) Card */}
                    <FadeUp delay={0.15}>
                        <TiltCard intensity={5} glow>
                            <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-lg border-white/10 h-full">
                                <FaNodeJs
                                    size={120}
                                    className="absolute -top-2 -right-2 text-secondary opacity-5 select-none pointer-events-none"
                                />

                                <h3 className="text-center text-secondary font-display font-extrabold tracking-wider mb-10 text-lg sm:text-xl uppercase border-b border-white/10 pb-4">
                                    Backend & Databases
                                </h3>

                                <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                                    {backendSkills.map((skill) => {
                                        const Icon = skill.icon;
                                        return (
                                            <div key={skill.name} className="flex flex-col items-center gap-3 transition-transform hover:scale-105 group/item">
                                                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary text-2xl group-hover/item:bg-secondary/25 transition-all">
                                                    <Icon className={skill.color} />
                                                </div>
                                                <span className="font-body text-sm font-semibold text-white/80 group-hover/item:text-secondary transition-colors">{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </TiltCard>
                    </FadeUp>
                </div>

                {/* Quick stats */}
                <FadeUp className="mt-16" delay={0.2}>
                    <div className="glass-card rounded-3xl border-white/10 px-6 py-7 sm:px-10">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                                    <Counter value={16} suffix="+" />
                                </div>
                                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                                    Core skills
                                </p>
                            </div>
                            <div>
                                <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                                    <Counter value={2} />
                                </div>
                                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                                    Domains
                                </p>
                            </div>
                            <div>
                                <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                                    <Counter value={100} suffix="%" />
                                </div>
                                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                                    Hand-written
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>
        </div>
    );
}
