"use client";

import { motion } from "framer-motion";
import { Globe, Layers, PenTool, Workflow } from "lucide-react";

import type { Service } from "@/content/site";
import { cn } from "@/lib/utils";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const ICONS = {
  sites: Globe,
  sistemas: Layers,
  automacoes: Workflow,
  "ux-ui": PenTool,
} as const;

const ICON_HOVER_CLASS: Record<string, string> = {
  sites: "group-hover:rotate-12",
  sistemas: "group-hover:-translate-y-0.5 group-hover:scale-110",
  automacoes: "",
  "ux-ui": "group-hover:-rotate-6 group-hover:scale-105",
};

export function ServiceTile({ service, index }: { service: Service; index: number }) {
  const reduceMotion = useSafeReducedMotion();
  const Icon = ICONS[service.slug as keyof typeof ICONS] ?? Globe;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_YANDU, delay: index * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-forest/10 bg-white/40 p-7 shadow-[0_10px_28px_rgba(31,61,43,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(31,61,43,0.14)]"
    >
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-marigold/0 blur-2xl transition-colors duration-500 group-hover:bg-marigold/20"
      />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-forest text-cream">
        <Icon
          aria-hidden
          size={22}
          className={cn("transition-transform duration-300", ICON_HOVER_CLASS[service.slug])}
        />
        {service.slug === "automacoes" ? (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-lg border-2 border-dashed border-marigold/70 opacity-0 group-hover:opacity-100"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        ) : null}
      </div>

      <div>
        <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.08em] text-marigold-text">
          {service.short}
        </p>
        <h3 className="font-heading text-xl font-bold text-forest">{service.title}</h3>
      </div>
      <p className="text-[14.5px] text-ink/85">{service.description}</p>
    </motion.article>
  );
}
