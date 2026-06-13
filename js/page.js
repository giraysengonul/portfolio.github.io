/* =============================================================
   PAGE.JS — shared interactions for category project pages
   (navbar scroll, mobile menu, back-to-top). Replaces the
   inline scripts that used to be duplicated in every page.
   ============================================================= */
(function () {
  // Navbar scroll state
  const nb = document.getElementById('navbar');
  if (nb) {
    window.addEventListener('scroll', () =>
      nb.classList.toggle('scrolled', window.scrollY > 60)
    );
  }

  // Mobile menu open / close
  const hb = document.getElementById('hamburger');
  const mm = document.getElementById('mobileMenu');
  const mc = document.getElementById('mobileClose');
  if (hb && mm) hb.addEventListener('click', () => mm.classList.add('open'));
  if (mc && mm) mc.addEventListener('click', () => mm.classList.remove('open'));
  document.querySelectorAll('.mobile-links a').forEach((link) =>
    link.addEventListener('click', () => mm && mm.classList.remove('open'))
  );

  // Back to top
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () =>
      btt.classList.toggle('visible', window.scrollY > 400)
    );
    btt.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }
})();
