export const SITE = {
  name: "Yandu",
  url: "https://yandu-site.vercel.app",
  title: "Yandu — Estúdio criativo independente",
  description:
    "Yandu é um estúdio criativo independente. Sites, identidades visuais e experiências digitais para marcas que querem parecer mais elas mesmas.",
  locale: "pt_BR",
  themeColor: "#0F111A",
  instagram: "https://www.instagram.com/yandu.oficial/",
  whatsapp:
    "https://wa.me/5551992627338?text=Ol%C3%A1%2C%20Yandu!%20Quero%20conversar%20sobre%20um%20projeto.",
  email: "contato@yandu.com.br",
  areaServed: "Vale do Rio Pardo, RS",
} as const;

export const NAV_LINKS = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#processo", label: "Processo" },
] as const;

export const HERO = {
  mark: "Y A N D U",
  eyebrow: "estúdio criativo independente",
  tagline: "SITES · MARCAS · EXPERIÊNCIAS DIGITAIS",
  cta: { href: "#manifesto", label: "Conheça a Yandu" },
  video: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HCDRAeE93FujxCRir5za3WBuAz/hf_20260808_233357_15d0821a-3c4e-4b16-9ad7-bcc3f5f633b2.mp4",
    poster:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3HCDRAeE93FujxCRir5za3WBuAz/hf_20260808_233241_cb1e91f2-138f-4eb9-be8e-24feb68b4e7f.png",
  },
} as const;

export const MANIFESTO = {
  eyebrow: "[ NOSSO PONTO DE PARTIDA ]",
  headline: [
    { text: "Sua marca não precisa parecer maior." },
    { text: "Precisa parecer ", accent: "mais ela mesma." },
  ],
  paragraph:
    "Na Yandu, estratégia, design e tecnologia não chegam separados. Eles se encontram para criar uma presença digital clara, própria e pronta para trabalhar pelo seu negócio.",
  signature: "YANDU / JUNÇÃO / CONVERGÊNCIA",
} as const;

export const TICKER_ITEMS = [
  "ESTRATÉGIA",
  "IDENTIDADE",
  "EXPERIÊNCIA",
  "SITES AUTORAIS",
] as const;

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const SERVICES_INTRO = {
  eyebrow: "[ O QUE FAZEMOS ]",
  headline: [
    { text: "Três caminhos." },
    { text: "Uma presença ", accent: "coerente." },
  ],
} as const;

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Sites estratégicos",
    description:
      "Estrutura, conteúdo e experiência desenhados para apresentar sua marca com clareza e transformar interesse em contato.",
  },
  {
    number: "02",
    title: "Identidades visuais",
    description:
      "Sistemas visuais que organizam a personalidade da marca e criam consistência em cada ponto de contato.",
  },
  {
    number: "03",
    title: "Experiências digitais",
    description:
      "Interfaces e movimentos autorais que tornam a presença digital mais memorável, funcional e coerente com o negócio.",
  },
] as const;

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_INTRO = {
  eyebrow: "[ COMO TRABALHAMOS ]",
  headline: [
    { text: "Do ponto solto" },
    { text: "à ideia ", accent: "conectada." },
  ],
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Entender",
    description:
      "Começamos pelo negócio, pelo público e pela percepção que a marca precisa construir.",
  },
  {
    number: "02",
    title: "Direcionar",
    description:
      "Organizamos conteúdo, conceito visual e decisões estratégicas antes de desenhar a solução.",
  },
  {
    number: "03",
    title: "Criar",
    description:
      "Transformamos a direção em uma experiência digital autoral, responsiva e funcional.",
  },
  {
    number: "04",
    title: "Refinar",
    description:
      "Testamos os detalhes, ajustamos a experiência e preparamos tudo para chegar ao público.",
  },
] as const;

export const CONTACT = {
  eyebrow: "[ O PRÓXIMO PONTO É SEU ]",
  headline: [
    { text: "Tem uma ideia" },
    { text: "procurando ", accent: "forma?" },
  ],
  paragraph:
    "Conte onde sua marca está agora e o que você deseja construir. A conversa começa pelo WhatsApp.",
  cta: { href: SITE.whatsapp, label: "Conversar sobre meu projeto" },
} as const;

export const FOOTER = {
  mark: "yandu",
  tagline: "Estúdio criativo",
  links: "Sites · Identidades · Experiências digitais",
  social: [
    { label: "Instagram", href: SITE.instagram },
    { label: "WhatsApp", href: SITE.whatsapp },
  ],
  copyright: "© 2026 Yandu",
} as const;
