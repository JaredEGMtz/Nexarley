document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica para el menú ---
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    // Comprobamos si los elementos existen antes de añadir el evento 
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');

            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times'); // Cambia a "X"
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars'); // Cambia a hamburguesa
            }
        });
    }

    // --- EFECTO 3D TILT EN PROYECTOS ---
    const projectCards = document.querySelectorAll('.project-card');
    const maxRotate = 12; // Sirve para ajustar la intensidad del efecto 

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateY = (x / (rect.width / 2)) * maxRotate;
            const rotateX = (-1 * y / (rect.height / 2)) * maxRotate;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });

});