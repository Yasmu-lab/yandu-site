"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { useRef } from "react";

import { Eyebrow, Headline } from "@/components/headline";
import { Reveal } from "@/components/motion/reveal";
import { FEATURED_PROJECT, WORK_INTRO, WORK_NEXT_NOTE } from "@/content/site";
import { fadeUp } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

function ProjectImage() {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useSafeReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const badgeX = useMotionValue(0);
  const badgeY = useMotionValue(0);
  const springX = useSpring(badgeX, { stiffness: 260, damping: 26 });
  const springY = useSpring(badgeY, { stiffness: 260, damping: 26 });

  function onPointerMove(e: PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    badgeX.set(e.clientX - rect.left);
    badgeY.set(e.clientY - rect.top);
  }

  return (
    <Link
      href={FEATURED_PROJECT.href}
      target="_blank"
      rel="noopener noreferrer"
      ref={containerRef}
      onPointerMove={onPointerMove}
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-vault-ink"
    >
      <span className="absolute top-5 left-5 z-10 rounded-full bg-vault-ink/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-bone backdrop-blur-sm">
        {FEATURED_PROJECT.flag}
      </span>

      <motion.div className="absolute inset-[-4%]" style={reduceMotion ? undefined : { y: imageY }}>
        <Image
          src={FEATURED_PROJECT.image.src}
          alt={FEATURED_PROJECT.image.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-left transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-vault-ink/0 transition-colors duration-300 group-hover:bg-vault-ink/25" />

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-bone px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-vault-ink opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:flex"
        style={{ x: springX, y: springY }}
      >
        {FEATURED_PROJECT.cta}
        <span className="accent-mark" />
      </motion.span>
    </Link>
  );
}

export function Work() {
  return (
    <section id="trabalho" className="bg-bone px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow className="mb-5">{WORK_INTRO.eyebrow}</Eyebrow>
        <Headline segments={WORK_INTRO.headline} className="max-w-xl" />
        <Reveal variants={fadeUp} delay={0.12} className="mt-5">
          <p className="max-w-md text-base leading-relaxed text-charcoal">{WORK_INTRO.paragraph}</p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.1} className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <ProjectImage />

          <div className="flex flex-col justify-center">
            <h3 className="font-[family-name:var(--font-display)] text-3xl italic tracking-[-0.01em] text-vault-ink">
              {FEATURED_PROJECT.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal">{FEATURED_PROJECT.summary}</p>

            <dl className="mt-8 space-y-5 border-t border-silver-veil/30 pt-6">
              {FEATURED_PROJECT.details.map((detail) => (
                <div key={detail.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-charcoal">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-charcoal">{detail.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-2">
              {FEATURED_PROJECT.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-silver-veil/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={FEATURED_PROJECT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-vault-ink underline decoration-silver-veil/60 underline-offset-4 transition-colors hover:decoration-vault-ink"
            >
              {FEATURED_PROJECT.cta}
              <span className="accent-mark" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.1} className="mt-10 border-t border-silver-veil/30 pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-charcoal/70">{WORK_NEXT_NOTE}</p>
        </Reveal>
      </div>
    </section>
  );
}
