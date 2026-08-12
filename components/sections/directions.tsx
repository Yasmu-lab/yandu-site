import { Display, Label, PillLink } from "@/components/ui/primitives";
import { DIRECTIONS, DIRECTIONS_CTA, DIRECTIONS_INTRO } from "@/content/site";

/**
 * Stacked planes standing in for screens. These are directions, not products,
 * so they are drawn rather than shown -- using a real client's screenshot here
 * would present finished work as a starting point on offer.
 */
function Planes() {
  return (
    <div aria-hidden="true" className="relative h-40 overflow-hidden">
      {/* Deliberately one tone darker than the forest ground, so the planes
          read on it. Segment tints are reserved for the real project cards. */}
      <div className="absolute top-6 left-[6%] h-full w-[56%] -rotate-3 border border-cream/15 bg-forest-deep">
        <div className="hero-grid absolute inset-0 opacity-70" />
      </div>
      <div className="absolute top-2 left-[30%] h-full w-[52%] rotate-2 border border-cream/25 bg-forest-deep">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute top-4 left-4 h-1.5 w-10 bg-cream/35" />
        <div className="absolute top-8 left-4 h-1.5 w-16 bg-cream/20" />
        <div className="absolute top-13 left-4 h-1.5 w-8 bg-lime/60" />
      </div>
      <div className="absolute top-10 right-[4%] h-2 w-2 rounded-full bg-coral" />
    </div>
  );
}

export function Directions() {
  return (
    <section className="bg-forest px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="on-dark mx-auto max-w-[1320px]">
        <Label className="text-cream/60">{DIRECTIONS_INTRO.label}</Label>
        <Display className="mt-7 max-w-[20ch] text-cream" size="section">
          {DIRECTIONS_INTRO.headline}
        </Display>

        <div data-reveal-group className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {DIRECTIONS.map((direction) => (
            <article key={direction.id} data-reveal>
              <Planes />
              <h3 className="type-display mt-6 text-[clamp(19px,1.6vw,24px)] text-cream">
                {direction.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                {direction.description}
              </p>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-16">
          <PillLink href={DIRECTIONS_CTA.href} external tone="cream">
            {DIRECTIONS_CTA.label}
          </PillLink>
        </div>
      </div>
    </section>
  );
}
