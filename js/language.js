// js/language.js
function setLanguage(lang) {
    const currentUrl = window.location.pathname;
    let targetUrl = '';
    
    if (lang === 'en') {
        targetUrl = '/html/index_en.html';
    } else {
        targetUrl = '/html/index_es.html';
    }
    
    window.location.href = targetUrl;
}

function detectAndRedirect() {
    const currentPath = window.location.pathname;
    
    // Si ya estás en un archivo dentro de /html/, no redirigir
    if (currentPath.includes('/html/')) {
        return;
    }
    
    const savedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (savedLang === 'en') {
        window.location.href = '/html/index_en.html';
    } else if (savedLang === 'es') {
        window.location.href = '/html/index_es.html';
    } else if (browserLang.startsWith('en')) {
        window.location.href = '/html/index_en.html';
    } else {
        window.location.href = '/html/index_es.html';
    }
}

// Ejecutar al cargar
detectAndRedirect();