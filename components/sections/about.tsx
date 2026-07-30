"use client";

import { motion } from "framer-motion";

import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ABOUT } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function About() {
  return (
    <section id="sobre" className="bg-sage px-6 py-22 md:py-28">
      <div className="mx-auto grid max-w-[1080px] items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} className="mb-6" />
          <div className="relative pl-5">
            <motion.span
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-1 h-[calc(100%-8px)] w-0.5 origin-top bg-gradient-to-b from-moss to-marigold"
            />
            {ABOUT.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} variants={fadeUp} delay={i * 0.1}>
                <p className="mb-4 text-base text-ink last:mb-0">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
          whileHover={{ rotate: 2, scale: 1.04 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-forest md:order-2 md:h-[180px] md:w-[180px]"
        >
          <LogoMark className="h-14 w-14 md:h-20 md:w-20" fill="#F6F3E9" />
        </motion.div>
      </div>
    </section>
  );
}
