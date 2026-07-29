"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

/**
 * Decorative background shape with a light scroll-linked parallax drift.
 * Purely presentational (aria-hidden) -- never carries content, so it's
 * safe to disable entirely under reduced motion.
 */
export function OrganicBlob({
  className,
  color = "var(--color-marigold)",
  speed = 60,
}: {
  className?: string;
  color?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10 blur-3xl", className)}
      style={{ y: reduceMotion ? 0 : y }}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full opacity-40">
        <path
          fill={color}
          d="M45.3,-58.6C58.5,-49.7,68.4,-34.5,72.6,-17.7C76.8,-0.9,75.2,17.5,67.1,31.9C59,46.3,44.4,56.7,28.5,63.5C12.6,70.3,-4.6,73.5,-21.2,70.1C-37.8,66.7,-53.8,56.7,-63.6,42.3C-73.4,27.9,-77,9.1,-74.1,-8.4C-71.2,-25.9,-61.8,-42.1,-48.4,-51.2C-35,-60.3,-17.5,-62.3,0.4,-62.8C18.3,-63.3,32.1,-67.5,45.3,-58.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
}
