"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

import { Asterisk, Label, PillLink } from "@/components/ui/primitives";
import {
  PORTFOLIO_CTA,
  PORTFOLIO_INTRO,
  PROJECTS,
  SEGMENTS,
  type Project,
} from "@/content/site";
import { EASE, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const ALL = "todos";

/** Only segments that actually have a project get a filter, so no tab can
 *  ever lead to an empty grid. New segments appear as work is added. */
function useAvailableFilters() {
  return useMemo(() => {
    const counts = new Map<string, number>();
    PROJECTS.forEach((p) => counts.set(p.segment, (counts.get(p.segment) ?? 0) + 1));

    return [
      { id: ALL, label: PORTFOLIO_INTRO.filterAllLabel, count: PROJECTS.length },
      ...SEGMENTS.filter((s) => counts.has(s.id)).map((s) => ({
        id: s.id,
        label: s.label,
        count: counts.get(s.id) ?? 0,
      })),
    ];
  }, []);
}

function segmentOf(id: string) {
  return SEGMENTS.find((s) => s.id === id);
}

/**
 * Without a confirmed print, the frame shows a typographic composition rather
 * than a stand-in screenshot -- a placeholder image would imply a site we have
 * not actually seen.
 */
function Composition({ project }: { project: Project }) {
  const segment = segmentOf(project.segment);
  const initials = project.name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: segment?.tint ?? "#173b32" }}
    >
      <div className="hero-grid absolute inset-0 opacity-60" />
      <span className="type-wordmark relative text-[clamp(56px,9vw,120px)] text-cream/20">
        {initials}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  onCursor,
}: {
  project: Project;
  onCursor: (active: boolean) => void;
}) {
  const segment = segmentOf(project.segment);
  const isLive = Boolean(project.href);
  const wide = project.weight === "wide";

  const body = (
    <>
      <div
        data-mask
        className={cn("card-frame", wide ? "aspect-[16/9]" : "aspect-[4/3]")}
        style={{ ["--seg" as string]: segment?.tint }}
      >
        <div className="absolute inset-0">
          {project.image ? (
            // Taller than the frame and panned on hover, which reads as
            // scrolling the real page rather than a plain zoom.
            <div className="card-pan h-[145%] w-full" style={{ ["--pan" as string]: "-31%" }}>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                loading="lazy"
                sizes={wide ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
                className="object-cover object-top"
              />
            </div>
          ) : (
            <Composition project={project} />
          )}
        </div>

        {isLive ? (
          <span className="type-label absolute top-4 left-4 z-10 flex items-center gap-2 bg-cream px-3 py-2 text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Site publicado
          </span>
        ) : null}
      </div>

      <div className="mt-5">
        <h3
          className={cn(
            "card-title type-display text-ink",
            wide ? "text-[clamp(22px,2.2vw,32px)]" : "text-[clamp(19px,1.6vw,24px)]",
          )}
        >
          {project.name}
        </h3>

        <p className="type-label mt-3 text-graphite">
          {[segment?.label, project.city].filter(Boolean).join(" · ")}
        </p>
        <p className="mt-2 text-sm text-graphite">{project.kind}</p>
        <p className="mt-1 text-sm text-graphite">{project.services}</p>

        {isLive ? (
          <span className="type-label mt-4 inline-flex items-center gap-2 text-coral-ink">
            Ver projeto
            <span className="card-arrow inline-block">↗</span>
          </span>
        ) : (
          <span className="type-label mt-4 inline-flex items-center gap-2 text-graphite">
            <Asterisk className="text-[10px]" />
            {PORTFOLIO_INTRO.pendingNote}
          </span>
        )}
      </div>
    </>
  );

  const shared = cn("group block", wide && "md:col-span-2");

  // Without a confirmed address there is nothing to open, so the card is not a
  // link and never claims to be one.
  if (!isLive) {
    return (
      <article data-card className={shared}>
        {body}
      </article>
    );
  }

  return (
    <a
      data-card
      href={project.href as string}
      target="_blank"
      rel="noopener noreferrer"
      onPointerEnter={() => onCursor(true)}
      onPointerLeave={() => onCursor(false)}
      className={cn(shared, "focus-visible:outline-offset-6")}
    >
      {body}
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  );
}

export function Portfolio() {
  const filters = useAvailableFilters();
  const [active, setActive] = useState(ALL);
  const gridRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => (active === ALL ? PROJECTS : PROJECTS.filter((p) => p.segment === active)),
    [active],
  );

  // Re-enter the grid on every filter change: short, staggered, and it also
  // covers the reflow so the regrouping does not snap.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          grid.querySelectorAll("[data-card]"),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.45, ease: EASE, stagger: 0.05, overwrite: true },
        );
      });
    }, grid);

    return () => ctx.revert();
  }, [active]);

  // The contextual cursor only exists where there is a real pointer.
  useLayoutEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches) return;

    const x = gsap.quickTo(el, "x", { duration: 0.25, ease: "power2.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.25, ease: "power2.out" });

    function onMove(e: PointerEvent) {
      x(e.clientX);
      y(e.clientY);
    }

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  function setCursor(on: boolean) {
    cursorRef.current?.setAttribute("data-active", String(on));
  }

  return (
    <section id="portfolio" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <Label className="text-graphite">{PORTFOLIO_INTRO.label}</Label>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
          <h2
            data-split
            className="type-display max-w-[18ch] text-[clamp(30px,4.1vw,54px)] text-ink"
          >
            {PORTFOLIO_INTRO.headline.map((line) => line.text).join(" ")}
          </h2>
          <p data-reveal className="max-w-xs text-sm leading-relaxed text-graphite">
            {PORTFOLIO_INTRO.paragraph}
          </p>
        </div>

        <div
          data-grow
          aria-hidden="true"
          className="mt-10 h-px w-full origin-left bg-ink/15"
        />

        <div
          data-reveal
          role="group"
          aria-label="Filtrar projetos por segmento"
          className="filter-row mt-8"
        >
          {filters.map((filter) => {
            const selected = filter.id === active;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(filter.id)}
                className={cn(
                  "type-label inline-flex min-h-11 items-center gap-2 rounded-full border px-5 transition-colors duration-300",
                  selected
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/25 text-ink hover:border-ink",
                )}
              >
                {filter.label}
                <span className={selected ? "text-lime" : "text-graphite"}>{filter.count}</span>
              </button>
            );
          })}
        </div>

        {/* Filtering is a visual change, so the result is also announced. */}
        <p aria-live="polite" className="sr-only">
          {visible.length} projeto(s) em exibição.
        </p>

        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onCursor={setCursor} />
          ))}
        </div>

        {/* CTA right after the grid, so the section never dead-ends. */}
        <div
          data-reveal-group
          className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-ink/15 pt-10"
        >
          <div data-reveal>
            <h3 className="type-display max-w-[24ch] text-[clamp(22px,2.4vw,34px)] text-ink">
              {PORTFOLIO_CTA.question}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-graphite">
              {PORTFOLIO_CTA.answer}
            </p>
          </div>
          <div data-reveal>
            <PillLink href={PORTFOLIO_CTA.cta.href} external tone="solid">
              {PORTFOLIO_CTA.cta.label}
            </PillLink>
          </div>
        </div>
      </div>

      <div ref={cursorRef} className="ctx-cursor type-label" aria-hidden="true">
        Abrir projeto
        <span>↗</span>
      </div>
    </section>
  );
}
