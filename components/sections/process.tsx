"use client";

import { useLayoutEffect, useRef } from "react";

import { Display, Label } from "@/components/ui/primitives";
import { PROCESS_INTRO, PROCESS_STEPS } from "@/content/site";
import { gsap } from "@/lib/gsap";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  // The rail fills as the section passes, and each step lifts out of dimmed
  // state as it reaches the reading line -- scroll drives the whole sequence.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rail = section.querySelector<HTMLElement>("[data-rail]");
        const steps = gsap.utils.toArray<HTMLElement>("[data-step]", section);

        if (rail) {
          gsap.fromTo(
            rail,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top",
              scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom 75%",
                scrub: 0.4,
              },
            },
          );
        }

        steps.forEach((step) => {
          gsap.fromTo(
            step,
            { opacity: 0.3 },
            {
              opacity: 1,
              duration: 0.4,
              scrollTrigger: { trigger: step, start: "top 72%", once: true },
            },
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="processo" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div data-reveal-group>
          <Label className="text-mist">{PROCESS_INTRO.label}</Label>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <Display className="text-ink">{PROCESS_INTRO.headline}</Display>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-graphite">
              {PROCESS_INTRO.paragraph}
            </p>
          </div>
        </div>

        <ol className="relative mt-16 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 w-px bg-ink/15 md:left-[13%]"
          />
          <div
            aria-hidden="true"
            data-rail
            className="absolute top-0 bottom-0 left-0 w-px origin-top bg-ink md:left-[13%]"
          />

          {PROCESS_STEPS.map((step) => (
            <li
              key={step.number}
              data-step
              className="grid grid-cols-1 gap-2 py-8 pl-8 md:grid-cols-[13%_1fr] md:gap-14 md:py-10 md:pl-0"
            >
              <span className="type-label text-mist md:pl-0">{step.number}</span>
              <div className="md:pl-14">
                <h3 className="type-display text-[clamp(24px,2.8vw,40px)] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-graphite">
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
