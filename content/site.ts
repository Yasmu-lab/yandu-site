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
  lead: "A Yandu transforma sua ideia num negócio digital que funciona de verdade: do primeiro entendimento até o dia em que tudo está no ar, pronto pra ser usado.",
  primaryCta: { href: "#contato", label: "Chama agora" },
  secondaryCta: { href: "#projetos", label: "Ver projetos" },
} as const;

export const CAPACITIES = [
  "Planejamento estratégico",
  "Telas fáceis de usar",
  "Construção sob medida",
  "Sistemas bem organizados",
  "Aparecer no Google",
  "Carregamento rápido",
  "Acessível pra todo mundo",
  "Tarefas automáticas",
  "Sistemas conversando entre si",
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
      "Construímos do zero um espaço só deles: um jeito simples e seguro de famílias encontrarem cuidadoras de verdade, sem depender de indicação boca a boca ou grupo de WhatsApp desorganizado.",
    problem:
      "Famílias e cuidadoras se encontravam de forma informal e desorganizada, sem um lugar central e confiável pra isso.",
    solution:
      "Criamos um espaço próprio pra essa conexão acontecer — já no ar, funcionando todos os dias, com gente usando de verdade.",
    tags: ["Feito sob medida", "Já no ar", "Sistema completo"],
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
      "Um site bonito, rápido e fácil de usar pra você existir online, ser encontrado no Google e passar confiança pra quem chega até você.",
  },
  {
    slug: "sistemas",
    title: "Sistemas",
    short: "Feito sob medida",
    description:
      "Seu próprio sistema, pensado do jeito que seu negócio realmente funciona — com tudo o que você precisa organizado num só lugar.",
  },
  {
    slug: "automacoes",
    title: "Automações",
    short: "Menos trabalho manual",
    description:
      "Tarefas repetitivas acontecendo sozinhas: pedidos, respostas e organização em dia, sem alguém precisando copiar e colar nada.",
  },
  {
    slug: "integracoes",
    title: "Integrações",
    short: "Sistemas conversando",
    description:
      "Conectamos as ferramentas que você já usa pra que troquem informação sozinhas, sem retrabalho e sem planilha duplicada.",
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
    title: "Entendimento",
    description:
      "Ouvimos você antes de qualquer coisa: seu negócio, seu público e o problema real que precisa ser resolvido.",
  },
  {
    step: "02",
    title: "Planejamento",
    description:
      "Decidimos juntos o que entra primeiro e o que vem depois, pra cada entrega já nascer com propósito claro.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Transformamos a ideia em telas bonitas, intuitivas e fáceis de usar — pensadas pra quem vai usar de verdade.",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description:
      "Construímos tudo com cuidado técnico nos bastidores, pra funcionar rápido, com segurança e sem trava.",
  },
  {
    step: "05",
    title: "Publicação",
    description:
      "Colocamos sua solução no ar, pronta pra uso, testada de ponta a ponta antes de chegar até você.",
  },
  {
    step: "06",
    title: "Evolução",
    description:
      "Acompanhamos depois da entrega, prontos pra crescer e evoluir junto com o seu negócio.",
  },
] as const;

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "Depende do tamanho: um site institucional costuma levar de 2 a 3 semanas; sistemas mais completos variam de 4 a 10 semanas. Isso é definido junto com você logo no começo.",
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
    question: "E se eu precisar mudar alguma coisa depois que ficar pronto?",
    answer:
      "Toda solução já nasce pronta pra crescer. Se quiser adicionar algo novo ou ajustar alguma coisa depois, é só chamar a gente.",
  },
  {
    question: "Vocês fazem só as telas ou também constroem o sistema?",
    answer:
      "Os dois, com a mesma equipe do início ao fim — do primeiro entendimento até o dia em que está tudo no ar. Isso evita retrabalho e garante que nada se perde no meio do caminho.",
  },
] as const;

export const ABOUT = {
  eyebrow: "Quem constrói",
  title: "A Yandu",
  paragraphs: [
    "Somos um estúdio digital do Vale do Rio Pardo (RS) que existe pra transformar ideia em negócio digital de verdade — não só uma página bonita, mas algo que sustenta o dia a dia de quem trabalha.",
    "Cuidamos de tudo, do primeiro entendimento até o dia em que está tudo no ar, com a mesma equipe do início ao fim. Isso significa menos retrabalho e uma solução pensada do jeito que seu negócio realmente funciona.",
  ],
} as const;

export const CONTACT = {
  eyebrow: "Vamos conversar",
  title: "Sua ideia já pode virar produto",
  lead: "Chama no WhatsApp ou manda um e-mail. Respondemos rápido e sem enrolação.",
  note: "Vale do Rio Pardo, RS · atendimento remoto em todo o Brasil",
} as const;
