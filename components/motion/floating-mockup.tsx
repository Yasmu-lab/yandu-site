"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

import { EASE_YANDU } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

/**
 * Ambient floating preview of real project work, used as a depth layer
 * behind the Hero copy. Drifts continuously and tilts very slightly toward
 * the cursor (desktop only) -- both effects are explicitly gated on reduced
 * motion since they're continuous/global-listener driven, unlike the
 * one-shot `whileInView` reveals that `MotionConfig` already covers.
 */
export function FloatingMockup({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reduceMotion = useSafeReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { damping: 30, stiffness: 60 });
  const springRy = useSpring(ry, { damping: 30, stiffness: 60 });

  useEffect(() => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

    function onMove(e: MouseEvent) {
      const px = e.clientX / window.innerWidth;
      const py = e.clientY / window.innerHeight;
      ry.set((px - 0.5) * 10);
      rx.set((0.5 - py) * 8);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion, rx, ry]);

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{
        rotateX: reduceMotion ? 0 : springRx,
        rotateY: reduceMotion ? 0 : springRy,
        transformPerspective: 1400,
      }}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 1, y: [0, -14, 0], scale: 1 }
      }
      transition={
        reduceMotion
          ? { duration: 0.7, ease: EASE_YANDU }
          : {
              opacity: { duration: 0.8, ease: EASE_YANDU, delay: 0.5 },
              scale: { duration: 0.8, ease: EASE_YANDU, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }
      }
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-forest shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
        <Image src={src} alt={alt} width={560} height={294} className="h-auto w-full" priority />
      </div>
    </motion.div>
  );
}
