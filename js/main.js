// ============================================
// ELDA DE SOUSA CARVALHO - Portfolio JS
// Typing effect, navbar, scroll animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Effect ---
    const typingEl = document.getElementById('typingName');
    const name = 'Elda de Sousa Carvalho';
    let charIndex = 0;

    function typeChar() {
        if (charIndex < name.length) {
            typingEl.textContent += name.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 80);
        }
    }

    setTimeout(typeChar, 600);

    // --- Navbar scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- Mobile Menu ---
    const navBurger = document.getElementById('navBurger');
    const navMenu = document.getElementById('navMenu');

    navBurger.addEventListener('click', () => {
        navBurger.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navBurger.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!navBurger.contains(e.target) && !navMenu.contains(e.target)) {
            navBurger.classList.remove('open');
            navMenu.classList.remove('open');
        }
    });

    // --- Active nav on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 150) {
                current = sec.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });

    // --- Reveal on Scroll ---
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach((el, i) => {
        el.style.transitionDelay = (i % 3) * 0.15 + 's';
        revealObs.observe(el);
    });

    // --- Skill Level Bars ---
    const barObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.level-bar');
                if (bar) {
                    bar.style.width = bar.getAttribute('data-width') + '%';
                }
                barObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.hex-card').forEach(card => {
        barObs.observe(card);
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
