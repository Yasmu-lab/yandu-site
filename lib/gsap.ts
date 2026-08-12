import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// registerPlugin is idempotent, so repeated module evaluation is harmless.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const EASE = "power3.out";

/** Shared scroll-reveal defaults, so every fold enters with one rhythm. */
export const REVEAL_FROM = { opacity: 0, y: 34 } as const;
export const REVEAL_TO = { opacity: 1, y: 0, duration: 0.9, ease: EASE } as const;

/** The point in the viewport where a fold is considered "entered". */
export const REVEAL_START = "top 82%";
