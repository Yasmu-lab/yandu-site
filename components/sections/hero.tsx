"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import { MagneticButton } from "@/components/motion/magnetic-button";
import { OrganicBlob } from "@/components/motion/organic-blob";
import { RotatingWord } from "@/components/motion/rotating-word";
import { Button } from "@/components/ui/button";
import { HERO } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="main-content"
      className="relative overflow-hidden bg-forest px-6 pb-24 pt-28 text-center text-cream md:pb-32 md:pt-36"
    >
      <OrganicBlob
        className="left-[-10%] top-[-10%] h-[420px] w-[420px]"
        color="var(--color-moss)"
        speed={40}
      />
      <OrganicBlob
        className="right-[-15%] bottom-[-15%] h-[480px] w-[480px]"
        color="var(--color-marigold)"
        speed={70}
      />

      <motion.div
        style={reduceMotion ? undefined : { y: parallaxY, opacity: fade }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_YANDU }}
          className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#9CBDA3]"
        >
          {HERO.eyebrow}
        </motion.p>

        <h1 className="mx-auto max-w-3xl text-[clamp(38px,7vw,72px)] font-bold leading-[1.05] font-heading">
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
          className="mx-auto mt-7 max-w-xl text-[17px] text-[#D9E5DB]"
        >
          {HERO.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_YANDU, delay: 0.6 }}
          className="mt-9 flex flex-wrap justify-center gap-3.5"
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

      <motion.a
        href="#projetos"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream"
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
