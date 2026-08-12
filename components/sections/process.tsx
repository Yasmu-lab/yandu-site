"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { Eyebrow, Headline } from "@/components/headline";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PROCESS_INTRO, PROCESS_STEPS } from "@/content/site";
import { fadeUp } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function Process() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="processo" className="bg-ash-mist px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[900px]">
        <Eyebrow className="mb-5">{PROCESS_INTRO.eyebrow}</Eyebrow>
        <Headline segments={PROCESS_INTRO.headline} className="max-w-xl" />
        <Reveal variants={fadeUp} delay={0.12} className="mt-5">
          <p className="max-w-md text-base leading-relaxed text-charcoal">{PROCESS_INTRO.paragraph}</p>
        </Reveal>

        <div ref={railRef} className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-silver-veil/30 md:left-[19px]" aria-hidden="true" />
          <motion.div
            className="absolute top-0 left-[15px] w-px origin-top bg-vault-ink md:left-[19px]"
            style={
              reduceMotion
                ? { height: "100%" }
                : { height: "100%", scaleY: scrollYProgress }
            }
            aria-hidden="true"
          />

          <RevealGroup className="flex flex-col gap-12">
            {PROCESS_STEPS.map((step) => (
              <RevealItem key={step.number} className="grid grid-cols-[32px_1fr] gap-6 md:grid-cols-[40px_1fr] md:gap-10">
                <span className="font-mono text-sm text-charcoal">{step.number}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl italic tracking-[-0.01em] text-vault-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-charcoal">{step.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
