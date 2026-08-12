export const SITE = {
  name: "Yandu",
  url: "https://yandu-site.vercel.app",
  title: "Yandu — Estúdio de produto digital",
  description:
    "Yandu é o estúdio de produto digital conduzido pela Yasmin: estratégia, design e desenvolvimento numa única mão, do primeiro rascunho ao deploy em produção.",
  locale: "pt_BR",
  themeColor: "#0F111A",
  instagram: "https://www.instagram.com/yandu.oficial/",
  telegram: "https://t.me/+5551992627338",
  whatsapp:
    "https://wa.me/5551992627338?text=Ol%C3%A1%2C%20Yandu!%20Quero%20conversar%20sobre%20um%20projeto.",
  email: "contato@yandu.com.br",
  areaServed: "Vale do Rio Pardo, RS",
  founded: "2026",
} as const;

export const NAV_LINKS = [
  { href: "/#trabalho", label: "Trabalho" },
  { href: "/#capacidades", label: "Capacidades" },
  { href: "/#processo", label: "Processo" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const HERO = {
  eyebrow: "Estúdio de produto digital · Vale do Rio Pardo, RS",
  headline: [
    { text: "Produto digital " },
    { text: "com estratégia", accent: true },
    { text: "por trás." },
  ],
  paragraph:
    "A Yandu projeta e constrói sites, plataformas e automações para negócios que precisam de mais do que uma página bonita — precisam de algo que funcione, do banco de dados à publicação.",
  cta: { href: "#trabalho", label: "Ver trabalho" },
  ctaSecondary: { href: "#contato", label: "Iniciar um projeto" },
  meta: [
    { label: "Fundação", value: "2026" },
    { label: "Projetos no ar", value: "01" },
    { label: "Atendimento", value: "Remoto, todo o Brasil" },
  ],
} as const;

export const TICKER_ITEMS = [
  "ESTRATÉGIA DE PRODUTO",
  "UX / UI",
  "DESENVOLVIMENTO",
  "ARQUITETURA DE SISTEMAS",
  "SEO TÉCNICO",
  "AUTOMAÇÃO",
] as const;

export const INTRO = {
  eyebrow: "[ NOSSO PONTO DE PARTIDA ]",
  lead: [
    { text: "Sua marca não precisa parecer maior. Precisa parecer " },
    { text: "mais ela mesma", accent: true },
    { text: " — e funcionar de verdade." },
  ],
  paragraph:
    "Antes de qualquer linha de código, tem entendimento de negócio, estratégia e design por trás. É isso que separa um produto que funciona de um produto que só existe. Conduzo cada projeto sozinha, do primeiro rascunho até o deploy em produção — o que significa atenção direta e nenhuma camada de repasse entre quem decide e quem constrói.",
  signature: "YANDU / ESTRATÉGIA / DESIGN / CÓDIGO",
} as const;

export type ProjectDetail = { label: string; value: string };

export const WORK_INTRO = {
  eyebrow: "[ TRABALHO NO AR ]",
  headline: [{ text: "Prova real, " }, { text: "não promessa.", accent: true }],
  paragraph:
    "Cada projeto nasce de um problema real. Este é o que já foi resolvido — com mais chegando.",
} as const;

export const FEATURED_PROJECT = {
  flag: "NO AR AGORA",
  name: "Cuidadoras Conecta",
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
  cta: "Acessar site",
} as const;

export const WORK_NEXT_NOTE =
  "Próximo projeto em construção — o portfólio cresce conforme cada trabalho vai ao ar.";

export const CAPABILITIES_INTRO = {
  eyebrow: "[ O QUE SUSTENTA CADA ENTREGA ]",
  headline: [{ text: "Capacidades" }],
  paragraph:
    "Antes de qualquer linha de código, tem entendimento de negócio, estratégia e design por trás.",
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

export type Solution = {
  title: string;
  description: string;
};

export const SOLUTIONS_INTRO = {
  eyebrow: "[ RESOLVE PROBLEMA, NÃO SÓ ENTREGA SITE ]",
  headline: [{ text: "Soluções" }],
  paragraph: "Organizadas pelo problema que resolvem, não pelo nome técnico do entregável.",
} as const;

export const SOLUTIONS: Solution[] = [
  {
    title: "Presença digital",
    description:
      "Site institucional ou landing page pra você existir online de forma profissional e ser encontrado por quem procura o que você faz.",
  },
  {
    title: "Produtos digitais",
    description:
      "Plataformas e sistemas web construídos do zero, com banco de dados e lógica de negócio real por trás — não só uma página estática.",
  },
  {
    title: "Automações",
    description:
      "Fluxos automáticos que organizam pedidos, atendimento e informações. Menos trabalho manual, menos coisa esquecida.",
  },
  {
    title: "Integrações",
    description:
      "Conexão entre ferramentas que hoje não conversam entre si, pra sua operação parar de depender de copiar e colar dado.",
  },
  {
    title: "Dashboards",
    description:
      "Painéis simples que juntam seus números num só lugar, pra você decidir com clareza — não no achismo.",
  },
] as const;

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_INTRO = {
  eyebrow: "[ SEM MISTÉRIO ]",
  headline: [{ text: "Processo" }],
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

export const ABOUT = {
  eyebrow: "[ QUEM CONSTRÓI ]",
  headline: [{ text: "Sobre a " }, { text: "Yandu", accent: true }],
  paragraphs: [
    "A Yandu junta duas coisas que raramente andam juntas: entendimento de negócio e mão na massa técnica. Antes de programar, penso em processo — é isso que faz o resultado funcionar de verdade, não só parecer bonito.",
    "Sou eu quem conduz cada projeto, do primeiro entendimento até a publicação: atenção direta, nenhuma camada de repasse entre quem decide e quem constrói. A Yandu nasceu pra levar produto digital de verdade a quem mais precisa e menos tem acesso — pequenos negócios e profissionais que não têm tempo nem orçamento pra esperar meses por um resultado.",
  ],
  signatureLabel: "Yasmin, fundadora",
} as const;

export type FaqItem = { question: string; answer: string };

export const FAQ_INTRO = {
  eyebrow: "[ ANTES DE DECIDIR ]",
  headline: [{ text: "Perguntas " }, { text: "frequentes" }],
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
    answer: "Valor e forma de pagamento são combinados na proposta, sem letra miúda. Nada muda no meio do caminho sem você saber antes.",
  },
  {
    question: "Existe suporte depois da entrega?",
    answer: "Sim. Ajustes finais já entram na entrega, e a evolução contínua do produto pode seguir depois, conforme sua necessidade.",
  },
  {
    question: "Atende fora do Vale do Rio Pardo?",
    answer: "O foco é a região, mas todo o trabalho é feito remotamente — negócios de outras cidades também podem chamar no direct.",
  },
  {
    question: "Preciso ter site pronto pra pensar em automação?",
    answer: "Não. Automação e site são frentes independentes. Dá pra começar por onde o problema estiver mais urgente.",
  },
  {
    question: "Não sei exatamente o que preciso, posso chamar mesmo assim?",
    answer: "Sim — essa é justamente a primeira etapa do processo: entender o problema real antes de definir a solução.",
  },
] as const;

export const CONTACT = {
  eyebrow: "[ O PRÓXIMO PONTO É SEU ]",
  headline: [{ text: "Tire sua ideia " }, { text: "do papel ", accent: true }, { text: "agora." }],
  paragraph: "Me conta o que você precisa. Respondo rápido e sem enrolar — a conversa começa pelo WhatsApp.",
  links: [
    { label: "WhatsApp", href: SITE.whatsapp, primary: true },
    { label: "Telegram", href: SITE.telegram, primary: false },
    { label: "Instagram", href: SITE.instagram, primary: false },
  ],
} as const;

export const FOOTER = {
  mark: "yandu",
  tagline: "Estúdio de produto digital",
  links: "Sites · Plataformas · Automações",
  nav: NAV_LINKS,
  social: [
    { label: "WhatsApp", href: SITE.whatsapp },
    { label: "Telegram", href: SITE.telegram },
    { label: "Instagram", href: SITE.instagram },
  ],
  copyright: `© ${SITE.founded} Yandu`,
} as const;
