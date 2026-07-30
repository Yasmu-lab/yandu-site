import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Cuidadoras Conecta",
    category: "Plataforma digital",
    description:
      "Uma experiência pensada para aproximar famílias e profissionais do cuidado com mais clareza, confiança e praticidade.",
    href: "https://cuidadorasconecta.com.br",
  },
  {
    title: "Novo projeto",
    category: "Sistema sob medida",
    description:
      "Espaço preparado para apresentar novos trabalhos da Yandu sem transformar a página inicial em um portfólio extenso.",
    href: "#",
  },
];

export default function ProjetosPage() {
  return (
    <main className="project-page">
      <div className="project-page__noise" />
      <header className="project-page__header">
        <Link href="/" className="back-link">
          <ArrowLeft size={18} />
          Voltar para a Yandu
        </Link>
      </header>

      <section className="project-page__intro">
        <p className="eyebrow">Projetos selecionados</p>
        <h1>Trabalhos que mostram como pensamos, criamos e entregamos.</h1>
        <p>
          Cada projeto começa com um problema real e termina com uma experiência
          mais simples, clara e útil para quem vai utilizá-la.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            className="project-card"
            target={project.href.startsWith("http") ? "_blank" : undefined}
            rel={project.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <div className={`project-visual project-visual--${index + 1}`}>
              <div className="project-window">
                <span />
                <span />
                <span />
                <div className="project-window__content">
                  <div className="project-window__sidebar" />
                  <div className="project-window__main">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card__copy">
              <div>
                <p>{project.category}</p>
                <h2>{project.title}</h2>
              </div>
              <ArrowUpRight size={22} />
            </div>
            <p className="project-card__description">{project.description}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
