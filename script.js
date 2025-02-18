document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const header = document.querySelector('header');
    const exploreBtn = document.querySelector('.explore-btn');
    const backToTopBtn = document.getElementById('back-to-top');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const companyName = document.querySelector('.company-name');
    const faqQuestions = document.querySelectorAll('.faq-question');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        if (name && email && message) {
            alert('¡Gracias por tu mensaje, ' + name + '! Te responderé pronto.');
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    companyName.addEventListener('click', function() {
        document.querySelector('#inicio').scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de aparición suave al hacer scroll
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Minimizar la cabecera al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-minimized');
            backToTopBtn.style.display = 'block';
        } else {
            header.classList.remove('header-minimized');
            backToTopBtn.style.display = 'none';
        }
    });

    // Volver arriba
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle del menú en dispositivos móviles
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // FAQ desplegables
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('visible');
        });
    });
});

// Inicializar partículas
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});