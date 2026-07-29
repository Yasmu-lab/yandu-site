"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { SectionHeading } from "@/components/section-heading";
import { PROCESS_STEPS } from "@/content/site";

import { ProcessStepCard } from "./process-step";

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.35"],
  });
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="processo" className="px-6 py-22 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          eyebrow="Como cada projeto acontece"
          title="Processo"
          lead="Cinco etapas reais, sem atalho, do primeiro entendimento ao deploy em produção."
          className="mb-12"
        />

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[56px_1fr]">
          <div className="sticky top-[110px] hidden h-[min(360px,60vh)] justify-center md:flex">
            <div className="relative h-full w-[3px] overflow-hidden rounded-full bg-forest/10">
              <motion.div
                style={{ scaleY: fillScale }}
                className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-gradient-to-b from-moss to-marigold"
              />
            </div>
          </div>

          <div ref={trackRef} className="flex flex-col gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStepCard key={step.step} step={step} index={i} total={PROCESS_STEPS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
