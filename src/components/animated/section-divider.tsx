"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export default function SectionDivider({
  label,
  className,
}: SectionDividerProps) {
  return (
    <div className={`relative w-full py-4 ${className ?? ""}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto h-px w-full max-w-[1200px] origin-left bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      {label && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-surface-container-low px-4 py-1 text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
