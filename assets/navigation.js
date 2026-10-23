// Navigation enhances native links; all pages and content work without scripting.
(() => {
  const menu = document.querySelector('.site-menu');
  const narrow = matchMedia('(max-width: 850px)');
  const updateMenu = () => { if (menu) menu.open = !narrow.matches; };
  updateMenu();
  narrow.addEventListener('change', updateMenu);
  const legacy = {
    sintomas:'sintomas.html', 'que-hacer':'sintomas.html', contacto:'sintomas.html',
    diagnostico:'sintomas.html', 'atencion-urgente':'sintomas.html',
    'que-es':'conocer.html', transmision:'conocer.html', prevencion:'prevencion.html',
    tratamiento:'tratamiento.html', mitos:'preguntas.html', fuentes:'fuentes.html'
  };
  for(let n=1;n<=13;n++) legacy['fuente-'+n]='fuentes.html';
  const followLegacy = () => {
    if (document.body.dataset.page !== 'index.html') return false;
    const id=location.hash.slice(1), file=legacy[id];
    if (!file) return false;
    location.replace(file+'#'+id);
    return true;
  };
  const reveal = () => {
    if (followLegacy()) return;
    const target=document.getElementById(location.hash.slice(1));
    if (!target) return;
    for(let ancestor=target;ancestor;ancestor=ancestor.parentElement) {
      if(ancestor.tagName==='DETAILS') ancestor.open=true;
    }
    requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
  };
  document.addEventListener('click', event => {
    const link=event.target.closest('a[href^="#"]');
    const target=link&&document.getElementById(link.hash.slice(1));
    for(let ancestor=target;ancestor;ancestor=ancestor.parentElement) {
      if(ancestor.tagName==='DETAILS') ancestor.open=true;
    }
  });
  window.addEventListener('hashchange',reveal);
  reveal();
})();
