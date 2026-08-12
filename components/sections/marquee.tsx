import { Asterisk } from "@/components/ui/primitives";
import { MARQUEE_ITEMS } from "@/content/site";

function Run() {
  return (
    <div aria-hidden="true" className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="type-display px-8 text-[clamp(26px,3.2vw,48px)] whitespace-nowrap">
            {item}
          </span>
          <Asterisk className="text-lime" />
        </span>
      ))}
    </div>
  );
}

/**
 * The band names what the studio covers, so it is read as content, not a link.
 * Hovering slows the loop rather than freezing it, which would look broken.
 */
export function Marquee() {
  return (
    <div className="marquee overflow-hidden bg-ink py-5 text-cream">
      <p className="sr-only">{MARQUEE_ITEMS.join(", ")}.</p>
      <div className="marquee-track" data-marquee-skew>
        <Run />
        <Run />
      </div>
    </div>
  );
}
