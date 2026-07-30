"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import { SectionHeading } from "@/components/section-heading";
import { PROCESS_STEPS } from "@/content/site";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

import { ProcessMobileList } from "./process-mobile-list";
import { ProcessPanel, ProcessProgress } from "./process-panel";

const STEP_VH = 70;

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pinning a long scroll range only pays off when the crossfade between
  // steps is actually visible -- with reduced motion preferred, that payoff
  // disappears but the long "dead" scroll distance wouldn't, so both mobile
  // and reduced-motion visitors get the accessible linear list instead.
  if (reduceMotion) {
    return (
      <section id="processo" className="px-6 py-22 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <SectionHeading
            eyebrow="Como cada projeto acontece"
            title="Como trabalhamos"
            lead="Sem atalho e sem passo pulado: seis etapas reais, uma de cada vez."
            className="mb-12"
          />
          <ProcessMobileList />
        </div>
      </section>
    );
  }

  return (
    <section id="processo">
      <div className="px-6 py-22 md:hidden">
        <div className="mx-auto max-w-[1080px]">
          <SectionHeading
            eyebrow="Como cada projeto acontece"
            title="Como trabalhamos"
            lead="Sem atalho e sem passo pulado: seis etapas reais, uma de cada vez."
            className="mb-12"
          />
          <ProcessMobileList />
        </div>
      </div>

      <div ref={containerRef} className="relative hidden md:block" style={{ height: `${PROCESS_STEPS.length * STEP_VH}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-forest px-6">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#9CBDA3]">
              Como cada projeto acontece
            </p>
            <h2 className="mb-2 text-[clamp(22px,3vw,30px)] font-bold font-heading text-cream">
              Como trabalhamos
            </h2>
            <div className="relative mt-8 h-[220px] md:h-[260px]">
              {PROCESS_STEPS.map((step, i) => (
                <ProcessPanel
                  key={step.step}
                  step={step}
                  index={i}
                  total={PROCESS_STEPS.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
            <ProcessProgress scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
