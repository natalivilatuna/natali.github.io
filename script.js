// Variables globales
let menuVisible = false;
let proyectoActual = 0;
const proyectos = document.querySelectorAll('.carrusel-item');
const totalProyectos = proyectos.length;

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var idiomas = document.getElementById("idiomas");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    var distancia_idiomas = window.innerHeight - idiomas.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("matlab");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("illustrator");
        habilidades[3].classList.add("coreldraw");
        habilidades[4].classList.add("solidworks");
        habilidades[5].classList.add("ansys");
        habilidades[6].classList.add("labview");
        habilidades[7].classList.add("arduino");
        habilidades[8].classList.add("iot");
        habilidades[9].classList.add("cadcam");
        habilidades[10].classList.add("plc");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("trabajo");
        habilidades[13].classList.add("creatividad");
        habilidades[14].classList.add("dedicacion");
        habilidades[15].classList.add("proyect");
    }

    if (distancia_idiomas >= 300) {
        let habilidades_idiomas = document.querySelectorAll("#idiomas .progreso");
        habilidades_idiomas[0].classList.add("ingles");
        habilidades_idiomas[1].classList.add("espanol");
        habilidades_idiomas[2].classList.add("frances");
    }
}

function descargarCV() {
    // Reemplaza esta URL con la ruta correcta a tu archivo CV
    var pdfUrl = 'ruta/a/tu/Natali_Vilatuna_CV.pdf';
    
    // Crea un elemento <a> temporal
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; // Abre en una nueva pestaña
    link.download = 'Natali_Vilatuna_CV.pdf';
    
    // Añade el enlace al documento y simula un clic
    document.body.appendChild(link);
    
    try {
        link.click();
    } catch (error) {
        console.error('Error al intentar descargar el CV:', error);
        alert('Hubo un problema al descargar el CV. Por favor, inténtalo de nuevo más tarde.');
    } finally {
        // Limpia el elemento creado
        document.body.removeChild(link);
    }
}

// Funciones para el carrusel de proyectos
function mostrarProyecto(indice) {
    if (indice < 0) {
        proyectoActual = totalProyectos - 1;
    } else if (indice >= totalProyectos) {
        proyectoActual = 0;
    } else {
        proyectoActual = indice;
    }

    const desplazamiento = -proyectoActual * 100;
    document.querySelector('.carrusel-interno').style.transform = `translateX(${desplazamiento}%)`;
}

// Event Listeners
window.onscroll = function() {
    efectoHabilidades();
}

document.querySelector('.carrusel-control.prev').addEventListener('click', () => {
    mostrarProyecto(proyectoActual - 1);
});

document.querySelector('.carrusel-control.next').addEventListener('click', () => {
    mostrarProyecto(proyectoActual + 1);
});

// Inicialización
document.addEventListener('DOMContentLoaded', (event) => {
    // Opcional: Avance automático del carrusel
    setInterval(() => {
        mostrarProyecto(proyectoActual + 1);
    }, 5000); // Cambia de proyecto cada 5 segundos
});