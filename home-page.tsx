"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Braces,
  Check,
  Menu,
  MousePointer2,
  Network,
  Smartphone,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Braces,
    number: "01",
    title: "Sites que apresentam melhor o seu negócio",
    text: "Experiências rápidas, bonitas e pensadas para transformar interesse em conversa.",
    tags: ["Sites institucionais", "Landing pages", "E-commerce"],
  },
  {
    icon: Blocks,
    number: "02",
    title: "Sistemas que organizam o que hoje dá trabalho",
    text: "Ferramentas sob medida para reunir informações, simplificar rotinas e dar visão ao negócio.",
    tags: ["Painéis", "Portais", "Áreas administrativas"],
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automações que devolvem tempo para sua equipe",
    text: "Fluxos que reduzem tarefas repetitivas e conectam etapas que hoje dependem de esforço manual.",
    tags: ["Fluxos automáticos", "Notificações", "Processos"],
  },
  {
    icon: Network,
    number: "04",
    title: "Integrações que fazem seus sistemas conversarem",
    text: "Conectamos ferramentas e informações para evitar retrabalho, erros e dados espalhados.",
    tags: ["APIs", "Integrações", "Dados sincronizados"],
  },
];

const steps = [
  ["Entendimento", "Começamos pelo problema, pelas pessoas e pelo resultado esperado."],
  ["Direção", "Transformamos o contexto em uma proposta clara de experiência e solução."],
  ["Criação", "Construímos as telas, interações e fluxos com atenção aos detalhes."],
  ["Desenvolvimento", "Levamos a experiência para o código com qualidade e performance."],
  ["Validação", "Testamos, refinamos e preparamos tudo para o uso real."],
];

function ProductStage() {
  return (
    <div className="product-stage" aria-hidden="true">
      <motion.div
        className="stage-orbit stage-orbit--one"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="stage-orbit stage-orbit--two"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="stage-dashboard"
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="mock-window__top">
          <span />
          <span />
          <span />
          <p>Yandu OS</p>
        </div>
        <div className="dashboard-layout">
          <aside>
            <div className="dash-logo" />
            <div />
            <div />
            <div />
            <div />
          </aside>
          <section>
            <div className="dash-heading">
              <div>
                <span />
                <span />
              </div>
              <button>Nova visão</button>
            </div>
            <div className="dash-stats">
              <article>
                <small>Projetos ativos</small>
                <strong>12</strong>
                <span>+18% este mês</span>
              </article>
              <article>
                <small>Automações</small>
                <strong>38</strong>
                <span>124h economizadas</span>
              </article>
              <article>
                <small>Performance</small>
                <strong>98</strong>
                <span>Experiência otimizada</span>
              </article>
            </div>
            <div className="dash-chart">
              <div className="chart-bars">
                {[30, 44, 38, 62, 54, 78, 66, 92].map((height, index) => (
                  <motion.i
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.7 + index * 0.08, duration: 0.6 }}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </motion.div>

      <motion.div
        className="stage-phone"
        initial={{ opacity: 0, y: 35, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ duration: 0.9, delay: 0.55 }}
      >
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-head">
            <div className="phone-avatar" />
            <div>
              <span />
              <span />
            </div>
          </div>
          <div className="phone-card">
            <small>Resumo de hoje</small>
            <strong>R$ 18.420</strong>
            <div className="phone-chart">
              {[40, 65, 52, 78, 58, 82].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="phone-list">
            <div><span /><p /></div>
            <div><span /><p /></div>
            <div><span /><p /></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="stage-float stage-float--one"
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={18} />
        Experiência digital
      </motion.div>
      <motion.div
        className="stage-float stage-float--two"
        animate={{ y: [0, 9, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bot size={18} />
        Processo automatizado
      </motion.div>
    </div>
  );
}

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 18 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, 130]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.25]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 12);
      mouseY.set(event.clientY - 12);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div className="cursor-dot" style={{ x: smoothX, y: smoothY }}>
        <MousePointer2 size={12} />
      </motion.div>

      <header className="site-header">
        <Link href="/" className="brand" aria-label="Yandu, página inicial">
          <span className="brand-mark">
            <i />
            <i />
            <i />
          </span>
          <span>Yandu</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">O que fazemos</a>
          <a href="#processo">Como trabalhamos</a>
          <Link href="/projetos">Projetos</Link>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="header-cta" href="#contato">
          Vamos conversar
          <ArrowUpRight size={17} />
        </a>

        <button
          className="menu-button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#servicos" onClick={() => setMenuOpen(false)}>O que fazemos</a>
          <a href="#processo" onClick={() => setMenuOpen(false)}>Como trabalhamos</a>
          <Link href="/projetos" onClick={() => setMenuOpen(false)}>Projetos</Link>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar</a>
        </motion.nav>
      )}

      <motion.section className="hero" style={{ y: heroY, opacity: heroOpacity }}>
        <div className="hero-grid" />
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Produtos digitais com intenção
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Ideias ganham forma.
            <span>Negócios ganham movimento.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
          >
            Criamos sites, sistemas, automações e experiências digitais que
            simplificam o trabalho, fortalecem marcas e ajudam empresas a crescer.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <a href="#contato" className="button button--primary">
              Tirar uma ideia do papel
              <ArrowRight size={18} />
            </a>
            <a href="#servicos" className="button button--ghost">
              Conhecer a Yandu
              <ArrowDown size={18} />
            </a>
          </motion.div>

          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <span><Check size={15} /> Estratégia</span>
            <span><Check size={15} /> Design</span>
            <span><Check size={15} /> Desenvolvimento</span>
          </motion.div>
        </div>

        <ProductStage />
      </motion.section>

      <section className="marquee" aria-label="Especialidades">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].flatMap((_, group) =>
            ["Sites", "Sistemas", "Experiências", "Automações", "Integrações"].map(
              (item) => (
                <span key={`${group}-${item}`}>
                  {item}
                  <i />
                </span>
              )
            )
          )}
        </motion.div>
      </section>

      <section className="manifesto section-shell">
        <div className="manifesto-label">
          <span>O que nos move</span>
        </div>
        <motion.p
          initial={{ opacity: 0.25 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Não acreditamos em tecnologia feita apenas para parecer moderna.
          Criamos produtos digitais que fazem sentido para o negócio e para as
          pessoas que vão utilizá-los.
        </motion.p>
      </section>

      <section className="services section-shell" id="servicos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O que construímos</p>
            <h2>Soluções digitais que resolvem problemas reais.</h2>
          </div>
          <p>
            Da primeira ideia ao produto funcionando, unimos visão de negócio,
            experiência e tecnologia em um único processo.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="service-card__number">{service.number}</div>
                <div className="service-card__icon"><Icon size={25} /></div>
                <div className="service-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <ArrowUpRight className="service-card__arrow" />
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="showcase">
        <div className="showcase-copy">
          <p className="eyebrow">Uma experiência que explica por si</p>
          <h2>Menos apresentação. Mais demonstração.</h2>
          <p>
            Em vez de apenas dizer o que fazemos, mostramos como informação,
            interfaces e processos podem se transformar em uma experiência clara.
          </p>
          <Link href="/projetos" className="text-link">
            Conhecer nossos projetos
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="showcase-canvas">
          <motion.div
            className="flow-card flow-card--a"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            viewport={{ once: true }}
          >
            <Smartphone />
            <div><strong>Nova solicitação</strong><span>Aplicativo</span></div>
          </motion.div>
          <motion.div
            className="flow-line flow-line--one"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
          />
          <motion.div
            className="flow-card flow-card--b"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Bot />
            <div><strong>Fluxo automatizado</strong><span>Validação e organização</span></div>
          </motion.div>
          <motion.div
            className="flow-line flow-line--two"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.8 }}
          />
          <motion.div
            className="flow-card flow-card--c"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <Blocks />
            <div><strong>Visão centralizada</strong><span>Painel de gestão</span></div>
          </motion.div>
        </div>
      </section>

      <section className="process section-shell" id="processo">
        <div className="process-intro">
          <p className="eyebrow">Como trabalhamos</p>
          <h2>Um processo claro para transformar incerteza em produto.</h2>
          <p>
            Você acompanha as decisões, entende cada etapa e participa do que
            realmente precisa ser validado.
          </p>
        </div>

        <div className="process-steps">
          {steps.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-visual">
          <div className="about-orb">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <span>YANDU • DIGITAL • PRODUCTS • </span>
            </motion.div>
            <strong>Y</strong>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Sobre a Yandu</p>
          <h2>Próximos o bastante para entender. Técnicos o bastante para entregar.</h2>
          <p>
            A Yandu nasceu para transformar necessidades de negócio em produtos
            digitais úteis, bonitos e possíveis de manter. Trabalhamos com
            proximidade, clareza e responsabilidade do início ao fim.
          </p>
          <div className="about-points">
            <span><Check /> Conversa direta e sem complicação</span>
            <span><Check /> Decisões explicadas com clareza</span>
            <span><Check /> Produtos preparados para evoluir</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contato">
        <div className="contact-glow" />
        <p className="eyebrow">Vamos construir algo útil</p>
        <h2>Tem uma ideia, um processo confuso ou um produto para melhorar?</h2>
        <p>Conte o contexto. A primeira conversa começa pelo problema, não pela tecnologia.</p>
        <a
          href="mailto:contato@yandu.com.br?subject=Quero conversar sobre um projeto"
          className="button button--light"
        >
          Falar com a Yandu
          <ArrowUpRight size={20} />
        </a>
      </section>

      <footer className="site-footer">
        <Link href="/" className="brand brand--footer">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>Yandu</span>
        </Link>
        <p>Produtos digitais que fazem negócios avançarem.</p>
        <div>
          <Link href="/projetos">Projetos</Link>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
        </div>
        <small>© {new Date().getFullYear()} Yandu. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
