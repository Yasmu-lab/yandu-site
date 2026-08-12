# Yandu

Site institucional da Yandu — estúdio de produto digital conduzido pela Yasmin, em formato de portfólio de agência: trabalho em destaque, capacidades, soluções, processo, sobre e contato.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [Framer Motion](https://www.framer.com/motion/) para toda a camada de movimento (scroll reveal, parallax de ponteiro no Hero, parallax de scroll e cursor-follow no Trabalho, trilho de progresso no Processo)
- Vercel Analytics

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/` — rota única, layout raiz, metadata/SEO (`sitemap.ts`, `robots.ts`)
- `components/sections/` — uma seção da página por arquivo (Hero, Ticker, Intro, Work, Capabilities, Solutions, Process, About, Faq, Contact)
- `components/motion/` — primitivas de animação reutilizáveis (`Reveal`, `RevealGroup`/`RevealItem`, `MotionConfigProvider`)
- `components/layout/` — header, navegação mobile (overlay), footer
- `content/site.ts` — todo o conteúdo/copy do site, separado dos componentes
- `lib/` — tokens de motion, utilitários e hooks (`useHydrated`, `useSafeReducedMotion`) usados para manter as animações seguras para hidratação/SSR

## Build

```bash
npm run lint
npm run build
```
