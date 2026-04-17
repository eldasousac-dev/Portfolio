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

// --- Renderização dinâmica de Projetos ---
const projetos = [
    { id: 1, titulo: 'Projeto Acadêmico', descricao: 'Trabalho em grupo para desenvolvimento de pesquisa e apresentação sobre temas do curso, exercitando colaboração e análise crítica.', tags: ['Pesquisa', 'Colaboração', 'Apresentação'], emoji: '📚' },
    { id: 2, titulo: 'Ação Voluntária', descricao: 'Participação em iniciativas sociais voltadas ao apoio da comunidade local, com foco em impacto e empatia.', tags: ['Voluntariado', 'Empatia', 'Comunidade'], emoji: '🤝' },
    { id: 3, titulo: 'Capacitação Profissional', descricao: 'Envolvimento em cursos e capacitações para aprimoramento de competências técnicas e comportamentais.', tags: ['Aprendizado', 'Crescimento', 'Desenvolvimento'], emoji: '🌱' },
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projetosContainer');
    if (!container) return;
    projetos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'projeto-card';
        card.setAttribute('data-reveal', '');
        card.innerHTML = `
            <div class="projeto-emoji">${p.emoji}</div>
            <h3 class="projeto-titulo">${p.titulo}</h3>
            <p class="projeto-descricao">${p.descricao}</p>
            <div class="projeto-tags">${p.tags.map(t => `<span class="projeto-tag">${t}</span>`).join('')}</div>
        `;
        container.appendChild(card);
    });
});
