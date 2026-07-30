import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/content/site";

import { ProjectTeaserCard } from "./project-teaser-card";

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          eyebrow="Prova, não promessa"
          title="Projetos que já entregamos"
          lead="Poucos projetos, cada um resolvendo um problema real. Clique para conhecer a história completa de cada um."
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectTeaserCard key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
