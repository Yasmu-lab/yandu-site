import { useReducedMotion } from "framer-motion";

import { useHydrated } from "@/lib/use-hydrated";

/**
 * Like Framer Motion's `useReducedMotion`, but safe to read directly into
 * `style`/`animate` props. `prefers-reduced-motion` is unknowable on the
 * server, so this always reports `false` until the client has hydrated,
 * guaranteeing the first client render matches the server-rendered HTML.
 */
export function useSafeReducedMotion() {
  const hydrated = useHydrated();
  const prefersReducedMotion = useReducedMotion();
  return hydrated && Boolean(prefersReducedMotion);
}
