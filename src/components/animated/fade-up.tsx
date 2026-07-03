"use client";

import { motion, type Variant, type Transition } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const transition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

const itemVariants: Record<string, Variant> = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition },
};

export default function FadeUp({
  children,
  delay = 0,
  y = 24,
  duration,
  className,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: duration ?? transition.duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { itemVariants };
