# Yandu — Redesign Evolutivo — Entrega Final

## Resumo executivo

O site institucional da Yandu (`yandu-oficial.vercel.app`) passou por um redesign evolutivo em 3 fases, preservando 100% da stack original (HTML/CSS/JS puro, sem framework, deploy via GitHub + Vercel) e sem quebrar nenhuma funcionalidade existente.

**O que mudou, em uma frase por fase:**
- **Fase 0:** corrigiu um erro crítico de SEO (canonical/OG/JSON-LD apontando pro domínio errado) e adicionou `robots.txt`, `sitemap.xml` e `og-image.png`.
- **Fase 1:** reestruturou o conteúdo de "site freelance com 1 case" pra "estúdio digital com portfólio expansível", adicionando Projetos, Capacidades, Soluções (por problema, não por entregável), Processo em 6 etapas, Case em destaque separado e FAQ.
- **Fase 2:** aplicou direção visual própria (elemento de assinatura no Hero, gradiente de progresso no Processo, remoção de numeração enganosa em Soluções) e corrigiu um bug de overflow horizontal em mobile.
- **Fase 3:** corrigiu 8 combinações de cor que falhavam WCAG AA, validou navegação por teclado ponta a ponta, reduziu peso de fonte carregado e confirmou hierarquia de heading limpa.

---

## Arquitetura utilizada

HTML5 semântico + CSS puro (variáveis CSS para tokens de marca) + JavaScript vanilla (~60 linhas: `IntersectionObserver` pro CTA da nav, toggle do menu mobile, ano dinâmico no footer, accordion do FAQ). Sem build step, sem dependências de pacote. Fontes via Google Fonts CDN. Deploy estático via Vercel.

## Tecnologias

HTML5 · CSS3 (custom properties, grid, flexbox) · JavaScript vanilla · Google Fonts (Quicksand, Inter, Space Mono) · Vercel (hospedagem) · GitHub (versionamento)

---

## Melhorias implementadas

**SEO**
- `canonical`, `og:url`, `og:image` e `url` do JSON-LD corrigidos pro domínio real.
- `robots.txt` e `sitemap.xml` criados.
- `og-image.png` (1200×630) gerado com identidade da marca.
- Hierarquia de heading limpa: 1 H1, H2 por seção, H3 aninhado corretamente, sem pular níveis.

**Arquitetura de conteúdo**
- Portfólio (Projetos) desacoplado do aprofundamento (Case em destaque), com arquitetura pronta pra novos projetos sem refazer HTML.
- Serviços reorganizados por problema de negócio (Soluções) em vez de nome técnico do entregável.
- Capacidades técnicas expostas como competência própria, separada do que é vendido.
- Processo expandido de 3 pra 6 etapas reais (Entendimento → Estratégia → UX/UI → Desenvolvimento → Publicação → Evolução).
- FAQ adicionado pra reduzir fricção de decisão (accordion nativo, sem JS de terceiro).

**Direção visual**
- Elemento de assinatura no Hero: traço orgânico que se resolve numa moldura estruturada, traduzindo visualmente "ideia no papel virando produto digital" (em vez do clichê de mockup de browser com bolinhas).
- Gradiente de cor moss→marigold nas 6 etapas do Processo, reforçando a leitura de evolução.
- Numeração enganosa removida de Soluções (não é uma sequência real).
- Três padrões visuais diferentes entre seções (tag-cloud em Capacidades, lista editorial em Soluções, grade de cards em Projetos/Processo), evitando repetição de card genérico.

**Performance**
- Peso de fonte do Google Fonts reduzido (Quicksand de 2 pesos pra 1, mantendo só o que é realmente usado no CSS).
- Zero imagens raster no site (tudo SVG inline), zero JS framework, zero build.

**Acessibilidade**
- 8 combinações de cor corrigidas pra atingir WCAG AA (contraste mínimo 4.5:1 em texto normal): rótulos "eyebrow", parágrafos de introdução ("lead"), labels de Space Mono em cards de projeto e case, estados de hover de links e footer.
- Navegação por teclado validada ponta a ponta: skip link funciona, ordem de tabulação é lógica, botão da nav corretamente excluído da ordem de foco enquanto está invisível, menu mobile abre/fecha com teclado e devolve o foco ao botão ao fechar com Escape.
- `prefers-reduced-motion` respeitado globalmente (herdado das fases anteriores).

**Responsividade**
- Bug de overflow horizontal em mobile corrigido (grid de projetos com largura mínima fixa que não cabia em telas < 420px).
- Validado sem overflow em 320px, 375px, 414px, 768px, 1024px e 1280px de largura.

---

## Melhorias futuras (fora do escopo desta entrega)

- Substituir o placeholder gráfico do card de projeto por uma captura de tela real do Cuidadoras Conecta (ou de novos projetos), assim que houver o material.
- Adicionar novos projetos ao portfólio conforme surgirem (arquitetura já preparada).
- Testar com leitor de tela real (VoiceOver/NVDA) além da validação automatizada feita aqui.
- Considerar página dedicada de case study por projeto, caso o portfólio cresça além de 3-4 itens (hoje tudo cabe numa single-page).
- Registrar as peças visuais geradas (og-image) no repositório Figma da marca — não foi possível nesta sessão por restrição de rede do ambiente de execução.

---

## Checklist final

| Item | Status |
|---|---|
| UX (jornada, FAQ, portfólio expansível) | ✅ |
| UI (identidade própria, sem repetição de card) | ✅ |
| SEO (canonical/OG/JSON-LD corretos, robots/sitemap) | ✅ |
| Performance (fontes reduzidas, zero dependência) | ✅ |
| Acessibilidade (contraste WCAG AA, teclado, ARIA) | ✅ |
| Responsividade (sem overflow em 6 breakpoints testados) | ✅ |
| Código (organizado, comentado, sem duplicação desnecessária) | ✅ |
| Nenhuma funcionalidade existente quebrada | ✅ |
| Stack preservada (sem migração de tecnologia) | ✅ |

---

## Case study — Yandu (o próprio projeto)

**Objetivo:** evoluir o site institucional da Yandu de "página freelance com 1 case" pra uma presença que comunique estúdio digital, sem perder velocidade de carregamento nem simplicidade de manutenção.

**Público:** pequenos negócios, profissionais liberais e empreendedores do Vale do Rio Pardo (RS) avaliando se a Yandu é capaz de resolver problemas maiores que "só um site".

**Problema:** a arquitetura anterior não sustentava a percepção de estúdio (um único case fazendo dois papéis, serviços genéricos, sem FAQ, sem capacidades expostas) e tinha um erro crítico de SEO que fazia buscadores e prévias de link citarem um domínio que não existe mais.

**Solução:** correção técnica primeiro (Fase 0), depois reestruturação de conteúdo (Fase 1), depois direção visual própria (Fase 2), depois qualidade e acessibilidade (Fase 3). Cada fase foi validada antes de avançar pra próxima, sem quebrar o que já funcionava.

**Estratégia:** preservar a stack simples (HTML/CSS/JS puro) como vantagem, não limitação, provando que dá pra parecer estúdio premium sem framework pesado nem CMS.

**Resultado esperado:** melhor indexação (SEO corrigido), melhor taxa de conversão (FAQ reduzindo objeções, portfólio mais robusto), e uma base de código pronta pra crescer conforme novos projetos da Yandu forem entrando.
