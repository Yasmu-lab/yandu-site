import { Display, Label, PillLink } from "@/components/ui/primitives";
import { ABOUT_INTRO } from "@/content/site";

export function AboutIntro() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]" data-reveal-group>
        <Label className="text-graphite">{ABOUT_INTRO.label}</Label>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <Display size="large" className="max-w-[15ch] text-ink">
            {ABOUT_INTRO.headline}
          </Display>

          <div className="flex flex-col items-start justify-end">
            <p data-reveal className="max-w-md text-base leading-relaxed text-graphite">
              {ABOUT_INTRO.paragraph}
            </p>
            <div data-reveal className="mt-9">
              <PillLink href={ABOUT_INTRO.cta.href}>{ABOUT_INTRO.cta.label}</PillLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
