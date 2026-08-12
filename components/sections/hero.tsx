"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

import { Headline } from "@/components/headline";
import { Button } from "@/components/ui/button";
import { HERO } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function Hero() {
  const reduceMotion = useSafeReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 40, damping: 16, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 16, mass: 0.6 });
  const fieldX = useTransform(springX, (v) => `${v * 3}%`);
  const fieldY = useTransform(springY, (v) => `${v * 3}%`);

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      id="inicio"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-vault-ink px-6 pt-32 pb-10 md:px-10 md:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { x: fieldX, y: fieldY }}
        >
          <div className="hero-field" />
        </motion.div>
        <div className="hero-grid" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.14em] text-silver-veil"
        >
          {HERO.eyebrow}
        </motion.p>

        <Headline
          segments={HERO.headline}
          as="h1"
          size="hero"
          textClassName="text-bone mt-5 max-w-[16ch]"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.4 }}
          className="mt-7 max-w-lg text-base leading-relaxed text-silver-veil"
        >
          {HERO.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.52 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild variant="solid-light" size="lg">
            <a href={HERO.cta.href}>{HERO.cta.label}</a>
          </Button>
          <Button asChild variant="ghost-dark" size="lg">
            <a href={HERO.ctaSecondary.href}>{HERO.ctaSecondary.label}</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.7 }}
        className="relative z-10 mx-auto mt-16 flex w-full max-w-[1280px] flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t border-graphite pt-6"
      >
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {HERO.meta.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-silver-veil">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-bone">{item.value}</p>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="flex items-center gap-2 text-silver-veil">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Role</span>
          <span className="scroll-cue-dot inline-block h-1.5 w-1.5 rounded-full bg-electric-sky" />
        </div>
      </motion.div>
    </section>
  );
}
