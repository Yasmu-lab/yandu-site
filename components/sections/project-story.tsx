"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/site";
import { fadeUp, maskReveal, slideLeft, slideRight } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

/**
 * A single project told as a short story rather than a card: the problem
 * and the solution each get their own beat, then the real screen, then the
 * outcome. With only one real project today, this is the whole "Projetos"
 * section -- built so a second project just becomes a second `<ProjectStory>`
 * in the list, no restructuring needed.
 */
export function ProjectStory({ project, priority = false }: { project: Project; priority?: boolean }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { damping: 22, stiffness: 220 });
  const springRy = useSpring(ry, { damping: 22, stiffness: 220 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(360px circle at ${gx}% ${gy}%, rgba(224,121,60,0.18), transparent 70%)`,
  );

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 5);
    rx.set((0.5 - py) * 5);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <article className="flex flex-col gap-14 md:gap-20">
      <div className="flex flex-col items-start gap-4">
        <Reveal variants={fadeUp}>
          <span className="rounded-full bg-marigold px-3 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.06em] text-ink">
            {project.flag}
          </span>
        </Reveal>
        <Reveal variants={maskReveal}>
          <h3 className="text-[clamp(32px,5.5vw,60px)] font-bold leading-[1.05] font-heading text-forest">
            {project.title}
          </h3>
        </Reveal>
        <Reveal variants={fadeUp} delay={0.08}>
          <p className="max-w-xl text-[16px] text-ink/85">{project.description}</p>
        </Reveal>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal variants={slideLeft}>
          <div className="border-l-2 border-marigold/50 pl-6">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-marigold-text">
              O problema
            </p>
            <p className="text-[19px] leading-snug text-forest">{project.problem}</p>
          </div>
        </Reveal>
        <Reveal variants={slideRight} delay={0.1}>
          <div className="border-l-2 border-moss/60 pl-6">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-moss-text">
              O que fizemos
            </p>
            <p className="text-[19px] leading-snug text-forest">{project.solution}</p>
          </div>
        </Reveal>
      </div>

      <Reveal variants={maskReveal}>
        <motion.div
          ref={imgRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            rotateX: reduceMotion ? 0 : springRx,
            rotateY: reduceMotion ? 0 : springRy,
            transformPerspective: 1400,
          }}
          className="relative overflow-hidden rounded-2xl bg-forest shadow-[0_40px_80px_rgba(31,61,43,0.22)]"
        >
          <motion.div
            aria-hidden="true"
            style={{ background: glowBackground }}
            className="pointer-events-none absolute inset-0 z-10"
          />
          <div className="relative aspect-[1200/630] w-full">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 768px) 900px, 100vw"
              className="object-contain p-6 md:p-12"
              priority={priority}
            />
          </div>
        </motion.div>
      </Reveal>

      <div className="flex flex-wrap items-center justify-between gap-6">
        <Reveal variants={fadeUp}>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-forest/25 px-3 py-1.5 font-mono text-[11px] text-forest"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal variants={fadeUp} delay={0.06}>
          <div className="flex flex-wrap gap-2.5">
            <Button asChild variant="primary">
              <a href={project.links.primary.href} target="_blank" rel="noopener noreferrer">
                {project.links.primary.label}
                <ArrowUpRight aria-hidden size={15} />
              </a>
            </Button>
            {project.links.caseHref ? (
              <Button asChild variant="outline">
                <a href={project.links.caseHref}>Ver estudo completo</a>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </article>
  );
}
