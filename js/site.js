// ============================================================
// UR Hospitality — Site Interactions (v3, premium editorial rebuild)
// Handles: scroll reveal, counters, nav, lightbox, FAQ, audience
// cards, menu tabs, floating contact, parallax, gallery
// Loaded after js/main.js
// ============================================================

(function () {
    'use strict';

    // ---------- Scroll Reveal (IntersectionObserver) ----------
    function initReveal() {
        const items = document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale');
        if (!items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px'
        });

        items.forEach(el => observer.observe(el));
    }

    // ---------- Animated Stat Counters ----------
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        const formatIN = (n) => Math.round(n).toLocaleString('en-IN');

        const animate = (el) => {
            const target = parseFloat(el.dataset.count);
            const decimals = parseInt(el.dataset.decimals || '0', 10);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const duration = 1600;
            const start = performance.now();

            const tick = (now) => {
                const p = Math.min((now - start) / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - p, 3);
                const value = target * eased;

                if (decimals) {
                    el.textContent = prefix + value.toFixed(decimals) + suffix;
                } else {
                    el.textContent = prefix + formatIN(value) + suffix;
                }

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

    // ---------- Nav Scroll Behavior ----------
    function initScrollChrome() {
        const nav = document.getElementById('site-nav');
        const bar = document.getElementById('scroll-progress');

        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // Nav shadow
                if (nav) {
                    nav.classList.toggle('scrolled', scrollY > 12);
                }

                // Progress bar
                if (bar) {
                    const max = document.documentElement.scrollHeight - window.innerHeight;
                    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
                }

                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ---------- Active Nav Link Tracking ----------
    function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        if (!sections.length || !navLinks.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active',
                            link.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, {
            rootMargin: '-30% 0px -70% 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    // ---------- FAQ Accordion ----------
    function initFAQ() {
        const items = document.querySelectorAll('.faq-item');
        if (!items.length) return;

        items.forEach(item => {
            const trigger = item.querySelector('.faq-trigger');
            if (!trigger) return;

            trigger.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');

                // Close all others
                items.forEach(other => {
                    if (other !== item) other.classList.remove('open');
                });

                // Toggle current
                item.classList.toggle('open', !isOpen);

                // Update ARIA
                trigger.setAttribute('aria-expanded', String(!isOpen));
            });
        });
    }

    // ---------- Audience Card Toggle ----------
    // Exposed globally for onclick handlers
    window.toggleAudience = function (card) {
        const content = card.querySelector('.details-content');
        const icon = card.querySelector('.expand-icon');
        if (!content) return;

        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

        // Close all others
        document.querySelectorAll('.audience-card').forEach(other => {
            if (other !== card) {
                const otherContent = other.querySelector('.details-content');
                const otherIcon = other.querySelector('.expand-icon');
                if (otherContent) {
                    otherContent.style.maxHeight = '0px';
                    otherContent.style.opacity = '0';
                    otherContent.style.marginTop = '0';
                }
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                other.classList.remove('expanded');
            }
        });

        // Toggle current
        if (isOpen) {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            content.style.marginTop = '0';
            if (icon) icon.style.transform = 'rotate(0deg)';
            card.classList.remove('expanded');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            content.style.marginTop = '1rem';
            content.style.height = 'auto';
            if (icon) icon.style.transform = 'rotate(180deg)';
            card.classList.add('expanded');
        }
    };

    // ---------- Menu Tabs ----------
    window.switchMenuTab = function (tab, category) {
        // Update active tab
        document.querySelectorAll('.menu-tab').forEach(t => {
            t.classList.toggle('active', t === tab);
        });

        // Show/hide content
        document.querySelectorAll('.menu-content').forEach(content => {
            if (category === 'all') {
                content.classList.remove('hidden');
            } else {
                content.classList.toggle('hidden', content.dataset.category !== category);
            }
        });
    };

    // ---------- Gallery Filtering Tabs ----------
    window.filterGallery = function (tabBtn, category) {
        // Update active tab button
        document.querySelectorAll('.gallery-tab').forEach(btn => {
            btn.classList.toggle('active', btn === tabBtn);
        });

        // Filter gallery items with smooth fade
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            const itemCat = item.dataset.category;
            if (category === 'all' || itemCat === category) {
                item.classList.remove('hidden');
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 30);
            } else {
                item.classList.add('hidden');
            }
        });
    };

    // ---------- Gallery Lightbox ----------
    window.openLightbox = function(src, captionText) {
        const overlay = document.getElementById('lightbox');
        if (!overlay) return;
        const img = overlay.querySelector('img');
        const caption = overlay.querySelector('.lightbox-caption');
        if (img) {
            img.src = src;
            img.alt = captionText || 'UR Hospitality';
        }
        if (caption) {
            caption.textContent = captionText || '';
        }
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    function initLightbox() {
        const overlay = document.getElementById('lightbox');
        if (!overlay) return;

        const img = overlay.querySelector('img');
        const caption = overlay.querySelector('.lightbox-caption');

        // Open lightbox
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const imgEl = item.querySelector('img');
                if (!imgEl) return;
                const src = imgEl.src;
                const alt = imgEl.alt;
                const label = item.querySelector('.gallery-item-label');

                img.src = src;
                img.alt = alt;
                if (caption) {
                    caption.textContent = label ? label.textContent : alt;
                }

                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // Close lightbox
        const close = () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.closest('.lightbox-close')) {
                close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                close();
            }
        });
    }

    // ---------- Floating Contact Widget ----------
    function initFloatingContact() {
        const widget = document.querySelector('.floating-contact');
        if (!widget) return;

        const trigger = widget.querySelector('.floating-contact-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
            widget.classList.toggle('open');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!widget.contains(e.target) && widget.classList.contains('open')) {
                widget.classList.remove('open');
            }
        });
    }

    // ---------- Smooth Scroll for Anchor Links ----------
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        toggleMobileMenu();
                    }
                }
            });
        });
    }

    // ---------- Parallax (subtle, desktop only) ----------
    function initParallax() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (window.innerWidth < 1024) return;

        const elements = document.querySelectorAll('[data-parallax]');
        if (!elements.length) return;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                elements.forEach(el => {
                    const speed = parseFloat(el.dataset.parallax) || 0.1;
                    const rect = el.getBoundingClientRect();
                    const center = rect.top + rect.height / 2;
                    const windowCenter = window.innerHeight / 2;
                    const offset = (center - windowCenter) * speed;

                    el.style.transform = `translateY(${offset}px)`;
                });

                ticking = false;
            });
        }, { passive: true });
    }

    // ---------- Cost Calculator (inline version) ----------
    function initInlineCalculator() {
        const container = document.getElementById('inline-calculator');
        if (!container) return;

        const inputs = container.querySelectorAll('input[type="range"]');
        inputs.forEach(input => {
            input.addEventListener('input', updateInlineCalc);
        });

        updateInlineCalc();
    }

    function updateInlineCalc() {
        const getValue = (id) => parseFloat(document.getElementById(id)?.value) || 0;

        const employees = getValue('calc-employees');
        const mealCost = getValue('calc-meal-cost');
        const queueTime = getValue('calc-queue');
        const waste = getValue('calc-waste');

        // Update displays
        const setDisplay = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        };

        setDisplay('calc-employees-val', employees);
        setDisplay('calc-meal-cost-val', '₹' + mealCost);
        setDisplay('calc-queue-val', queueTime + ' min');
        setDisplay('calc-waste-val', waste + '%');

        // Calculate hidden costs (simplified model)
        const workingDays = 22;
        const hourlyRate = 450;

        const acceptableQueue = 7;
        const excessQueue = Math.max(queueTime - acceptableQueue, 0);
        const queueCost = employees * excessQueue * workingDays * (hourlyRate / 60) * 0.6;

        const wasteCost = employees * workingDays * mealCost * (waste / 100);

        const adminCost = Math.max(2, Math.round(employees / 50)) * 0.75 * 350 + 5 * 350;

        const monthlyTotal = Math.round(queueCost + wasteCost + adminCost);
        const annualTotal = monthlyTotal * 12;

        setDisplay('calc-monthly', '₹ ' + monthlyTotal.toLocaleString('en-IN'));
        setDisplay('calc-annual', '₹ ' + annualTotal.toLocaleString('en-IN'));
    }

    window.updateInlineCalc = updateInlineCalc;

    // ---------- Initialize Everything ----------
    function init() {
        initReveal();
        initCounters();
        initScrollChrome();
        initActiveNav();
        initFAQ();
        initLightbox();
        initFloatingContact();
        initSmoothScroll();
        initParallax();
        initInlineCalculator();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
