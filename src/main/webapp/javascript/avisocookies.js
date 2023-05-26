// Obtener referencias a los elementos del DOM
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

// Inicializar el dataLayer (arreglo utilizado para el seguimiento de eventos)
dataLayer = [];

// Verificar si las cookies han sido aceptadas anteriormente
if (!localStorage.getItem('cookies-aceptadas')) {
    // Mostrar el aviso de cookies y el fondo del aviso
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
} else {
    // Registrar el evento de cookies aceptadas en el dataLayer
    dataLayer.push({ 'event': 'cookies-aceptadas' });
}

// Agregar un evento de escucha al botón de aceptar cookies
botonAceptarCookies.addEventListener('click', () => {
    // Ocultar el aviso de cookies y el fondo del aviso
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    // Almacenar el estado de cookies aceptadas en localStorage
    localStorage.setItem('cookies-aceptadas', true);

    // Registrar el evento de cookies aceptadas en el dataLayer
    dataLayer.push({ 'event': 'cookies-aceptadas' });
});
