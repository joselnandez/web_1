export function abrirMenu() {
    const menu = document.querySelector('.menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const abierto = isAbierto;
    menu.setAttribute('aria-expanded', !abierto);
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function isAbierto() {
    return document.querySelector('.menu').getAttribute('aria-expanded') === 'true';
}

export function armarTestimonios(data, elemento) {
    console.log('armando testimonios', data);
    const testimonios = data.slice(0, 5);
    const contenerdor=  document.querySelector(elemento);
    testimonios.forEach(testimonio => {
        console.log('testimonio', testimonio);
        const card = document.createElement('article');
        card.classList.add('testimonial-card');
        card.innerHTML = `<p class="testimonial-text">${testimonio.body}</p>`;
        contenerdor.appendChild(card);
    });
}