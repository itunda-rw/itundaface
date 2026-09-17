(() => {
  const T={
    en:{'Available balance':'Available balance','Send':'Send','Receive':'Receive','Pay':'Pay','Bills':'Bills','Transfer completed':'Transfer completed','Transfer':'Transfer','Home':'Home','Activity':'Activity','Services':'Services','You':'You','Agent Network':'Agent Network','Agent':'Agent','Open':'Open','Run':'Run','Discover':'Discover','Execute':'Execute','Available':'Available','Marketplace':'Marketplace','Communication':'Communication','Identity':'Identity','Finance':'Finance','Culture':'Culture','Places':'Places','Reactions':'Reactions','All':'All','People':'People','Actions':'Actions','Objects':'Objects','State':'State','Food':'Food','Travel':'Travel','Search':'Search','Reset':'Reset','Spin':'Spin','Drag to rotate':'Drag to rotate','Tap an expression':'Tap an expression'},
    rw:{'Available balance':'Amafaranga ahari','Send':'Ohereza','Receive':'Akira','Pay':'Ishyura','Bills':'Inyemezabwishyu','Transfer completed':'Kohereza byarangiye','Transfer':'Ohereza amafaranga','Home':'Ahabanza','Activity':'Ibikorwa','Services':'Serivisi','You':'Wowe','Agent Network':'Urusobe rw’abakozi','Agent':'Umukozi','Open':'Fungura','Run':'Tangira','Discover':'Menya','Execute':'Kora','Available':'Birahari','Marketplace':'Isoko','Communication':'Itumanaho','Identity':'Umwirondoro','Finance':'Imari','Culture':'Umuco','Places':'Ahantu','Reactions':'Ibyiyumvo','All':'Byose','People':'Abantu','Actions':'Ibikorwa','Objects':'Ibintu','State':'Imiterere','Food':'Ibiribwa','Travel':'Ingendo','Search':'Shakisha','Reset':'Subiza ku ntangiriro','Spin':'Zengurutsa','Drag to rotate':'Kurura uzengurutse','Tap an expression':'Kanda ku byiyumvo'},
    fr:{'Available balance':'Solde disponible','Send':'Envoyer','Receive':'Recevoir','Pay':'Payer','Bills':'Factures','Transfer completed':'Transfert terminé','Transfer':'Transférer','Home':'Accueil','Activity':'Activité','Services':'Services','You':'Vous','Agent Network':'Réseau d’agents','Agent':'Agent','Open':'Ouvrir','Run':'Exécuter','Discover':'Découvrir','Execute':'Exécuter','Available':'Disponible','Marketplace':'Marché','Communication':'Communication','Identity':'Identité','Finance':'Finance','Culture':'Culture','Places':'Lieux','Reactions':'Réactions','All':'Tout','People':'Personnes','Actions':'Actions','Objects':'Objets','State':'État','Food':'Alimentation','Travel':'Voyage','Search':'Rechercher','Reset':'Réinitialiser','Spin':'Faire tourner','Drag to rotate':'Glissez pour faire pivoter','Tap an expression':'Touchez une expression'}
  };
  const source={}; Object.keys(T).forEach(l=>Object.entries(T[l]).forEach(([en,v])=>{source[v]=en;}));
  const lang=()=>localStorage.getItem('itundaface-lang')||document.documentElement.lang||'en';
  const skip=n=>!n.nodeValue.trim()||n.parentElement?.closest('script,style,svg');
  function apply(){
    const l=lang(), dict=T[l]||T.en;
    document.documentElement.lang=l;
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];let n;while(n=w.nextNode())if(!skip(n))nodes.push(n);
    nodes.forEach(n=>{
      let s=n.nodeValue;
      Object.keys(source).forEach(v=>{
        const en=source[v],to=dict[en];
        if(v===to)return;
        s=s.split(v).join(to);
      });
      n.nodeValue=s;
    });
    document.querySelectorAll('[aria-label],[title]').forEach(el=>['aria-label','title'].forEach(a=>{
      const v=el.getAttribute(a), en=source[v]; if(en&&dict[en])el.setAttribute(a,dict[en]);
    }));
  }
  let pending=false;
  const schedule=()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;apply();});};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
  document.addEventListener('click',e=>{if(e.target.closest('.lang'))setTimeout(apply,120);});
  new MutationObserver(m=>{if(m.some(x=>x.type==='childList'))schedule();}).observe(document.body,{subtree:true,childList:true});
})();
