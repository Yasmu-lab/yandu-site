"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const INTERVAL_MS = 2400;

export function RotatingWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useSafeReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [words.length, reduceMotion]);

  if (reduceMotion) {
    return <span className="text-marigold-on-dark">{words[0]}</span>;
  }

  return (
    <span className="relative inline-grid justify-items-center text-center align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0em", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.6em", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 text-marigold-on-dark"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Reserves layout width for the longest word so the headline never reflows. */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {words.reduce((a, b) => (b.length > a.length ? b : a), "")}
      </span>
    </span>
  );
}
