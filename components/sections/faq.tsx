import { Display, Label } from "@/components/ui/primitives";
import { FAQ_INTRO, FAQ_ITEMS } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div data-reveal-group>
          <Label className="text-graphite">{FAQ_INTRO.label}</Label>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <Display className="text-ink">{FAQ_INTRO.headline}</Display>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-graphite">
              {FAQ_INTRO.paragraph}
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-20" data-reveal-group>
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} data-reveal className="group rule text-ink">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">
                <span className="type-display text-[clamp(19px,1.9vw,28px)]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <p className="max-w-2xl pb-8 text-base leading-relaxed text-graphite">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
