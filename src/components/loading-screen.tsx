"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let mounted = true;

    const start = performance.now();
    const duration = 1700;

    const tick = (now: number) => {
      if (!mounted) return;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.floor(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => mounted && setDone(true), 200);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
          aria-label="Loading portfolio"
        >
          {/* Animated gradient rings */}
          <div className="relative mb-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="h-24 w-24 rounded-full border-2 border-transparent border-t-primary border-r-secondary"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary-container border-l-secondary-container"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary"
              >
                <Code2 size={32} strokeWidth={2.2} />
              </motion.div>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-2xl font-extrabold tracking-tight text-white"
          >
            <span className="accent-text-gradient">Crafting</span> your experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-xs font-label uppercase tracking-[0.4em] text-on-surface-variant"
          >
            Loading interface
          </motion.p>

          {/* Progress bar */}
          <div className="mt-10 h-1 w-64 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="h-full accent-gradient"
            />
          </div>
          <span className="mt-3 font-mono text-xs text-on-surface-variant">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}