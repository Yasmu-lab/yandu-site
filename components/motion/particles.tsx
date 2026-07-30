"use client";

import { motion } from "framer-motion";

import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

// Fixed positions (not Math.random()) so server and client render the same
// markup -- randomizing at render time would cause a hydration mismatch.
const DOTS = [
  { x: "8%", y: "20%", size: 3, duration: 7, delay: 0 },
  { x: "18%", y: "62%", size: 2, duration: 9, delay: 1.2 },
  { x: "27%", y: "35%", size: 2, duration: 8, delay: 0.6 },
  { x: "40%", y: "12%", size: 3, duration: 10, delay: 2 },
  { x: "52%", y: "78%", size: 2, duration: 7.5, delay: 0.3 },
  { x: "63%", y: "22%", size: 2, duration: 8.5, delay: 1.6 },
  { x: "72%", y: "55%", size: 3, duration: 9.5, delay: 0.9 },
  { x: "84%", y: "15%", size: 2, duration: 7, delay: 2.4 },
  { x: "91%", y: "68%", size: 2, duration: 8, delay: 1.1 },
  { x: "15%", y: "85%", size: 2, duration: 9, delay: 1.8 },
  { x: "58%", y: "45%", size: 2, duration: 8, delay: 0.4 },
  { x: "78%", y: "88%", size: 3, duration: 10, delay: 1.4 },
] as const;

/** Discreet drifting light specks behind the Hero composition -- pure atmosphere, never content. */
export function Particles({ className }: { className?: string }) {
  const reduceMotion = useSafeReducedMotion();
  if (reduceMotion) return null;

  return (
    <div aria-hidden="true" className={className}>
      {DOTS.map((dot, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-cream"
          style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
