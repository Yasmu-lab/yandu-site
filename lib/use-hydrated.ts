import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * True once the client has hydrated. Lets a component render the exact
 * server markup on its first client pass (avoiding a hydration mismatch)
 * and only branch on client-only state (media queries, etc.) afterward.
 */
export function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
