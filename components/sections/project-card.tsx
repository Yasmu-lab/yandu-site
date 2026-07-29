"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { damping: 22, stiffness: 220 });
  const springRy = useSpring(ry, { damping: 22, stiffness: 220 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 6);
    rx.set((0.5 - py) * 6);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(320px circle at ${gx}% ${gy}%, rgba(224,121,60,0.16), transparent 70%)`,
  );

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: reduceMotion ? 0 : springRx,
        rotateY: reduceMotion ? 0 : springRy,
        transformPerspective: 1200,
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: EASE_YANDU }}
      className="relative grid overflow-hidden rounded-2xl bg-sage shadow-[0_18px_40px_rgba(31,61,43,0.10)] md:grid-cols-[1.1fr_1fr] lg:min-h-[560px]"
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glowBackground }}
        className="pointer-events-none absolute inset-0 z-10"
      />

      <div className="relative min-h-[240px] overflow-hidden bg-forest md:min-h-full">
        <span className="absolute left-4 top-4 z-10 rounded bg-marigold px-3 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.06em] text-ink">
          {project.flag}
        </span>
        <motion.div
          animate={reduceMotion ? undefined : { scale: 1 }}
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.5, ease: EASE_YANDU }}
          className="absolute inset-0 p-5"
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-contain"
            priority={priority}
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-5 p-8 md:p-11">
        <h3 className="font-heading text-2xl font-bold text-forest md:text-[28px]">
          {project.title}
        </h3>
        <p className="text-[15px] text-ink/85">{project.description}</p>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-marigold-text">
              Problema
            </dt>
            <dd className="text-[13.5px] text-ink/85">{project.problem}</dd>
          </div>
          <div>
            <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-marigold-text">
              Solução
            </dt>
            <dd className="text-[13.5px] text-ink/85">{project.solution}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-forest/25 px-2.5 py-1.5 font-mono text-[11px] text-forest"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-1 flex flex-wrap gap-2.5">
          <Button asChild variant="primary">
            <a href={project.links.primary.href} target="_blank" rel="noopener noreferrer">
              {project.links.primary.label}
              <ArrowUpRight aria-hidden size={15} />
            </a>
          </Button>
          {project.links.caseHref ? (
            <Button asChild variant="outline">
              <a href={project.links.caseHref}>Ver case study</a>
            </Button>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
