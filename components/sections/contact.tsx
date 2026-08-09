import { Eyebrow, Headline } from "@/components/headline";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contato" className="bg-vault-ink px-6 py-28 text-bone md:px-10 md:py-36">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow className="mb-5">{CONTACT.eyebrow}</Eyebrow>
        <Headline lines={CONTACT.headline} className="mx-auto" textClassName="text-bone" />

        <Reveal variants={fadeUp} delay={0.16} className="mt-8">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-silver-veil">
            {CONTACT.paragraph}
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.24} className="mt-10">
          <Button asChild variant="arrow-dark" size="lg">
            <a href={CONTACT.cta.href} target="_blank" rel="noopener noreferrer">
              {CONTACT.cta.label}
              <span className="accent-mark" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
