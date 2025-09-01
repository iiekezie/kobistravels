// Feather icons init
window.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace({ width: 22, height: 22 });

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  // Close menu when clicking a link (mobile)
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  }));

  // Intersection Observer for reveal animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // Enhanced animated count-up for stats
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.statTarget, 10);
      if (isNaN(target)) return;
      const duration = parseInt(el.dataset.statDuration, 10) || 1200;
      let start = null;
      const from = 0;
      const format = val => val.toLocaleString();
      function step(ts){
        if (!start) start = ts;
        const progress = Math.min(1, (ts - start) / duration);
        const eased = easeOutCubic(progress);
        const current = Math.round(from + (target - from) * eased);
        el.textContent = format(current);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = format(target);
      }
      requestAnimationFrame(step);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.55 });
  document.querySelectorAll('.stat__number[data-stat-target]').forEach(el => statObserver.observe(el));

  // Smooth in-page scroll offset fix for sticky nav
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id.startsWith('#!')) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 64; // nav height offset
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // FAQ accordion (country pages)
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
  });

  // Destination select navigation
  document.querySelectorAll('.js-destination-select').forEach(sel => {
    // Set current value based on location
    try {
      const path = window.location.pathname.split('/').pop();
      if (path && sel.querySelector(`option[value="${path}"]`)) {
        sel.value = path;
      }
    } catch(e){}
    sel.addEventListener('change', () => {
      const val = sel.value;
      if (val) window.location.href = val;
    });

    // Dynamic year for footer
    const yc = document.getElementById('yearCopy');
    if(yc){ yc.textContent = new Date().getFullYear(); }
  });

});
