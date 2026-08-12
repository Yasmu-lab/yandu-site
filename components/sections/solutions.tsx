import { Eyebrow, Headline } from "@/components/headline";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { fadeUp } from "@/lib/motion";
import { SOLUTIONS, SOLUTIONS_INTRO } from "@/content/site";

export function Solutions() {
  return (
    <section className="bg-bone px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        <Eyebrow className="mb-5">{SOLUTIONS_INTRO.eyebrow}</Eyebrow>
        <Headline segments={SOLUTIONS_INTRO.headline} className="max-w-xl" />
        <Reveal variants={fadeUp} delay={0.12} className="mt-5">
          <p className="max-w-md text-base leading-relaxed text-charcoal">{SOLUTIONS_INTRO.paragraph}</p>
        </Reveal>

        <RevealGroup className="mt-16 divide-y divide-silver-veil/30 border-t border-silver-veil/30">
          {SOLUTIONS.map((solution) => (
            <RevealItem
              key={solution.title}
              className="group grid gap-3 py-9 transition-colors md:grid-cols-[280px_1fr] md:gap-8 md:py-11"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="accent-mark shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <h3 className="font-[family-name:var(--font-display)] text-2xl italic tracking-[-0.01em] text-vault-ink">
                  {solution.title}
                </h3>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-charcoal">{solution.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
