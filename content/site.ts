export const SITE = {
  name: "Yandu",
  url: "https://yandu-site.vercel.app",
  title: "Yandu — Tire sua ideia do papel",
  description:
    "Estúdio digital que transforma ideia e processo em produto digital: sites, sistemas, automações e experiências digitais para pequenos negócios e profissionais do Vale do Rio Pardo, RS.",
  locale: "pt_BR",
  themeColor: "#1F3D2B",
  instagram: "https://www.instagram.com/yandu.oficial/",
  whatsapp: "https://wa.me/message/",
  email: "contato@yandu.com.br",
  areaServed: "Vale do Rio Pardo, RS",
} as const;

export const NAV_LINKS = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
] as const;

export const HERO = {
  eyebrow: "Estúdio digital · Vale do Rio Pardo",
  prefix: "Criamos",
  rotatingWords: ["Sites", "Sistemas", "Automações", "Experiências Digitais"],
  lead: "A Yandu transforma ideia e processo em produto digital que funciona: pensado do jeito que seu negócio realmente opera, do primeiro rascunho ao deploy em produção.",
  primaryCta: { href: "#contato", label: "Chama agora" },
  secondaryCta: { href: "#projetos", label: "Ver projetos" },
} as const;

export const CAPACITIES = [
  "Estratégia de produto",
  "UX",
  "UI",
  "Desenvolvimento",
  "Arquitetura de sistemas",
  "SEO técnico",
  "Performance",
  "Acessibilidade",
  "Automação",
  "Integrações",
] as const;

export type Project = {
  slug: string;
  flag: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  image: { src: string; alt: string; width: number; height: number };
  video?: string;
  links: { primary: { href: string; label: string }; caseHref?: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "cuidadoras-conecta",
    flag: "No ar agora",
    title: "Cuidadoras Conecta",
    description:
      "Plataforma completa construída do zero, do banco de dados à hospedagem, conectando famílias a cuidadoras de forma simples e organizada.",
    problem:
      "Famílias e cuidadoras se encontravam de forma informal e desorganizada, sem um lugar central e confiável pra isso.",
    solution:
      "Plataforma web própria, com banco de dados estruturado e deploy em produção — no ar, com gente usando de verdade.",
    tags: ["Plataforma web", "Banco de dados", "Deploy em produção"],
    image: {
      src: "/images/cuidadoras-conecta-preview.png",
      alt: "Card de apresentação do Cuidadoras Conecta: fundo verde-escuro com o nome do projeto, a frase 'Cuidado de verdade, perto de você' e o selo de cadastro gratuito",
      width: 1200,
      height: 630,
    },
    links: {
      primary: {
        href: "https://cuidadoras-conecta-rs.vercel.app/",
        label: "Acessar site",
      },
    },
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "sites",
    title: "Sites",
    short: "Presença digital",
    description:
      "Site institucional ou landing page pra você existir online de forma profissional e ser encontrado por quem procura o que você faz.",
  },
  {
    slug: "sistemas",
    title: "Sistemas",
    short: "Produtos digitais",
    description:
      "Plataformas e sistemas web construídos do zero, com banco de dados e lógica de negócio real por trás — não só uma página estática.",
  },
  {
    slug: "automacoes",
    title: "Automações",
    short: "Menos trabalho manual",
    description:
      "Fluxos automáticos que organizam pedidos, atendimento e informações. Menos trabalho manual, menos coisa esquecida.",
  },
  {
    slug: "ux-ui",
    title: "UX/UI",
    short: "Design que resolve",
    description:
      "Wireframes que viram telas finais com intenção: cada decisão visual existe pra guiar o olhar e facilitar a decisão de quem usa.",
  },
] as const;

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, seu público e o problema real por trás do pedido, antes de desenhar qualquer solução.",
  },
  {
    step: "02",
    title: "Estratégia",
    description:
      "Definimos escopo, prioridades e arquitetura da solução — o que entra na primeira entrega e o que vem depois.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Wireframes viram telas finais, com identidade visual própria e decisões guiadas por como as pessoas realmente usam.",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description:
      "Construção com padrão de produção: banco de dados, performance e acessibilidade desde a primeira linha de código.",
  },
  {
    step: "05",
    title: "Entrega",
    description:
      "Deploy em produção, validado ponta a ponta, com a base de código pronta pra crescer conforme seu negócio evolui.",
  },
] as const;

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "Depende do escopo: um site institucional costuma levar de 2 a 3 semanas; sistemas e plataformas com banco de dados variam de 4 a 10 semanas. Isso é definido junto com você na fase de Estratégia.",
  },
  {
    question: "Vocês atendem fora do Vale do Rio Pardo?",
    answer:
      "Sim. A Yandu é baseada no Vale do Rio Pardo (RS), mas todo o processo é remoto e já atendemos negócios de outras regiões.",
  },
  {
    question: "Preciso já ter identidade visual pronta?",
    answer:
      "Não. Se você ainda não tem marca definida, isso entra na fase de Design junto com o restante do projeto.",
  },
  {
    question: "Como funciona a manutenção depois da entrega?",
    answer:
      "Todo projeto sai com documentação e arquitetura pensada pra evoluir. Manutenção e novas features podem ser contratadas sob demanda.",
  },
  {
    question: "Vocês fazem só o design ou também o desenvolvimento?",
    answer:
      "Os dois. A Yandu cobre da estratégia ao deploy em produção — design e desenvolvimento pela mesma equipe, sem perda de contexto entre etapas.",
  },
] as const;

export const CONTACT = {
  eyebrow: "Vamos conversar",
  title: "Sua ideia já pode virar produto",
  lead: "Chama no WhatsApp ou manda um e-mail. Respondemos rápido e sem enrolação.",
  note: "Vale do Rio Pardo, RS · atendimento remoto em todo o Brasil",
} as const;
