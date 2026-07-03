"use client";

import FadeUp from "@/components/animated/fade-up";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <FadeUp
      className={`mb-16 max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-primary font-label md:text-sm">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-on-surface-variant sm:text-lg">
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}
