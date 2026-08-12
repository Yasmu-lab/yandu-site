import { Eyebrow, Headline } from "@/components/headline";
import { Reveal } from "@/components/motion/reveal";
import { INTRO } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function Intro() {
  return (
    <section className="bg-bone px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[900px] text-center">
        <Eyebrow className="mb-5">{INTRO.eyebrow}</Eyebrow>
        <Headline segments={INTRO.lead} size="section" className="mx-auto" />

        <Reveal variants={fadeUp} delay={0.16} className="mt-8">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-charcoal">
            {INTRO.paragraph}
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.24} className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-charcoal">
            {INTRO.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
