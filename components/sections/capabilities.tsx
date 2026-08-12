import { Eyebrow, Headline } from "@/components/headline";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CAPABILITIES, CAPABILITIES_INTRO } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function Capabilities() {
  return (
    <section id="capacidades" className="bg-vault-ink px-6 py-28 text-bone md:px-10 md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow className="mb-5" textClassName="text-silver-veil">
          {CAPABILITIES_INTRO.eyebrow}
        </Eyebrow>
        <Headline segments={CAPABILITIES_INTRO.headline} textClassName="text-bone" className="max-w-xl" />
        <Reveal variants={fadeUp} delay={0.12} className="mt-5">
          <p className="max-w-md text-base leading-relaxed text-silver-veil">
            {CAPABILITIES_INTRO.paragraph}
          </p>
        </Reveal>

        <RevealGroup className="mt-16 flex flex-wrap gap-3 md:gap-4" stagger={0.05}>
          {CAPABILITIES.map((capability, i) => (
            <RevealItem key={capability}>
              <span
                className="tag-drift inline-block rounded-full border border-bone/25 px-5 py-2.5 text-sm text-bone/90 transition-colors hover:border-bone hover:text-bone"
                style={{ animationDelay: `${(i % 5) * 0.4}s` }}
              >
                {capability}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
