(() => {
  const root = document.documentElement;
  const nav = document.querySelector('.nav');
  const heroTitle = document.querySelector('.hero h1');
  const heroCopy = document.querySelector('.hero-copy');
  const heroEyebrow = document.querySelector('.hero .eyebrow');

  // Give the homepage a product-story voice rather than a template/demo voice.
  if (heroEyebrow) heroEyebrow.textContent = 'ITUNDA · VISUAL LANGUAGE';
  if (heroTitle) heroTitle.innerHTML = 'A visual language<br><span>for every moment.</span>';
  if (heroCopy) heroCopy.textContent = 'ItundaFace turns everyday actions into a visual language that feels clear, human, and unmistakably Itunda — from tiny interface moments to expressive 3D scenes.';
  document.title = 'ItundaFace — A visual language for every moment';

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
})();
