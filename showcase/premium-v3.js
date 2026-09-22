(() => {
  const root = document.documentElement;
  const nav = document.querySelector('.nav');
  const heroTitle = document.querySelector('.hero h1');
  const heroCopy = document.querySelector('.hero-copy');
  const heroEyebrow = document.querySelector('.hero .eyebrow');
  const langButton = document.querySelector('#lang');

  // Premium editorial voice, kept in sync with the existing EN/RW/FR showcase localization.
  const HERO = {
    en: {
      eyebrow: 'ITUNDA · VISUAL LANGUAGE',
      title: ['A visual language<br><span>for every moment.</span>'],
      copy: 'ItundaFace turns everyday actions into a visual language that feels clear, human, and unmistakably Itunda — from tiny interface moments to expressive 3D scenes.'
    },
    rw: {
      eyebrow: 'ITUNDA · URURIMI RW’AMASHUSHO',
      title: ['Ururimi rw’amashusho<br><span>kuri buri mwanya.</span>'],
      copy: 'ItundaFace ihindura ibikorwa bya buri munsi ururimi rw’amashusho rworoshye, rufite ubumuntu kandi rugaragaza Itunda — kuva ku bimenyetso bito bya porogaramu kugeza ku mashusho ya 3D.'
    },
    fr: {
      eyebrow: 'ITUNDA · LANGAGE VISUEL',
      title: ['Un langage visuel<br><span>pour chaque instant.</span>'],
      copy: 'ItundaFace transforme les actions du quotidien en un langage visuel clair, humain et immédiatement Itunda — des petits détails d’interface aux scènes 3D expressives.'
    }
  };

  const applyHero = () => {
    const lang = root.lang || localStorage.getItem('itundaface-lang') || 'en';
    const t = HERO[lang] || HERO.en;
    if (heroEyebrow) heroEyebrow.textContent = t.eyebrow;
    if (heroTitle) heroTitle.innerHTML = t.title[0];
    if (heroCopy) heroCopy.textContent = t.copy;
    document.title = lang === 'rw'
      ? 'ItundaFace — Ururimi rw’amashusho kuri buri mwanya'
      : lang === 'fr'
        ? 'ItundaFace — Un langage visuel pour chaque instant'
        : 'ItundaFace — A visual language for every moment';
  };

  applyHero();
  langButton?.addEventListener('click', () => setTimeout(applyHero, 0));

  const revealTargets = [
    ...document.querySelectorAll('section .title, section .copy, .principle, .stage, .phone, .phone-copy, .agent-visual, .agent-step, .glyph')
  ];
  revealTargets.forEach((el, i) => {
    if (i < 2 && el.closest('.hero')) return;
    el.classList.add('reveal');
  });

  const reveal = () => {
    const threshold = window.innerHeight * .9;
    revealTargets.forEach((el, i) => {
      if (el.getBoundingClientRect().top < threshold) {
        el.style.transitionDelay = `${Math.min((i % 6) * 45, 220)}ms`;
        el.classList.add('visible');
      }
    });
  };

  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
    reveal();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  requestAnimationFrame(onScroll);

  // Small, tactile cursor movement for the hero object. No heavy 3D framework.
  const orbit = document.querySelector('.hero-orbit');
  const face = document.querySelector('.hero-face');
  if (orbit && face && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    orbit.addEventListener('pointermove', (event) => {
      const r = orbit.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - .5;
      const y = (event.clientY - r.top) / r.height - .5;
      face.style.transform = `translateX(-50%) translate(${x * 12}px, ${y * 8}px) rotateX(${7 - y * 8}deg) rotateY(${-9 + x * 14}deg)`;
    });
    orbit.addEventListener('pointerleave', () => {
      face.style.transform = '';
    });
  }

  // Keep the visual identity deterministic if the existing theme toggle changes.
  const syncTheme = () => root.dataset.theme = root.dataset.theme || 'light';
  syncTheme();

  // Full library category browser: keeps the breadth visible without pretending
  // unfinished families already have production artwork.
  const fullTabs = document.querySelectorAll('.full-tab');
  const fullPanels = document.querySelectorAll('.full-panel');
  fullTabs.forEach(tab => tab.addEventListener('click', () => {
    const key = tab.dataset.full;
    fullTabs.forEach(x => x.classList.toggle('active', x === tab));
    fullPanels.forEach(panel => panel.classList.toggle('active', panel.dataset.panel === key));
  }));

})();
