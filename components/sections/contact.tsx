import { Eyebrow, Headline } from "@/components/headline";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contato" className="bg-coral px-6 py-28 text-ink-deep md:px-10 md:py-36">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow className="mb-5" textClassName="text-ink-deep/65">
          {CONTACT.eyebrow}
        </Eyebrow>
        <Headline
          lines={CONTACT.headline}
          className="mx-auto text-ink-deep"
          accentClassName="text-ink"
        />

        <Reveal variants={fadeUp} delay={0.16} className="mt-8">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-ink-deep/80">
            {CONTACT.paragraph}
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.24} className="mt-10">
          <MagneticButton>
            <Button asChild variant="on-coral" size="lg">
              <a href={CONTACT.cta.href} target="_blank" rel="noopener noreferrer">
                {CONTACT.cta.label}
              </a>
            </Button>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
