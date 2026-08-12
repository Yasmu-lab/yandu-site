# Yandu

Site institucional da Yandu — estúdio de produto digital conduzido pela Yasmin, no formato de portfólio de estúdio de design: vitrine, pacotes, capacidades, processo e contato.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [GSAP](https://gsap.com) + ScrollTrigger para toda a camada de movimento
- Vercel Analytics

## Direção visual

- **Tipografia:** Bricolage Grotesque (display e wordmark), Instrument Sans (corpo), Martian Mono (rótulos).
- **Paleta:** pedra quente (`stone`) como base, tinta quase-preta (`ink`) e uma única cor cheia, o índigo-ardósia (`slate`), usada nas bandas full-bleed. A cor restante vem da imagem real do projeto na vitrine.
- **Textura:** uma camada fixa de grain sobre a página inteira e uma malha de papel milimetrado no hero.

## Movimento

Tudo é declarativo via atributos, então as seções continuam sendo Server Components e só o `MotionProvider` roda no cliente:

| Atributo | Efeito |
| --- | --- |
| `data-reveal` | entra uma vez, ao alcançar a viewport |
| `data-reveal-group` | escalona os `data-reveal` descendentes juntos |
| `data-reveal-delay` | atraso extra, em segundos |
| `data-parallax="n"` | deriva n% da própria altura ao longo do scroll |
| `data-marquee-skew` | inclina conforme a velocidade do scroll |

Os estados iniciais escondidos ficam atrás da classe `.motion-ready`, adicionada apenas pelo `MotionProvider` — sem JS, a página renderiza todas as seções visíveis. Com `prefers-reduced-motion`, o `gsap.matchMedia()` revela tudo de imediato e não registra nenhum ScrollTrigger.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/` — rota única, layout raiz, metadata/SEO (`sitemap.ts`, `robots.ts`)
- `components/sections/` — uma dobra por arquivo (Hero, AboutIntro, Work, Marquee, Packages, Capabilities, Process, Statement, Faq, Contact)
- `components/motion/motion-provider.tsx` — registra e dirige todos os ScrollTriggers
- `components/ui/primitives.tsx` — `Label`, `Display`, `PillLink`, `Asterisk`
- `components/layout/` — header, overlay de navegação mobile, footer
- `content/site.ts` — todo o conteúdo/copy do site, separado dos componentes
- `lib/gsap.ts` — registro do plugin e tokens compartilhados de easing/duração

## Build

```bash
npm run lint
npm run build
```
