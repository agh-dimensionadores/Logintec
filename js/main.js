/**
 * Logintec – Main interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  LogintecI18n.init();
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initProductCards();
  initContactForm();
  initSmoothAnchors();
  initNavActive();
  initHeroRotate();
});

/* Header scroll behavior */
function initHeader() {
  const header = document.getElementById('header');

  const updateHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

/* Mobile navigation */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('menu-toggle--active');
    nav.classList.toggle('nav--open');
    document.body.style.overflow = nav.classList.contains('nav--open') ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('menu-toggle--active');
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
    });
  });
}

/* Scroll reveal animations */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement?.querySelectorAll('.reveal');
          const siblingIndex = siblings ? Array.from(siblings).indexOf(entry.target) : 0;

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, siblingIndex * 80);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* Cubiscan product card interaction */
function initProductCards() {
  const cards = document.querySelectorAll('.product-card');
  const dataRows = document.querySelectorAll('.data-row strong');

  const specs = {
    'Cubiscan 25': ['25.0 cm', '18.5 cm', '12.0 cm', '2.1 kg'],
    'Cubiscan 100': ['38.4 cm', '28.2 cm', '22.5 cm', '8.7 kg'],
    'Cubiscan 325': ['45.2 cm', '32.8 cm', '28.1 cm', '12.4 kg'],
    'Cubiscan 150': ['52.0 cm', '40.1 cm', '35.6 cm', '18.2 kg'],
    'Cubiscan 200TS': ['68.5 cm', '48.3 cm', '42.0 cm', '25.8 kg'],
    'Cubiscan 1200': ['120.0 cm', '80.5 cm', '72.3 cm', '85.0 kg'],
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => c.classList.remove('product-card--active'));
      card.classList.add('product-card--active');

      const model = card.querySelector('.product-card__model')?.textContent;
      const screenLabel = document.querySelector('.device-screen__label');
      if (model && specs[model] && dataRows.length >= 4) {
        specs[model].forEach((val, i) => {
          dataRows[i].textContent = val;
        });
        if (screenLabel) screenLabel.textContent = model;
      }
    });
  });

  // Animate data values on load
  animateDeviceData();
}

function animateDeviceData() {
  const highlight = document.querySelector('.data-row--highlight strong');
  if (!highlight) return;

  setInterval(() => {
    highlight.style.transform = 'scale(1.05)';
    setTimeout(() => {
      highlight.style.transform = 'scale(1)';
    }, 200);
  }, 3000);
}

/* Contact form */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(`Consulta Logintec - ${data.interes}`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\n` +
      `Empresa: ${data.empresa || 'N/A'}\n` +
      `Email: ${data.email}\n` +
      `Interés: ${data.interes}\n\n` +
      `Mensaje:\n${data.mensaje}`
    );

    window.location.href = `mailto:info@logintec.com?subject=${subject}&body=${body}`;

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = LogintecI18n.t('form.submitting');
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 3000);
  });
}

/* Active nav link on scroll */
function initNavActive() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a:not(.nav__mobile-cta)');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('nav__active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

/* Hero headline rotation */
function initHeroRotate() {
  const container = document.getElementById('heroRotate');
  if (!container) return;

  const textEl = container.querySelector('.hero-rotate__text');
  if (!textEl) return;

  const renderStatic = () => {
    const phrases = LogintecI18n.getHeroPhrases();
    textEl.innerHTML = LogintecI18n.renderHeroPhrase(phrases[0].parts);
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    renderStatic();
    document.addEventListener('languagechange', renderStatic);
    return;
  }

  let index = 0;
  let intervalId = null;

  const applyPhrase = (phrase, animate) => {
    const update = () => {
      textEl.innerHTML = LogintecI18n.renderHeroPhrase(phrase.parts);
    };

    if (!animate) {
      update();
      return;
    }

    textEl.classList.add('is-leaving');
    setTimeout(() => {
      update();
      textEl.classList.remove('is-leaving');
      textEl.classList.add('is-entering');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => textEl.classList.remove('is-entering'));
      });
    }, 450);
  };

  const rotate = () => {
    const phrases = LogintecI18n.getHeroPhrases();
    index = (index + 1) % phrases.length;
    applyPhrase(phrases[index], true);
  };

  const start = () => {
    const phrases = LogintecI18n.getHeroPhrases();
    index = 0;
    applyPhrase(phrases[0], false);
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(rotate, 3800);
  };

  start();

  document.addEventListener('languagechange', () => {
    start();
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
