"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlobBackgroundProps {
  className?: string;
  variant?: "default" | "compact";
}

export default function BlobBackground({
  className,
  variant = "default",
}: BlobBackgroundProps) {
  if (variant === "compact") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className,
        )}
      >
        <motion.div
          className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 60, -20, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
          animate={{ x: [0, -50, 30, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <motion.div
        className="absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] h-[450px] w-[450px] rounded-full bg-secondary/15 blur-[130px]"
        animate={{ x: [0, -100, 50, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-tertiary/10 blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
