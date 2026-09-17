(() => {
  const nav = document.querySelector('.nav');
  const links = document.querySelector('.navlinks');
  const menu = document.querySelector('.menu');
  if (!nav || !links || !menu) return;
  menu.removeAttribute('onclick');
  menu.setAttribute('aria-label','Open navigation');
  menu.setAttribute('aria-expanded','false');
  const close=()=>{links.classList.remove('is-open');nav.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');};
  const toggle=()=>{const open=!links.classList.contains('is-open');links.classList.toggle('is-open',open);nav.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');};
  menu.onclick=toggle;
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  document.addEventListener('click',e=>{if(!links.contains(e.target)&&!menu.contains(e.target))close();});
  window.addEventListener('resize',()=>{if(window.innerWidth>760)close();},{passive:true});
})();
