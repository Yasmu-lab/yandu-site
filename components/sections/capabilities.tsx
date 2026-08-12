import { Display, Label } from "@/components/ui/primitives";
import { CAPABILITIES, CAPABILITIES_INTRO } from "@/content/site";

export function Capabilities() {
  return (
    <section className="bg-slate px-6 py-24 text-stone md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]" data-reveal-group>
        <Label className="text-stone/60">{CAPABILITIES_INTRO.label}</Label>
        <Display className="mt-8 text-stone">{CAPABILITIES_INTRO.headline}</Display>

        {/* A numbered index rather than a tag cloud: the count is real
            information about the studio's range. */}
        <ol className="mt-14 grid gap-x-14 sm:grid-cols-2">
          {CAPABILITIES.map((capability, i) => (
            <li
              key={capability}
              data-reveal
              className="rule flex items-baseline gap-5 py-5 text-stone"
            >
              <span className="type-label text-stone/50">
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
