"use client";

import { motion } from "framer-motion";

import { EASE_YANDU, viewportOnce } from "@/lib/motion";

/**
 * Yandu's recurring brand motif: an organic line that resolves into a
 * structured frame -- "an idea becoming a working system." Reused across
 * Hero, Process and Contact so the same signature reappears throughout the
 * page instead of a generic decorative shape. Purely visual (aria-hidden);
 * the one-shot draw-in respects `prefers-reduced-motion` via the global
 * `MotionConfig` in the root layout, same as every other `whileInView` reveal.
 */
export function SignatureLine({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const stroke = tone === "dark" ? "#F6F3E9" : "#1F3D2B";
  const wave = tone === "dark" ? "#9CBDA3" : "#6B8E6E";
  const accent = "#E0793C";
  const rows = [
    { y: 104, x2: 814, delay: 1.3, opacity: 0.3 },
    { y: 128, x2: 786, delay: 1.4, opacity: 0.22 },
    { y: 152, x2: 802, delay: 1.5, opacity: 0.22 },
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMax slice"
      className={className}
    >
      <motion.path
        d="M0,158 C60,118 90,198 150,158 C210,118 240,198 300,158 C360,118 405,178 460,148"
        stroke={wave}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity={0.5}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: EASE_YANDU }}
      />
      <motion.path
        d="M460,148 C520,128 565,108 622,108"
        stroke={accent}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity={0.75}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, delay: 0.7, ease: EASE_YANDU }}
      />
      <motion.rect
        x="622"
        y="66"
        width="220"
        height="148"
        rx="14"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        opacity={0.45}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: 0.95, ease: EASE_YANDU }}
      />
      {rows.map((row) => (
        <motion.line
          key={row.y}
          x1="650"
          y1={row.y}
          x2={row.x2}
          y2={row.y}
          stroke={stroke}
          strokeWidth="2.5"
          opacity={row.opacity}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.35, delay: row.delay, ease: EASE_YANDU }}
        />
      ))}
      <motion.circle
        cx="814"
        cy="182"
        r="4.5"
        fill={accent}
        opacity={0.75}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.3, delay: 1.65, ease: EASE_YANDU }}
      />
    </svg>
  );
}
