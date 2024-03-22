// JavaScript para el proyecto HTML

// Función para seleccionar un enlace del menú
function seleccionar() {
  // Aquí puedes agregar el código para manejar la selección del enlace del menú
  // Por ejemplo, podrías resaltar el enlace seleccionado o desplazarte suavemente a la sección correspondiente
  // Aquí te muestro un ejemplo de desplazamiento suave hacia la sección correspondiente
  const enlace = event.target.getAttribute("href"); // Obtener el href del enlace seleccionado
  const seccion = document.querySelector(enlace); // Seleccionar la sección correspondiente
  seccion.scrollIntoView({ behavior: "smooth" }); // Desplazar suavemente hacia la sección
}

// Función para ocultar el menú en dispositivos móviles
function ocultarMenu() {
  // Aquí puedes agregar el código para ocultar el menú cuando se hace clic en el ícono de menú en dispositivos móviles
  // Por ejemplo, podrías ocultar el menú al hacer clic en el ícono de menú
  const nav = document.getElementById("nav"); // Seleccionar el menú de navegación
  nav.classList.toggle("activo"); // Alternar la clase 'activo' para ocultar o mostrar el menú
}

// Event Listener para cargar el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
  // Aquí puedes agregar el código que necesitas ejecutar cuando la página se carga
  // Por ejemplo, podrías inicializar ciertos componentes o realizar alguna acción específica
});
