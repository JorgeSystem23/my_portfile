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

function downloadFile() {
  const downloadButton = document.getElementById("downloadCurriculum");

  downloadButton.addEventListener("click", function () {
    const pdfPath = "../files/CV Jorge Luis Grullón Marroquín 06_03_2024 19_55_00.pdf";

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "CV-Jorge Luis Grullón Marroquín.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".barra-skill .progreso");

  progressBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    const innerBar = bar.querySelector(".progreso-interno");
    innerBar.style.setProperty("--progress-width", `${percentage}%`);

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
    .getElementById("downloadCurriculum")
    .addEventListener("click", downloadFile);

  document
    .querySelector(".boton-actualizar")
    .addEventListener("click", goToBeginning);
});
