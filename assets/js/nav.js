(function () {
  var btn = document.querySelector('.nav__hamburger');
  if (!btn) return;
  var nav = btn.closest('.nav');

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Zamknij po kliknięciu w link
  nav.querySelectorAll('.nav__links a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();
