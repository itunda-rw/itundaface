(() => {
  const links = document.querySelector('.navlinks');
  const menu = document.querySelector('.menu');
  if (!links || !menu) return;
  menu.type = 'button';
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-controls', 'itunda-navlinks');
  links.id = 'itunda-navlinks';
  const mobile = () => matchMedia('(max-width:720px)').matches;
  const close = () => { if (!mobile()) return; links.style.display='none'; menu.setAttribute('aria-expanded','false'); };
  const open = () => { if (!mobile()) return; links.style.display='flex'; menu.setAttribute('aria-expanded','true'); };
  menu.onclick = e => { e.preventDefault(); menu.getAttribute('aria-expanded')==='true' ? close() : open(); };
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  addEventListener('resize', () => { if (!mobile()) { links.style.display=''; menu.setAttribute('aria-expanded','false'); } else if (menu.getAttribute('aria-expanded')!=='true') close(); });
  addEventListener('keydown', e => { if (e.key==='Escape') { close(); menu.focus(); } });
  close();
  document.querySelectorAll('img:not([alt])').forEach(img => img.alt='');
  document.querySelectorAll('.hero-ring,.hero-dot,.stars,.stage-glow,.stage-shadow').forEach(el => el.setAttribute('aria-hidden','true'));
  const stage=document.querySelector('#stage');
  if(stage){stage.tabIndex=0;stage.setAttribute('role','application');stage.setAttribute('aria-label','Interactive 3D ItundaFace stage');}
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) document.querySelector('#spin')?.setAttribute('disabled','true');
})();
