import { Eyebrow, Headline } from "@/components/headline";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PROCESS_INTRO, PROCESS_STEPS } from "@/content/site";

export function Process() {
  return (
    <section id="processo" className="bg-ash-mist px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        <Eyebrow className="mb-5">{PROCESS_INTRO.eyebrow}</Eyebrow>
        <Headline lines={PROCESS_INTRO.headline} className="max-w-xl" />

        <RevealGroup className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {PROCESS_STEPS.map((step) => (
            <RevealItem key={step.number} className="border-t border-silver-veil/30 pt-6">
              <span className="font-mono text-sm text-silver-veil">{step.number}</span>
              <h3 className="mt-3 text-2xl font-normal tracking-[-0.02em] text-vault-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
