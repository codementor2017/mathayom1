/* ============================================================
   MATHHAYOM 1 (GRADE 7) · INDICATOR 3
   Shared JavaScript for Lessons 21–30
   ============================================================ */

(function () {
    'use strict';

    /* ============================================================
       1. SCROLL PROGRESS BAR
       ============================================================ */
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    /* ============================================================
       2. FLOATING PARTICLES
       ============================================================ */
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const particleColors = ['#F5A623', '#FFC93C', '#5B8C3E', '#C0392B', '#FFF9EC', '#A8D5E5'];

        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 14 + 5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
            particle.style.boxShadow = `0 0 ${size * 1.5}px currentColor`;
            particle.style.animationDuration = (Math.random() * 12 + 10) + 's';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particlesContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 25000);
        }

        for (let i = 0; i < 18; i++) {
            setTimeout(createParticle, i * 300);
        }
        setInterval(createParticle, 1500);
    }

    /* ============================================================
       3. SCROLL REVEAL ANIMATIONS
       ============================================================ */
    const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger'
    );

    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for very old browsers: show everything
        revealElements.forEach(el => el.classList.add('visible'));
    }

    /* ============================================================
       4. IMAGE LOADER (Hides placeholder when image loads)
       ============================================================ */
    document.querySelectorAll('.image-frame img').forEach(img => {
        // Check if already loaded (cached images)
        if (img.complete && img.naturalWidth > 0) {
            img.parentElement.classList.add('has-image');
        }

        img.addEventListener('load', () => {
            if (img.naturalWidth > 0) {
                img.parentElement.classList.add('has-image');
            }
        });

        img.addEventListener('error', () => {
            img.parentElement.classList.remove('has-image');
        });
    });

    /* ============================================================
       5. CARD 3D TILT EFFECT (optional — for lesson cards on index)
       ============================================================ */
    const tiltCards = document.querySelectorAll('.lesson-card');
    if (tiltCards.length > 0) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -6;
                const rotateY = ((x - centerX) / centerX) * 6;
                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.03)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    /* ============================================================
       6. SMOOTH SCROLL FOR ANCHOR LINKS
       ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ============================================================
       7. CONSOLE WELCOME MESSAGE
       ============================================================ */
    console.log(
        '%c🍯 Mathayom 1 · Indicator 3 · Lessons 21–30',
        'font-size: 18px; font-weight: bold; color: #F5A623; text-shadow: 2px 2px 0 #5B8C3E;'
    );
    console.log(
        '%cCollecting, Processing, and Presenting Data',
        'font-size: 13px; color: #C0392B;'
    );
    console.log(
        '%cTo add images: find  <img src="">  and paste your image URL inside the quotes.',
        'font-size: 12px; color: #5B8C3E; font-weight: bold;'
    );

})();