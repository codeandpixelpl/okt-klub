(function () {
  var btn = document.querySelector('.nav__hamburger');
  if (!btn) return;
  var nav = btn.closest('.nav');

  function closeMenu() {
    nav.classList.remove('nav--open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Zamknij po kliknięciu w dowolny link lub przycisk w menu
  nav.querySelectorAll('.nav__links a, .nav__right a, .nav__right button').forEach(function (el) {
    el.addEventListener('click', closeMenu);
  });
})();
