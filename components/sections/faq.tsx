import { Plus } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { FAQ_ITEMS } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-22 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          eyebrow="Antes de você perguntar"
          title="Perguntas frequentes"
          className="mb-12"
        />
        <div className="flex max-w-2xl flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} variants={fadeUp} delay={i * 0.03}>
              <details className="group rounded-lg bg-sage px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4.5 font-heading text-base font-bold text-forest [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus
                    aria-hidden
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:grid-rows-[1fr]">
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-xl pb-5 text-[14.5px] text-ink/85">{item.answer}</p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
