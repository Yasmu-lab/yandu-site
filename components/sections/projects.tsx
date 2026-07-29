import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/content/site";

import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-22 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          eyebrow="Trabalho que já está no ar"
          title="Projetos"
          lead="Cada projeto nasce de um problema real. Aqui está o que já foi resolvido, com mais chegando."
          className="mb-12"
        />
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
