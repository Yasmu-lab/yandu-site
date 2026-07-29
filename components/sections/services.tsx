import { SectionHeading } from "@/components/section-heading";
import { SERVICES } from "@/content/site";

import { ServiceTile } from "./service-tile";

export function Services() {
  return (
    <section id="servicos" className="bg-sage px-6 py-22 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          eyebrow="Resolve problema, não só entrega site"
          title="Serviços"
          lead="Organizados pelo problema que resolvem, não pelo nome técnico do entregável."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ServiceTile key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
