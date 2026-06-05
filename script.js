/* ============================================================
   MAIN SCRIPT — Mario Arancibia Portfolio
   All interactivity in modular functions
   Includes bilingual i18n system (ES / EN)
   ============================================================ */

'use strict';

/* ------------------------------------------------------------
   1. i18n — Translations Dictionary (ES / EN)
   Complete translations for every translatable element
   ------------------------------------------------------------ */
const i18n = {
    es: {
        'page-title': 'Mario Arancibia | DevOps Portfolio',
        'nav-home': 'Inicio',
        'nav-about': 'Sobre mí',
        'nav-skills': 'Skills',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        'lang-btn': 'EN',
        'hamburger-aria': 'Menú',
        'hero-greeting': '👋 Hola, soy',
        'hero-desc': 'DevOps en formación, apasionado por la automatización, la computación en la nube y la construcción de infraestructuras eficientes. Actualmente estudiando <strong>DevOps & Cloud en UNIR</strong>.',
        'hero-cta-projects': '<i class="fas fa-rocket"></i> Ver proyectos',
        'hero-cta-contact': '<i class="fas fa-envelope"></i> Contactarme',
        'tooltip-github': 'GitHub',
        'tooltip-linkedin': 'LinkedIn',
        'tooltip-email': 'arancibiagm@gmail.com',
        'terminal-title': 'bash — terminal',
        'term-whoami': 'devops-engineer-in-training',
        'term-skills1': 'AWS, Terraform, Docker, Kubernetes',
        'term-skills2': 'Ansible, Python, Bash, CI/CD',
        'term-pwd': '/home/mario/barcelona',
        'about-title': 'Sobre mí',
        'stat-projects': 'Proyectos',
        'stat-experience': 'Años de experiencia',
        'stat-techs': 'Tecnologías',
        'about-p1': 'Mi interés por la tecnología comenzó con la <strong>administración de sistemas</strong>, donde descubrí la satisfacción de mantener infraestructuras estables y seguras. Actualmente, estoy enfocado en <strong>DevOps</strong> porque me permite combinar mi experiencia en operaciones con mi pasión por la automatización y las infraestructuras escalables.',
        'about-p2': 'Estudiando el <strong>Programa Avanzado DevOps & Cloud en UNIR</strong>, complemento mi formación con proyectos prácticos que puedes ver en mi GitHub. Mi objetivo es aportar valor desde el primer día en un equipo de tecnología, aplicando buenas prácticas de CI/CD, infraestructura como código y observabilidad.',
        'about-p3': '<strong>📍 Barcelona, España</strong> — Cuando no estoy frente al ordenador, me gusta explorar nuevas tecnologías, compartir lo que aprendo y seguir formándome de manera continua.',
        'achieve-az900': 'AZ-900: Azure Fundamentals ✅',
        'achieve-cfgs': 'CFGS Administración de Sistemas',
        'achieve-dam': 'DAM Desarrollo Apps Multiplataforma',
        'skills-title': 'Skills & Tecnologías',
        'skills-desc': 'Herramientas y tecnologías con las que trabajo actualmente:',
        'skill-aws': 'Lambda, DynamoDB, EC2, S3, API Gateway',
        'skill-terraform': 'Infraestructura como código (IaC)',
        'skill-docker': 'Containerización de aplicaciones',
        'skill-k8s': 'Orquestación (K8s, Minikube, Helm)',
        'skill-python': 'Scripting, automatización',
        'skill-bash': 'Scripting, automatización Linux',
        'skill-linux': 'Administración de sistemas',
        'skill-ansible': 'Gestión de configuración',
        'skill-ghactions': 'CI/CD pipelines',
        'skill-vagrant': 'Entornos locales reproducibles',
        'skill-git': 'Control de versiones',
        'skill-mysql': 'Bases de datos relacionales',
        'projects-title': 'Proyectos destacados',
        'proj1-desc': 'IaC local con Terraform, Vagrant y Ansible para desplegar WordPress.',
        'proj2-desc': 'Despliegue de EC2 con Terraform y configuración con Ansible.',
        'proj3-desc': 'Entornos locales reproducibles con Vagrant para desarrollo y testing.',
        'proj4-desc': 'API serverless con Lambda, DynamoDB y Terraform en AWS Free Tier.',
        'proj5-desc': 'Pipeline CI/CD con GitHub Actions, GHCR y despliegue en Kubernetes.',
        'proj6-desc': 'Migración de WordPress + MySQL a Kubernetes desde Docker Compose.',
        'tooltip-viewcode': 'Ver código',
        'contact-title': 'Contacto',
        'contact-subtitle': '¿Interesad@ en mi perfil o tienes alguna pregunta?<br>Estaré encantado de leerte. ¡Escríbeme!',
        'form-name-label': 'Nombre',
        'form-name-placeholder': 'Tu nombre',
        'form-email-label': 'Email',
        'form-email-placeholder': 'tu@email.com',
        'form-msg-label': 'Mensaje',
        'form-msg-placeholder': 'Escribe tu mensaje aquí...',
        'form-submit-text': 'Enviar mensaje',
        'form-sending': 'Enviando...',
        'form-success': '¡Mensaje enviado con éxito! Te responderé pronto.',
        'contact-location': 'Barcelona, España',
        'footer-quote': '<i class="fas fa-quote-left"></i> Automate everything, learn continuously, build with purpose. <i class="fas fa-quote-right"></i> <span class="footer-quote-author">— Mario Arancibia</span>',
        'footer-copy': '&copy; <span id="footer-year"></span> Mario German Arancibia. Hecho con ☕ y mucho YAML.',
        'goals-title': '✅ Objetivos 2026-2027',
        'goal1': '🔵 AZ-900 - Azure Fundamentals',
        'goal2': '🔄 Pipeline CI/CD con GitHub Actions',
        'goal3': '🏗️ Proyecto con Kubernetes (K8s)',
        'goal4': '🟠 AWS Cloud Practitioner (UNIR)',
        'goal5': '🟠 AWS Solutions Architect Associate - SAA-C03',
        'goal6': '🟣 DP-900 - Azure Data Fundamentals (UNIR)',
        'goal7': '🟢 AI-900 - Azure AI Fundamentals (UNIR)',
        'certprog-title': '📚 Certificaciones en progreso',
        'certprog-saa-name': 'AWS Solutions Architect Associate (SAA-C03)',
        'certprog-saa-desc': 'Estudiando | Objetivo: Verano 2026',
        'certprog-cp-name': 'AWS Cloud Practitioner',
        'certprog-cp-desc': 'Programado 2027 (UNIR)',
        'certprog-az-name': 'DP-900 / AI-900 (Azure)',
        'certprog-az-desc': 'Planificadas 2027',
        'reading-title': '📖 Lecturas y aprendizaje',
        'read1-title': 'Estrategias para el examen SAA-C03',
        'read1-desc': 'Resumen de temas clave, recursos y plan de estudio para la certificación AWS.',
        'read1-tag': '📅 Próximamente',
        'read2-title': 'imagePullSecret en Kubernetes',
        'read2-desc': 'Configurar un secreto en K8s para descargar imágenes de GHCR sin errores de autenticación.',
        'read3-title': 'kubectl apply vs create vs patch',
        'read3-desc': 'Diferencias clave entre los comandos de kubectl para gestionar recursos en K8s.',
        'timeline-title': '🏆 Timeline de logros',
        'tl1-date': '🎯 Próximamente (2027)',
        'tl1-event': '<strong>Obtener AWS Solutions Architect Associate (SAA-C03)</strong>',
        'tl1-desc': 'Certificación avanzada de AWS | En estudio actualmente',
        'tl2-date': '🎯 Próximamente (2026 - 2027)',
        'tl2-event': '<strong>Finalizar el Programa Avanzado en DevOps & Cloud (UNIR)</strong>',
        'tl2-desc': 'Trabajar con las herramientas y plataformas más demandadas, dominar cloud e infraestructura como código',
        'tl3-date': '🎉 2026',
        'tl3-event': '<strong>Obtuve mi certificación AZ-900</strong>',
        'tl3-desc': 'Microsoft Azure Fundamentals',
        'tl4-date': '🐍 2025',
        'tl4-event': '<strong>Bootcamp de IA con Python</strong>',
        'tl4-desc': 'Pandas, NumPy, scikit-learn y APIs REST',
        'tl5-date': '🐧 2024',
        'tl5-event': '<strong>Empecé con Linux y Bash scripting</strong>',
        'tl5-desc': 'Automatización de tareas y administración de sistemas',
        'tl6-date': '🎓 2023',
        'tl6-event': '<strong>Finalicé el CFGS de Administración de Sistemas y DAM Desarrollo de aplicaciones multiplataforma</strong>',
        'tl6-desc': '📍 Salesians Sarrià | Administración de Sistemas (2022-2023)<br>📍 Salesians Sarrià | DAM (2019-2022)<br>🎯 Especialización: Redes, servidores y desarrollo de aplicaciones',
        'certs-title': '🏷️ Certificaciones',
        'cert-az900-sub': 'Azure Fundamentals',
        'cert-az900-status': '✅ Obtenida 2026',
        'cert-cp-sub': 'Cloud Practitioner',
        'cert-cp-status': '📅 Próximamente',
        'cert-saa-sub': 'Solutions Architect',
        'cert-saa-status': '📅 En curso',
        'cert-dp900-sub': 'Azure Data Fundamentals',
        'cert-dp900-status': '📅 Planificada',
        'cert-ai900-sub': 'Azure AI Fundamentals',
        'cert-ai900-status': '📅 Planificada',
        'backtop-aria': 'Volver arriba',
    },
    en: {
        'page-title': 'Mario Arancibia | DevOps Portfolio',
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'lang-btn': 'ES',
        'hamburger-aria': 'Menu',
        'hero-greeting': '👋 Hi, I\'m',
        'hero-desc': 'DevOps in training, passionate about automation, cloud computing, and building efficient infrastructures. Currently studying <strong>DevOps & Cloud at UNIR</strong>.',
        'hero-cta-projects': '<i class="fas fa-rocket"></i> View projects',
        'hero-cta-contact': '<i class="fas fa-envelope"></i> Contact me',
        'tooltip-github': 'GitHub',
        'tooltip-linkedin': 'LinkedIn',
        'tooltip-email': 'arancibiagm@gmail.com',
        'terminal-title': 'bash — terminal',
        'term-whoami': 'devops-engineer-in-training',
        'term-skills1': 'AWS, Terraform, Docker, Kubernetes',
        'term-skills2': 'Ansible, Python, Bash, CI/CD',
        'term-pwd': '/home/mario/barcelona',
        'about-title': 'About Me',
        'stat-projects': 'Projects',
        'stat-experience': 'Years experience',
        'stat-techs': 'Technologies',
        'about-p1': 'My interest in technology began with <strong>system administration</strong>, where I discovered the satisfaction of keeping infrastructures stable and secure. Currently, I am focused on <strong>DevOps</strong> because it allows me to combine my operations experience with my passion for automation and scalable infrastructures.',
        'about-p2': 'Studying the <strong>Advanced DevOps & Cloud Program at UNIR</strong>, I complement my training with hands-on projects you can see on my GitHub. My goal is to add value from day one in a technology team, applying best practices in CI/CD, infrastructure as code, and observability.',
        'about-p3': '<strong>📍 Barcelona, Spain</strong> — When I\'m not in front of the computer, I enjoy exploring new technologies, sharing what I learn, and continuously improving my skills.',
        'achieve-az900': 'AZ-900: Azure Fundamentals ✅',
        'achieve-cfgs': 'CFGS Systems Administration',
        'achieve-dam': 'DAM Multi-platform App Development',
        'skills-title': 'Skills & Technologies',
        'skills-desc': 'Tools and technologies I currently work with:',
        'skill-aws': 'Lambda, DynamoDB, EC2, S3, API Gateway',
        'skill-terraform': 'Infrastructure as Code (IaC)',
        'skill-docker': 'Application containerization',
        'skill-k8s': 'Orchestration (K8s, Minikube, Helm)',
        'skill-python': 'Scripting, automation',
        'skill-bash': 'Scripting, Linux automation',
        'skill-linux': 'System administration',
        'skill-ansible': 'Configuration management',
        'skill-ghactions': 'CI/CD pipelines',
        'skill-vagrant': 'Reproducible local environments',
        'skill-git': 'Version control',
        'skill-mysql': 'Relational databases',
        'projects-title': 'Featured Projects',
        'proj1-desc': 'Local IaC with Terraform, Vagrant and Ansible to deploy WordPress.',
        'proj2-desc': 'EC2 deployment with Terraform and configuration with Ansible.',
        'proj3-desc': 'Reproducible local environments with Vagrant for development and testing.',
        'proj4-desc': 'Serverless API with Lambda, DynamoDB and Terraform on AWS Free Tier.',
        'proj5-desc': 'CI/CD pipeline with GitHub Actions, GHCR and Kubernetes deployment.',
        'proj6-desc': 'WordPress + MySQL migration to Kubernetes from Docker Compose.',
        'tooltip-viewcode': 'View code',
        'contact-title': 'Contact',
        'contact-subtitle': 'Interested in my profile or have any questions?<br>I\'d love to hear from you. Send me a message!',
        'form-name-label': 'Name',
        'form-name-placeholder': 'Your name',
        'form-email-label': 'Email',
        'form-email-placeholder': 'your@email.com',
        'form-msg-label': 'Message',
        'form-msg-placeholder': 'Write your message here...',
        'form-submit-text': 'Send message',
        'form-sending': 'Sending...',
        'form-success': 'Message sent successfully! I\'ll get back to you soon.',
        'contact-location': 'Barcelona, Spain',
        'footer-quote': '<i class="fas fa-quote-left"></i> Automate everything, learn continuously, build with purpose. <i class="fas fa-quote-right"></i> <span class="footer-quote-author">— Mario Arancibia</span>',
        'goals-title': '✅ Goals 2026-2027',
        'goal1': '🔵 AZ-900 - Azure Fundamentals',
        'goal2': '🔄 CI/CD Pipeline with GitHub Actions',
        'goal3': '🏗️ Kubernetes (K8s) Project',
        'goal4': '🟠 AWS Cloud Practitioner (UNIR)',
        'goal5': '🟠 AWS Solutions Architect Associate - SAA-C03',
        'goal6': '🟣 DP-900 - Azure Data Fundamentals (UNIR)',
        'goal7': '🟢 AI-900 - Azure AI Fundamentals (UNIR)',
        'certprog-title': '📚 Certifications In Progress',
        'certprog-saa-name': 'AWS Solutions Architect Associate (SAA-C03)',
        'certprog-saa-desc': 'Studying | Goal: Summer 2026',
        'certprog-cp-name': 'AWS Cloud Practitioner',
        'certprog-cp-desc': 'Scheduled 2027 (UNIR)',
        'certprog-az-name': 'DP-900 / AI-900 (Azure)',
        'certprog-az-desc': 'Planned 2027',
        'reading-title': '📖 Readings & Learning',
        'read1-title': 'Strategies for the SAA-C03 Exam',
        'read1-desc': 'Summary of key topics, resources and study plan for the AWS certification.',
        'read1-tag': '📅 Coming Soon',
        'read2-title': 'imagePullSecret in Kubernetes',
        'read2-desc': 'Configure a K8s secret to download images from GHCR without authentication errors.',
        'read3-title': 'kubectl apply vs create vs patch',
        'read3-desc': 'Key differences between kubectl commands to manage resources in K8s.',
        'timeline-title': '🏆 Achievement Timeline',
        'tl1-date': '🎯 Coming Soon (2027)',
        'tl1-event': '<strong>Earn AWS Solutions Architect Associate (SAA-C03)</strong>',
        'tl1-desc': 'Advanced AWS certification | Currently studying',
        'tl2-date': '🎯 Coming Soon (2026 - 2027)',
        'tl2-event': '<strong>Complete the Advanced DevOps & Cloud Program (UNIR)</strong>',
        'tl2-desc': 'Work with the most in-demand tools and platforms, master cloud and infrastructure as code',
        'tl3-date': '🎉 2026',
        'tl3-event': '<strong>Earned AZ-900 certification</strong>',
        'tl3-desc': 'Microsoft Azure Fundamentals',
        'tl4-date': '🐍 2025',
        'tl4-event': '<strong>AI Bootcamp with Python</strong>',
        'tl4-desc': 'Pandas, NumPy, scikit-learn and REST APIs',
        'tl5-date': '🐧 2024',
        'tl5-event': '<strong>Started with Linux and Bash scripting</strong>',
        'tl5-desc': 'Task automation and system administration',
        'tl6-date': '🎓 2023',
        'tl6-event': '<strong>Completed CFGS in Systems Administration and DAM (Multi-platform App Development)</strong>',
        'tl6-desc': '📍 Salesians Sarrià | Systems Administration (2022-2023)<br>📍 Salesians Sarrià | DAM (2019-2022)<br>🎯 Specialization: Networks, servers and application development',
        'certs-title': '🏷️ Certifications',
        'cert-az900-sub': 'Azure Fundamentals',
        'cert-az900-status': '✅ Earned 2026',
        'cert-cp-sub': 'Cloud Practitioner',
        'cert-cp-status': '📅 Upcoming',
        'cert-saa-sub': 'Solutions Architect',
        'cert-saa-status': '📅 In progress',
        'cert-dp900-sub': 'Azure Data Fundamentals',
        'cert-dp900-status': '📅 Planned',
        'cert-ai900-sub': 'Azure AI Fundamentals',
        'cert-ai900-status': '📅 Planned',
        'footer-copy': '&copy; <span id="footer-year"></span> Mario German Arancibia. Made with ☕ and lots of YAML.',
        'backtop-aria': 'Back to top',
    }
};


/* ------------------------------------------------------------
   2. i18n — Translation Engine
   ------------------------------------------------------------ */
let currentLang = 'es';  // default

/**
 * Apply translations to all elements with data-i18n attributes
 * @param {string} lang - Language code ('es' or 'en')
 */
function applyTranslations(lang) {
    const translations = i18n[lang];
    if (!translations) return;

    currentLang = lang;

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Translate elements with data-i18n (text/innerHTML)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] !== undefined) {
            el.innerHTML = translations[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key] !== undefined) {
            el.placeholder = translations[key];
        }
    });

    // Translate tooltips (data-tooltip)
    document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
        const key = el.getAttribute('data-i18n-tooltip');
        if (translations[key] !== undefined) {
            el.setAttribute('data-tooltip', translations[key]);
        }
    });

    // Translate aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[key] !== undefined) {
            el.setAttribute('aria-label', translations[key]);
        }
    });

    // Update the language toggle button text
    const langBtnText = document.querySelector('.lang-toggle-text');
    if (langBtnText && translations['lang-btn'] !== undefined) {
        langBtnText.textContent = translations['lang-btn'];
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && lang === 'en') {
        metaDesc.setAttribute('content', 'Mario Arancibia Portfolio - DevOps in training with projects in AWS, Kubernetes, Terraform and CI/CD');
    } else if (metaDesc) {
        metaDesc.setAttribute('content', 'Portfolio de Mario Arancibia - DevOps en formación con proyectos en AWS, Kubernetes, Terraform y CI/CD');
    }

    // Save preference
    localStorage.setItem('lang', lang);
}


/* ------------------------------------------------------------
   3. i18n — Language Toggle Initialization
   ------------------------------------------------------------ */
function initLanguageToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;

    // Load saved language or default to browser preference
    const savedLang = localStorage.getItem('lang');

    if (savedLang === 'en') {
        applyTranslations('en');
    } else if (savedLang === 'es') {
        applyTranslations('es');
    } else {
        // Auto-detect: prefer English if browser is set to English
        const browserLang = navigator.language || navigator.userLanguage || '';
        const preferEn = browserLang.startsWith('en');
        applyTranslations(preferEn ? 'en' : 'es');
    }

    toggle.addEventListener('click', () => {
        const nextLang = currentLang === 'es' ? 'en' : 'es';
        applyTranslations(nextLang);

        // Restart Typed.js with new language strings
        if (window.typedInstance) {
            window.typedInstance.destroy();
        }
        initTypedEffect();

        // Re-run counter animation in case it was already observed
        initCounterAnimation();
    });
}


/* ------------------------------------------------------------
   4. DOM READY — Initialize everything
   ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {

    initLoader();
    initTheme();
    initLanguageToggle();
    initHamburger();
    initTypedEffect();
    initScrollAnimations();
    initCounterAnimation();
    initContactForm();
    initBackToTop();
    initNavActive();
    initFooterYear();

});


/* ------------------------------------------------------------
   5. LOADER — Hide loader after page load
   ------------------------------------------------------------ */
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 400);
    });

    // Fallback: hide loader after 3s if load event hasn't fired
    setTimeout(() => {
        if (!loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
        }
    }, 3000);
}


/* ------------------------------------------------------------
   6. THEME TOGGLE — Dark/Light mode with localStorage
   ------------------------------------------------------------ */
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    if (!toggle) return;

    // Get saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    html.setAttribute('data-theme', defaultTheme);

    toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);

        // Animate toggle
        toggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            toggle.style.transform = '';
        }, 300);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}


/* ------------------------------------------------------------
   7. HAMBURGER MENU — Mobile navigation toggle
   ------------------------------------------------------------ */
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}


/* ------------------------------------------------------------
   8. TYPED.JS — Hero typewriter effect
   ------------------------------------------------------------ */
function initTypedEffect() {
    const typedElement = document.getElementById('typed-text');
    if (!typedElement) return;

    // Strings change based on language
    const strings = currentLang === 'en'
        ? [
            'Cloud Automation',
            'Infrastructure as Code',
            'DevOps & Cloud Engineer',
            'Open Source Enthusiast'
          ]
        : [
            'Cloud Automation',
            'Infrastructure as Code',
            'DevOps & Cloud Engineer',
            'Open Source Enthusiast'
          ];

    if (typeof Typed === 'undefined') {
        typedElement.textContent = 'Cloud Automation | Infrastructure as Code';
        return;
    }

    window.typedInstance = new Typed('#typed-text', {
        strings: strings,
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: false,
    });
}


/* ------------------------------------------------------------
   9. SCROLL ANIMATIONS — Intersection Observer for reveal
   ------------------------------------------------------------ */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on element's position
                const delay = Math.min(index * 100, 600);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // Also handle header shadow on scroll
    const header = document.getElementById('header');
    if (header) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    header.classList.toggle('scrolled', window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}


/* ------------------------------------------------------------
   10. COUNTER ANIMATION — Animated stat numbers
   ------------------------------------------------------------ */
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);

                if (isNaN(target)) return;

                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    statNumbers.forEach(el => observer.observe(el));
}

/**
 * Animate a number from 0 to target
 * @param {HTMLElement} element - The element to update
 * @param {number} target - The target number
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 1500) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const increment = Math.ceil(target / (duration / 16));

    function update() {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            return;
        }
        element.textContent = current;
        requestAnimationFrame(update);
    }

    update();
}


/* ------------------------------------------------------------
   11. CONTACT FORM — Validation + EmailJS integration
   ------------------------------------------------------------ */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const submitBtn = document.getElementById('form-submit');
    const successMsg = document.getElementById('form-success');

    // Timestamp for spam protection
    const formTimestamp = Date.now();
    const timestampInput = document.createElement('input');
    timestampInput.type = 'hidden';
    timestampInput.name = '_timestamp';
    timestampInput.value = formTimestamp;
    form.appendChild(timestampInput);

    // --- Initialize EmailJS ---
    // ==========================================
    // IMPORTANT: Replace 'YOUR_PUBLIC_KEY' below
    // with your actual EmailJS public key.
    // Get it at: https://dashboard.emailjs.com
    // ==========================================
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    const EMAILJS_SERVICE_ID = 'service_default'; // Replace with your Service ID
    const EMAILJS_TEMPLATE_ID = 'template_default'; // Replace with your Template ID

    let emailjsInitialized = false;
    if (typeof emailjs !== 'undefined') {
        try {
            emailjs.init(EMAILJS_PUBLIC_KEY);
            emailjsInitialized = true;
        } catch (e) {
            console.warn('EmailJS initialization failed:', e);
        }
    }

    // --- Real-time validation ---
    nameInput.addEventListener('blur', () => validateName());
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) validateName();
    });

    emailInput.addEventListener('blur', () => validateEmail());
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error')) validateEmail();
    });

    messageInput.addEventListener('blur', () => validateMessage());
    messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('error')) validateMessage();
    });

    // Error messages for validation (bilingual)
    const errMsgs = {
        nameRequired:  currentLang === 'en' ? 'Name is required' : 'El nombre es obligatorio',
        nameMin:       currentLang === 'en' ? 'Name must be at least 2 characters' : 'El nombre debe tener al menos 2 caracteres',
        emailRequired: currentLang === 'en' ? 'Email is required' : 'El email es obligatorio',
        emailInvalid:  currentLang === 'en' ? 'Enter a valid email (e.g. name@domain.com)' : 'Introduce un email válido (ej: nombre@dominio.com)',
        msgRequired:   currentLang === 'en' ? 'Message is required' : 'El mensaje es obligatorio',
        msgMin:        currentLang === 'en' ? 'Message must be at least 10 characters' : 'El mensaje debe tener al menos 10 caracteres',
        sendError:     currentLang === 'en' ? 'There was an error sending your message. Please try again or write me directly at arancibiagm@gmail.com' : 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente a arancibiagm@gmail.com',
    };

    /**
     * Validate name field (not empty)
     * @returns {boolean}
     */
    function validateName() {
        const value = nameInput.value.trim();
        if (!value) {
            showError(nameInput, nameError, errMsgs.nameRequired);
            return false;
        }
        if (value.length < 2) {
            showError(nameInput, nameError, errMsgs.nameMin);
            return false;
        }
        clearError(nameInput, nameError);
        return true;
    }

    /**
     * Validate email field (format)
     * @returns {boolean}
     */
    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) {
            showError(emailInput, emailError, errMsgs.emailRequired);
            return false;
        }
        if (!emailRegex.test(value)) {
            showError(emailInput, emailError, errMsgs.emailInvalid);
            return false;
        }
        clearError(emailInput, emailError);
        return true;
    }

    /**
     * Validate message field (min 10 characters)
     * @returns {boolean}
     */
    function validateMessage() {
        const value = messageInput.value.trim();

        if (!value) {
            showError(messageInput, messageError, errMsgs.msgRequired);
            return false;
        }
        if (value.length < 10) {
            showError(messageInput, messageError, `${errMsgs.msgMin} (${value.length}/10)`);
            return false;
        }
        clearError(messageInput, messageError);
        return true;
    }

    /**
     * Show error state on a field
     * @param {HTMLElement} input - The input element
     * @param {HTMLElement} errorEl - The error message element
     * @param {string} message - Error message to display
     */
    function showError(input, errorEl, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }

    /**
     * Clear error state from a field
     * @param {HTMLElement} input - The input element
     * @param {HTMLElement} errorEl - The error message element
     */
    function clearError(input, errorEl) {
        input.classList.remove('error');
        input.classList.add('success');
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
    }

    // --- Form submission ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            // Focus first invalid field
            if (!isNameValid) nameInput.focus();
            else if (!isEmailValid) emailInput.focus();
            else if (!isMessageValid) messageInput.focus();
            return;
        }

        // Check honeypot (anti-spam)
        const honey = form.querySelector('input[name="_honey"]');
        if (honey && honey.value.trim() !== '') {
            // Bot detected — silently "succeed"
            showSuccess();
            return;
        }

        // Check timestamp (anti-spam: prevent submissions faster than 2 seconds)
        const elapsed = Date.now() - formTimestamp;
        if (elapsed < 2000) {
            // Too fast, likely a bot
            showSuccess();
            return;
        }

        // Submit via EmailJS
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        successMsg.classList.remove('visible');

        try {
            if (!emailjsInitialized) {
                // Fallback: Simulate success if EmailJS not configured
                await simulateSend();
            } else {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: nameInput.value.trim(),
                        from_email: emailInput.value.trim(),
                        message: messageInput.value.trim(),
                        to_name: 'Mario',
                    }
                );
            }

            // Success
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showSuccess();
            form.reset();

            // Clear success states
            [nameInput, emailInput, messageInput].forEach(el => {
                el.classList.remove('success');
            });

        } catch (error) {
            console.error('EmailJS error:', error);

            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;

            // Show user-friendly error
            alert(errMsgs.sendError);
        }
    });

    /**
     * Show success message after form submission
     */
    function showSuccess() {
        successMsg.classList.add('visible');
        setTimeout(() => {
            successMsg.classList.remove('visible');
        }, 6000);
    }

    /**
     * Simulate sending (fallback when EmailJS is not configured)
     * @returns {Promise<void>}
     */
    function simulateSend() {
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });
    }
}


/* ------------------------------------------------------------
   12. BACK TO TOP — Show/hide on scroll
   ------------------------------------------------------------ */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


/* ------------------------------------------------------------
   13. NAV ACTIVE LINK — Update active nav item on scroll
   ------------------------------------------------------------ */
function initNavActive() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}


/* ------------------------------------------------------------
   14. FOOTER YEAR — Dynamic copyright year
   ------------------------------------------------------------ */
function initFooterYear() {
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}


/* ------------------------------------------------------------
   15. UTILITY — Debounce helper (not used currently, but available)
   ------------------------------------------------------------ */
function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}