// Every destination and answer remains available without JavaScript.
(() => {
  const nav = document.querySelector('.topic-nav');
  const links = [...nav.querySelectorAll('a')];
  const destinations = links.map(link => document.querySelector(link.hash));
  const revealDestination = () => {
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    const details = target.closest('details');
    if (details) details.open = true;
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  };
  window.addEventListener('hashchange', revealDestination);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.hash.slice(1));
    const details = target?.closest('details');
    if (details) details.open = true;
  });
  revealDestination();
  let scheduled = false;
  const updateCurrent = () => {
    scheduled = false;
    let current = -1;
    const edge = nav.getBoundingClientRect().bottom + 32;
    destinations.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= edge) current = index;
    });
    if (current >= 0 && destinations[current].getBoundingClientRect().bottom <= edge) current = -1;
    if (document.querySelector('#fuentes').getBoundingClientRect().top <= edge) current = -1;
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateCurrent); }
  }, { passive: true });
  window.addEventListener('resize', updateCurrent);
  updateCurrent();
})();
