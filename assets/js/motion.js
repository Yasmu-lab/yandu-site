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
})();
