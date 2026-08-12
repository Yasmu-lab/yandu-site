import { Eyebrow, Headline } from "@/components/headline";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  const [primary, ...secondary] = CONTACT.links;

  return (
    <section id="contato" className="bg-vault-ink px-6 py-28 text-bone md:px-10 md:py-36">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow className="mb-5" textClassName="text-silver-veil">
          {CONTACT.eyebrow}
        </Eyebrow>
        <Headline segments={CONTACT.headline} size="hero" className="mx-auto" textClassName="text-bone" />

        <Reveal variants={fadeUp} delay={0.16} className="mt-8">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-silver-veil">{CONTACT.paragraph}</p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.26} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="solid-light" size="lg">
            <a href={primary.href} target="_blank" rel="noopener noreferrer">
              {primary.label}
              <span className="accent-mark" aria-hidden="true" />
            </a>
          </Button>
          {secondary.map((link) => (
            <Button key={link.label} asChild variant="ghost-dark" size="lg">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </Button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
