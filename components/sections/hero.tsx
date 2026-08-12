"use client";

import { useLayoutEffect, useRef } from "react";

import { Asterisk } from "@/components/ui/primitives";
import { HERO } from "@/content/site";
import { EASE, gsap } from "@/lib/gsap";

/**
 * Panels sit at the angles of a Y -- two arms converging on a stem -- but at
 * different depths and never touching, so the letter is only suggested. Each
 * carries its own `depth`, which scales how far it tracks the pointer.
 */
const PANELS = [
  // Left arm
  { className: "left-[6%] top-[10%] h-[34%] w-[20%] -rotate-[24deg] bg-forest", depth: 26 },
  // Right arm
  { className: "right-[10%] top-[8%] h-[38%] w-[17%] rotate-[22deg] bg-forest-deep", depth: 40 },
  // Stem
  { className: "left-[46%] bottom-[8%] h-[34%] w-[13%] bg-forest/70", depth: 16 },
  // Accents, kept small and clear of the headline and tagline.
  { className: "right-[26%] bottom-[20%] h-[9%] w-[9%] rotate-[8deg] bg-coral/90", depth: 54 },
  { className: "right-[42%] top-[22%] h-3 w-3 rounded-full bg-lime", depth: 68 },
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // --- Entrance: the wordmark unmasks while its tracking closes up ---
        const word = wordmarkRef.current;
        if (word) {
          gsap.fromTo(
            word,
            { yPercent: 108, letterSpacing: "0.16em" },
            { yPercent: 0, letterSpacing: "-0.04em", duration: 1.15, ease: EASE, delay: 0.1 },
          );
        }

        gsap.from(section.querySelectorAll("[data-hero-in]"), {
          opacity: 0,
          y: 18,
          duration: 0.8,
          ease: EASE,
          stagger: 0.1,
          delay: 0.45,
        });

        gsap.from(section.querySelectorAll("[data-panel]"), {
          opacity: 0,
          scale: 0.86,
          duration: 1.1,
          ease: EASE,
          stagger: 0.08,
          delay: 0.25,
        });

        // --- Pointer: panels at their own depth, plus a glow on the grid ---
        // Pointer tracking is desktop-only; touch has no hover and the extra
        // listener would cost scroll performance for nothing.
        const glow = section.querySelector<HTMLElement>("[data-glow]");
        const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", section);
        const movers = panels.map((el) => ({
          x: gsap.quickTo(el, "x", { duration: 1, ease: "power2.out" }),
          y: gsap.quickTo(el, "y", { duration: 1, ease: "power2.out" }),
          depth: Number(el.dataset.panel ?? 20),
        }));

        function onMove(e: PointerEvent) {
          const r = section!.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;

          movers.forEach((m) => {
            m.x(-nx * m.depth);
            m.y(-ny * m.depth);
          });

          if (glow) {
            glow.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
            glow.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
            glow.style.opacity = "1";
          }
        }

        function onLeave() {
          movers.forEach((m) => {
            m.x(0);
            m.y(0);
          });
          if (glow) glow.style.opacity = "0";
        }

        const media = window.matchMedia("(hover: hover) and (pointer: fine)");
        if (!media.matches) return;

        section!.addEventListener("pointermove", onMove);
        section!.addEventListener("pointerleave", onLeave);

        return () => {
          section!.removeEventListener("pointermove", onMove);
          section!.removeEventListener("pointerleave", onLeave);
        };
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="on-dark px-3 pt-20 pb-3 md:px-4 md:pt-24 md:pb-4"
    >
      <div className="relative flex min-h-[84svh] flex-col justify-between overflow-hidden bg-ink p-6 text-cream md:min-h-[86svh] md:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-grid absolute inset-0" />
          <div data-glow className="hero-glow" />

          <p className="hero-ghost absolute -top-[6%] -left-[3%] text-[26vw] whitespace-nowrap">
            {HERO.wordmark}
          </p>

          {PANELS.map((panel) => (
            <div
              key={panel.className}
              data-panel={panel.depth}
              className={`absolute ${panel.className}`}
            />
          ))}
        </div>

        <p
          data-hero-in
          className="type-label relative z-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-cream/70"
        >
          <Asterisk />
          {HERO.lockup.join("  ·  ")}
        </p>

        <div className="relative z-10 flex flex-1 items-center py-12">
          <div>
            <h1 className="type-wordmark overflow-hidden text-[clamp(76px,15vw,240px)] text-cream">
              <span ref={wordmarkRef} className="block">
                {HERO.wordmark}
              </span>
            </h1>
            <p
              data-hero-in
              className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg"
            >
              {HERO.tagline}
            </p>
          </div>
        </div>

        <div
          data-hero-in
          className="relative z-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-5 border-t border-cream/20 pt-5"
        >
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {HERO.meta.map((item) => (
              <div key={item.label}>
                <dt className="type-label text-cream/55">{item.label}</dt>
                <dd className="mt-1.5 text-sm text-cream">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="type-label flex items-center gap-2 text-cream/55">
            {HERO.scrollCue}
            <Asterisk />
          </p>
        </div>
      </div>
    </section>
  );
}
