"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/motion/animated-counter";
import { EASE_YANDU, viewportOnce } from "@/lib/motion";

const BARS = [40, 70, 55, 90, 65];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const bar = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.5, ease: EASE_YANDU } },
};

/** Sistemas: a dashboard rendering itself -- numbers counting up, bars growing. */
export function DashboardDemo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={container}
      className="rounded-lg border border-forest/10 bg-cream p-4"
    >
      <div className="mb-3 flex gap-4">
        <div>
          <p className="font-heading text-lg font-bold text-forest">
            <AnimatedCounter value={128} />
          </p>
          <p className="font-mono text-[9px] uppercase tracking-wide text-moss-text">Pedidos</p>
        </div>
        <div>
          <p className="font-heading text-lg font-bold text-forest">
            <AnimatedCounter value={97} suffix="%" />
          </p>
          <p className="font-mono text-[9px] uppercase tracking-wide text-moss-text">No prazo</p>
        </div>
      </div>
      <div className="flex h-16 items-end gap-2">
        {BARS.map((h, i) => (
          <motion.div
            key={i}
            variants={bar}
            style={{ height: `${h}%` }}
            className="w-full origin-bottom rounded-t bg-gradient-to-t from-moss to-marigold"
          />
        ))}
      </div>
    </motion.div>
  );
}
