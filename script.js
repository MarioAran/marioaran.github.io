/* ============================================================
   SCRIPT — Mario Arancibia Portfolio (bilingual ES/EN)
   All interactivity in modular functions
   ============================================================ */
'use strict';

/* ---------- i18n Translations Dictionary ---------- */
const i18n = {
    es: {
        'page-title':'Mario Arancibia | DevOps Portfolio',
        'nav-home':'Inicio','nav-about':'Sobre mí','nav-skills':'Skills','nav-projects':'Proyectos','nav-contact':'Contacto',
        'lang-btn':'EN','hamburger-aria':'Menú',
        'hero-greeting':'👋 Hola, soy',
        'hero-desc':'DevOps en formación, apasionado por la automatización, la computación en la nube y la construcción de infraestructuras eficientes. Actualmente estudiando <strong>DevOps & Cloud en UNIR</strong>.',
        'hero-cta-projects':'<i class="fas fa-rocket"></i> Ver proyectos',
        'hero-cta-contact':'<i class="fas fa-envelope"></i> Contactarme',
        'tooltip-github':'GitHub','tooltip-linkedin':'LinkedIn','tooltip-email':'arancibiagm@gmail.com',
        'terminal-title':'bash — terminal',
        'term-whoami':'devops-engineer-in-training',
        'term-skills1':'AWS, Terraform, Docker, Kubernetes',
        'term-skills2':'Ansible, Python, Bash, CI/CD',
        'term-pwd':'/home/mario/barcelona',
        'about-title':'Sobre mí',
        'stat-projects':'Proyectos','stat-experience':'Años de experiencia','stat-techs':'Tecnologías',
        'about-p1':'Mi interés por la tecnología comenzó con la <strong>administración de sistemas</strong>, donde descubrí la satisfacción de mantener infraestructuras estables y seguras. Actualmente, estoy enfocado en <strong>DevOps</strong> porque me permite combinar mi experiencia en operaciones con mi pasión por la automatización y las infraestructuras escalables.',
        'about-p2':'Estudiando el <strong>Programa Avanzado DevOps & Cloud en UNIR</strong>, complemento mi formación con proyectos prácticos que puedes ver en mi GitHub. Mi objetivo es aportar valor desde el primer día en un equipo de tecnología, aplicando buenas prácticas de CI/CD, infraestructura como código y observabilidad.',
        'about-p3':'<strong>📍 Barcelona, España</strong> — Cuando no estoy frente al ordenador, me gusta explorar nuevas tecnologías, compartir lo que aprendo y seguir formándome de manera continua.',
        'achieve-az900':'AZ-900: Azure Fundamentals ✅',
        'achieve-cfgs':'CFGS Administración de Sistemas',
        'achieve-dam':'DAM Desarrollo Apps Multiplataforma',
        'skills-title':'Skills & Tecnologías',
        'skills-desc':'Herramientas y tecnologías con las que trabajo actualmente:',
        'skill-aws':'Lambda, DynamoDB, EC2, S3, API Gateway',
        'skill-terraform':'Infraestructura como código (IaC)',
        'skill-docker':'Containerización de aplicaciones',
        'skill-k8s':'Orquestación (K8s, Minikube, Helm)',
        'skill-python':'Scripting, automatización',
        'skill-bash':'Scripting, automatización Linux',
        'skill-linux':'Administración de sistemas',
        'skill-ansible':'Gestión de configuración',
        'skill-ghactions':'CI/CD pipelines',
        'skill-argocd':'GitOps y despliegue continuo nativo en Kubernetes',
        'skill-git':'Control de versiones',
        'skill-mysql':'Bases de datos relacionales',
        'projects-title':'Proyectos destacados',
        'proj1-desc':'Entorno local completo de WordPress usando Infrastructure as Code. Orquestación con Vagrant, provisión con Ansible y declaración de recursos con Terraform para practicar el ciclo completo de IaC en entornos aislados.',
        'proj2-desc':'Aprovisionamiento de instancias EC2 en AWS con Terraform, seguido de configuración automatizada con Ansible. Incluye security groups, key pairs y user data para despliegues listos para producción.',
        'proj3-desc':'Entornos de desarrollo reproducibles con Vagrant, utilizando VirtualBox como provider y aprovisionamiento con shell scripts. Ideal para testing local y simulación de entornos multi-máquina.',
        'proj4-desc':'API completamente serverless construida con AWS Lambda y DynamoDB, desplegada con Terraform en el Free Tier. Arquitectura escalable, sin servidores y con costos optimizados para proyectos personales.',
        'proj5-desc':'Pipeline CI/CD completo desde el código hasta producción: GitHub Actions construye y sube la imagen a GHCR, y ArgoCD sincroniza automáticamente el despliegue en Kubernetes. Incluye health checks, auto-reparación y GitOps.',
        'proj6-desc': 'Migración completa del stack WordPress desde Docker Compose a Kubernetes con enfoque GitOps. Incluye MySQL, Redis caché, phpMyAdmin y 3 réplicas de WordPress. Todo gestionado por ArgoCD para despliegue continuo, auto-reparación y sincronización automática con Git. Escalado horizontal listo para producción.',
        'tooltip-viewcode':'Ver código',
        'goals-title':'✅ Objetivos 2026-2027',
        'goal1':'🔵 AZ-900 - Azure Fundamentals','goal2':'🔄 Pipeline CI/CD con GitHub Actions','goal3':'🏗️ Proyecto con Kubernetes (K8s)',
        'goal4':'🟠 AWS Cloud Practitioner (UNIR)','goal5':'🟠 AWS Solutions Architect Associate - SAA-C03',
        'goal6':'🟣 DP-900 - Azure Data Fundamentals (UNIR)','goal7':'🟢 AI-900 - Azure AI Fundamentals (UNIR)',
        'certprog-title':'📚 Certificaciones en progreso',
        'certprog-saa-name':'AWS Solutions Architect Associate (SAA-C03)','certprog-saa-desc':'Estudiando | Objetivo: Verano 2026',
        'certprog-cp-name':'AWS Cloud Practitioner','certprog-cp-desc':'Programado 2027 (UNIR)',
        'certprog-az-name':'DP-900 / AI-900 (Azure)','certprog-az-desc':'Planificadas 2027',
        'reading-title':'📖 Lecturas y aprendizaje',
        'read1-title':'Estrategias para el examen SAA-C03','read1-desc':'Resumen de temas clave, recursos y plan de estudio para la certificación AWS.','read1-tag':'📅 Próximamente',
        'read2-title':'imagePullSecret en Kubernetes','read2-desc':'Configurar un secreto en K8s para descargar imágenes de GHCR sin errores de autenticación.',
        'read3-title':'kubectl apply vs create vs patch','read3-desc':'Diferencias clave entre los comandos de kubectl para gestionar recursos en K8s.',
        'timeline-title':'🏆 Timeline de logros',
        'tl1-date':'🎯 Próximamente (2027)','tl1-event':'<strong>Obtener AWS Solutions Architect Associate (SAA-C03)</strong>','tl1-desc':'Certificación avanzada de AWS | En estudio actualmente',
        'tl2-date':'🎯 Próximamente (2026 - 2027)','tl2-event':'<strong>Finalizar el Programa Avanzado en DevOps & Cloud (UNIR)</strong>','tl2-desc':'Trabajar con las herramientas y plataformas más demandadas, dominar cloud e infraestructura como código',
        'tl3-date':'🎉 2026','tl3-event':'<strong>Obtuve mi certificación AZ-900</strong>','tl3-desc':'Microsoft Azure Fundamentals',
        'tl4-date':'🐍 2025','tl4-event':'<strong>Bootcamp de IA con Python</strong>','tl4-desc':'Pandas, NumPy, scikit-learn y APIs REST',
        'tl5-date':'🐧 2024','tl5-event':'<strong>Empecé con Linux y Bash scripting</strong>','tl5-desc':'Automatización de tareas y administración de sistemas',
        'tl6-date':'🎓 2023','tl6-event':'<strong>Finalicé el CFGS de Administración de Sistemas y DAM</strong>','tl6-desc':'📍 Salesians Sarrià | ASIX (2022-2023) | DAM (2019-2022)',
        'certs-title':'🏷️ Certificaciones',
        'cert-az900-sub':'Azure Fundamentals','cert-az900-status':'✅ Obtenida 2026',
        'cert-cp-sub':'Cloud Practitioner','cert-cp-status':'📅 Próximamente',
        'cert-saa-sub':'Solutions Architect','cert-saa-status':'📅 En curso',
        'cert-dp900-sub':'Azure Data Fundamentals','cert-dp900-status':'📅 Planificada',
        'cert-ai900-sub':'Azure AI Fundamentals','cert-ai900-status':'📅 Planificada',
        'contact-title':'Contacto',
        'contact-subtitle':'¿Interesad@ en mi perfil o tienes alguna pregunta?<br>Estaré encantado de leerte. ¡Escríbeme!',
        'form-name-label':'Nombre','form-name-placeholder':'Tu nombre',
        'form-email-label':'Email','form-email-placeholder':'tu@email.com',
        'form-msg-label':'Mensaje','form-msg-placeholder':'Escribe tu mensaje aquí...',
        'form-submit-text':'Enviar mensaje','form-sending':'Enviando...',
        'form-success':'¡Mensaje enviado con éxito! Te responderé pronto.',
        'contact-location':'Barcelona, España',
        'footer-quote':'<i class="fas fa-quote-left"></i> Automate everything, learn continuously, build with purpose. <i class="fas fa-quote-right"></i> <span class="footer-quote-author">— Mario Arancibia</span>',
        'footer-copy':'&copy; <span id="footer-year"></span> Mario German Arancibia. Hecho con ☕ y mucho YAML.',
        'backtop-aria':'Volver arriba',
    },
    en: {
        'page-title':'Mario Arancibia | DevOps Portfolio',
        'nav-home':'Home','nav-about':'About Me','nav-skills':'Skills','nav-projects':'Projects','nav-contact':'Contact',
        'lang-btn':'ES','hamburger-aria':'Menu',
        'hero-greeting':'👋 Hi, I\'m',
        'hero-desc':'DevOps in training, passionate about automation, cloud computing, and building efficient infrastructures. Currently studying <strong>DevOps & Cloud at UNIR</strong>.',
        'hero-cta-projects':'<i class="fas fa-rocket"></i> View projects',
        'hero-cta-contact':'<i class="fas fa-envelope"></i> Contact me',
        'tooltip-github':'GitHub','tooltip-linkedin':'LinkedIn','tooltip-email':'arancibiagm@gmail.com',
        'terminal-title':'bash — terminal',
        'term-whoami':'devops-engineer-in-training',
        'term-skills1':'AWS, Terraform, Docker, Kubernetes',
        'term-skills2':'Ansible, Python, Bash, CI/CD',
        'term-pwd':'/home/mario/barcelona',
        'about-title':'About Me',
        'stat-projects':'Projects','stat-experience':'Years experience','stat-techs':'Technologies',
        'about-p1':'My interest in technology began with <strong>system administration</strong>, where I discovered the satisfaction of keeping infrastructures stable and secure. Currently, I am focused on <strong>DevOps</strong> because it allows me to combine my operations experience with my passion for automation and scalable infrastructures.',
        'about-p2':'Studying the <strong>Advanced DevOps & Cloud Program at UNIR</strong>, I complement my training with hands-on projects you can see on my GitHub. My goal is to add value from day one in a technology team, applying best practices in CI/CD, infrastructure as code, and observability.',
        'about-p3':'<strong>📍 Barcelona, Spain</strong> — When I\'m not in front of the computer, I enjoy exploring new technologies, sharing what I learn, and continuously improving my skills.',
        'achieve-az900':'AZ-900: Azure Fundamentals ✅',
        'achieve-cfgs':'CFGS Systems Administration',
        'achieve-dam':'DAM Multi-platform App Development',
        'skills-title':'Skills & Technologies',
        'skills-desc':'Tools and technologies I currently work with:',
        'skill-aws':'Lambda, DynamoDB, EC2, S3, API Gateway',
        'skill-terraform':'Infrastructure as Code (IaC)',
        'skill-docker':'Application containerization',
        'skill-k8s':'Orchestration (K8s, Minikube, Helm)',
        'skill-python':'Scripting, automation',
        'skill-bash':'Scripting, Linux automation',
        'skill-linux':'System administration',
        'skill-ansible':'Configuration management',
        'skill-ghactions':'CI/CD pipelines',
        'skill-argocd':'GitOps and native continuous deployment on Kubernetes',
        'skill-git':'Version control',
        'skill-mysql':'Relational databases',
        'projects-title':'Featured Projects',
        'proj1-desc':'Complete local WordPress environment using Infrastructure as Code. Orchestration with Vagrant, provisioning with Ansible and resource declaration with Terraform to practice the full IaC cycle in isolated environments.',
        'proj2-desc':'Provisioning of EC2 instances on AWS with Terraform, followed by automated configuration with Ansible. Includes security groups, key pairs and user data for production-ready deployments.',
        'proj3-desc':'Reproducible development environments with Vagrant, using VirtualBox as provider and provisioning with shell scripts. Ideal for local testing and multi-machine environment simulation.',
        'proj4-desc':'Fully serverless API built with AWS Lambda and DynamoDB, deployed with Terraform on the Free Tier. Scalable architecture, no servers to manage, and optimized costs for personal projects.',
        'proj5-desc':'Complete CI/CD pipeline from code to production: GitHub Actions builds and pushes the image to GHCR, and ArgoCD automatically syncs the Kubernetes deployment. Includes health checks, self-healing and GitOps.',
        'proj6-desc': 'Full migration of the WordPress stack from Docker Compose to Kubernetes with a GitOps approach. Includes MySQL, Redis cache, phpMyAdmin and 3 WordPress replicas. All managed by ArgoCD for continuous deployment, self-healing and automatic Git synchronization. Horizontal scaling ready for production.',
        'tooltip-viewcode':'View code',
        'goals-title':'✅ Goals 2026-2027',
        'goal1':'🔵 AZ-900 - Azure Fundamentals','goal2':'🔄 CI/CD Pipeline with GitHub Actions','goal3':'🏗️ Kubernetes (K8s) Project',
        'goal4':'🟠 AWS Cloud Practitioner (UNIR)','goal5':'🟠 AWS Solutions Architect Associate - SAA-C03',
        'goal6':'🟣 DP-900 - Azure Data Fundamentals (UNIR)','goal7':'🟢 AI-900 - Azure AI Fundamentals (UNIR)',
        'certprog-title':'📚 Certifications In Progress',
        'certprog-saa-name':'AWS Solutions Architect Associate (SAA-C03)','certprog-saa-desc':'Studying | Goal: Summer 2026',
        'certprog-cp-name':'AWS Cloud Practitioner','certprog-cp-desc':'Scheduled 2027 (UNIR)',
        'certprog-az-name':'DP-900 / AI-900 (Azure)','certprog-az-desc':'Planned 2027',
        'reading-title':'📖 Readings & Learning',
        'read1-title':'Strategies for the SAA-C03 Exam','read1-desc':'Summary of key topics, resources and study plan for the AWS certification.','read1-tag':'📅 Coming Soon',
        'read2-title':'imagePullSecret in Kubernetes','read2-desc':'Configure a K8s secret to download images from GHCR without authentication errors.',
        'read3-title':'kubectl apply vs create vs patch','read3-desc':'Key differences between kubectl commands to manage resources in K8s.',
        'timeline-title':'🏆 Achievement Timeline',
        'tl1-date':'🎯 Coming Soon (2027)','tl1-event':'<strong>Earn AWS Solutions Architect Associate (SAA-C03)</strong>','tl1-desc':'Advanced AWS certification | Currently studying',
        'tl2-date':'🎯 Coming Soon (2026 - 2027)','tl2-event':'<strong>Complete the Advanced DevOps & Cloud Program (UNIR)</strong>','tl2-desc':'Work with the most in-demand tools and platforms, master cloud and infrastructure as code',
        'tl3-date':'🎉 2026','tl3-event':'<strong>Earned AZ-900 certification</strong>','tl3-desc':'Microsoft Azure Fundamentals',
        'tl4-date':'🐍 2025','tl4-event':'<strong>AI Bootcamp with Python</strong>','tl4-desc':'Pandas, NumPy, scikit-learn and REST APIs',
        'tl5-date':'🐧 2024','tl5-event':'<strong>Started with Linux and Bash scripting</strong>','tl5-desc':'Task automation and system administration',
        'tl6-date':'🎓 2023','tl6-event':'<strong>Completed CFGS in Systems Administration and DAM</strong>','tl6-desc':'📍 Salesians Sarrià | ASIX (2022-2023) | DAM (2019-2022)',
        'certs-title':'🏷️ Certifications',
        'cert-az900-sub':'Azure Fundamentals','cert-az900-status':'✅ Earned 2026',
        'cert-cp-sub':'Cloud Practitioner','cert-cp-status':'📅 Upcoming',
        'cert-saa-sub':'Solutions Architect','cert-saa-status':'📅 In progress',
        'cert-dp900-sub':'Azure Data Fundamentals','cert-dp900-status':'📅 Planned',
        'cert-ai900-sub':'Azure AI Fundamentals','cert-ai900-status':'📅 Planned',
        'contact-title':'Contact',
        'contact-subtitle':'Interested in my profile or have any questions?<br>I\'d love to hear from you. Send me a message!',
        'form-name-label':'Name','form-name-placeholder':'Your name',
        'form-email-label':'Email','form-email-placeholder':'your@email.com',
        'form-msg-label':'Message','form-msg-placeholder':'Write your message here...',
        'form-submit-text':'Send message','form-sending':'Sending...',
        'form-success':'Message sent successfully! I\'ll get back to you soon.',
        'contact-location':'Barcelona, Spain',
        'footer-quote':'<i class="fas fa-quote-left"></i> Automate everything, learn continuously, build with purpose. <i class="fas fa-quote-right"></i> <span class="footer-quote-author">— Mario Arancibia</span>',
        'footer-copy':'&copy; <span id="footer-year"></span> Mario German Arancibia. Made with ☕ and lots of YAML.',
        'backtop-aria':'Back to top',
    }
};

let currentLang = 'es';

function applyTranslations(lang){
    const t=i18n[lang]; if(!t) return;
    currentLang=lang;
    document.documentElement.setAttribute('lang',lang);
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k=el.getAttribute('data-i18n');
        if(t[k]!==undefined) el.innerHTML=t[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const k=el.getAttribute('data-i18n-placeholder');
        if(t[k]!==undefined) el.placeholder=t[k];
    });
    document.querySelectorAll('[data-i18n-tooltip]').forEach(el=>{
        const k=el.getAttribute('data-i18n-tooltip');
        if(t[k]!==undefined) el.setAttribute('data-tooltip',t[k]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
        const k=el.getAttribute('data-i18n-aria');
        if(t[k]!==undefined) el.setAttribute('aria-label',t[k]);
    });
    const btn=document.querySelector('.lang-toggle-text');
    if(btn && t['lang-btn']!==undefined) btn.textContent=t['lang-btn'];
    const md=document.querySelector('meta[name="description"]');
    if(md) md.setAttribute('content',lang==='en'?'Mario Arancibia Portfolio - DevOps in training with projects in AWS, Kubernetes, Terraform and CI/CD':'Portfolio de Mario Arancibia - DevOps en formación con proyectos en AWS, Kubernetes, Terraform y CI/CD');
    localStorage.setItem('lang',lang);
}

function initLanguage(){
    const toggle=document.getElementById('lang-toggle'); if(!toggle) return;
    const saved=localStorage.getItem('lang');
    if(saved==='en') applyTranslations('en');
    else if(saved==='es') applyTranslations('es');
    else {
        const bl=(navigator.language||'').startsWith('en');
        applyTranslations(bl?'en':'es');
    }
    toggle.addEventListener('click',()=>{
        const next=currentLang==='es'?'en':'es';
        applyTranslations(next);
        if(window.typedInstance) window.typedInstance.destroy();
        initTyped();
    });
}

function initLoader(){
    const l=document.getElementById('loader'); if(!l) return;
    window.addEventListener('load',()=>setTimeout(()=>l.classList.add('hidden'),400));
    setTimeout(()=>{if(!l.classList.contains('hidden'))l.classList.add('hidden')},3000);
}

function initTheme(){
    const t=document.getElementById('theme-toggle'), h=document.documentElement; if(!t) return;
    const s=localStorage.getItem('theme'), p=window.matchMedia('(prefers-color-scheme: dark)').matches;
    h.setAttribute('data-theme',s||(p?'dark':'light'));
    t.addEventListener('click',()=>{
        const n=h.getAttribute('data-theme')==='dark'?'light':'dark';
        h.setAttribute('data-theme',n); localStorage.setItem('theme',n);
    });
}

function initHamburger(){
    const h=document.getElementById('hamburger'), m=document.getElementById('nav-menu');
    if(!h||!m) return;
    h.addEventListener('click',()=>{
        h.classList.toggle('active'); m.classList.toggle('active');
        document.body.style.overflow=m.classList.contains('active')?'hidden':'';
    });
    document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>{
        h.classList.remove('active'); m.classList.remove('active');
        document.body.style.overflow='';
    }));
}

function initTyped(){
    const el=document.getElementById('typed-text'); if(!el) return;
    if(typeof Typed==='undefined'){el.textContent='Cloud Automation | Infrastructure as Code';return;}
    window.typedInstance=new Typed('#typed-text',{
        strings:['Cloud Automation','Infrastructure as Code','DevOps & Cloud Engineer','Open Source Enthusiast'],
        typeSpeed:60,backSpeed:40,backDelay:2000,startDelay:500,loop:true,showCursor:false
    });
}

function initScrollReveal(){
    const els=document.querySelectorAll('.reveal');
    if(!els.length) return;
    const ob=new IntersectionObserver((entries)=>{
        entries.forEach((e,i)=>{
            if(e.isIntersecting){
                setTimeout(()=>e.target.classList.add('visible'),Math.min(i*100,600));
                ob.unobserve(e.target);
            }
        });
    },{rootMargin:'0px 0px -80px 0px',threshold:.1});
    els.forEach(el=>ob.observe(el));
    const h=document.getElementById('header');
    if(h){let t=false;window.addEventListener('scroll',()=>{if(!t){requestAnimationFrame(()=>{h.classList.toggle('scrolled',window.scrollY>50);t=false});t=true}})}
}

function initCounters(){
    document.querySelectorAll('.stat-number').forEach(el=>{
        const t=parseInt(el.getAttribute('data-count'),10); if(isNaN(t)) return;
        const ob=new IntersectionObserver(([e])=>{
            if(e.isIntersecting){animateNum(el,t);ob.unobserve(el)}
        },{threshold:.5});
        ob.observe(el);
    });
}
function animateNum(el,target,d=1500){
    let cur=0,inc=Math.ceil(target/(d/16));
    function upd(){cur+=inc;if(cur>=target){el.textContent=target;return}el.textContent=cur;requestAnimationFrame(upd)}
    upd();
}

function initContactForm(){
    const form=document.getElementById('contact-form'); if(!form) return;
    const ni=document.getElementById('contact-name'), ei=document.getElementById('contact-email'), mi=document.getElementById('contact-message');
    const ne=document.getElementById('name-error'), ee=document.getElementById('email-error'), me=document.getElementById('message-error');
    const btn=document.getElementById('form-submit'), suc=document.getElementById('form-success');
    const ts=Date.now();
    const ti=document.createElement('input'); ti.type='hidden'; ti.name='_timestamp'; ti.value=ts; form.appendChild(ti);
    const PUBLIC_KEY='YOUR_PUBLIC_KEY', SERVICE_ID='service_default', TEMPLATE_ID='template_default';
    let ejInit=false;
    if(typeof emailjs!=='undefined'){try{emailjs.init(PUBLIC_KEY);ejInit=true}catch(e){}}

    function vName(){const v=ni.value.trim();if(!v){shErr(ni,ne,'El nombre es obligatorio');return false}if(v.length<2){shErr(ni,ne,'El nombre debe tener al menos 2 caracteres');return false}clErr(ni,ne);return true}
    function vEmail(){const v=ei.value.trim(),r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!v){shErr(ei,ee,'El email es obligatorio');return false}if(!r.test(v)){shErr(ei,ee,'Introduce un email válido');return false}clErr(ei,ee);return true}
    function vMsg(){const v=mi.value.trim();if(!v){shErr(mi,me,'El mensaje es obligatorio');return false}if(v.length<10){shErr(mi,me,`Mínimo 10 caracteres (${v.length}/10)`);return false}clErr(mi,me);return true}
    function shErr(i,e,m){i.classList.add('error');i.classList.remove('success');e.textContent=m;e.classList.add('visible')}
    function clErr(i,e){i.classList.remove('error');i.classList.add('success');e.textContent='';e.classList.remove('visible')}

    ni.addEventListener('blur',vName);ni.addEventListener('input',()=>{if(ni.classList.contains('error'))vName()});
    ei.addEventListener('blur',vEmail);ei.addEventListener('input',()=>{if(ei.classList.contains('error'))vEmail()});
    mi.addEventListener('blur',vMsg);mi.addEventListener('input',()=>{if(mi.classList.contains('error'))vMsg()});

    form.addEventListener('submit',async(e)=>{
        e.preventDefault();
        if(!vName()||!vEmail()||!vMsg()) return;
        const honey=form.querySelector('input[name="_honey"]');
        if(honey&&honey.value.trim()!==''){shSuc();return}
        if(Date.now()-ts<2000){shSuc();return}
        btn.classList.add('loading');btn.disabled=true;suc.classList.remove('visible');
        try{
            if(ejInit) await emailjs.send(SERVICE_ID,TEMPLATE_ID,{from_name:ni.value.trim(),from_email:ei.value.trim(),message:mi.value.trim(),to_name:'Mario'});
            else await new Promise(r=>setTimeout(r,1500));
            btn.classList.remove('loading');btn.disabled=false;shSuc();form.reset();
            [ni,ei,mi].forEach(el=>el.classList.remove('success'));
        }catch(e){
            btn.classList.remove('loading');btn.disabled=false;
            alert('Hubo un error. Escríbeme a arancibiagm@gmail.com');
        }
    });
    function shSuc(){suc.classList.add('visible');setTimeout(()=>suc.classList.remove('visible'),6000)}
}

function initBackToTop(){
    const b=document.getElementById('back-to-top'); if(!b) return;
    let t=false;
    window.addEventListener('scroll',()=>{if(!t){requestAnimationFrame(()=>{b.classList.toggle('visible',window.scrollY>300);t=false});t=true}});
    b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

function initNavActive(){
    const sections=document.querySelectorAll('section[id]'), links=document.querySelectorAll('.nav-link');
    if(!sections.length||!links.length) return;
    const ob=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
            if(e.isIntersecting){
                const id=e.target.getAttribute('id');
                links.forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')==='#'+id)l.classList.add('active')});
            }
        });
    },{rootMargin:'0px 0px -50% 0px'});
    sections.forEach(s=>ob.observe(s));
}

function initFooterYear(){
    const y=document.getElementById('footer-year');
    if(y) y.textContent=new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded',()=>{
    initLoader();
    initTheme();
    initLanguage();
    initHamburger();
    initTyped();
    initScrollReveal();
    initCounters();
    initContactForm();
    initBackToTop();
    initNavActive();
    initFooterYear();
});