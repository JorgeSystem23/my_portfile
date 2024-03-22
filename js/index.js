function select() {
  const enlace = event.target.getAttribute("href");
  const seccion = document.querySelector(enlace);
  seccion.scrollIntoView({ behavior: "smooth" });
}

function hideMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("activo");
}

function goToBeginning() {
  window.scrollTo(0, 0);
}

const skillBars = document.querySelectorAll(".barra-skill");

skillBars.forEach((skillBar) => {
  const progreso = skillBar.querySelector(".progreso");
  const progresoInterno = progreso.querySelector(".progreso-interno");
  const percentageSpan = progreso.querySelector(".porcent");

  const percentage = parseInt(percentageSpan.textContent.replace("%", ""));

  progresoInterno.style.width = `${percentage}%`;
  progreso.style.setProperty("--progress-color", percentageSpan.textContent);
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll('.barra-skill .progreso');

  progressBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    const innerBar = bar.querySelector('.progreso-interno');
    innerBar.style.setProperty('--progress-width', `${percentage}%`);

    let color;
    if (percentage < 25) {
      color = "#ff0000";
    } else if (percentage < 50) {
      color = "#ff8000";
    } else if (percentage < 90) {
      color = "#ffff00";
    } else {
      color = "#008000";
    }
    bar.style.setProperty("--progress-color", color);
  });

  document
    .querySelector(".boton-actualizar")
    .addEventListener("click", goToBeginning);
});
