"use client";

import { useLayoutEffect, type ReactNode } from "react";

import { REVEAL_FROM, REVEAL_START, REVEAL_TO, ScrollTrigger, gsap } from "@/lib/gsap";

/**
 * Drives every scroll-linked animation on the page.
 *
 * Elements opt in declaratively so sections stay server-rendered:
 *   data-reveal            -- fades and lifts once, on entering the viewport
 *   data-reveal-group      -- staggers its [data-reveal] descendants together
 *   data-reveal-delay="n"  -- seconds of extra delay
 *   data-parallax="n"      -- drifts by n% of its height across the scroll
 *   data-marquee-skew      -- leans into the direction of scroll
 *
 * Initial hidden states live behind the `.motion-ready` class, which is only
 * added here, so a page without JS renders every section fully visible.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const root = document.documentElement;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Reduced motion: reveal everything instantly, run nothing scroll-linked.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-reveal]", { opacity: 1, y: 0, clearProps: "transform" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        root.classList.add("motion-ready");

        // Groups stagger their children; ungrouped elements animate alone.
        gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
          const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", group);
          if (!items.length) return;

          gsap.fromTo(items, REVEAL_FROM, {
            ...REVEAL_TO,
            stagger: 0.09,
            scrollTrigger: { trigger: group, start: REVEAL_START, once: true },
          });
        });

        gsap.utils
          .toArray<HTMLElement>("[data-reveal]")
          .filter((el) => !el.closest("[data-reveal-group]"))
          .forEach((el) => {
            gsap.fromTo(el, REVEAL_FROM, {
              ...REVEAL_TO,
              delay: Number(el.dataset.revealDelay ?? 0),
              scrollTrigger: { trigger: el, start: REVEAL_START, once: true },
            });
          });

        // Scroll-scrubbed depth. Each layer travels a different distance, so
        // the page keeps moving between reveals instead of sitting still.
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const distance = Number(el.dataset.parallax ?? 8);
          gsap.fromTo(
            el,
            { yPercent: -distance },
            {
              yPercent: distance,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        // Marquees lean into the scroll direction, then settle back.
        gsap.utils.toArray<HTMLElement>("[data-marquee-skew]").forEach((el) => {
          const quick = gsap.quickTo(el, "skewX", { duration: 0.5, ease: "power2.out" });
          ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => quick(gsap.utils.clamp(-9, 9, self.getVelocity() / -260)),
          });
        });
      });

      return () => {
        root.classList.remove("motion-ready");
      };
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
