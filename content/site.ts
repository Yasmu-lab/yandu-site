export const SITE = {
  name: "Yandu",
  url: "https://yandu-site.vercel.app",
  title: "Yandu — Estúdio de produto digital",
  description:
    "Yandu é o estúdio de produto digital conduzido pela Yasmin: estratégia, design e desenvolvimento numa única mão, do primeiro rascunho ao deploy em produção.",
  locale: "pt_BR",
  themeColor: "#14130E",
  instagram: "https://www.instagram.com/yandu.oficial/",
  telegram: "https://t.me/+5551992627338",
  whatsapp:
    "https://wa.me/5551992627338?text=Ol%C3%A1%2C%20Yandu!%20Quero%20conversar%20sobre%20um%20projeto.",
  email: "contato@yandu.com.br",
  areaServed: "Vale do Rio Pardo, RS",
  founded: "2026",
} as const;

export const NAV_LINKS = [
  { href: "#vitrine", label: "Vitrine" },
  { href: "#pacotes", label: "Pacotes" },
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
    { label: "Desde", value: "2026" },
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
  "Ver o projeto",
  "Estratégia de produto",
  "Ver o projeto",
  "Design e código",
] as const;

export const WORK_INTRO = {
  label: "Vitrine",
  headline: "Projeto mais recente",
  paragraph: "Cada projeto nasce de um problema real. Este é o que já está no ar.",
} as const;

export type ProjectDetail = { label: string; value: string };

export const FEATURED_PROJECT = {
  flag: "No ar agora",
  name: "Cuidadoras Conecta",
  disciplines: "Estratégia · UX · UI · Desenvolvimento · Deploy",
  summary:
    "Plataforma que conecta famílias a cuidadoras de forma simples e organizada, na região do Vale do Rio Pardo. Construída do zero, do banco de dados à hospedagem.",
  image: {
    src: "/work/cuidadoras-conecta.png",
    alt: "Card de compartilhamento da plataforma Cuidadoras Conecta",
  },
  details: [
    {
      label: "Contexto",
      value:
        "Famílias precisavam encontrar cuidadoras de confiança sem um canal central e organizado pra isso.",
    },
    {
      label: "Papel da Yandu",
      value:
        "Estratégia, UX, UI, desenvolvimento e publicação — do primeiro rascunho até o deploy em produção.",
    },
    {
      label: "Resultado",
      value: "Plataforma no ar, com uso real de famílias e cuidadoras na região.",
    },
  ] satisfies ProjectDetail[],
  tags: ["Plataforma web", "Banco de dados", "Deploy em produção"],
  href: "https://cuidadoras-conecta-rs.vercel.app/",
  cta: "Visualizar",
} as const;

export const WORK_NEXT = {
  label: "Próximo",
  title: "Seu projeto aqui",
  description:
    "A vitrine cresce a cada trabalho que vai ao ar. O próximo espaço está aberto — e pode ser o seu.",
  cta: { href: "#contato", label: "Começar um projeto" },
} as const;

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
  copyright: `© ${SITE.founded} Yandu`,
} as const;
