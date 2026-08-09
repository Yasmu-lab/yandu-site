import { Eyebrow, Headline } from "@/components/headline";
import { Reveal } from "@/components/motion/reveal";
import { MANIFESTO } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-panel px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow className="mb-5">{MANIFESTO.eyebrow}</Eyebrow>
        <Headline lines={MANIFESTO.headline} className="mx-auto" />

        <Reveal variants={fadeUp} delay={0.16} className="mt-8">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-ink/75">
            {MANIFESTO.paragraph}
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.24} className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
            {MANIFESTO.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
