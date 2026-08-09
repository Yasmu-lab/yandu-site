"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { HERO } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function Hero() {
  const reduceMotion = useSafeReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-vault-ink"
    >
      <div aria-hidden="true" className="hero-media absolute inset-0">
        {reduceMotion ? (
          <Image
            src={HERO.video.poster}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
        ) : (
          <video
            className="hero-video absolute inset-0 h-full w-full object-cover grayscale"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO.video.poster}
          >
            <source src={HERO.video.src} type="video/mp4" />
          </video>
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,17,26,0.55) 0%, rgba(15,17,26,0.25) 42%, rgba(15,17,26,0.7) 100%), linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0) 50%, rgba(0,0,0,0.25))",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-bone">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.15 }}
          className="font-mono text-sm uppercase tracking-[0.018em] text-silver-veil"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_YANDU, delay: 0.3 }}
          className="mt-4 font-[family-name:var(--font-display)] text-[clamp(48px,11vw,140px)] font-normal leading-none"
        >
          {HERO.mark}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.5 }}
          className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-silver-veil"
        >
          {HERO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.65 }}
          className="mt-10"
        >
          <Button asChild variant="ghost-dark" size="lg">
            <a href={HERO.cta.href}>{HERO.cta.label}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
