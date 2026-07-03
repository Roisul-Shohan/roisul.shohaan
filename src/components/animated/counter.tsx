"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motion = useMotionValue(0);
  const spring = useSpring(motion, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) =>
    Math.floor(v).toLocaleString(),
  );

  const [text, setText] = useState("0");

  useEffect(() => {
    if (!inView) return;
    motion.set(value);
  }, [inView, motion, value]);

  useEffect(() => {
    return display.on("change", (v) => setText(v));
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
