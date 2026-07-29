import type { Transition, Variants } from "framer-motion";

/** Mirrors the --ease-yandu / --dur-* tokens in app/globals.css. */
export const EASE_YANDU: Transition["ease"] = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_YANDU },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_YANDU },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.base, ease: EASE_YANDU },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.base, ease: EASE_YANDU },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE_YANDU },
  },
};

export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: DURATION.slow, ease: EASE_YANDU },
  },
};

/** Stagger wrapper: put on a parent, children use `fadeUp`/etc. as `item`. */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const viewportOnce = { once: true, margin: "-15% 0px -15% 0px" } as const;
