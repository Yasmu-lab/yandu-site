"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import type { Project } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

/**
 * A restrained proof-of-work card: image, name, category, one line, one
 * button. The Yandu narrative lives on the landing page itself; a project
 * is evidence, not the protagonist -- its full story lives on its own page.
 */
export function ProjectTeaserCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { damping: 24, stiffness: 260 });
  const springRy = useSpring(ry, { damping: 24, stiffness: 260 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 4);
    rx.set((0.5 - py) * 4);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  const href = project.links.caseHref ?? project.links.primary.href;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: reduceMotion ? 0 : springRx, rotateY: reduceMotion ? 0 : springRy, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_YANDU }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-sage shadow-[0_18px_40px_rgba(31,61,43,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_56px_rgba(31,61,43,0.16)]"
    >
      <Link href={href} className="flex flex-1 flex-col" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest">
          <span className="absolute left-4 top-4 z-10 rounded bg-marigold px-3 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.06em] text-ink">
            {project.flag}
          </span>
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            transition={{ duration: 0.5, ease: EASE_YANDU }}
            className="absolute inset-0 p-6"
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

        <div className="flex flex-1 flex-col gap-2 p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-marigold-text">
            {project.category}
          </p>
          <h3 className="font-heading text-2xl font-bold text-forest">{project.title}</h3>
          <p className="text-[14.5px] text-ink/85">{project.shortDescription}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 font-bold text-forest transition-transform duration-200 group-hover:translate-x-1">
            Conhecer projeto
            <ArrowRight aria-hidden size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
