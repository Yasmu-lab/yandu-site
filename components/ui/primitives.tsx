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

/** Poster-scale headline. Sizes are the page's only type scale steps. */
export function Display({
  children,
  className,
  as: Comp = "h2",
  size = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  size?: "section" | "large";
}) {
  return (
    <Comp
      data-reveal
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
  tone?: "ink" | "stone" | "solid";
  className?: string;
}) {
  const tones = {
    ink: "border-ink/30 text-ink hover:bg-ink hover:text-stone",
    stone: "border-stone/40 text-stone hover:bg-stone hover:text-ink",
    solid: "border-ink bg-ink text-stone hover:bg-transparent hover:text-ink",
  } as const;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "type-label inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 transition-colors duration-300",
        tones[tone],
        className,
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
