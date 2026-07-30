"use client";

import { motion } from "framer-motion";

import type { Service } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

import { AutomationFlowDemo } from "./service-demos/automation-flow-demo";
import { DashboardDemo } from "./service-demos/dashboard-demo";
import { IntegrationSyncDemo } from "./service-demos/integration-sync-demo";
import { SiteBuildDemo } from "./service-demos/site-build-demo";

const DEMOS = {
  sites: SiteBuildDemo,
  sistemas: DashboardDemo,
  automacoes: AutomationFlowDemo,
  integracoes: IntegrationSyncDemo,
} as const;

export function ServiceTile({ service, index }: { service: Service; index: number }) {
  const reduceMotion = useSafeReducedMotion();
  const Demo = DEMOS[service.slug as keyof typeof DEMOS];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_YANDU, delay: index * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="flex flex-col gap-4 rounded-xl border border-forest/10 bg-white/40 p-5 shadow-[0_10px_28px_rgba(31,61,43,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(31,61,43,0.14)]"
    >
      {Demo ? <Demo /> : null}
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
