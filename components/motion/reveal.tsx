"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: "div" | "span";
};

/**
 * Scroll-triggered reveal. Framer Motion's `useReducedMotion` preference is
 * honored globally via `MotionConfig reducedMotion="user"` in the root
 * layout, so this component needs no reduced-motion branching of its own.
 */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  itemVariants?: Variants;
};

/** Parent that staggers `RevealItem` children in as the group enters view. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: RevealGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(stagger)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  variants = fadeUp,
  className,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
