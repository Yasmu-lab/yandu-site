export const SITE = {
  name: "Yandu",
  url: "https://yandu-site.vercel.app",
  title: "Yandu — Estúdio de produto digital",
  description:
    "Yandu é o estúdio de produto digital conduzido pela Yasmin: estratégia, design e desenvolvimento numa única mão, do primeiro rascunho ao deploy em produção.",
  locale: "pt_BR",
  themeColor: "#171713",
  instagram: "https://www.instagram.com/yandu.oficial/",
  telegram: "https://t.me/+5551992627338",
  whatsapp:
    "https://wa.me/5551992627338?text=Ol%C3%A1%2C%20Yandu!%20Quero%20conversar%20sobre%20um%20projeto.",
  email: "contato@yandu.com.br",
  areaServed: "Vale do Rio Pardo, RS",
} as const;

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#processo", label: "Processo" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#faq", label: "FAQ" },
] as const;

export const HERO = {
  wordmark: "Yandu",
  lockup: ["Estúdio", "Produto digital", "que funciona®"],
  tagline: "Estratégia, design e código numa mão só.",
  meta: [
    { label: "Base", value: "Vale do Rio Pardo, RS" },
    { label: "Atendimento", value: "Remoto, todo o Brasil" },
    { label: "Entrega", value: "Ponta a ponta" },
  ],
  scrollCue: "Role",
} as const;

export const ABOUT_INTRO = {
  label: "Sobre nós",
  headline: "Construindo produtos digitais que resolvem problema de verdade.",
  paragraph:
    "A Yandu junta duas coisas que raramente andam juntas: entendimento de negócio e mão na massa técnica. Antes de programar, penso em processo — é isso que separa um produto que funciona de um produto que só existe. Sou eu quem conduz cada projeto, do primeiro rascunho até o deploy, sem camada de repasse entre quem decide e quem constrói.",
  cta: { href: "#contato", label: "Trabalhe comigo" },
} as const;

export const MARQUEE_ITEMS = [
  "Contabilidade",
  "Saúde",
  "Produtos digitais",
  "Negócios locais",
  "Estratégia",
  "Design",
  "Desenvolvimento",
] as const;

/* ===== Case principal ===== */

export const WORK_INTRO = {
  label: "Vitrine",
  headline: "Projetos selecionados",
  paragraph: "Estratégia, design e desenvolvimento aplicados a negócios reais.",
} as const;

export type ProjectDetail = { label: string; value: string };

export const FEATURED_PROJECT = {
  flag: "Site publicado",
  name: "Cuidadoras Conecta",
  disciplines: "Estratégia · UX · UI · Desenvolvimento · Publicação",
  summary:
    "Plataforma que conecta famílias a cuidadoras de forma simples e organizada, na região do Vale do Rio Pardo. Construída do zero, do banco de dados à hospedagem.",
  image: {
    src: "/work/cuidadoras-conecta.png",
    alt: "Tela de abertura da plataforma Cuidadoras Conecta",
  },
  details: [
    {
      label: "Contexto",
      value:
        "Famílias e cuidadoras da região se encontravam de forma informal, sem nenhum canal central organizado pra isso.",
    },
    {
      label: "Problema",
      value:
        "Sem um lugar único, a busca dependia de indicação boca a boca — demorada para as famílias e invisível para quem oferecia o serviço.",
    },
    {
      label: "Papel da Yandu",
      value:
        "Projeto conduzido ponta a ponta: estratégia, UX, UI, desenvolvimento e publicação, do primeiro rascunho ao deploy.",
    },
    {
      label: "Solução",
      value:
        "Plataforma web própria, com banco de dados estruturado e cadastro organizado, no lugar de uma página institucional estática.",
    },
    {
      label: "Resultado",
      value: "Plataforma no ar, com uso real de famílias e cuidadoras na região.",
    },
  ] satisfies ProjectDetail[],
  tags: ["Plataforma web", "Banco de dados", "Deploy em produção"],
  href: "https://cuidadoras-conecta-rs.vercel.app/",
  cta: "Ver projeto",
} as const;

/* ===== Portfólio por segmento =====
   `href` e `image` são null quando o endereço publicado ou o print real ainda
   não foram confirmados. Nenhum dos dois é inventado: sem href o card não
   recebe link nem selo de publicado, e sem image ele usa a composição
   tipográfica no lugar de um print falso. */

export type Segment = {
  id: string;
  label: string;
  /** Tint aplicado no hover do card. Precisa ser escuro (o print fica sob ele). */
  tint: string;
};

export const SEGMENTS: Segment[] = [
  { id: "contabilidade", label: "Contabilidade", tint: "#173b32" },
  { id: "saude", label: "Saúde", tint: "#1d4a3f" },
  { id: "locais", label: "Negócios locais", tint: "#3a2f1c" },
  { id: "liberais", label: "Profissionais liberais", tint: "#2b2a24" },
  { id: "produtos", label: "Produtos digitais", tint: "#122b3a" },
] as const;

export type Project = {
  id: string;
  name: string;
  segment: string;
  /** Só quando confirmada. */
  city: string | null;
  kind: string;
  services: string;
  /** URL publicada e verificada, ou null. */
  href: string | null;
  image: { src: string; alt: string } | null;
  /** Peso na grade editorial: wide ocupa duas colunas. */
  weight?: "wide" | "tall" | "normal";
};

export const PROJECTS: Project[] = [
  {
    id: "cuidadoras-conecta",
    name: "Cuidadoras Conecta",
    segment: "produtos",
    city: "Vale do Rio Pardo, RS",
    kind: "Produto digital",
    services: "Estratégia · UX · UI · Desenvolvimento · Publicação",
    href: "https://cuidadoras-conecta-rs.vercel.app/",
    image: {
      src: "/work/cuidadoras-conecta.png",
      alt: "Tela de abertura da plataforma Cuidadoras Conecta",
    },
    weight: "wide",
  },
  {
    id: "marisa-schweickardt",
    name: "Marisa Schweickardt Contabilidade",
    segment: "contabilidade",
    city: "Santa Cruz do Sul",
    kind: "Site institucional",
    services: "Direção visual · UI · Desenvolvimento · Publicação",
    href: null,
    image: null,
  },
  {
    id: "plena",
    name: "Plena Administração e Contabilidade",
    segment: "contabilidade",
    city: null,
    kind: "Site institucional",
    services: "Direção visual · UI · Desenvolvimento · Publicação",
    href: null,
    image: null,
  },
  {
    id: "servicon",
    name: "Servicon Contabilidade",
    segment: "contabilidade",
    city: null,
    kind: "Site institucional",
    services: "Direção visual · UI · Desenvolvimento · Publicação",
    href: null,
    image: null,
  },
  {
    id: "zafira",
    name: "Zafira Soluções Contábeis",
    segment: "contabilidade",
    city: null,
    kind: "Site institucional",
    services: "Direção visual · UI · Desenvolvimento · Publicação",
    href: null,
    image: null,
  },
  {
    id: "luciana-rigon",
    name: "Luciana Rigon Contadora",
    segment: "contabilidade",
    city: null,
    kind: "Site institucional",
    services: "Direção visual · UI · Desenvolvimento · Publicação",
    href: null,
    image: null,
  },
  {
    id: "rubi",
    name: "Rubi Assessoria e Gestão Contábil",
    segment: "contabilidade",
    city: null,
    kind: "Site institucional",
    services: "Direção visual · UI · Desenvolvimento · Publicação",
    href: null,
    image: null,
  },
  {
    id: "espaco-saude-vera-cruz",
    name: "Espaço Saúde Vera Cruz",
    segment: "saude",
    city: null,
    kind: "Site institucional",
    services: "Direção visual · UI · Desenvolvimento",
    href: null,
    image: null,
  },
] as const;

export const PORTFOLIO_INTRO = {
  label: "Projetos por segmento",
  headline: [{ text: "Presença digital." }, { text: "Aplicada de verdade." }],
  paragraph:
    "Sites e produtos criados para diferentes negócios, sempre com uma direção visual própria.",
  filterAllLabel: "Todos",
  pendingNote: "Endereço em confirmação",
} as const;

export const PORTFOLIO_CTA = {
  question: "Não encontrou exatamente o seu segmento?",
  answer: "A direção visual não parte de um modelo pronto. Ela parte do seu negócio.",
  cta: { href: SITE.whatsapp, label: "Conversar sobre meu projeto" },
} as const;

/* ===== Direções por segmento ===== */

export type Direction = {
  id: string;
  title: string;
  description: string;
  segment: string;
};

export const DIRECTIONS_INTRO = {
  label: "Um ponto de partida",
  headline: "Uma direção para cada tipo de negócio.",
} as const;

export const DIRECTIONS: Direction[] = [
  {
    id: "contabilidade",
    title: "Sites para contabilidade",
    description:
      "Presença digital confiável, organizada e próxima, sem aparência de template contábil genérico.",
    segment: "contabilidade",
  },
  {
    id: "saude",
    title: "Sites para saúde",
    description:
      "Experiências acolhedoras e profissionais, desenvolvidas para facilitar a confiança e o contato.",
    segment: "saude",
  },
  {
    id: "liberais",
    title: "Sites para profissionais liberais",
    description:
      "Sites que transformam experiência, personalidade e autoridade em uma presença digital clara.",
    segment: "liberais",
  },
  {
    id: "locais",
    title: "Sites para negócios locais",
    description:
      "Estruturas objetivas para apresentar serviços, localização, diferenciais e canais de atendimento.",
    segment: "locais",
  },
] as const;

export const DIRECTIONS_CTA = {
  href: SITE.whatsapp,
  label: "Quero uma direção para o meu negócio",
} as const;

/* ===== Prova ===== */

export const TRUST_ITEMS = [
  "Projetos autorais",
  "Entrega ponta a ponta",
  "Sites responsivos",
  "Atendimento remoto em todo o Brasil",
  "Publicação e suporte",
] as const;

/* ===== Pacotes ===== */

export type Package = {
  id: string;
  tab: string;
  title: string;
  description: string;
  stack: string[];
};

export const PACKAGES_INTRO = {
  label: "Nossos pacotes",
  headline: "Organizados pelo problema que resolvem.",
  paragraph: "Não pelo nome técnico do entregável.",
} as const;

export const PACKAGES: Package[] = [
  {
    id: "presenca",
    tab: "Presença digital",
    title: "Presença digital",
    description:
      "Site institucional ou landing page pra você existir online de forma profissional e ser encontrado por quem procura o que você faz.",
    stack: ["Estratégia de produto", "UI", "SEO técnico", "Performance"],
  },
  {
    id: "produto",
    tab: "Produtos digitais",
    title: "Produtos digitais",
    description:
      "Plataformas e sistemas web construídos do zero, com banco de dados e lógica de negócio real por trás — não só uma página estática.",
    stack: ["Estratégia de produto", "UX", "Desenvolvimento", "Arquitetura de sistemas"],
  },
  {
    id: "automacoes",
    tab: "Automações",
    title: "Automações",
    description:
      "Fluxos automáticos que organizam pedidos, atendimento e informações. Menos trabalho manual, menos coisa esquecida.",
    stack: ["Automação", "Integrações", "Arquitetura de sistemas"],
  },
  {
    id: "integracoes",
    tab: "Integrações",
    title: "Integrações",
    description:
      "Conexão entre ferramentas que hoje não conversam entre si, pra sua operação parar de depender de copiar e colar dado.",
    stack: ["Integrações", "Automação", "Desenvolvimento"],
  },
  {
    id: "dashboards",
    tab: "Dashboards",
    title: "Dashboards",
    description:
      "Painéis simples que juntam seus números num só lugar, pra você decidir com clareza — não no achismo.",
    stack: ["UX", "UI", "Desenvolvimento", "Integrações"],
  },
] as const;

export const CAPABILITIES_INTRO = {
  label: "O que sustenta cada entrega",
  headline: "Capacidades",
} as const;

export const CAPABILITIES = [
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

/* ===== Processo ===== */

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_INTRO = {
  label: "Sem mistério",
  headline: "Processo",
  paragraph: "Seis etapas, do entendimento do problema até a evolução contínua do que foi entregue.",
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Entendimento",
    description: "Você me conta o que precisa e eu entendo o problema real por trás do pedido.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definimos o que realmente precisa ser construído e em que ordem, sem gordura no escopo.",
  },
  {
    number: "03",
    title: "UX / UI",
    description: "Estrutura da experiência e identidade visual desenhadas pra facilitar a decisão de quem usa.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Construção técnica do produto, com atenção a performance, acessibilidade e organização de código.",
  },
  {
    number: "05",
    title: "Publicação",
    description: "Site ou sistema no ar, com ajustes finais incluídos até ficar redondo.",
  },
  {
    number: "06",
    title: "Evolução",
    description: "Acompanhamento depois do lançamento, pra o produto continuar melhorando junto com o seu negócio.",
  },
] as const;

export const STATEMENT = {
  label: "Por que a Yandu existe",
  quote:
    "Produto digital de verdade pra quem mais precisa e menos tem acesso: pequenos negócios e profissionais que não têm tempo nem orçamento pra esperar meses por um resultado.",
  author: "Yasmin",
  role: "Fundadora da Yandu",
} as const;

export type FaqItem = { question: string; answer: string };

export const FAQ_INTRO = {
  label: "Antes de decidir",
  headline: "Perguntas frequentes",
  paragraph: "O que a maioria pergunta antes de chamar no direct.",
} as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Qual o prazo pra entregar um projeto?",
    answer:
      "Varia com o escopo. Um site institucional costuma sair em poucos dias; uma plataforma completa ou automação mais robusta leva mais tempo. Isso fica claro na proposta, antes de qualquer trabalho começar.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Valor e forma de pagamento são combinados na proposta, sem letra miúda. Nada muda no meio do caminho sem você saber antes.",
  },
  {
    question: "Existe suporte depois da entrega?",
    answer:
      "Sim. Ajustes finais já entram na entrega, e a evolução contínua do produto pode seguir depois, conforme sua necessidade.",
  },
  {
    question: "Atende fora do Vale do Rio Pardo?",
    answer:
      "O foco é a região, mas todo o trabalho é feito remotamente — negócios de outras cidades também podem chamar no direct.",
  },
  {
    question: "Preciso ter site pronto pra pensar em automação?",
    answer:
      "Não. Automação e site são frentes independentes. Dá pra começar por onde o problema estiver mais urgente.",
  },
  {
    question: "Não sei exatamente o que preciso, posso chamar mesmo assim?",
    answer:
      "Sim — essa é justamente a primeira etapa do processo: entender o problema real antes de definir a solução.",
  },
] as const;

export const CONTACT = {
  label: "O próximo ponto é seu",
  headline: "Tire sua ideia do papel.",
  paragraph: "Me conta o que você precisa. Respondo rápido e sem enrolar.",
  links: [
    { label: "WhatsApp", href: SITE.whatsapp, primary: true },
    { label: "Telegram", href: SITE.telegram, primary: false },
    { label: "Instagram", href: SITE.instagram, primary: false },
  ],
} as const;

export const FOOTER = {
  wordmark: "Yandu",
  tagline: "Estúdio de produto digital",
  contactLabel: "Fale direto",
  nav: NAV_LINKS,
  social: [
    { label: "WhatsApp", href: SITE.whatsapp },
    { label: "Telegram", href: SITE.telegram },
    { label: "Instagram", href: SITE.instagram },
  ],
  copyright: "© 2026 Yandu",
} as const;
