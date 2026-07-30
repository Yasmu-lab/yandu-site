"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { Particles } from "@/components/motion/particles";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

import { LaptopMockup, PhoneMockup } from "./device-mockup";

type HeroStageProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * The Hero's centerpiece: the one real project shown twice -- as a laptop
 * screen and a phone screen -- staged with depth. Two parallax layers (the
 * laptop drifts less, the phone drifts more) sell the depth cue; a soft
 * light glow drifts opposite the cursor to feel like the scene has a real
 * light source, not a sticker on a flat background.
 *
 * Each device is two nested layers rather than one: an outer layer owns the
 * entrance + continuous idle float (`animate`), an inner layer owns the
 * cursor-parallax offset (`style` bound to a spring `MotionValue`). Framer
 * can't animate the same transform key from both `animate` and an external
 * `style` value at once, so splitting them across parent/child is what lets
 * the float and the parallax compose instead of fighting each other.
 */
export function HeroStage({ src, alt, className }: HeroStageProps) {
  const reduceMotion = useSafeReducedMotion();

  const laptopX = useMotionValue(0);
  const laptopY = useMotionValue(0);
  const phoneX = useMotionValue(0);
  const phoneY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const laptopSpringX = useSpring(laptopX, { damping: 26, stiffness: 90 });
  const laptopSpringY = useSpring(laptopY, { damping: 26, stiffness: 90 });
  const phoneSpringX = useSpring(phoneX, { damping: 22, stiffness: 90 });
  const phoneSpringY = useSpring(phoneY, { damping: 22, stiffness: 90 });
  const glowSpringX = useSpring(glowX, { damping: 30, stiffness: 40 });
  const glowSpringY = useSpring(glowY, { damping: 30, stiffness: 40 });

  useEffect(() => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

    function onMove(e: MouseEvent) {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      laptopX.set(px * 14);
      laptopY.set(py * 10);
      phoneX.set(px * 30);
      phoneY.set(py * 22);
      glowX.set(50 - px * 30);
      glowY.set(50 - py * 30);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion, laptopX, laptopY, phoneX, phoneY, glowX, glowY]);

  return (
    <div className={className}>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-20%] -z-10 blur-3xl"
        style={{ x: reduceMotion ? undefined : glowSpringX, y: reduceMotion ? undefined : glowSpringY }}
      >
        <div
          className="h-full w-full"
          style={{
            background: "radial-gradient(45% 45% at 50% 50%, rgba(224,121,60,0.22), transparent 70%)",
          }}
        />
      </motion.div>

      <Particles className="absolute inset-0 -z-10" />

      {/* Outer: entrance + idle float. Inner: cursor parallax. */}
      <motion.div
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -10, 0], rotate: -3 }}
        transition={{
          opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
          y: reduceMotion
            ? { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
            : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="relative mx-auto w-[78%] max-w-[520px]"
      >
        <motion.div style={{ x: laptopSpringX, y: laptopSpringY }}>
          <LaptopMockup src={src} alt={alt} priority />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 6 }}
        animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -16, 0], rotate: 6 }}
        transition={{
          opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.75 },
          y: reduceMotion
            ? { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.75 }
            : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
        className="absolute bottom-[-6%] right-[2%] w-[30%] max-w-[170px]"
      >
        <motion.div style={{ x: phoneSpringX, y: phoneSpringY }}>
          <PhoneMockup src={src} alt={alt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
