// ============================================================
// UR Hospitality — Site interactions (v2 editorial rebuild)
// Loaded after js/main.js (modal, form, calculator live there)
// ============================================================

// Scroll reveal
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
}

// Animated stat counters (elements with data-count, optional data-prefix/suffix)
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const formatIN = (n) => Math.round(n).toLocaleString('en-IN');

    const animate = (el) => {
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const value = target * eased;
            el.textContent = prefix + (decimals ? value.toFixed(decimals) : formatIN(value)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

// Nav shadow + scroll progress bar
function initScrollChrome() {
    const nav = document.getElementById('site-nav');
    const bar = document.getElementById('scroll-progress');

    const onScroll = () => {
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 12);
        if (bar) {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initCounters();
    initScrollChrome();
});
