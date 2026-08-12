"use client";

import { useLayoutEffect, useRef } from "react";

import { Display, Label } from "@/components/ui/primitives";
import { PROCESS_INTRO, PROCESS_STEPS } from "@/content/site";
import { gsap } from "@/lib/gsap";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rail = section.querySelector<HTMLElement>("[data-rail]");
        const steps = gsap.utils.toArray<HTMLElement>("[data-step]", section);

        // The rail fills across the whole list as it passes the reading line.
        if (rail) {
          gsap.fromTo(
            rail,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top",
              scrollTrigger: {
                trigger: section.querySelector("[data-steps]"),
                start: "top 70%",
                end: "bottom 80%",
                scrub: 0.35,
              },
            },
          );
        }

        // Exactly one step is active at a time. `data-active` carries the
        // state so the styling lives in CSS, and the marker is never colour
        // alone -- the number also scales up.
        steps.forEach((step) => {
          gsap.to(step, {
            scrollTrigger: {
              trigger: step,
              start: "top 62%",
              end: "bottom 62%",
              onToggle: (self) => step.setAttribute("data-active", String(self.isActive)),
            },
          });
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="processo" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div data-reveal-group>
          <Label className="text-graphite">{PROCESS_INTRO.label}</Label>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
            <Display className="text-ink">{PROCESS_INTRO.headline}</Display>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-graphite">
              {PROCESS_INTRO.paragraph}
            </p>
          </div>
        </div>

        <ol data-steps className="relative mt-14 md:mt-16">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 w-px bg-ink/15 md:left-[13%]"
          />
          <div
            aria-hidden="true"
            data-rail
            className="absolute top-0 bottom-0 left-0 w-px origin-top bg-coral md:left-[13%]"
          />

          {PROCESS_STEPS.map((step) => (
            <li
              key={step.number}
              data-step
              className="step grid grid-cols-1 gap-2 py-7 pl-8 md:grid-cols-[13%_1fr] md:gap-14 md:py-9 md:pl-0"
            >
              <span className="step-num type-label origin-left text-graphite">{step.number}</span>
              <div className="md:pl-14">
                {/* Inactive steps sit at graphite (5.36:1) rather than a faded
                    ink, so both states clear AA -- the active step gains
                    contrast instead of the inactive one losing legibility. */}
                <h3 className="step-title type-display text-[clamp(24px,2.8vw,40px)] text-graphite">
                  {step.title}
                </h3>
                <p className="step-body mt-3 max-w-lg text-base leading-relaxed text-graphite">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
