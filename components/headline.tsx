import { Reveal } from "@/components/motion/reveal";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type Segment = { text: string; accent?: boolean };

export function Eyebrow({
  children,
  className,
  textClassName = "text-charcoal",
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

type HeadlineProps = {
  segments: readonly Segment[];
  className?: string;
  textClassName?: string;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "section";
};

const SIZE_CLASS: Record<NonNullable<HeadlineProps["size"]>, string> = {
  hero: "text-[clamp(40px,7.2vw,104px)] leading-[1.02]",
  section: "text-[clamp(32px,4.4vw,58px)] leading-[1.08]",
};

/**
 * Renders a headline as one flowing run of text rather than forced line
 * breaks -- reads as a deliberate editorial statement and wraps naturally
 * at any width. Accent segments switch to italic display type; the
 * system's single gradient mark follows the last accented run.
 */
export function Headline({
  segments,
  className,
  textClassName = "text-vault-ink",
  as = "h2",
  size = "section",
}: HeadlineProps) {
  const Comp = as;
  const lastAccentIndex = [...segments].map((s) => s.accent).lastIndexOf(true);

  return (
    <Reveal variants={fadeUp} delay={0.08} className={className}>
      <Comp
        className={cn(
          "font-[family-name:var(--font-display)] font-normal tracking-[-0.01em]",
          SIZE_CLASS[size],
          textClassName,
        )}
      >
        {segments.map((segment, i) => (
          <span key={i} className={segment.accent ? "italic" : undefined}>
            {segment.text}
            {i === lastAccentIndex ? (
              <span className="accent-mark mx-2 align-middle" aria-hidden="true" />
            ) : null}
          </span>
        ))}
      </Comp>
    </Reveal>
  );
}
