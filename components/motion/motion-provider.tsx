"use client";

import { useLayoutEffect, type ReactNode } from "react";

import {
  EASE,
  REVEAL_FROM,
  REVEAL_START,
  REVEAL_TO,
  ScrollTrigger,
  SplitText,
  gsap,
} from "@/lib/gsap";

/**
 * Drives every scroll-linked animation on the page.
 *
 * Elements opt in declaratively so sections stay server-rendered:
 *   data-reveal            -- fades and lifts once, on entering the viewport
 *   data-reveal-group      -- staggers its [data-reveal] descendants together
 *   data-reveal-delay="n"  -- seconds of extra delay
 *   data-split             -- headline revealed line by line, from behind a mask
 *   data-mask              -- its child scales out from a clipped frame
 *   data-grow              -- rule drawn from left to right
 *   data-parallax="n"      -- drifts by n% of its height across the scroll
 *   data-marquee-skew      -- leans into the direction of scroll
 *   data-tint="#hex"       -- paints the page ground while the section is in view
 *
 * Hidden starting states live behind the `.motion-ready` class, added only
 * here, so a page without JS renders every section fully visible.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const root = document.documentElement;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Reduced motion: reveal everything instantly, run nothing scroll-linked.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-reveal], [data-mask] > *", { opacity: 1, y: 0, clearProps: "all" });
        gsap.set("[data-grow]", { scaleX: 1, clearProps: "transform" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        root.classList.add("motion-ready");

        // --- Headlines, line by line -------------------------------------
        const splits: SplitText[] = [];
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const split = SplitText.create(el, {
            type: "lines",
            linesClass: "split-line",
            mask: "lines",
          });
          splits.push(split);

          gsap.from(split.lines, {
            yPercent: 115,
            duration: 0.9,
            ease: EASE,
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: REVEAL_START, once: true },
          });
        });

        // --- Grouped and lone reveals ------------------------------------
        gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
          const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", group);
          if (!items.length) return;

          gsap.fromTo(items, REVEAL_FROM, {
            ...REVEAL_TO,
            stagger: 0.07,
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

        // --- Images out of a clipped frame -------------------------------
        gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((frame) => {
          const inner = frame.firstElementChild;
          if (!inner) return;

          gsap.fromTo(
            inner,
            { opacity: 0, clipPath: "inset(14% 8% 14% 8%)", scale: 1.06 },
            {
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              duration: 1.05,
              ease: EASE,
              scrollTrigger: { trigger: frame, start: REVEAL_START, once: true },
            },
          );
        });

        // --- Rules drawn left to right -----------------------------------
        gsap.utils.toArray<HTMLElement>("[data-grow]").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1,
              ease: "power2.inOut",
              scrollTrigger: { trigger: el, start: "top 95%", once: true },
            },
          );
        });

        // --- Depth ---------------------------------------------------------
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

        // --- Marquee lean --------------------------------------------------
        gsap.utils.toArray<HTMLElement>("[data-marquee-skew]").forEach((el) => {
          const quick = gsap.quickTo(el, "skewX", { duration: 0.5, ease: "power2.out" });
          ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => quick(gsap.utils.clamp(-8, 8, self.getVelocity() / -300)),
          });
        });

        // --- Ground colour follows the section in view ----------------------
        gsap.utils.toArray<HTMLElement>("[data-tint]").forEach((section) => {
          const tint = section.dataset.tint;
          if (!tint) return;

          ScrollTrigger.create({
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            onToggle: (self) => {
              gsap.to(document.body, {
                backgroundColor: self.isActive ? tint : "",
                duration: 0.7,
                ease: "power2.out",
              });
            },
          });
        });

        return () => {
          splits.forEach((s) => s.revert());
        };
      });

      return () => {
        root.classList.remove("motion-ready");
      };
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
