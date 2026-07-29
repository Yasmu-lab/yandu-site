import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { fadeUp, maskReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal variants={fadeUp}>
        <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-moss-text">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal variants={maskReveal}>
        <h2 className="text-[clamp(26px,4vw,36px)] font-bold font-heading text-forest">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal variants={fadeUp} delay={0.08}>
          <p className="mt-3.5 text-base text-moss-text">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
