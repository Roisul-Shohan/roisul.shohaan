"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number; // seconds
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  className,
  reverse = false,
  speed = 35,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
      style={
        {
          "--marquee-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 gap-8 pr-8 will-change-transform",
          reverse ? "animate-[marquee-reverse_var(--marquee-duration)_linear_infinite]" : "animate-[marquee_var(--marquee-duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 gap-8 pr-8 will-change-transform",
          reverse ? "animate-[marquee-reverse_var(--marquee-duration)_linear_infinite]" : "animate-[marquee_var(--marquee-duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
