"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { Asterisk, Display, Label, PillLink } from "@/components/ui/primitives";
import { PACKAGES, PACKAGES_INTRO } from "@/content/site";
import { EASE, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function Packages() {
  const [activeId, setActiveId] = useState(PACKAGES[0].id);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = PACKAGES.find((p) => p.id === activeId) ?? PACKAGES[0];

  // Re-animate the panel body whenever the tab changes, so switching reads as
  // a transition rather than a swap.
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel.querySelectorAll("[data-panel-item]"),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.06, overwrite: true },
      );
    }, panel);

    return () => ctx.revert();
  }, [activeId]);

  return (
    <section id="pacotes" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div data-reveal-group>
          <Label className="text-graphite">{PACKAGES_INTRO.label}</Label>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <Display className="max-w-[18ch] text-ink">{PACKAGES_INTRO.headline}</Display>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-graphite">
              {PACKAGES_INTRO.paragraph}
            </p>
          </div>
        </div>

        <div
          data-reveal
          role="tablist"
          aria-label="Pacotes"
          className="mt-12 flex flex-wrap gap-2.5"
        >
          {PACKAGES.map((pkg) => {
            const selected = pkg.id === activeId;
            return (
              <button
                key={pkg.id}
                type="button"
                role="tab"
                id={`tab-${pkg.id}`}
                aria-selected={selected}
                aria-controls={`panel-${pkg.id}`}
                onClick={() => setActiveId(pkg.id)}
                className={cn(
                  "type-label inline-flex min-h-11 items-center rounded-full border px-5 transition-colors duration-300",
                  selected
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/25 text-ink hover:border-ink",
                )}
              >
                {pkg.tab}
              </button>
            );
          })}
        </div>

        <div
          ref={panelRef}
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-12 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-[1.15fr_1fr] md:gap-16"
        >
          <div>
            <h3 data-panel-item className="type-display text-[clamp(28px,3.4vw,48px)] text-ink">
              {active.title}
            </h3>
            <p
              data-panel-item
              className="mt-6 max-w-md text-base leading-relaxed text-graphite"
            >
              {active.description}
            </p>
            <div data-panel-item className="mt-9">
              <PillLink href="#contato">Falar sobre isso</PillLink>
            </div>
          </div>

          <div data-panel-item>
            <p className="type-label text-graphite">Capacidades envolvidas</p>
            <ul className="mt-5 flex flex-col">
              {active.stack.map((item) => (
                <li
                  key={item}
                  className="rule flex items-center gap-3 py-3.5 text-ink"
                >
                  <Asterisk className="text-xs text-graphite" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
