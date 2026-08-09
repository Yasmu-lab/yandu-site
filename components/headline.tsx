import { Reveal } from "@/components/motion/reveal";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeadlineLine = { text: string; accent?: string };

export function Eyebrow({
  children,
  className,
  textClassName = "text-silver-veil",
}: {
  children: string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <Reveal variants={fadeUp} className={className}>
      <p className={cn("font-mono text-sm uppercase tracking-[0.018em]", textClassName)}>
        {children}
      </p>
    </Reveal>
  );
}

export function Headline({
  lines,
  className,
  textClassName = "text-vault-ink",
}: {
  lines: readonly HeadlineLine[];
  className?: string;
  /** Overrides the heading's text color -- pass text-bone on dark bands. */
  textClassName?: string;
}) {
  return (
    <Reveal variants={fadeUp} delay={0.08} className={className}>
      <h2
        className={cn(
          "font-[family-name:var(--font-display)] text-[clamp(32px,4.6vw,64px)] font-normal leading-[1.08] tracking-[-0.02em]",
          textClassName,
        )}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line.text}
            {line.accent ? (
              <>
                {line.accent}
                <span className="accent-mark ml-3 align-middle" aria-hidden="true" />
              </>
            ) : null}
          </span>
        ))}
      </h2>
    </Reveal>
  );
}
