import Image from "next/image";

import { Asterisk, Display, Label } from "@/components/ui/primitives";
import { FEATURED_PROJECT, WORK_INTRO } from "@/content/site";

export function Work() {
  return (
    <section id="vitrine" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div data-reveal-group>
          <Label className="text-graphite">{WORK_INTRO.label}</Label>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
            <Display className="text-ink">{WORK_INTRO.headline}</Display>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-graphite">
              {WORK_INTRO.paragraph}
            </p>
          </div>
        </div>

        {/* The main case keeps the largest area on the page: name and
            disciplines above the media, full breakdown below it. */}
        <article className="group mt-10 md:mt-14">
          <div className="rule flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pt-5 text-ink">
            <div data-reveal>
              <h3 className="card-title type-display text-[clamp(24px,2.6vw,38px)]">
                {FEATURED_PROJECT.name}
              </h3>
              <p className="type-label mt-3 text-graphite">{FEATURED_PROJECT.disciplines}</p>
            </div>
            <a
              data-reveal
              href={FEATURED_PROJECT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label inline-flex min-h-11 items-center gap-2 text-coral-ink"
            >
              <Asterisk />
              {FEATURED_PROJECT.cta}
              <span className="card-arrow inline-block">↗</span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>

          <a
            data-mask
            href={FEATURED_PROJECT.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-frame mt-7 block aspect-[16/10] w-full md:aspect-[21/9]"
            style={{ ["--seg" as string]: "#122b3a" }}
          >
            <div className="absolute inset-0">
              <span className="type-label absolute top-5 left-5 z-10 flex items-center gap-2 bg-cream px-3 py-2 text-ink">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime" />
                {FEATURED_PROJECT.flag}
              </span>
              <Image
                src={FEATURED_PROJECT.image.src}
                alt={FEATURED_PROJECT.image.alt}
                fill
                priority
                sizes="(min-width: 768px) 90vw, 100vw"
                className="object-cover object-left"
              />
            </div>
          </a>

          <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-ink">
            {FEATURED_PROJECT.summary}
          </p>

          <dl
            data-reveal-group
            className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURED_PROJECT.details.map((detail) => (
              <div key={detail.label} data-reveal className="rule pt-4 text-ink">
                <dt className="type-label text-coral-ink">{detail.label}</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-graphite">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <ul data-reveal className="mt-9 flex flex-wrap gap-2.5">
            {FEATURED_PROJECT.tags.map((tag) => (
              <li
                key={tag}
                className="type-label rounded-full border border-ink/20 px-4 py-2 text-graphite"
              >
                {tag}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
