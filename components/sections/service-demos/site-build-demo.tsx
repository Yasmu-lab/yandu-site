"use client";

import { motion } from "framer-motion";

import { EASE_YANDU, viewportOnce } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const block = {
  hidden: { opacity: 0, scaleX: 0.3 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: EASE_YANDU },
  },
};

/** Sites: a page assembling itself, block by block, inside a browser frame. */
export function SiteBuildDemo() {
  return (
    <div className="overflow-hidden rounded-lg border border-forest/10 bg-cream">
      <div className="flex items-center gap-1.5 border-b border-forest/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-forest/20" />
        <span className="h-2 w-2 rounded-full bg-forest/20" />
        <span className="h-2 w-2 rounded-full bg-forest/20" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={container}
        className="space-y-2 p-4"
      >
        <motion.div variants={block} className="h-10 w-full origin-left rounded bg-moss/30" />
        <motion.div variants={block} className="h-2.5 w-4/5 origin-left rounded-full bg-forest/20" />
        <motion.div variants={block} className="h-2.5 w-3/5 origin-left rounded-full bg-forest/20" />
        <motion.div variants={block} className="h-6 w-1/3 origin-left rounded bg-marigold/70" />
      </motion.div>
    </div>
  );
}
