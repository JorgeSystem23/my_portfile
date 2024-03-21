import { smoothScroll } from "./utils.js";
import Carousel from "carouseljs";

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");
const carouselElement = document.querySelector(".carousel");

function showSection(sectionId) {
  sections.forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

// Función para activar el carrusel (si existe)
function initCarousel() {
  if (carouselElement) {
    new Carousel(carouselElement, {
      // Opciones de configuración del carrusel
    });
  }
}

function scrollToSection(event) {
  event.preventDefault();
  const sectionId = event.target.getAttribute("href").substring(1);
  smoothScroll(document.getElementById(sectionId));
}

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

showSection("sobre-mi");
initCarousel();
export { showSection, scrollToSection };
