// Mobile nav
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  function closeMobile() {
    mobileNav.classList.remove('open');
  }

  // Fade-up on scroll
  const fadeEls = document.querySelectorAll('.fade-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => io.observe(el));

  // Hero elements visible immediately
  document.querySelectorAll('#hero .fade-up').forEach(el => el.classList.add('visible'));

  // Contact form
  function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#4ade80';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  }
