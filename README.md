# Yandu

Landing page da Yandu — estúdio digital que transforma ideia e processo em produto digital: sites, sistemas, automações e experiências digitais.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [Framer Motion](https://www.framer.com/motion/) para toda a camada de movimento (scroll reveal, parallax, cursor customizado, botão magnético, timeline de processo)
- Lucide Icons
- Vercel Analytics

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/` — rotas, layout raiz, metadata/SEO (`sitemap.ts`, `robots.ts`), páginas de projeto em `app/projetos/[slug]/`
- `components/sections/` — uma seção da landing por arquivo (Hero, Projetos, Serviços, Processo, Sobre, FAQ, Contato)
- `components/motion/` — primitivas de animação reutilizáveis (reveal, cursor customizado, botão magnético, contador animado, etc.)
- `components/layout/` — header, navegação mobile, footer
- `content/site.ts` — todo o conteúdo/copy do site, separado dos componentes
- `lib/` — tokens de motion, utilitários e hooks (`useHydrated`, `useSafeReducedMotion`) usados para manter as animações seguras para hidratação/SSR

## Build

```bash
npm run lint
npm run build
```
