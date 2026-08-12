import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** The rotating tick that marks structure across the page. */
export function Asterisk({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("asterisk", className)}>
      ✳
    </span>
  );
}

/** Small mono label that opens every fold. */
export function Label({
  children,
  className,
  withMark = true,
}: {
  children: ReactNode;
  className?: string;
  withMark?: boolean;
}) {
  return (
    <p data-reveal className={cn("type-label flex items-center gap-2", className)}>
      {withMark ? <Asterisk /> : null}
      {children}
    </p>
  );
}

/**
 * Poster-scale headline. `split` hands the element to SplitText for a
 * line-by-line mask reveal; plain reveals suit short one-liners.
 */
export function Display({
  children,
  className,
  as: Comp = "h2",
  size = "section",
  split = true,
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  size?: "section" | "large";
  split?: boolean;
}) {
  return (
    <Comp
      {...(split ? { "data-split": true } : { "data-reveal": true })}
      className={cn(
        "type-display",
        size === "large"
          ? "text-[clamp(38px,6.4vw,86px)]"
          : "text-[clamp(30px,4.1vw,54px)]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

/** Outlined pill link, the page's single button shape. */
export function PillLink({
  href,
  children,
  external = false,
  tone = "ink",
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  tone?: "ink" | "cream" | "solid";
  className?: string;
}) {
  const tones = {
    ink: "border-ink/30 text-ink hover:bg-ink hover:text-cream",
    cream: "border-cream/40 text-cream hover:bg-cream hover:text-ink",
    solid: "border-ink bg-ink text-cream hover:border-coral hover:bg-coral hover:text-ink",
  } as const;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "type-label inline-flex min-h-11 items-center gap-2.5 rounded-full border px-6 transition-colors duration-300",
        tones[tone],
        className,
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
