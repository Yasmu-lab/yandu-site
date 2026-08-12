import { Eyebrow, Headline } from "@/components/headline";
import { Reveal } from "@/components/motion/reveal";
import { ABOUT } from "@/content/site";
import { fadeUp } from "@/lib/motion";

function SignatureMark() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[280px] rounded-full border border-silver-veil/30"
    >
      <div className="absolute inset-6 rounded-full border border-silver-veil/20" />
      <div className="absolute inset-12 rounded-full border border-silver-veil/10" />
      <span className="accent-mark absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-bone px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1100px] gap-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-16">
        <div>
          <Eyebrow className="mb-5">{ABOUT.eyebrow}</Eyebrow>
          <Headline segments={ABOUT.headline} />
          {ABOUT.paragraphs.map((paragraph, i) => (
            <Reveal key={i} variants={fadeUp} delay={0.14 + i * 0.08} className="mt-5">
              <p className="max-w-xl text-base leading-relaxed text-charcoal">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal variants={fadeUp} delay={0.3} className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-charcoal">
              {ABOUT.signatureLabel}
            </p>
          </Reveal>
        </div>

        <Reveal variants={fadeUp} delay={0.2}>
          <SignatureMark />
        </Reveal>
      </div>
    </section>
  );
}
