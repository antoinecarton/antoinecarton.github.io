(function () {
  var root = document.documentElement;

  // Theme toggle
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Earlier chapters
  var earlier = document.querySelector('[data-earlier]');
  if (earlier) {
    var btn = earlier.querySelector('[data-earlier-toggle]');
    var panel = earlier.querySelector('.earlier__panel');
    var label = earlier.querySelector('[data-earlier-label]');
    btn.addEventListener('click', function () {
      var open = !earlier.classList.contains('is-open');
      earlier.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open);
      panel.setAttribute('aria-hidden', !open);
      label.textContent = open ? btn.dataset.labelOpen : btn.dataset.labelClosed;
      if (open) {
        panel.querySelectorAll('.reveal').forEach(function (el, i) {
          el.style.animationDelay = (i * 0.12) + 's';
          el.classList.add('in');
        });
      }
    });
  }
})();
