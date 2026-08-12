import { Display, Label, PillLink } from "@/components/ui/primitives";
import { CONTACT } from "@/content/site";

export function Contact() {
  return (
    <section id="contato" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]" data-reveal-group>
        <Label className="text-graphite">{CONTACT.label}</Label>

        <Display size="large" className="mt-10 max-w-[14ch] text-ink">
          {CONTACT.headline}
        </Display>

        <p data-reveal className="mt-8 max-w-md text-base leading-relaxed text-graphite">
          {CONTACT.paragraph}
        </p>

        <div data-reveal className="mt-11 flex flex-wrap gap-3.5">
          {CONTACT.links.map((link) => (
            <PillLink
              key={link.label}
              href={link.href}
              external
              tone={link.primary ? "solid" : "ink"}
            >
              {link.label}
            </PillLink>
          ))}
        </div>
      </div>
    </section>
  );
}
