'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

import SectionHeader from '@/components/sections/_section-header';
import BlobBackground from '@/components/animated/blob-background';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface EducationItem {
    title: string;
    institute: string;
    location: string;
    period: string;
    description: string;
    grade: string;
    color: string;
    glow: string;
}

const education: EducationItem[] = [
    {
        title: 'Diploma in Engineering',
        institute: 'Mymensingh Polytechnic Institute',
        location: 'Mymensingh, Bangladesh',
        period: '2023 — Present',
        description:
            'Currently pursuing a diploma focused on computer science fundamentals, software engineering principles, and modern web technologies.',
        grade: 'Running',
        color: 'from-primary to-secondary',
        glow: 'shadow-[0_0_30px_-10px_rgba(192,103,255,0.6)]',
    },
    {
        title: 'Secondary School Certificate (SSC)',
        institute: 'Bhabanipur Adarsha High School',
        location: 'Mymensingh, Bangladesh',
        period: '2020 — 2022',
        description:
            'Completed SSC with strong academic foundation in science, mathematics, and computer studies. This sparked my journey into programming.',
        grade: 'GPA 4.28',
        color: 'from-secondary to-primary',
        glow: 'shadow-[0_0_30px_-10px_rgba(255,171,227,0.6)]',
    },
];

export default function Education() {
    const timelineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = timelineRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            // Draw the connecting vertical line
            gsap.fromTo(
                '.education-line-fill',
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.education-timeline',
                        start: 'top 70%',
                        end: 'bottom 30%',
                        scrub: 1,
                    },
                },
            );

            // Reveal each entry
            gsap.utils.toArray<HTMLElement>('.education-item').forEach((item) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    },
                );

                gsap.fromTo(
                    item.querySelector('.education-node'),
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    },
                );
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="education"
            ref={timelineRef}
            className="relative overflow-hidden py-28 px-6 md:px-12 scroll-mt-20"
        >
            <BlobBackground variant="compact" />

            <div className="mx-auto max-w-[1100px]">
                <SectionHeader
                    eyebrow="Journey"
                    title={
                        <>
                            My <span className="accent-text-gradient">education</span>
                        </>
                    }
                    subtitle="A timeline of my academic path and the milestones that shaped me as a developer."
                />

                <div className="education-timeline relative">
                    {/* Center vertical line */}
                    <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-white/5 md:left-1/2 md:block" />
                    <div className="education-line-fill pointer-events-none absolute left-6 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-primary via-secondary to-primary md:left-1/2 md:block" />

                    {/* Mobile line */}
                    <div className="pointer-events-none absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/60 to-primary/60 md:hidden" />

                    <ul className="flex flex-col gap-10 md:gap-16">
                        {education.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <li
                                    key={item.title}
                                    className={`education-item relative flex flex-col md:flex-row md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Card */}
                                    <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                        <div className={`glass-card group relative overflow-hidden rounded-3xl border-white/10 p-6 transition-shadow hover:${item.glow} sm:p-8`}>
                                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`} />

                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold text-on-surface-variant">
                                                <Calendar size={12} className="text-primary" />
                                                {item.period}
                                            </span>

                                            <h3 className="mt-4 font-display text-xl font-extrabold text-white sm:text-2xl">
                                                {item.title}
                                            </h3>
                                            <p className={`mt-2 text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                                {item.institute}
                                            </p>

                                            <div className={`mt-3 flex items-center gap-1.5 text-xs text-on-surface-variant sm:text-sm ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <MapPin size={13} />
                                                {item.location}
                                            </div>

                                            <p className={`mt-4 text-sm leading-relaxed text-on-surface-variant`}>
                                                {item.description}
                                            </p>

                                            <div className={`mt-5 flex items-center gap-2 text-xs font-bold text-white ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <BookOpen size={14} className="text-primary" />
                                                <span>Grade: {item.grade}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Node */}
                                    <div className="education-node absolute left-6 top-8 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                                        <div className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-lg ring-4 ring-surface`}>
                                            <GraduationCap size={18} className="text-white" />
                                            <span className={`absolute inset-0 animate-ping rounded-full bg-gradient-to-br ${item.color} opacity-20`} />
                                        </div>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block md:w-1/2" />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
