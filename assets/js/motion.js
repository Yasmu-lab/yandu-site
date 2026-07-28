/*
  Yandu — motion.js
  Fundação do sistema de motion (Fase 1).
  Ativa a classe .js-motion só quando é seguro animar (JS carregou
  e o usuário não pediu reduced motion). Sem isso, todo conteúdo
  fica visível por padrão via CSS — nunca depende de JS pra aparecer.

  Uso declarativo (fases seguintes vão marcar elementos assim):
    data-reveal="up|left|right|scale|mask"  → tipo de entrada
    data-reveal-delay="0.15"                → atraso em segundos
    data-reveal-group + data-reveal-stagger → cascata entre filhos diretos
*/
(function () {
  'use strict';

  var mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  var root = document.documentElement;

  function syncMotionClass() {
    root.classList.toggle('js-motion', !mql.matches);
  }

  syncMotionClass();
  if (mql.addEventListener) {
    mql.addEventListener('change', syncMotionClass);
  }

  if (mql.matches || typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  function initReveal(el) {
    var variant = el.getAttribute('data-reveal') || 'up';
    var delay = parseFloat(el.getAttribute('data-reveal-delay') || '0');
    el.classList.add('reveal', 'reveal-' + variant);
    if (delay) {
      el.style.transitionDelay = delay + 's';
    }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        el.classList.add('is-visible');
      }
    });
  }

  function initRevealGroup(group) {
    var stagger = parseFloat(group.getAttribute('data-reveal-stagger') || '0.08');
    var variant = group.getAttribute('data-reveal-group') || 'up';
    var children = Array.prototype.slice.call(group.children);
    children.forEach(function (child, i) {
      child.classList.add('reveal', 'reveal-' + variant);
      child.style.transitionDelay = (i * stagger) + 's';
    });
    ScrollTrigger.create({
      trigger: group,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        children.forEach(function (child) {
          child.classList.add('is-visible');
        });
      }
    });
  }

  document.querySelectorAll('[data-reveal]').forEach(initReveal);
  document.querySelectorAll('[data-reveal-group]').forEach(initRevealGroup);

  // Hero scene (Fase 3): fragmentos soltos que se organizam + janela
  // de produto que se monta, representando IDEIA → ESTRATÉGIA →
  // INTERFACE → PRODUTO FUNCIONANDO. Roda no load, não depende de
  // scroll. gsap.from() define o estado inicial só quando executa —
  // sem JS ou com reduced motion (return acima), tudo já está na
  // posição final via CSS normal, nada fica escondido.
  (function initHeroScene() {
    var scene = document.querySelector('.hero-scene');
    if (!scene) { return; }
    var frags = scene.querySelectorAll('.hero-frag');
    var win = scene.querySelector('.hero-window');
    var lines = scene.querySelectorAll('.hero-window-line');
    var block = scene.querySelector('.hero-window-block');
    var dot = scene.querySelector('.hero-window-dot');
    var far = scene.querySelector('.hero-scene-far');
    var near = scene.querySelector('.hero-scene-near');

    var tl = gsap.timeline({ delay: 0.2 });
    tl.from(frags, {
      opacity: 0,
      scale: 0.6,
      x: function (i) { return (i % 2 === 0 ? -1 : 1) * 90; },
      y: -70,
      rotation: function (i) { return (i % 2 === 0 ? -1 : 1) * 30; },
      duration: 0.8,
      ease: 'back.out(1.6)',
      stagger: 0.12
    })
      .from(win, {
        opacity: 0,
        y: 90,
        scale: 0.9,
        duration: 0.7,
        ease: 'power3.out'
      }, '-=0.3')
      .from(lines, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.1
      }, '-=0.25')
      .from(block, {
        opacity: 0,
        scale: 0.85,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.15')
      .from(dot, {
        scale: 0,
        duration: 0.3,
        ease: 'back.out(2)'
      }, '-=0.1')
      .call(function () {
        gsap.to(dot, { opacity: 0.4, scale: 1.3, duration: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      });

    // Parallax de ponteiro: só desktop com mouse de verdade, e só
    // enquanto o Hero estiver na tela (IntersectionObserver evita
    // listener rodando à toa depois que o usuário já rolou pra longe).
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var heroEl = document.querySelector('.hero');
      var heroVisible = true;
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
      }).observe(heroEl);

      var qxFar = gsap.quickTo(far, 'x', { duration: 0.6, ease: 'power3.out' });
      var qyFar = gsap.quickTo(far, 'y', { duration: 0.6, ease: 'power3.out' });
      var qxNear = gsap.quickTo(near, 'x', { duration: 0.6, ease: 'power3.out' });
      var qyNear = gsap.quickTo(near, 'y', { duration: 0.6, ease: 'power3.out' });

      heroEl.addEventListener('mousemove', function (e) {
        if (!heroVisible) { return; }
        var r = heroEl.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        qxFar(px * 24);
        qyFar(py * 16);
        qxNear(px * 12);
        qyNear(py * 8);
      });
    }

    // Continuidade no scroll: a cena se desloca em velocidades
    // diferentes por camada conforme o Hero sai da tela (scrub lê o
    // scroll, nunca o controla) — o movimento continua além do load.
    gsap.to(far, {
      y: -70,
      ease: 'none',
      scrollTrigger: { trigger: scene, start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to(near, {
      y: -34,
      ease: 'none',
      scrollTrigger: { trigger: scene, start: 'top top', end: 'bottom top', scrub: true }
    });
  })();

  // Projetos: mockup acompanha parte do scroll (profundidade real,
  // não decorativa). O GSAP anima um wrapper (.project-visual-wrap)
  // separado do elemento que o motor de reveal controla
  // (.project-visual, clip-path via CSS/classe). Mantendo GSAP e o
  // reveal por classe em elementos diferentes, cada um só mexe na
  // sua própria propriedade — sem os dois sistemas disputando o
  // mesmo elemento.
  document.querySelectorAll('.project-visual-wrap').forEach(function (wrap) {
    gsap.to(wrap, {
      y: -24,
      ease: 'none',
      scrollTrigger: {
        trigger: wrap.closest('.project-feature'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Processo (Fase 4): trilho de progresso ligado à posição do scroll
  // (scrub) — lê o scroll, nunca o controla — + etapa ativa conforme
  // o card passa pela faixa central da tela. Some no mobile via CSS
  // (.process-rail{display:none}), então nem precisa condicional aqui.
  var processSteps = document.querySelector('.process-steps');
  var processFill = document.querySelector('.process-rail-fill');
  if (processSteps && processFill) {
    ScrollTrigger.create({
      trigger: processSteps,
      start: 'top 75%',
      end: 'bottom 35%',
      scrub: true,
      onUpdate: function (self) {
        processFill.style.transform = 'scaleY(' + self.progress + ')';
      }
    });
  }
  document.querySelectorAll('.process-card').forEach(function (card) {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 65%',
      end: 'bottom 35%',
      toggleClass: { targets: card, className: 'is-active' }
    });
  });
})();
