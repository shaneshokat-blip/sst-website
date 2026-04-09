/* =========================================================
   SST PSR — main.js  (Enhanced v2)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── WhatsApp Floating Button ───────────────────────── */
  const wa = document.createElement('a');
  wa.href = 'https://wa.me/920222732001?text=Hello%2C%20I%20want%20to%20inquire%20about%20admission.';
  wa.target = '_blank';
  wa.rel = 'noopener noreferrer';
  wa.className = 'whatsapp-float';
  wa.setAttribute('aria-label', 'Chat on WhatsApp');
  wa.innerHTML = '<i class="fab fa-whatsapp"></i><span class="whatsapp-tooltip">Chat with us!</span>';
  document.body.appendChild(wa);

  /* ── Page loader ────────────────────────────────────── */
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  document.body.prepend(loader);
  setTimeout(() => loader.remove(), 1600);

  /* ── Navbar scroll ──────────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  const scrollTop = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar && navbar.classList.add('scrolled');
      scrollTop && scrollTop.classList.add('visible');
    } else {
      navbar && navbar.classList.remove('scrolled');
      scrollTop && scrollTop.classList.remove('visible');
    }
  });

  if (scrollTop) {
    scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Mobile hamburger ───────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('mobile-open');
      document.body.style.overflow = navMenu.classList.contains('mobile-open') ? 'hidden' : '';
    });

    // Mobile dropdown toggle
    navMenu.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          const dropdown = item.querySelector('.dropdown');
          if (dropdown && item.contains(e.target)) {
            e.stopPropagation();
            item.classList.toggle('mobile-open');
          }
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('mobile-open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Scroll reveal ──────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Animated counters ──────────────────────────────── */
  function animateCounter(el, target, duration = 2000, suffix = '') {
    let start = 0;
    const step = target / (duration / 16);
    const update = () => {
      start += step;
      if (start >= target) {
        el.textContent = target.toLocaleString() + suffix;
      } else {
        el.textContent = Math.floor(start).toLocaleString() + suffix;
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, 2200, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterEls.forEach(el => counterObserver.observe(el));

  /* ── Active nav link ────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href !== '#' && href !== '' && href.includes(currentPath) && currentPath !== '') {
      link.classList.add('active-link');
    }
  });

  /* ── Newsletter form ────────────────────────────────── */
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const btn   = newsletterForm.querySelector('button');
      if (input && input.value) {
        btn.textContent = '✓ Subscribed!';
        btn.style.background = '#22c55e';
        input.value = '';
        setTimeout(() => {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      }
    });
  }

  /* ── Smooth anchor links ────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Simple hero image slider ───────────────────────── */
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    function nextSlide() {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }
    setInterval(nextSlide, 5000);
  }

  /* ── Dropdown keyboard a11y ─────────────────────────── */
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.toggle('mobile-open');
      }
      if (e.key === 'Escape') item.classList.remove('mobile-open');
    });
  });

  /* ── Add active state to nav link style ─────────────── */
  const style = document.createElement('style');
  style.textContent = `.active-link { color: var(--accent) !important; }`;
  document.head.appendChild(style);

});
