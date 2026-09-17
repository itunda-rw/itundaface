(() => {
  const translations = {
    en: {
      'Available balance':'Available balance','Send':'Send','Receive':'Receive','Pay':'Pay','Bills':'Bills','Transfer completed':'Transfer completed','Transfer':'Transfer','Home':'Home','Activity':'Activity','Services':'Services','You':'You','Agent Network':'Agent Network','Agent':'Agent','Open':'Open','Run':'Run','Discover':'Discover','Execute':'Execute','Available':'Available','Marketplace':'Marketplace','Communication':'Communication','Identity':'Identity','Finance':'Finance','Culture':'Culture','Places':'Places','Reactions':'Reactions','All':'All','People':'People','Actions':'Actions','Objects':'Objects','State':'State','Food':'Food','Travel':'Travel','Search':'Search','Reset':'Reset','Spin':'Spin','Drag to rotate':'Drag to rotate','Tap an expression':'Tap an expression','Kinyarwanda':'Kinyarwanda','French':'French','English':'English'
    },
    rw: {
      'Available balance':'Amafaranga ahari','Send':'Ohereza','Receive':'Akira','Pay':'Ishyura','Bills':'Inyemezabwishyu','Transfer completed':'Kohereza byarangiye','Transfer':'Ohereza amafaranga','Home':'Ahabanza','Activity':'Ibikorwa','Services':'Serivisi','You':'Wowe','Agent Network':'Urusobe rw’abakozi','Agent':'Umukozi','Open':'Fungura','Run':'Tangira','Discover':'Menya','Execute':'Kora','Available':'Birahari','Marketplace':'Isoko','Communication':'Itumanaho','Identity':'Umwirondoro','Finance':'Imari','Culture':'Umuco','Places':'Ahantu','Reactions':'Ibyiyumvo','All':'Byose','People':'Abantu','Actions':'Ibikorwa','Objects':'Ibintu','State':'Imiterere','Food':'Ibiribwa','Travel':'Ingendo','Search':'Shakisha','Reset':'Subiza ku ntangiriro','Spin':'Zengurutsa','Drag to rotate':'Kurura uzengurutse','Tap an expression':'Kanda ku byiyumvo','Kinyarwanda':'Kinyarwanda','French':'Igifaransa','English':'Icyongereza'
    },
    fr: {
      'Available balance':'Solde disponible','Send':'Envoyer','Receive':'Recevoir','Pay':'Payer','Bills':'Factures','Transfer completed':'Transfert terminé','Transfer':'Transférer','Home':'Accueil','Activity':'Activité','Services':'Services','You':'Vous','Agent Network':'Réseau d’agents','Agent':'Agent','Open':'Ouvrir','Run':'Exécuter','Discover':'Découvrir','Execute':'Exécuter','Available':'Disponible','Marketplace':'Marché','Communication':'Communication','Identity':'Identité','Finance':'Finance','Culture':'Culture','Places':'Lieux','Reactions':'Réactions','All':'Tout','People':'Personnes','Actions':'Actions','Objects':'Objets','State':'État','Food':'Alimentation','Travel':'Voyage','Search':'Rechercher','Reset':'Réinitialiser','Spin':'Faire tourner','Drag to rotate':'Glissez pour faire pivoter','Tap an expression':'Touchez une expression','Kinyarwanda':'Kinyarwanda','French':'Français','English':'Anglais'
    }
  };
  const key = 'itundaface-lang';
  const original = new WeakMap();
  const protectedWords = /^(ItundaFace|Itunda|SVG|React|3D|2D|EN|RW|FR|TossFace)$/;
  function locale(){ return localStorage.getItem(key) || document.documentElement.lang || 'en'; }
  function walk(root){
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{
      if(!n.nodeValue.trim() || n.parentElement?.closest('script,style,svg')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let n; while(n=w.nextNode()){
      if(!original.has(n)) original.set(n,n.nodeValue);
      const base=original.get(n); const lang=locale();
      let out=base;
      Object.entries(translations[lang]||translations.en).forEach(([a,b])=>{ if(!protectedWords.test(a)) out=out.replace(new RegExp(`(^|\\s)${a.replace(/[.*+?^${}()|[\\]\\]/g,'\\\\$&')}(?=\\s|[.,!?]|$)`,'g'),`$1${b}`); });
      n.nodeValue=out;
    }
  }
  function apply(){
    document.documentElement.lang=locale();
    walk(document.body);
    document.querySelectorAll('[aria-label],[title]').forEach(el=>{
      ['aria-label','title'].forEach(attr=>{const v=el.getAttribute(attr); if(v && translations[locale()]?.[v]) el.setAttribute(attr,translations[locale()][v]);});
    });
  }
  let timer; function schedule(){clearTimeout(timer);timer=setTimeout(apply,30);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,characterData:true});
  document.addEventListener('click',e=>{ if(e.target.closest('.lang')) setTimeout(apply,80); });
})();
