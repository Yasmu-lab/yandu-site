"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import { HeroStage } from "@/components/hero/hero-stage";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { RotatingWord } from "@/components/motion/rotating-word";
import { Button } from "@/components/ui/button";
import { HERO, PROJECTS } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const stageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const featuredProject = PROJECTS[0];

  return (
    <section
      ref={ref}
      id="main-content"
      className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_50%_0%,#264a34_0%,#1F3D2B_45%,#142a1d_100%)] px-6 pb-28 pt-32 text-cream md:pb-40 md:pt-40"
    >
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          style={reduceMotion ? undefined : { y: parallaxY, opacity: fade }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_YANDU }}
            className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#9CBDA3]"
          >
            {HERO.eyebrow}
          </motion.p>

          <h1 className="max-w-3xl text-[clamp(42px,7.5vw,80px)] font-bold leading-[1.02] font-heading">
            <motion.span
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.7, ease: EASE_YANDU, delay: 0.12 }}
              className="block"
            >
              {HERO.prefix}
            </motion.span>
            <motion.span
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.7, ease: EASE_YANDU, delay: 0.22 }}
              className="block"
            >
              <RotatingWord words={HERO.rotatingWords} />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_YANDU, delay: 0.4 }}
            className="mx-auto mt-7 max-w-xl text-[17px] text-[#D9E5DB] md:mx-0"
          >
            {HERO.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_YANDU, delay: 0.6 }}
            className="mt-9 flex flex-wrap justify-center gap-3.5 md:justify-start"
          >
            <MagneticButton>
              <Button asChild variant="primary" size="lg">
                <a href={HERO.primaryCta.href}>{HERO.primaryCta.label}</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="secondary" size="lg">
                <a href={HERO.secondaryCta.href}>{HERO.secondaryCta.label}</a>
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={reduceMotion ? undefined : { y: stageParallaxY }}
          className="relative h-[340px] sm:h-[400px] md:h-[460px]"
        >
          <HeroStage
            src={featuredProject.image.src}
            alt={featuredProject.image.alt}
            className="relative h-full"
          />
        </motion.div>
      </div>

      <motion.a
        href="/#projetos"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown aria-hidden size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
