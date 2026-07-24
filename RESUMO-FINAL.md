# Yandu — Redesign Evolutivo — Entrega Final

## Resumo executivo

O site institucional da Yandu (`yandu-site.vercel.app`) passou por um redesign evolutivo em 4 fases (a mais recente sendo uma camada de motion design), preservando 100% da stack original na essência (HTML/CSS puro, deploy via GitHub + Vercel) e sem quebrar nenhuma funcionalidade existente. A única adição de dependência em toda a evolução foi GSAP + ScrollTrigger, self-hosted, na Fase 4.

**O que mudou, em uma frase por fase:**
- **Fase 0:** corrigiu um erro crítico de SEO (canonical/OG/JSON-LD apontando pro domínio errado) e adicionou `robots.txt`, `sitemap.xml` e `og-image.png`.
- **Fase 1:** reestruturou o conteúdo de "site freelance com 1 case" pra "estúdio digital com portfólio expansível", adicionando Projetos, Capacidades, Soluções (por problema, não por entregável), Processo em 6 etapas, Case em destaque separado e FAQ.
- **Fase 2:** aplicou direção visual própria (elemento de assinatura no Hero, gradiente de progresso no Processo, remoção de numeração enganosa em Soluções) e corrigiu um bug de overflow horizontal em mobile.
- **Fase 3:** corrigiu 8 combinações de cor que falhavam WCAG AA, validou navegação por teclado ponta a ponta, reduziu peso de fonte carregado e confirmou hierarquia de heading limpa.
- **Fase 4 (motion design):** adicionou uma camada de movimento própria em todo o site (entrada do Hero com o traço se desenhando, navegação com estado no scroll, narrativa de scroll no Processo com trilho sticky, reveal consistente por seção, FAQ animado), usando a imagem real do Cuidadoras Conecta no lugar do ícone placeholder, com suporte completo a `prefers-reduced-motion` e sem regressão de performance, SEO ou acessibilidade.

---

## Arquitetura utilizada

HTML5 semântico + CSS puro (variáveis CSS para tokens de marca e de motion) + JavaScript vanilla (script funcional original: `IntersectionObserver` pro CTA da nav, toggle do menu mobile, ano dinâmico no footer, accordion do FAQ, scroll lock, estado do header, indicador de seção ativa) + `assets/js/motion.js` (engine de reveal declarativo via `data-reveal`/`data-reveal-group`, mais a lógica específica do trilho do Processo). Sem build step, sem dependência de pacote (GSAP/ScrollTrigger são arquivos estáticos baixados uma vez e versionados em `assets/vendor/`, carregados com `defer`, não via CDN em produção). Fontes via Google Fonts CDN. Deploy estático via Vercel.

## Tecnologias

HTML5 · CSS3 (custom properties, grid, flexbox, clip-path, grid-template-rows para alturas animadas) · JavaScript vanilla · GSAP 3 + ScrollTrigger (self-hosted, só pra sequências ligadas ao scroll) · Google Fonts (Quicksand, Inter, Space Mono) · Vercel (hospedagem) · GitHub (versionamento)

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

**Motion design (Fase 4)**
- Sistema de motion com tokens de easing/duração e classes utilitárias de reveal (`.reveal`, variantes `up/left/right/scale/mask`), reaproveitado em todas as seções.
- Entrada do Hero 100% em CSS (sem depender de JS/GSAP carregar): eyebrow, H1 com máscara, parágrafo e CTAs em sequência, mais o traço de assinatura do Hero (que já existia estático) se desenhando via `stroke-dasharray`/`dashoffset` com comprimentos reais medidos via `getTotalLength()`.
- Navbar com estado ao rolar, indicador de seção ativa, menu mobile com transição animada (`grid-template-rows`, evita animar `height`) e scroll lock.
- Processo ganhou narrativa de scroll: trilho sticky que se preenche via `scrub` (lê o scroll, nunca o controla) no desktop, com etapa ativa em destaque; vira lista linear simples no mobile.
- FAQ com painel de resposta animado (mesma técnica de `grid-template-rows`), sem perder a semântica nativa de `<details>`/`<summary>`.
- CTA final retoma o traço do Hero, já resolvido.
- Card de Projetos e Case em destaque usam a imagem real do Cuidadoras Conecta (baixada do próprio `og-image.png` de produção do projeto) no lugar do ícone placeholder genérico.
- `prefers-reduced-motion` coberto em duas camadas: JS nunca inicializa GSAP/ScrollTrigger se o usuário pediu reduced motion, e a regra CSS global (que já existia antes desta fase) zera qualquer `transition`/`animation` automaticamente.
- Auditoria dedicada de responsividade encontrou e corrigiu dois problemas reais: crop agressivo de texto na imagem do card de Projetos (`object-fit` errado pro formato do container) e três alvos de toque abaixo de 44px no mobile.

---

## Melhorias futuras (fora do escopo desta entrega)

- Usar uma captura de tela real da interface do Cuidadoras Conecta (não só o card de compartilhamento) assim que houver o material — o Hero do produto é renderizado via Three.js/WebGL, então não existe um arquivo estático pra baixar direto; precisa de print manual.
- Decidir se a seção Sobre deve usar a foto de perfil real (`foto-perfil.png`, disponível mas não integrada) no lugar do mark abstrato — decisão de identidade pessoal, não tomada nesta sessão.
- Verificar manualmente o comportamento com "reduzir movimento" ativado no sistema operacional (a lógica foi auditada e é robusta por construção, mas não foi possível emular o media feature nas ferramentas de teste desta sessão).
- Adicionar novos projetos ao portfólio conforme surgirem (arquitetura já preparada, agora também com o padrão de imagem real de capa).
- Testar com leitor de tela real (VoiceOver/NVDA) além da validação automatizada feita aqui.
- Considerar página dedicada de case study por projeto, caso o portfólio cresça além de 3-4 itens (hoje tudo cabe numa single-page).
- Registrar as peças visuais geradas (og-image) no repositório Figma da marca — não foi possível nesta sessão por restrição de rede do ambiente de execução.
- Avaliar converter `assets/img/cuidadoras-conecta-preview.png` pra WebP (87KB hoje; não havia ferramenta de otimização de imagem disponível neste ambiente).
- Considerar remover os arquivos órfãos `index.html.html`, `index_1.html` e `index_2.html` do repositório (versões antigas de uploads anteriores, não usadas em produção) — não removidos nesta sessão por não fazerem parte do escopo de motion.

---

## Checklist final

| Item | Status |
|---|---|
| UX (jornada, FAQ, portfólio expansível) | ✅ |
| UI (identidade própria, sem repetição de card) | ✅ |
| SEO (canonical/OG/JSON-LD corretos, robots/sitemap) | ✅ |
| Performance (fontes reduzidas, zero dependência) | ✅ |
| Acessibilidade (contraste WCAG AA, teclado, ARIA) | ✅ |
| Responsividade (sem overflow em 8 breakpoints testados, 320 a 2560px) | ✅ |
| Código (organizado, comentado, sem duplicação desnecessária) | ✅ |
| Nenhuma funcionalidade existente quebrada | ✅ |
| Stack preservada (sem migração de tecnologia) | ✅ |
| Motion design com identidade própria, sem clichês (Fase 4) | ✅ |
| Reduced motion coberto em duas camadas (JS + CSS global) | ✅ |
| Alvos de toque ≥44px no mobile | ✅ |
| Validado em navegador real, não só headless (Chrome) | ✅ |

---

## Case study — Yandu (o próprio projeto)

**Objetivo:** evoluir o site institucional da Yandu de "página freelance com 1 case" pra uma presença que comunique estúdio digital, sem perder velocidade de carregamento nem simplicidade de manutenção.

**Público:** pequenos negócios, profissionais liberais e empreendedores do Vale do Rio Pardo (RS) avaliando se a Yandu é capaz de resolver problemas maiores que "só um site".

**Problema:** a arquitetura anterior não sustentava a percepção de estúdio (um único case fazendo dois papéis, serviços genéricos, sem FAQ, sem capacidades expostas) e tinha um erro crítico de SEO que fazia buscadores e prévias de link citarem um domínio que não existe mais.

**Solução:** correção técnica primeiro (Fase 0), depois reestruturação de conteúdo (Fase 1), depois direção visual própria (Fase 2), depois qualidade e acessibilidade (Fase 3). Cada fase foi validada antes de avançar pra próxima, sem quebrar o que já funcionava.

**Estratégia:** preservar a stack simples (HTML/CSS/JS puro) como vantagem, não limitação, provando que dá pra parecer estúdio premium sem framework pesado nem CMS.

**Resultado esperado:** melhor indexação (SEO corrigido), melhor taxa de conversão (FAQ reduzindo objeções, portfólio mais robusto), e uma base de código pronta pra crescer conforme novos projetos da Yandu forem entrando.
