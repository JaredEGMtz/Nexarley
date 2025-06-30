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

// Validar checkbox de consentimiento antes de enviar formulario
const form = document.querySelector('.contact-form');
const consentCheckbox = document.getElementById('consent');

form.addEventListener('submit', function(e) {
  if (!consentCheckbox.checked) {
    e.preventDefault();
    alert('Por favor, acepta el Aviso de Privacidad para enviar el formulario.');
  }
});

// Banner cookies
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  // Verificar si ya aceptó cookies
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  function loadAnalytics() {
    if (!window.gtag) {
      // Cargar script de Google Analytics dinámicamente
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-2LP9N3XRN0";
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2LP9N3XRN0');
      `;
      document.head.appendChild(script2);
    }
  }

  if (cookiesAccepted === 'true') {
    // Ya aceptó, carga Analytics
    loadAnalytics();
  } else {
    // Mostrar banner
    cookieBanner.style.display = 'flex';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
    loadAnalytics();
  });

});