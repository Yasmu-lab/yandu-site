"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/site";
import { fadeUp, maskReveal, slideLeft, slideRight } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function ProjectDetail({ project }: { project: Project }) {
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
    ([gx, gy]) => `radial-gradient(420px circle at ${gx}% ${gy}%, rgba(224,121,60,0.18), transparent 70%)`,
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
    <main>
      <section className="bg-forest px-6 pb-20 pt-32 text-cream md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[860px]">
          <Reveal variants={fadeUp}>
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#9CBDA3] transition-colors hover:text-cream"
            >
              <ArrowLeft aria-hidden size={16} />
              Voltar para a Yandu
            </Link>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.05}>
            <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#9CBDA3]">
              {project.category} · {project.flag}
            </p>
          </Reveal>
          <Reveal variants={maskReveal}>
            <h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.05] font-heading">
              {project.title}
            </h1>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#D9E5DB]">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto flex max-w-[860px] flex-col gap-16 md:gap-20">
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
                  sizes="(min-width: 768px) 860px, 100vw"
                  className="object-contain p-6 md:p-12"
                  priority
                />
              </div>
            </motion.div>
          </Reveal>

          <Reveal variants={fadeUp}>
            <div className="rounded-2xl bg-sage p-8 md:p-10">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-moss-text">
                Resultado
              </p>
              <p className="text-[19px] leading-snug text-forest">{project.result}</p>
            </div>
          </Reveal>

          <Reveal variants={fadeUp}>
            <div className="flex flex-wrap items-center justify-between gap-6">
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
              <Button asChild variant="primary">
                <a href={project.links.primary.href} target="_blank" rel="noopener noreferrer">
                  {project.links.primary.label}
                  <ArrowUpRight aria-hidden size={15} />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-xl">
          <Reveal variants={fadeUp}>
            <h2 className="mb-4 text-[clamp(24px,3.5vw,32px)] font-bold font-heading text-forest">
              Quer um projeto assim pro seu negócio?
            </h2>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.08}>
            <Button asChild variant="primary" size="lg">
              <Link href="/#contato">Chama agora</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
