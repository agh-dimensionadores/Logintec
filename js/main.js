/**
 * Logintec – Main interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  LogintecI18n.init();
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initWelcomeStatsReveal();
  initDimensionadoresReveal();
  initProductCards();
  initContactForm();
  initSmoothAnchors();
  initNavActive();
  initHeroRotate();
  initEquiposCatalog();
  initEquiposDetail();
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

function initWelcomeStatsReveal() {
  const containers = document.querySelectorAll('.welcome-stats');

  containers.forEach((container) => {
    const stats = container.querySelectorAll('.reveal-stat');
    if (!stats.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          stats.forEach((stat, index) => {
            setTimeout(() => {
              stat.classList.add('visible');
            }, index * 180);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(container);
  });
}

function initDimensionadoresReveal() {
  initDimHeroCounters();

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealItems = (items) => {
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 120);
    });
  };

  /* Brand panels: observe the scrolling panel (not the sticky section) */
  document.querySelectorAll('.dim-brand-panel').forEach((panel) => {
    const items = panel.querySelectorAll('.dim-reveal');
    if (!items.length) return;

    if (prefersReduced) {
      items.forEach((item) => item.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealItems(items);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.28, rootMargin: '0px 0px -12% 0px' }
    );

    observer.observe(panel);
  });

  /* Other dimensionadores sections / hero */
  document.querySelectorAll('.dim-section:not(.dim-brand), .dim-hero').forEach((section) => {
    const items = section.querySelectorAll('.dim-reveal');
    if (!items.length) return;

    if (prefersReduced) {
      items.forEach((item) => item.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealItems(items);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(section);
  });
}

function initDimHeroCounters() {
  const nums = document.querySelectorAll('.dim-hero__stat-num[data-count]');
  if (!nums.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const formatValue = (el, value) => {
    const rounded = Math.round(value);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const text = el.dataset.format === 'thousand'
      ? rounded.toLocaleString('es-AR')
      : String(rounded);
    return `${prefix}${text}${suffix}`;
  };

  const runCount = (el) => {
    const target = Number(el.dataset.count);
    if (Number.isNaN(target)) return;

    if (prefersReduced) {
      el.textContent = formatValue(el, target);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatValue(el, target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCount(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  nums.forEach((num) => observer.observe(num));
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

function initEquiposCatalog() {
  const grid = document.getElementById('equiposGrid');
  const filters = document.getElementById('equiposFilters');
  if (!grid || !filters) return;

  const tabs = filters.querySelectorAll('.equipos-filters__tab');
  const sortSelect = document.getElementById('equiposSort');
  let activeFilter = 'all';

  const getCards = () => Array.from(grid.querySelectorAll('.eq-card'));

  const applyFilter = () => {
    getCards().forEach((card) => {
      const cats = (card.dataset.category || '').split(/\s+/);
      const match = activeFilter === 'all' || cats.includes(activeFilter);
      card.classList.toggle('is-hidden', !match);
    });
  };

  const applySort = () => {
    const mode = sortSelect?.value || 'featured';
    const cards = getCards();
    cards.sort((a, b) => {
      if (mode === 'name') {
        return (a.dataset.name || '').localeCompare(b.dataset.name || '', 'es');
      }
      return Number(a.dataset.featured || 99) - Number(b.dataset.featured || 99);
    });
    cards.forEach((card) => grid.appendChild(card));
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.filter || 'all';
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      applyFilter();
    });
  });

  sortSelect?.addEventListener('change', applySort);
  applySort();
  applyFilter();
  initEquiposGalleries(grid);
}

function initEquiposGalleries(root) {
  root.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const images = Array.from(gallery.querySelectorAll('img'));
    const dots = Array.from(gallery.querySelectorAll('.eq-card__dot'));
    if (images.length < 2) return;

    const show = (index) => {
      images.forEach((img, i) => img.classList.toggle('is-active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    };

    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        show(Number(dot.dataset.index) || 0);
      });
    });
  });
}

function tEq(key, fallback) {
  if (window.LogintecI18n?.t) {
    const value = LogintecI18n.t(key);
    if (value && value !== key) return value;
  }
  return fallback;
}

function initEquiposDetail() {
  const grid = document.getElementById('equiposGrid');
  if (!grid) return;

  let openCard = null;
  let detail = document.getElementById('eqDetail');

  if (!detail) {
    detail = document.createElement('div');
    detail.id = 'eqDetail';
    detail.className = 'eq-detail';
    detail.setAttribute('aria-hidden', 'true');
    detail.innerHTML = `
      <div class="eq-detail__backdrop" data-eq-close></div>
      <div class="eq-detail__panel" role="dialog" aria-modal="true" aria-labelledby="eqDetailName">
        <button type="button" class="eq-detail__close" data-eq-close aria-label="${tEq('dim.equipos.close', 'Cerrar')}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>
        </button>
        <div class="eq-detail__scroll">
          <div class="eq-detail__layout">
            <div class="eq-detail__gallery">
              <div class="eq-detail__main"><img id="eqDetailMainImg" src="" alt="" /></div>
              <div class="eq-detail__thumbs" id="eqDetailThumbs"></div>
            </div>
            <div class="eq-detail__info">
              <span class="eq-detail__badge" id="eqDetailBadge"></span>
              <h2 class="eq-detail__name" id="eqDetailName"></h2>
              <p class="eq-detail__desc" id="eqDetailDesc"></p>
              <p class="eq-detail__section-title" data-i18n="dim.equipos.specs">${tEq('dim.equipos.specs', 'Especificaciones')}</p>
              <div class="eq-detail__specs" id="eqDetailSpecs"></div>
              <p class="eq-detail__section-title" data-i18n="dim.equipos.highlights">${tEq('dim.equipos.highlights', 'Destacados')}</p>
              <div class="eq-detail__features" id="eqDetailFeatures"></div>
              <div class="eq-detail__actions">
                <a class="eq-detail__btn eq-detail__btn--primary" id="eqDetailDatasheet" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></svg>
                  <span data-i18n="dim.equipos.datasheet">${tEq('dim.equipos.datasheet', 'Ficha técnica')}</span>
                </a>
                <a class="eq-detail__btn eq-detail__btn--ghost" id="eqDetailVideo" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none"/></svg>
                  <span data-i18n="dim.equipos.video">${tEq('dim.equipos.video', 'Ver video')}</span>
                </a>
                <a class="eq-detail__btn eq-detail__btn--ghost" id="eqDetailConsult" href="index.html#contacto">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z"/></svg>
                  <span data-i18n="dim.equipos.consult">${tEq('dim.equipos.consult', 'Consultar')}</span>
                </a>
              </div>
              <p class="eq-detail__note" data-i18n="dim.equipos.detailNote">${tEq('dim.equipos.detailNote', '¿Necesitás cotización, demo o integración con tu WMS? Escribinos y te asesoramos.')}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(detail);
  }

  const els = {
    badge: detail.querySelector('#eqDetailBadge'),
    name: detail.querySelector('#eqDetailName'),
    desc: detail.querySelector('#eqDetailDesc'),
    specs: detail.querySelector('#eqDetailSpecs'),
    features: detail.querySelector('#eqDetailFeatures'),
    mainImg: detail.querySelector('#eqDetailMainImg'),
    thumbs: detail.querySelector('#eqDetailThumbs'),
    datasheet: detail.querySelector('#eqDetailDatasheet'),
    video: detail.querySelector('#eqDetailVideo'),
    consult: detail.querySelector('#eqDetailConsult'),
    closeBtn: detail.querySelector('.eq-detail__close'),
  };

  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const setMainImage = (src, alt) => {
    els.mainImg.src = src;
    els.mainImg.alt = alt || '';
  };

  const fillFromCard = (card) => {
    const name = card.querySelector('.eq-card__name')?.textContent?.trim() || card.dataset.name || '';
    const desc = card.querySelector('.eq-card__text')?.textContent?.trim() || '';
    const badge = card.querySelector('.eq-card__badge');
    const images = Array.from(card.querySelectorAll('.eq-card__media img'));
    const specs = Array.from(card.querySelectorAll('.eq-card__spec'));
    const highlightItems = Array.from(card.querySelectorAll('.eq-card__highlights li'));
    const datasheet = card.dataset.datasheet || '';
    const video = card.dataset.video || '';

    els.name.textContent = name;
    els.desc.textContent = desc;

    if (badge) {
      els.badge.hidden = false;
      els.badge.textContent = badge.textContent.trim();
      els.badge.className = 'eq-detail__badge';
      const tone = [...badge.classList].find((c) => c.startsWith('eq-card__badge--'));
      if (tone) els.badge.classList.add(tone.replace('eq-card__badge', 'eq-detail__badge'));
    } else {
      els.badge.hidden = true;
    }

    els.specs.innerHTML = '';
    specs.forEach((spec) => {
      const clone = spec.cloneNode(true);
      clone.className = 'eq-detail__spec';
      els.specs.appendChild(clone);
    });

    els.features.innerHTML = '';
    const featureSection = detail.querySelector('[data-i18n="dim.equipos.highlights"]');
    if (highlightItems.length) {
      featureSection?.classList.remove('is-hidden');
      els.features.hidden = false;
      highlightItems.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'eq-detail__feature';
        row.innerHTML = `${checkIcon}<span></span>`;
        row.querySelector('span').textContent = item.textContent.trim();
        els.features.appendChild(row);
      });
    } else {
      featureSection?.classList.add('is-hidden');
      els.features.hidden = true;
    }

    els.thumbs.innerHTML = '';
    const alt = name;
    if (images.length) {
      setMainImage(images[0].currentSrc || images[0].src, alt);
      images.forEach((img, index) => {
        const src = img.currentSrc || img.src;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `eq-detail__thumb${index === 0 ? ' is-active' : ''}`;
        btn.setAttribute('aria-label', `${alt} ${index + 1}`);
        btn.innerHTML = `<img src="${src}" alt="" />`;
        btn.addEventListener('click', () => {
          setMainImage(src, alt);
          els.thumbs.querySelectorAll('.eq-detail__thumb').forEach((t) => t.classList.remove('is-active'));
          btn.classList.add('is-active');
        });
        els.thumbs.appendChild(btn);
      });
      els.thumbs.hidden = images.length < 2;
    }

    if (datasheet) {
      els.datasheet.href = datasheet;
      els.datasheet.classList.remove('is-hidden');
    } else {
      els.datasheet.removeAttribute('href');
      els.datasheet.classList.add('is-hidden');
    }

    if (video) {
      els.video.href = video;
      els.video.classList.remove('is-hidden');
      const videoLabel = els.video.querySelector('span');
      if (videoLabel) {
        videoLabel.setAttribute('data-i18n', 'dim.equipos.video');
        videoLabel.textContent = tEq('dim.equipos.video', 'Ver video');
      }
    } else {
      els.video.href = 'index.html#contacto';
      els.video.classList.remove('is-hidden');
      const videoLabel = els.video.querySelector('span');
      if (videoLabel) {
        videoLabel.setAttribute('data-i18n', 'dim.equipos.requestVideo');
        videoLabel.textContent = tEq('dim.equipos.requestVideo', 'Solicitar video');
      }
    }

    els.consult.href = card.dataset.consult || 'index.html#contacto';
  };

  const open = (card) => {
    openCard = card;
    fillFromCard(card);
    detail.classList.add('is-open');
    detail.setAttribute('aria-hidden', 'false');
    document.body.classList.add('eq-detail-open');
    els.closeBtn?.focus();
  };

  const close = () => {
    detail.classList.remove('is-open');
    detail.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('eq-detail-open');
    openCard = null;
  };

  grid.addEventListener('click', (e) => {
    const trigger = e.target.closest('.eq-card__link');
    if (!trigger) return;
    const card = trigger.closest('.eq-card');
    if (!card) return;
    e.preventDefault();
    open(card);
  });

  detail.addEventListener('click', (e) => {
    if (e.target.closest('[data-eq-close]')) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detail.classList.contains('is-open')) close();
  });

  document.addEventListener('languagechange', () => {
    if (openCard && detail.classList.contains('is-open')) fillFromCard(openCard);
    if (els.closeBtn) els.closeBtn.setAttribute('aria-label', tEq('dim.equipos.close', 'Cerrar'));
  });
}
