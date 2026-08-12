import Image from "next/image";

import { Asterisk, Display, Label, PillLink } from "@/components/ui/primitives";
import { FEATURED_PROJECT, WORK_INTRO, WORK_NEXT } from "@/content/site";

export function Work() {
  return (
    <section id="vitrine" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div data-reveal-group>
          <Label className="text-mist">{WORK_INTRO.label}</Label>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <Display className="text-ink">{WORK_INTRO.headline}</Display>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-graphite">
              {WORK_INTRO.paragraph}
            </p>
          </div>
        </div>

        {/* Featured project: name and disciplines sit above the media, the way a
            studio index lists work, with the detail breakdown alongside. */}
        <article className="group mt-14 md:mt-20" data-reveal-group>
          <div className="rule flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pt-5 text-ink">
            <div data-reveal>
              <h3 className="type-display text-[clamp(24px,2.6vw,38px)]">
                {FEATURED_PROJECT.name}
              </h3>
              <p className="type-label mt-3 text-mist">{FEATURED_PROJECT.disciplines}</p>
            </div>
            <a
              data-reveal
              href={FEATURED_PROJECT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label inline-flex items-center gap-2 border-b border-ink/30 pb-1 transition-colors hover:border-ink"
            >
              <Asterisk />
              {FEATURED_PROJECT.cta}
            </a>
          </div>

          <a
            data-reveal
            href={FEATURED_PROJECT.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-media relative mt-7 block aspect-[16/9] w-full md:aspect-[21/9]"
          >
            <span className="type-label absolute top-5 left-5 z-10 bg-stone px-3 py-2 text-ink">
              {FEATURED_PROJECT.flag}
            </span>
            <Image
              src={FEATURED_PROJECT.image.src}
              alt={FEATURED_PROJECT.image.alt}
              fill
              sizes="(min-width: 768px) 90vw, 100vw"
              className="object-cover object-left"
            />
          </a>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.25fr] md:gap-16">
            <p data-reveal className="text-base leading-relaxed text-graphite">
              {FEATURED_PROJECT.summary}
            </p>
            <dl className="grid gap-6 sm:grid-cols-3">
              {FEATURED_PROJECT.details.map((detail) => (
                <div key={detail.label} data-reveal className="rule pt-4 text-ink">
                  <dt className="type-label text-mist">{detail.label}</dt>
                  <dd className="mt-2.5 text-sm leading-relaxed text-graphite">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>

        {/* The index has one real entry. Rather than pad it, the empty slot is
            stated plainly and turned into the invitation. */}
        <div
          data-reveal-group
          className="rule mt-16 flex flex-wrap items-center justify-between gap-8 pt-8 md:mt-24"
        >
          <div data-reveal>
            <p className="type-label text-mist">{WORK_NEXT.label}</p>
            <h3 className="type-display mt-3 text-[clamp(24px,2.6vw,38px)] text-ink/35">
              {WORK_NEXT.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite">
              {WORK_NEXT.description}
            </p>
          </div>
          <div data-reveal>
            <PillLink href={WORK_NEXT.cta.href}>{WORK_NEXT.cta.label}</PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}
