document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const header = document.querySelector('header');
    const exploreBtn = document.querySelector('.explore-btn');
    const backToTopBtn = document.getElementById('back-to-top');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('mensaje').value;

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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-minimized');
            document.getElementById('header-content').classList.add('hidden');
            backToTopBtn.style.display = 'block';
        } else {
            header.classList.remove('header-minimized');
            document.getElementById('header-content').classList.remove('hidden');
            backToTopBtn.style.display = 'none';
        }
    });

    // Mostrar la sección de librerías al hacer clic en el botón "Explorar"
    exploreBtn.addEventListener('click', function() {
        document.querySelector('#librerias').scrollIntoView({ behavior: 'smooth' });
    });

    // Volver arriba
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle del menú en dispositivos móviles
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});