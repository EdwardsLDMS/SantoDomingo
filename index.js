const titleElement = document.getElementById("explora-title");
const titleText = "Explora Colegio Santo Domingo";
let index = 0;
let observer;

// Función para escribir el texto letra por letra
function typeWriter() {
    if (index < titleText.length) {
        titleElement.innerHTML += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Ajusta el tiempo según la velocidad deseada
    }
}

// Función de callback para el Intersection Observer
const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            typeWriter(); // Inicia la escritura cuando el título está visible
            observer.disconnect(); // Deja de observar una vez que se ha iniciado la escritura
        }
    });
};

// Crear el Intersection Observer
observer = new IntersectionObserver(callback);

// Comenzar a observar el título
observer.observe(titleElement);


const programs = document.querySelectorAll('.program');

const observa = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

programs.forEach(program => {
    observa.observe(program);
});


