import { Display, Label } from "@/components/ui/primitives";
import { CAPABILITIES, CAPABILITIES_INTRO } from "@/content/site";

export function Capabilities() {
  return (
    <section id="capacidades" className="bg-forest px-6 py-20 text-cream md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]" data-reveal-group>
        <Label className="text-cream/60">{CAPABILITIES_INTRO.label}</Label>
        <Display className="mt-8 text-cream">{CAPABILITIES_INTRO.headline}</Display>

        {/* A numbered index rather than a tag cloud: the count is real
            information about the studio's range. */}
        <ol className="mt-14 grid gap-x-14 sm:grid-cols-2">
          {CAPABILITIES.map((capability, i) => (
            <li
              key={capability}
              data-reveal
              className="rule flex items-baseline gap-5 py-5 text-cream"
            >
              <span className="type-label text-cream/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="type-display text-[clamp(20px,2vw,30px)]">{capability}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
