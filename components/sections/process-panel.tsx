"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

import type { ProcessStep } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";

/**
 * One step's content within the pinned Process viewport. All panels stack
 * in the same slot and crossfade in/out as `scrollYProgress` sweeps through
 * this step's share of the pinned scroll range -- the section never moves,
 * only the content underneath it changes.
 */
export function ProcessPanel({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: ProcessStep;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const buffer = (end - start) * 0.22;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // useTransform clamps *within* its defined input range, but every panel's
  // active window only covers a slice of the full 0-1 scroll -- without an
  // explicit point at both domain edges (0 and 1), the value outside a
  // panel's own window is undefined behavior rather than a guaranteed hold
  // at the nearest keyframe. Anchoring 0 and 1 explicitly (skipping the
  // duplicate when a panel's own window already starts/ends there) makes
  // every panel's value fully defined across the whole scroll range.
  const points = [
    ...(start > 0 ? [0] : []),
    start,
    start + buffer,
    end - buffer,
    end,
    ...(end < 1 ? [1] : []),
  ];
  const enterValue = isFirst ? 1 : 0;
  const exitValue = isLast ? 1 : 0;
  const opacityValues = [
    ...(start > 0 ? [enterValue] : []),
    enterValue,
    1,
    1,
    exitValue,
    ...(end < 1 ? [exitValue] : []),
  ];
  const yEnter = isFirst ? 0 : 28;
  const yExit = isLast ? 0 : -28;
  const yValues = [
    ...(start > 0 ? [yEnter] : []),
    yEnter,
    0,
    0,
    yExit,
    ...(end < 1 ? [yExit] : []),
  ];

  const opacity = useTransform(scrollYProgress, points, opacityValues);
  const y = useTransform(scrollYProgress, points, yValues);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <p className="mb-4 font-mono text-sm text-marigold-on-dark">
        {step.step} / {String(total).padStart(2, "0")}
      </p>
      <h3 className="mb-5 max-w-lg text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.05] font-heading text-cream">
        {step.title}
      </h3>
      <p className="max-w-md text-[16px] text-[#D9E5DB]">{step.description}</p>
    </motion.div>
  );
}

export function ProcessProgress({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="relative mt-10 h-[3px] w-full max-w-md overflow-hidden rounded-full bg-cream/15">
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        transition={{ ease: EASE_YANDU }}
        className="h-full w-full bg-gradient-to-r from-moss to-marigold"
      />
    </div>
  );
}
