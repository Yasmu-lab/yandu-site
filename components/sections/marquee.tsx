import { Asterisk } from "@/components/ui/primitives";
import { FEATURED_PROJECT, MARQUEE_ITEMS } from "@/content/site";

function Run() {
  return (
    <div aria-hidden="true" className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="type-display px-8 text-[clamp(28px,3.4vw,52px)] whitespace-nowrap">
            {item}
          </span>
          <Asterisk className="text-xl" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <a
      href={FEATURED_PROJECT.href}
      target="_blank"
      rel="noopener noreferrer"
      data-marquee-skew
      className="block overflow-hidden bg-ink py-6 text-stone transition-colors duration-300 hover:bg-slate-deep"
    >
      <span className="sr-only">{FEATURED_PROJECT.cta} — {FEATURED_PROJECT.name}</span>
      <div className="marquee-track">
        <Run />
        <Run />
      </div>
    </a>
  );
}
