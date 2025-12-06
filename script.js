const botonjobs = document.querySelector(".jobs-list");

botonjobs.addEventListener("click", (e) => {
  const elemento = e.target;
  if (elemento.classList.contains("button-apply")) {
    elemento.textContent = "¡Aplicado!";
    elemento.classList.add("aplicado");
    elemento.style.backgroundColor = "#4caf50"; //esto conviene hacerlo en css
    elemento.style.cursor = "not-allowed"; ///esto conviene hacerlo en css
    elemento.disabled = true;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".job-search-select select");
  const jobs = document.querySelectorAll(".jobs-list-container ul li");

  function filterJobs() {
    const filters = {
      tech: document.getElementById("filter-technology").value,
      ubicacion: document.getElementById("filter-ubication").value,
      contrato: document.getElementById("filter-contrato").value,
      exp: document.getElementById("filter-experiencia").value,
    };

    jobs.forEach((job) => {
      const matchesTech =
        filters.tech === "defaul" ||
        filters.tech === "todas" ||
        job.dataset.tech === filters.tech;

      const matchesUbicacion =
        filters.ubicacion === "defaul" ||
        filters.ubicacion === "todas" ||
        job.dataset.ubicacion === filters.ubicacion;

      const matchesContrato =
        filters.contrato === "defaul" ||
        filters.contrato === "todas" ||
        job.dataset.contrato === filters.contrato;

      const matchesExp =
        filters.exp === "defaul" ||
        filters.exp === "todas" ||
        job.dataset.exp === filters.exp;

      const isVisible =
        matchesTech && matchesUbicacion && matchesContrato && matchesExp;

      job.classList.toggle("hidden", !isVisible);
    });
  }

  selects.forEach((select) => {
    select.addEventListener("change", filterJobs);
  });
});
