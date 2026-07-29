"use client";

import { motion } from "framer-motion";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CAPACITIES } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function CapacitiesStrip() {
  return (
    <section aria-label="Capacidades" className="border-b border-black/[0.06] bg-cream px-6 py-10">
      <RevealGroup
        stagger={0.04}
        className="mx-auto flex max-w-[1080px] flex-wrap justify-center gap-2.5"
      >
        {CAPACITIES.map((tag) => (
          <RevealItem key={tag} variants={fadeUp}>
            <motion.span
              whileHover={{ y: -2 }}
              className="group inline-flex items-center rounded-full border border-moss/50 px-4.5 py-2.5 font-mono text-[13px] text-forest transition-colors hover:border-marigold-text hover:bg-marigold/[0.06]"
            >
              <span className="mr-2 h-[5px] w-[5px] rounded-full bg-marigold" />
              {tag}
            </motion.span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
