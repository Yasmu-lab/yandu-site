"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import type { ProcessStep } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { cn } from "@/lib/utils";

const GRADIENT_STOPS = ["#6B8E6E", "#84925F", "#9C8F55", "#C68A46", "#E0793C"];

export function ProcessStepCard({
  step,
  index,
  total,
}: {
  step: ProcessStep;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { margin: "-35% 0px -35% 0px" });
  const borderColor = GRADIENT_STOPS[Math.min(index, GRADIENT_STOPS.length - 1)];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_YANDU }}
      style={{ borderLeftColor: borderColor }}
      className={cn(
        "flex items-start gap-5 rounded-lg border-l-[3px] bg-sage p-6 transition-[transform,box-shadow,background-color] duration-300",
        active && "-translate-y-0.5 bg-[#E4E7D8] shadow-[0_16px_30px_rgba(31,61,43,0.14)] border-l-[5px]",
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-heading text-sm font-bold text-cream transition-transform duration-300",
          active && "scale-[1.12] shadow-[0_0_0_6px_rgba(224,121,60,0.15)]",
        )}
        aria-hidden="true"
      >
        {index + 1}
      </span>
      <div>
        <p className="mb-1 font-mono text-[11px] text-moss-text">
          {step.step} / {String(total).padStart(2, "0")}
        </p>
        <h3 className="mb-1.5 font-heading text-[17.5px] font-bold text-forest">{step.title}</h3>
        <p className="text-[13.5px] text-ink/85">{step.description}</p>
      </div>
    </motion.div>
  );
}
