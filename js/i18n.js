/**
 * Logintec – Internacionalización ES / EN
 */
const LogintecI18n = (() => {
  const STORAGE_KEY = 'logintec-lang';

  const translations = {
    es: {
      'meta.title': 'Logintec – Critical Logistics Management',
      'meta.description': 'Logintec – Critical Logistics Management. Soluciones logísticas críticas y sistemas Cubiscan de dimensionamiento.',

      'nav.services': 'Servicios',
      'nav.company': 'Empresa',
      'nav.volumetry': 'Volumetría',
      'nav.contact': 'Contáctenos',

      'hero.tagLogistics': 'Logística',
      'hero.tagVolumetry': 'Volumetría',
      'hero.ctaLogistics': 'Servicios de logística',
      'hero.ctaDimensioners': 'Dimensionadores',

      'welcome.title': '<span class="t-bold">Hola y </span><span class="t-accent">bienvenidos!</span>',
      'welcome.p1': 'Logintec es una empresa dedicada al diseño, gestión e implementación de valor agregado en Soluciones Logísticas. Principalmente enfocada en la Logística de Partes de Servicio (SPL), Repuestos críticos y Soluciones de Valor Agregado (VAS), tales como fullfilment, reflashing, screening y distribución.',
      'welcome.p2': 'De todas formas, el fuerte de Logintec se basa en su capacidad de implementar soluciones que se adecuen a las necesidades de los clientes en término de costos y niveles de servicio.',
      'welcome.cta': 'Conocé más de nosotros',
      'welcome.services.label': 'Nuestros servicios',
      'welcome.svc1.title': 'Entregas ASAP',
      'welcome.svc1.desc': 'Servicios de entregas en CABA y AMBA en 2 horas.',
      'welcome.svc2.title': 'Documentación',
      'welcome.svc2.desc': 'Realizamos todos los trámites para que sus productos ingresen al país.',
      'welcome.svc3.title': 'Servicio NFO',
      'welcome.svc3.desc': 'Entregamos en las capitales del interior, embarcando en el primer vuelo disponible.',
      'welcome.svc4.title': 'Retorno de importaciones',
      'welcome.svc4.desc': 'Enviamos sus productos al país de origen para realizar las reparaciones.',
      'welcome.svc5.title': 'Warehousing',
      'welcome.svc5.desc': 'Contamos con un centro de almacenaje para sus productos tecnológicos.',
      'welcome.svc6.title': 'Transporte terrestre',
      'welcome.svc6.desc': 'Contamos con una red que nos permite llegar a toda la República Argentina.',
      'welcome.stat1.title': '+20 AÑOS',
      'welcome.stat1.desc': 'de experiencia en logística crítica',
      'welcome.stat2.title': '24/7',
      'welcome.stat2.desc': 'operación continua sin interrupciones',
      'welcome.stat3.title': '100%',
      'welcome.stat3.desc': 'cobertura nacional en entregas',
      'welcome.stat4.title': '2 HORAS',
      'welcome.stat4.desc': 'entregas ASAP en AMBA',
      'welcome.card.logistics.title': 'SOLUCIONES LOGÍSTICAS',
      'welcome.card.logistics.desc': 'SPL, IOR/EOR, almacenaje y transporte puerta a puerta en todo el país.',
      'welcome.card.cubiscan.title': 'DIMENSIONADORES INTELIGENTES',
      'welcome.card.cubiscan.desc': 'Equipos Cubiscan para medición precisa de peso y volumen en su operación.',
      'welcome.card.more': 'Conocé más',

      'logistics.label': 'Nuestros servicios',
      'logistics.title': '<span class="t-bold">Logística</span> <span class="t-accent">de partes críticas</span>',
      'logistics.desc': 'Diseñamos, gestionamos e implementamos soluciones logísticas de valor agregado para industrias que no pueden detenerse.',

      'service.spl.desc': 'Entregas en 2 horas en AMBA, hora estipulada, NFO y NBD. Soportamos caídas en sistemas y mantenimientos urgentes.',
      'service.ior.desc': 'IOR y EOR para clientes internacionales. Gestionamos toda la documentación para que sus productos ingresen al país sin demoras.',
      'service.wh.desc': 'Almacenaje tecnológico, entregas puerta a puerta en todo el país y CrossDocking para reducir tiempos de entrega.',

      'feature.customs': 'Documentación aduanera',
      'feature.nfo': 'Servicio NFO interior',
      'feature.return': 'Retorno de importaciones',
      'feature.network': 'Red terrestre nacional',

      'cubiscan.label': 'Cubiscan Partner',
      'cubiscan.title': '<span class="t-bold">Sistemas de</span> <span class="t-accent">dimensionamiento</span> y pesaje',
      'cubiscan.desc': 'Equipos diseñados para aumentar la productividad de su centro de distribución, depósito y operación logística.',

      'dim.length': 'Largo',
      'dim.width': 'Ancho',
      'dim.height': 'Alto',
      'dim.weight': 'Peso',

      'product.25.desc': 'Compacto y preciso',
      'product.100.desc': 'Alto rendimiento',
      'product.325.desc': 'Industrial',
      'product.150.desc': 'Versátil',
      'product.200ts.desc': 'Transporte',
      'product.1200.desc': 'Gran volumen',

      'benefit.precision.title': 'Precisión',
      'benefit.precision.desc': 'Mediciones exactas de peso y dimensiones en segundos',
      'benefit.integration.title': 'Integración',
      'benefit.integration.desc': 'Compatible con WMS, TMS y sistemas ERP',
      'benefit.roi.title': 'ROI',
      'benefit.roi.desc': 'Reducción de errores de facturación y optimización de espacio',

      'cubiscan.demo': 'Solicitar demostración',

      'about.label': 'Quiénes somos',
      'about.title': 'Soluciones <span class="t-accent">logísticas</span> a medida',
      'about.p1': '<strong>Logintec</strong> es una empresa dedicada al diseño, gestión e implementación de valor agregado en soluciones logísticas. Principalmente enfocada en la Logística de Partes de Servicio (SPL), repuestos críticos y Soluciones de Valor Agregado (VAS).',
      'about.p2': 'Nuestro fuerte se basa en la capacidad de implementar soluciones que se adecuen a las necesidades de los clientes en términos de costos y niveles de servicio.',
      'about.urgency.title': 'Urgencia',
      'about.urgency.desc': 'De mañana, de noche y feriados',
      'about.precision.title': 'Precisión',
      'about.precision.desc': 'Niveles de servicio garantizados',
      'about.partnership.title': 'Partnership',
      'about.partnership.desc': 'Partner oficial Cubiscan',
      'about.card.label': '50% del negocio',
      'about.card.logistics.title': 'Logística',
      'about.card.logistics.desc': 'SPL · IOR/EOR · Warehousing · Transporte nacional',
      'about.card.volumetry.title': 'Volumetría',
      'about.card.volumetry.desc': 'Cubiscan · Dimensionamiento · Pesaje industrial',

      'empresa.meta.title': 'Empresa – Logintec',
      'empresa.meta.description': 'Conozca Logintec: más de 20 años en logística crítica, SPL, IOR/EOR y soluciones de valor agregado en Argentina.',
      'empresa.hero.label': 'Sobre nosotros',
      'empresa.hero.title': 'Más de 20 años optimizando la logística <span class="t-accent">crítica</span>',
      'empresa.hero.p1': 'Logintec es una empresa dedicada al diseño, gestión e implementación de valor agregado en Soluciones Logísticas. Principalmente enfocada en la Logística de Partes de Servicio (SPL), Repuestos críticos y Soluciones de Valor Agregado (VAS), tales como fullfilment, reflashing, screening y distribución.',
      'empresa.hero.p2': 'De todas formas, el fuerte de Logintec se basa en su capacidad de implementar soluciones que se adecuen a las necesidades de los clientes en término de costos y niveles de servicio.',
      'empresa.hero.cta': 'Conocé nuestra historia',
      'empresa.stat1.title': '+20 AÑOS',
      'empresa.stat1.desc': 'de experiencia',
      'empresa.stat2.title': '+500 CLIENTES',
      'empresa.stat2.desc': 'que confían en nosotros',
      'empresa.stat3.title': 'COBERTURA NACIONAL',
      'empresa.stat3.desc': 'operaciones en todo el país',
      'empresa.stat4.title': 'SOPORTE 24/7',
      'empresa.stat4.desc': 'acompañamiento técnico especializado',
      'empresa.values.label': 'Nuestros valores',
      'empresa.value1': 'Compromiso',
      'empresa.value1.desc': 'Con cada entrega crítica',
      'empresa.value2': 'Precisión',
      'empresa.value2.desc': 'En cada proceso logístico',
      'empresa.value3': 'Innovación',
      'empresa.value3.desc': 'Tecnología y mejora continua',
      'empresa.value4': 'Integridad',
      'empresa.value4.desc': 'Transparencia en cada operación',
      'empresa.mission.title': 'Nuestra misión',
      'empresa.mission.text': 'Diseñar, gestionar e implementar soluciones logísticas de valor agregado que se adapten a las necesidades de nuestros clientes en términos de costos y niveles de servicio, con foco en SPL, repuestos críticos y VAS.',
      'empresa.vision.title': 'Nuestra visión',
      'empresa.vision.text': 'Ser referentes en logística crítica en Argentina, con soluciones competitivas, efectivas y un top management orientado a la excelencia operativa.',
      'empresa.presence.title': 'Presencia en todo el país',
      'empresa.presence.desc': 'Red nacional de entregas NFO, NBD y transporte terrestre para llegar a cada rincón de la República Argentina.',
      'empresa.block.ior.title': 'IOR / EOR en Argentina',
      'empresa.block.ior.text': 'Como parte del SPL y del VAS hemos desarrollado en la Argentina la entidad de Importer / Exporter of Record (IOR / EOR). En Logintec creemos que el Top Management deber ser competitivo de forma que nuestras soluciones y diseños sean adecuadas y efectivas.',
      'empresa.block.spl.title': 'SPL y entregas en tiempo crítico',
      'empresa.block.spl.text': 'El SPL y las entregas en tiempo crítico incluyen los servicios de entregas express en 2 o 4 horas en el AMBA (Capital Federal y Gran Buenos Aires), las 24 horas, los 7 días de la semana. Además contamos con distintos niveles de servicios como entregas a horarios programados, servicios NFO (avión) a las principales capitales del país y NBD (terrestres) a todo el país, recolección de partes defectuosas (logística reversa), entregas para reparación o destrucción, y otros servicios adicionales.',
      'empresa.block.experience.title': 'Experiencia y trayectoria',
      'empresa.block.experience.text': 'Contamos con varios años de experiencia en el negocio de la logística, almacenaje, distribución, comercio exterior, y en todo lo concerniente a los servicios de gestión de Supply Chain.',
      'empresa.block.team.title': 'Nuestro equipo',
      'empresa.block.team.text': 'Logintec está gerenciada por un joven equipo, con ejecutivos y profesionales experimentados en el área. Contamos con amplios conocimientos en Operaciones, IT y Finanzas. Nuestros clientes son grandes compañías del rubro de Seguridad Informática, Networking, Data Storage, Servicios de IT y Comunicaciones entre otros.',

      'contact.label': 'Contáctenos',
      'contact.title': 'Hablemos de su <span class="t-accent">próximo proyecto</span>',
      'contact.desc': 'Logística crítica o equipos de dimensionamiento — estamos listos para ayudarle.',
      'contact.call': 'Llámenos',
      'contact.write': 'Escríbanos',
      'contact.hours': 'Horario',

      'form.name': 'Nombre',
      'form.company': 'Empresa',
      'form.email': 'Email',
      'form.interest': 'Interés',
      'form.message': 'Mensaje',
      'form.namePlaceholder': 'Su nombre',
      'form.companyPlaceholder': 'Su empresa',
      'form.emailPlaceholder': 'email@empresa.com',
      'form.messagePlaceholder': 'Cuéntenos sobre su necesidad...',
      'form.interest.logistics': 'Servicios de Logística',
      'form.interest.cubiscan': 'Equipos Cubiscan',
      'form.interest.both': 'Ambos',
      'form.submit': 'Enviar consulta',
      'form.submitting': '¡Abriendo email!',

      'footer.desc': 'Soluciones logísticas críticas y sistemas de dimensionamiento Cubiscan.',
      'footer.logistics': 'Logística',
      'footer.cubiscan': 'Cubiscan',
      'footer.contact': 'Contacto',
      'footer.equipment': 'Equipos',
      'footer.volumetry': 'Volumetría',
      'footer.demo': 'Demostración',
      'footer.rights': '© 2026 Logintec. Todos los derechos reservados.',

      'aria.openMenu': 'Abrir menú',
      'aria.langSwitch': 'Seleccionar idioma',
    },

    en: {
      'meta.title': 'Logintec – Critical Logistics Management',
      'meta.description': 'Logintec – Critical Logistics Management. Critical logistics solutions and Cubiscan dimensioning systems.',

      'nav.services': 'Services',
      'nav.company': 'Company',
      'nav.volumetry': 'Volumetry',
      'nav.contact': 'Contact Us',

      'hero.tagLogistics': 'Logistics',
      'hero.tagVolumetry': 'Volumetry',
      'hero.ctaLogistics': 'Logistics services',
      'hero.ctaDimensioners': 'Dimensioners',

      'welcome.title': '<span class="t-bold">Hello and </span><span class="t-accent">welcome!</span>',
      'welcome.p1': 'Logintec is a company dedicated to designing, managing and implementing value-added Logistics Solutions. Mainly focused on Service Parts Logistics (SPL), critical spare parts and Value Added Services (VAS), such as fulfillment, reflashing, screening and distribution.',
      'welcome.p2': 'Our strength lies in implementing solutions tailored to client needs in terms of cost and service levels.',
      'welcome.cta': 'Learn more about us',
      'welcome.services.label': 'Our services',
      'welcome.svc1.title': 'ASAP Deliveries',
      'welcome.svc1.desc': 'Delivery services in CABA and Greater Buenos Aires within 2 hours.',
      'welcome.svc2.title': 'Documentation',
      'welcome.svc2.desc': 'We handle all procedures so your products can enter the country.',
      'welcome.svc3.title': 'NFO Service',
      'welcome.svc3.desc': 'We deliver to provincial capitals, boarding on the first available flight.',
      'welcome.svc4.title': 'Import returns',
      'welcome.svc4.desc': 'We ship your products back to the country of origin for repairs.',
      'welcome.svc5.title': 'Warehousing',
      'welcome.svc5.desc': 'We have a storage center for your technology products.',
      'welcome.svc6.title': 'Ground transport',
      'welcome.svc6.desc': 'Our network allows us to reach every corner of Argentina.',
      'welcome.stat1.title': '+20 YEARS',
      'welcome.stat1.desc': 'of experience in critical logistics',
      'welcome.stat2.title': '24/7',
      'welcome.stat2.desc': 'continuous operation without interruptions',
      'welcome.stat3.title': '100%',
      'welcome.stat3.desc': 'national delivery coverage',
      'welcome.stat4.title': '2 HOURS',
      'welcome.stat4.desc': 'ASAP deliveries in Greater Buenos Aires',
      'welcome.card.logistics.title': 'LOGISTICS SOLUTIONS',
      'welcome.card.logistics.desc': 'SPL, IOR/EOR, warehousing and door-to-door transport nationwide.',
      'welcome.card.cubiscan.title': 'SMART DIMENSIONERS',
      'welcome.card.cubiscan.desc': 'Cubiscan equipment for accurate weight and volume measurement in your operation.',
      'welcome.card.more': 'Learn more',

      'logistics.label': 'Our services',
      'logistics.title': '<span class="t-bold">Critical parts</span> <span class="t-accent">logistics</span>',
      'logistics.desc': 'We design, manage and implement value-added logistics solutions for industries that cannot afford downtime.',

      'service.spl.desc': '2-hour deliveries in Greater Buenos Aires, scheduled time, NFO and NBD. We support system outages and urgent maintenance.',
      'service.ior.desc': 'IOR and EOR for international clients. We handle all documentation so your products enter the country without delays.',
      'service.wh.desc': 'Tech warehousing, door-to-door deliveries nationwide and cross-docking to reduce lead times.',

      'feature.customs': 'Customs documentation',
      'feature.nfo': 'Domestic NFO service',
      'feature.return': 'Import returns',
      'feature.network': 'National ground network',

      'cubiscan.label': 'Cubiscan Partner',
      'cubiscan.title': '<span class="t-bold">Dimensioning</span> <span class="t-accent">and weighing</span> systems',
      'cubiscan.desc': 'Equipment designed to increase productivity in your distribution center, warehouse and logistics operation.',

      'dim.length': 'Length',
      'dim.width': 'Width',
      'dim.height': 'Height',
      'dim.weight': 'Weight',

      'product.25.desc': 'Compact and precise',
      'product.100.desc': 'High performance',
      'product.325.desc': 'Industrial',
      'product.150.desc': 'Versatile',
      'product.200ts.desc': 'Transport',
      'product.1200.desc': 'High volume',

      'benefit.precision.title': 'Precision',
      'benefit.precision.desc': 'Accurate weight and dimension measurements in seconds',
      'benefit.integration.title': 'Integration',
      'benefit.integration.desc': 'Compatible with WMS, TMS and ERP systems',
      'benefit.roi.title': 'ROI',
      'benefit.roi.desc': 'Reduced billing errors and space optimization',

      'cubiscan.demo': 'Request a demo',

      'about.label': 'Who we are',
      'about.title': 'Tailored <span class="t-accent">logistics</span> solutions',
      'about.p1': '<strong>Logintec</strong> is a company dedicated to designing, managing and implementing value-added logistics solutions. Mainly focused on Service Parts Logistics (SPL), critical spare parts and Value Added Services (VAS).',
      'about.p2': 'Our strength lies in implementing solutions tailored to client needs in terms of cost and service levels.',
      'about.urgency.title': 'Urgency',
      'about.urgency.desc': 'Mornings, nights and holidays',
      'about.precision.title': 'Precision',
      'about.precision.desc': 'Guaranteed service levels',
      'about.partnership.title': 'Partnership',
      'about.partnership.desc': 'Official Cubiscan partner',
      'about.card.label': '50% of our business',
      'about.card.logistics.title': 'Logistics',
      'about.card.logistics.desc': 'SPL · IOR/EOR · Warehousing · National transport',
      'about.card.volumetry.title': 'Volumetry',
      'about.card.volumetry.desc': 'Cubiscan · Dimensioning · Industrial weighing',

      'empresa.meta.title': 'Company – Logintec',
      'empresa.meta.description': 'Learn about Logintec: over 20 years in critical logistics, SPL, IOR/EOR and value-added solutions in Argentina.',
      'empresa.hero.label': 'About us',
      'empresa.hero.title': 'Over 20 years optimizing <span class="t-accent">critical</span> logistics',
      'empresa.hero.p1': 'Logintec is a company dedicated to designing, managing and implementing value-added Logistics Solutions. Mainly focused on Service Parts Logistics (SPL), critical spare parts and Value Added Services (VAS), such as fulfillment, reflashing, screening and distribution.',
      'empresa.hero.p2': 'Our strength lies in implementing solutions tailored to client needs in terms of cost and service levels.',
      'empresa.hero.cta': 'Discover our story',
      'empresa.stat1.title': '+20 YEARS',
      'empresa.stat1.desc': 'of experience',
      'empresa.stat2.title': '+500 CLIENTS',
      'empresa.stat2.desc': 'who trust us',
      'empresa.stat3.title': 'NATIONAL COVERAGE',
      'empresa.stat3.desc': 'operations nationwide',
      'empresa.stat4.title': '24/7 SUPPORT',
      'empresa.stat4.desc': 'specialized technical assistance',
      'empresa.values.label': 'Our values',
      'empresa.value1': 'Commitment',
      'empresa.value1.desc': 'With every critical delivery',
      'empresa.value2': 'Precision',
      'empresa.value2.desc': 'In every logistics process',
      'empresa.value3': 'Innovation',
      'empresa.value3.desc': 'Technology and continuous improvement',
      'empresa.value4': 'Integrity',
      'empresa.value4.desc': 'Transparency in every operation',
      'empresa.mission.title': 'Our mission',
      'empresa.mission.text': 'To design, manage and implement value-added logistics solutions tailored to our clients\' needs in terms of cost and service levels, with a focus on SPL, critical spare parts and VAS.',
      'empresa.vision.title': 'Our vision',
      'empresa.vision.text': 'To be a reference in critical logistics in Argentina, with competitive, effective solutions and top management focused on operational excellence.',
      'empresa.presence.title': 'Nationwide presence',
      'empresa.presence.desc': 'National network of NFO, NBD and ground transport deliveries to reach every corner of Argentina.',
      'empresa.block.ior.title': 'IOR / EOR in Argentina',
      'empresa.block.ior.text': 'As part of SPL and VAS we developed the Importer / Exporter of Record (IOR / EOR) entity in Argentina. At Logintec we believe top management must be competitive so our solutions and designs are appropriate and effective.',
      'empresa.block.spl.title': 'SPL and time-critical deliveries',
      'empresa.block.spl.text': 'SPL and time-critical deliveries include express delivery services in 2 or 4 hours in Greater Buenos Aires, 24 hours a day, 7 days a week. We also offer scheduled deliveries, NFO (air) services to main provincial capitals and NBD (ground) nationwide, defective parts collection (reverse logistics), repair or destruction deliveries, and other additional services.',
      'empresa.block.experience.title': 'Experience and track record',
      'empresa.block.experience.text': 'We have many years of experience in logistics, warehousing, distribution, foreign trade, and all aspects of Supply Chain management services.',
      'empresa.block.team.title': 'Our team',
      'empresa.block.team.text': 'Logintec is managed by a young team of experienced executives and professionals. We have extensive knowledge in Operations, IT and Finance. Our clients include major companies in Cybersecurity, Networking, Data Storage, IT Services and Communications, among others.',

      'contact.label': 'Contact Us',
      'contact.title': "Let's talk about your <span class=\"t-accent\">next project</span>",
      'contact.desc': 'Critical logistics or dimensioning equipment — we are ready to help.',
      'contact.call': 'Call us',
      'contact.write': 'Email us',
      'contact.hours': 'Hours',

      'form.name': 'Name',
      'form.company': 'Company',
      'form.email': 'Email',
      'form.interest': 'Interest',
      'form.message': 'Message',
      'form.namePlaceholder': 'Your name',
      'form.companyPlaceholder': 'Your company',
      'form.emailPlaceholder': 'email@company.com',
      'form.messagePlaceholder': 'Tell us about your needs...',
      'form.interest.logistics': 'Logistics Services',
      'form.interest.cubiscan': 'Cubiscan Equipment',
      'form.interest.both': 'Both',
      'form.submit': 'Send inquiry',
      'form.submitting': 'Opening email!',

      'footer.desc': 'Critical logistics solutions and Cubiscan dimensioning systems.',
      'footer.logistics': 'Logistics',
      'footer.cubiscan': 'Cubiscan',
      'footer.contact': 'Contact',
      'footer.equipment': 'Equipment',
      'footer.volumetry': 'Volumetry',
      'footer.demo': 'Demo',
      'footer.rights': '© 2026 Logintec. All rights reserved.',

      'aria.openMenu': 'Open menu',
      'aria.langSwitch': 'Select language',
    },
  };

  const heroPhrases = {
    es: [
      { parts: [
        { type: 'bold', text: 'Importador y ' },
        { type: 'accent', text: 'Exportador Oficial' },
      ]},
      { parts: [
        { type: 'bold', text: 'Logística de ' },
        { type: 'accent', text: 'Repuestos' },
      ]},
      { parts: [
        { type: 'bold', text: 'Equipos de ' },
        { type: 'accent', text: 'dimensionamiento' },
      ]},
      { parts: [
        { type: 'bold', text: 'Almacenamiento ' },
        { type: 'light', text: 'y ' },
        { type: 'accent', text: 'Transporte' },
      ]},
    ],
    en: [
      { parts: [
        { type: 'bold', text: 'Importer & Exporter ' },
        { type: 'accent', text: 'of Record' },
      ]},
      { parts: [
        { type: 'bold', text: 'Service Parts ' },
        { type: 'accent', text: 'Logistics' },
      ]},
      { parts: [
        { type: 'bold', text: 'Dimensioning ' },
        { type: 'accent', text: 'equipment' },
      ]},
      { parts: [
        { type: 'bold', text: 'Warehousing ' },
        { type: 'light', text: '& ' },
        { type: 'accent', text: 'Transport' },
      ]},
    ],
  };

  let currentLang = 'es';

  function t(key) {
    return translations[currentLang][key] ?? translations.es[key] ?? key;
  }

  function getLang() {
    return currentLang;
  }

  function renderHeroPhrase(parts) {
    const classMap = { bold: 't-bold', light: 't-light', accent: 't-accent' };
    return parts
      .map((part) => `<span class="${classMap[part.type]}">${part.text}</span>`)
      .join('');
  }

  function getHeroPhrases() {
    return heroPhrases[currentLang];
  }

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) {
        el.placeholder = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[lang][key] !== undefined) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (titleKey && translations[lang][titleKey]) {
      document.title = translations[lang][titleKey];
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    const descKey = metaDesc?.getAttribute('data-i18n');
    if (metaDesc && descKey && translations[lang][descKey]) {
      metaDesc.setAttribute('content', translations[lang][descKey]);
    }

    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
      btn.classList.toggle('lang-switch__btn--active', btn.dataset.lang === lang);
    });

    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
      langSwitch.setAttribute('aria-label', translations[lang]['aria.langSwitch']);
    }

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const browserLang = navigator.language?.startsWith('en') ? 'en' : 'es';
    applyLanguage(saved || browserLang);

    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });
  }

  return { init, applyLanguage, t, getLang, getHeroPhrases, renderHeroPhrase };
})();
