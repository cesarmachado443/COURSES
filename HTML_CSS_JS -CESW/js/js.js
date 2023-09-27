let ubicacionPrincipal = window.pageYOffset; // 0

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; // Obtener la posición de desplazamiento actual
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px"; // Mostrar la barra de navegación
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"; // Ocultar la barra de navegación
    }
    ubicacionPrincipal = desplazamientoActual; // Actualizar la ubicación principal para el siguiente evento de desplazamiento
});

// Menu

