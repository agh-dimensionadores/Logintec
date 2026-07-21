/**
 * Logintec – Main interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  LogintecI18n.init();
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initWelcomeStatsReveal();
  initWelcomeServicesReveal();
  initFeaturePillsReveal();
  initDramaticSectionReveal();
  initDimensionadoresReveal();
  initContactForm();
  initSmoothAnchors();
  initNavActive();
  initHeroRotate();
  initEquiposCatalog();
  initEquiposDetail();
  initWhatsAppFloat();
});

/* Floating WhatsApp CTA */
function initWhatsAppFloat() {
  if (document.querySelector('.whatsapp-float')) return;

  const link = document.createElement('a');
  link.className = 'whatsapp-float';
  link.href = 'https://wa.me/5491130118469';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'WhatsApp: +54 9 11 3011-8469');
  link.title = 'WhatsApp +54 9 11 3011-8469';
  link.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  document.body.appendChild(link);

  const gate = document.getElementById('bienvenida');
  if (!gate) {
    link.classList.add('is-visible');
    return;
  }

  const updateVisibility = () => {
    const triggerY = gate.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.35;
    link.classList.toggle('is-visible', window.scrollY >= triggerY);
  };

  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
}

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

function initWelcomeServicesReveal() {
  const items = document.querySelectorAll('.welcome-svc-reveal');
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const item = entry.target;
        const siblings = item.parentElement?.querySelectorAll('.welcome-svc-reveal');
        const index = siblings ? Array.from(siblings).indexOf(item) : 0;

        setTimeout(() => {
          item.classList.add('visible');
        }, index * 140);

        observer.unobserve(item);
      });
    },
    { threshold: 0.25, rootMargin: '0px 0px -12% 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

function initFeaturePillsReveal() {
  const bars = document.querySelectorAll('.features-bar');
  if (!bars.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  bars.forEach((bar) => {
    const pills = bar.querySelectorAll('.feature-pill-reveal');
    if (!pills.length) return;

    if (prefersReduced) {
      pills.forEach((pill) => pill.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          pills.forEach((pill, index) => {
            setTimeout(() => {
              pill.classList.add('visible');
            }, index * 160);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(bar);
  });
}

function initDramaticSectionReveal() {
  const groups = document.querySelectorAll('[data-anim-section], [data-anim-group]');
  if (!groups.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  groups.forEach((group) => {
    const items = group.querySelectorAll('.anim-in');
    if (!items.length) return;

    if (prefersReduced) {
      items.forEach((item) => item.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('is-in');
            }, index * 100);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(group);
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

/* Contact form – FormSubmit + Google reCAPTCHA v2 */
const FORMSUBMIT_ID = 'info@logintec.com';
/* Creá tu key en https://www.google.com/recaptcha/admin (reCAPTCHA v2 “No soy un robot”) */
const RECAPTCHA_SITE_KEY = '6LffZl4tAAAAAOHekxyuC0CdcJa9NUxKlu8ym0ff';

let recaptchaWidgetId = null;

window.onRecaptchaLoad = function onRecaptchaLoad() {
  renderRecaptcha();
};

function renderRecaptcha() {
  const el = document.getElementById('recaptchaWidget');
  if (!el || typeof grecaptcha === 'undefined' || !grecaptcha.render) return;

  const lang = typeof LogintecI18n !== 'undefined' && LogintecI18n.getLang
    ? LogintecI18n.getLang()
    : 'es';

  // Contenedor limpio para poder re-renderizar (cambio de idioma)
  const mount = document.createElement('div');
  el.innerHTML = '';
  el.appendChild(mount);
  recaptchaWidgetId = null;

  recaptchaWidgetId = grecaptcha.render(mount, {
    sitekey: RECAPTCHA_SITE_KEY,
    theme: 'light',
    hl: lang === 'en' ? 'en' : 'es',
  });
}

function resetRecaptcha() {
  if (typeof grecaptcha === 'undefined') return;
  try {
    if (recaptchaWidgetId !== null) grecaptcha.reset(recaptchaWidgetId);
    else grecaptcha.reset();
  } catch (_) {
    renderRecaptcha();
  }
}

function getRecaptchaToken() {
  if (typeof grecaptcha === 'undefined') return '';
  try {
    return recaptchaWidgetId !== null
      ? grecaptcha.getResponse(recaptchaWidgetId)
      : grecaptcha.getResponse();
  } catch (_) {
    return '';
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');
  const statusEl = form.querySelector('.form-status');

  const setStatus = (type, message) => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `form-status form-status--${type}`;
    statusEl.hidden = !message;
  };

  const isSuccess = (result) =>
    result && (result.success === true || result.success === 'true');

  document.addEventListener('languagechange', () => {
    // reCAPTCHA fija el idioma al renderizar
    if (typeof grecaptcha !== 'undefined') renderRecaptcha();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (data._honey) return;

    const captchaToken = getRecaptchaToken();
    if (!captchaToken) {
      setStatus('error', LogintecI18n.t('form.captchaError'));
      return;
    }

    const interestLabels = {
      logistica: LogintecI18n.t('form.interest.logistics'),
      cubiscan: LogintecI18n.t('form.interest.cubiscan'),
      ambos: LogintecI18n.t('form.interest.both'),
    };
    const interestLabel = interestLabels[data.interes] || data.interes;

    const originalText = btn.textContent;
    btn.textContent = LogintecI18n.t('form.submitting');
    btn.disabled = true;
    setStatus('', '');

    try {
      if (window.location.protocol === 'file:') {
        throw new Error('needs_server');
      }

      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.nombre,
          email: data.email,
          company: data.empresa || 'N/A',
          interest: interestLabel,
          message: data.mensaje,
          'g-recaptcha-response': captchaToken,
          _subject: `Consulta Logintec – ${interestLabel}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json().catch(() => ({}));
      const messageText = String(result.message || '').toLowerCase();

      if (messageText.includes('activation') || messageText.includes('activate')) {
        setStatus('error', LogintecI18n.t('form.activate'));
        return;
      }

      if (!response.ok || !isSuccess(result)) {
        throw new Error(result.message || 'Error al enviar');
      }

      form.reset();
      resetRecaptcha();
      setStatus('success', LogintecI18n.t('form.success'));
    } catch (err) {
      resetRecaptcha();
      if (err && err.message === 'needs_server') {
        setStatus('error', LogintecI18n.t('form.needsServer'));
      } else {
        setStatus('error', LogintecI18n.t('form.error'));
      }
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
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
  let activeFilter = 'all';

  const getCards = () => Array.from(grid.querySelectorAll('.eq-card'));

  const applyFilter = () => {
    getCards().forEach((card) => {
      const cats = (card.dataset.category || '').split(/\s+/);
      const match = activeFilter === 'all' || cats.includes(activeFilter);
      card.classList.toggle('is-hidden', !match);
    });
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
  if (typeof LogintecI18n !== 'undefined' && LogintecI18n.t) {
    const value = LogintecI18n.t(key);
    if (value && value !== key) return value;
  }
  return fallback;
}

function getEquiposLang() {
  if (typeof LogintecI18n !== 'undefined' && LogintecI18n.getLang) {
    return LogintecI18n.getLang();
  }
  return document.documentElement.lang || 'es';
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
                <a class="eq-detail__btn eq-detail__btn--ghost" id="eqDetailBrochure" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                  <span data-i18n="dim.equipos.viewBrochure">${tEq('dim.equipos.viewBrochure', 'Ver folleto')}</span>
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
    brochure: detail.querySelector('#eqDetailBrochure'),
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
    const lang = getEquiposLang() === 'en' ? 'en' : 'es';
    const otherLang = lang === 'en' ? 'es' : 'en';
    const datasheet =
      card.getAttribute(`data-datasheet-${lang}`) ||
      card.getAttribute(`data-datasheet-${otherLang}`) ||
      '';
    const brochure =
      card.getAttribute(`data-brochure-${lang}`) ||
      card.getAttribute(`data-brochure-${otherLang}`) ||
      '';
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

    if (brochure) {
      els.brochure.href = brochure;
      els.brochure.classList.remove('is-hidden');
    } else {
      els.brochure.removeAttribute('href');
      els.brochure.classList.add('is-hidden');
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
