// Selecciona el icono del menú, el menú overlay y el icono de cierre
const menuIcon = document.querySelector('.menu-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const closeIcon = document.querySelector('.close-icon');

// Añade un event listener al icono del menú
menuIcon.addEventListener('click', () => {
    console.log('Icono de menú clicado'); // Para verificar que el evento se dispara
    menuOverlay.classList.add('show'); // Muestra el menú overlay con la clase 'show'
});

// Añade un event listener al icono de cierre
closeIcon.addEventListener('click', () => {
    console.log('Icono de cierre clicado'); // Para verificar que el evento se dispara
    menuOverlay.classList.remove('show'); // Oculta el menú overlay al quitar la clase 'show'
});

// Ocultar el menú al hacer clic en un elemento de la lista
const overlayMenuItems = document.querySelectorAll('.overlay-menu li');
overlayMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuOverlay.classList.remove('show'); // Oculta el menú overlay al hacer clic en un elemento
    });
});
