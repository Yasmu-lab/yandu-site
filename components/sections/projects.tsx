import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/content/site";

import { ProjectStory } from "./project-story";

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          eyebrow="Trabalho que já está no ar"
          title="Projetos"
          lead="Cada projeto nasce de um problema real. Aqui está o que já foi resolvido, com mais chegando."
          className="mb-16 md:mb-24"
        />
        <div className="flex flex-col gap-28 md:gap-40">
          {PROJECTS.map((project, i) => (
            <ProjectStory key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
