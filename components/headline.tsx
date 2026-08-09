import { Reveal } from "@/components/motion/reveal";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeadlineLine = { text: string; accent?: string };

export function Eyebrow({
  children,
  className,
  textClassName = "text-ink/60",
}: {
  children: string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <Reveal variants={fadeUp} className={className}>
      <p className={cn("font-mono text-xs uppercase tracking-[0.14em]", textClassName)}>
        {children}
      </p>
    </Reveal>
  );
}

export function Headline({
  lines,
  className,
  accentClassName = "text-coral-text",
}: {
  lines: readonly HeadlineLine[];
  className?: string;
  /** Overrides the accent word's color -- needed on coral backgrounds, where the default coral accent would be invisible. */
  accentClassName?: string;
}) {
  return (
    <Reveal variants={fadeUp} delay={0.08} className={className}>
      <h2 className={cn("text-[clamp(30px,4.4vw,48px)] font-semibold leading-[1.12]")}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line.text}
            {line.accent ? (
              <em className={cn("font-accent", accentClassName)}>{line.accent}</em>
            ) : null}
          </span>
        ))}
      </h2>
    </Reveal>
  );
}
