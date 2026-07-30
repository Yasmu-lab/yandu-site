# Redesign Yandu

Versão reconstruída da landing page da Yandu em Next.js 16, React 19, TypeScript, Tailwind CSS 4 e Framer Motion.

## O que está incluído

- Hero cinematográfica com mockups de sistema e aplicativo
- Animações de entrada, scroll e elementos flutuantes
- Serviços apresentados em formato editorial
- Seção demonstrativa de automação e integração
- Processo com progressão durante o scroll
- Página separada de projetos
- Cuidadoras Conecta tratado como case secundário
- Layout responsivo para desktop e celular
- Suporte a `prefers-reduced-motion`
- Metadata básica para SEO
- Vercel Analytics

## Como usar no seu repositório

1. Faça uma cópia de segurança do projeto atual.
2. Extraia este pacote.
3. Substitua os arquivos correspondentes no repositório `Yasmu-lab/yandu-site`.
4. Rode:

```bash
npm install
npm run dev
```

5. Confira o resultado em `http://localhost:3000`.
6. Antes de enviar para a `main`, prefira criar uma branch:

```bash
git checkout -b redesign/experiencia-premium-yandu
git add .
git commit -m "feat: reconstrói experiência premium da Yandu"
git push origin redesign/experiencia-premium-yandu
```

7. Abra um Pull Request no GitHub. O Vercel deverá gerar uma URL de preview automaticamente.

## Ajustes necessários antes da publicação

- Trocar `contato@yandu.com.br` pelo e-mail real.
- Confirmar a URL oficial do Cuidadoras Conecta.
- Substituir o segundo card de projeto quando houver outro case.
- Revisar nome, descrição e contatos.
- Inserir imagens reais dos projetos quando estiverem disponíveis.

## Estrutura principal

- `app/page.tsx`: página inicial
- `components/home-page.tsx`: componentes e conteúdo da landing
- `app/globals.css`: identidade visual e responsividade
- `app/projetos/page.tsx`: página de projetos
