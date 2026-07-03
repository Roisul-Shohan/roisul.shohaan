"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingEffect({
  words,
  className,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 1400,
}: TypingEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && text === "") {
      const advance = () => {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      };
      if (typeof queueMicrotask === "function") queueMicrotask(advance);
      else timer = setTimeout(advance, 0);
    } else {
      timer = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.substring(0, prev.length - 1)
              : current.substring(0, prev.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className} aria-live="polite">
      <motion.span
        key={text}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        {text}
      </motion.span>
      <span className="inline-block w-[2px] h-[1em] align-middle ml-1 bg-primary animate-pulse" />
    </span>
  );
}
