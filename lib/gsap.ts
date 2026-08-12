import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// registerPlugin is idempotent, so repeated module evaluation is harmless.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };

export const EASE = "power3.out";

export const REVEAL_FROM = { opacity: 0, y: 26 } as const;
export const REVEAL_TO = { opacity: 1, y: 0, duration: 0.7, ease: EASE } as const;

/**
 * Folds enter well before their midpoint reaches the viewport. Triggering at
 * the bottom edge is what keeps the page from showing empty space while
 * content is still waiting to animate in.
 */
export const REVEAL_START = "top 92%";
