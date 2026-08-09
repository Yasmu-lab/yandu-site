import { Eyebrow, Headline } from "@/components/headline";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SERVICES, SERVICES_INTRO } from "@/content/site";

export function Services() {
  return (
    <section id="servicos" className="bg-bg px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        <Eyebrow className="mb-5">{SERVICES_INTRO.eyebrow}</Eyebrow>
        <Headline lines={SERVICES_INTRO.headline} className="max-w-xl" />

        <RevealGroup className="mt-16 divide-y divide-ink/10 border-t border-ink/10">
          {SERVICES.map((service) => (
            <RevealItem key={service.number} className="group grid gap-3 py-9 md:grid-cols-[100px_1fr] md:gap-8 md:py-11">
              <span className="font-mono text-sm text-ink/45">{service.number}</span>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-coral-text md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">{service.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
