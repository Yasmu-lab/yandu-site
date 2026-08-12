import { Eyebrow, Headline } from "@/components/headline";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { FAQ_INTRO, FAQ_ITEMS } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function Faq() {
  return (
    <section id="faq" className="bg-ash-mist px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[820px]">
        <Eyebrow className="mb-5">{FAQ_INTRO.eyebrow}</Eyebrow>
        <Headline segments={FAQ_INTRO.headline} />
        <Reveal variants={fadeUp} delay={0.12} className="mt-5">
          <p className="max-w-md text-base leading-relaxed text-charcoal">{FAQ_INTRO.paragraph}</p>
        </Reveal>

        <RevealGroup className="mt-14 divide-y divide-silver-veil/30 border-t border-silver-veil/30">
          {FAQ_ITEMS.map((item) => (
            <RevealItem key={item.question}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="text-lg text-vault-ink md:text-xl">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="relative h-4 w-4 shrink-0 text-vault-ink transition-transform duration-300 group-open:rotate-45"
                  >
                    <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal">{item.answer}</p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
