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

const DATA_URL = "./data.json";

const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// crea los <li> y los agrega al ul
async function loadAndRenderJobs() {
  const container = document.querySelector(".list-jobs-ul");
  container.innerHTML = ""; // limpiar por si acaso
  let jobs;
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    jobs = await res.json();
  } catch (err) {
    console.error("Error cargando data.json:", err);
    container.innerHTML = "<li>Error cargando ofertas. Revisa consola.</li>";
    return;
  }

  jobs.forEach((job) => {
    const li = document.createElement("li");
    console.log(job);

    li.dataset.technology = job.data.technology.join(" ").toLowerCase();
    li.dataset.ubicacion = job.ubicacion.toLowerCase();
    li.dataset.modalidad = job.data.modalidad.toLowerCase();
    li.dataset.nivel = job.data.nivel.toLowerCase();
    li.dataset.id = job.id;
    const tech = job.data.technology.map((t) => capitalize(t)).join(" • ");

    li.innerHTML = `
    <article>
        <header>
          <div class="title-bottom">
            <a href="./jobDesc.html"><h3>${job.titulo}</h3></a>
            <button class="button-apply">Aplicar</button>
          </div>
          <div class="props" data-key="${job.id}">
            <p>${job.empresa}</p>
            <p>|</p>
            <p class="tech">${tech}</p>
            <p>|</p>
            <p class="ubicacion">${job.ubicacion}</p>
            <p>|</p>
            <p class="nivel">${capitalize(job.data.nivel)}</p>
          </div>
        </header>
        <div>
          <p>${job.descripcion}</p>
        </div>
      </article>
    `;

    container.appendChild(li);
  });

  // después de poblar, ejecutamos el filtro para aplicar el estado actual de selects
  filterJobs();
}

// función que filtra según los selects (siempre lee los li actuales)
function filterJobs() {
  // obtiene selects y valores (ya vienen en minúsculas en options)
  const filters = {
    technology: document.getElementById("filter-technology").value,
    ubicacion: document.getElementById("filter-ubication").value,
    modalidad: document.getElementById("filter-contrato").value,
    nivel: document.getElementById("filter-experiencia").value,
  };

  const jobItems = document.querySelectorAll(".list-jobs-ul li");

  jobItems.forEach((job) => {
    const techs = job.dataset.technology || "";
    const ubicacion = job.dataset.ubicacion || "";
    const modalidad = job.dataset.modalidad || "";
    const nivel = job.dataset.nivel || "";

    const matchesTech =
      filters.technology === "todas" ||
      filters.technology === "default" ||
      techs.includes(filters.technology);

    const matchesUbicacion =
      filters.ubicacion === "todas" ||
      filters.ubicacion === "default" ||
      ubicacion === filters.ubicacion;

    const matchesContrato =
      filters.modalidad === "todas" ||
      filters.modalidad === "default" ||
      modalidad === filters.modalidad;

    const matchesExp =
      filters.nivel === "todas" ||
      filters.nivel === "default" ||
      nivel === filters.nivel;

    const isVisible =
      matchesTech && matchesUbicacion && matchesContrato && matchesExp;

    job.classList.toggle("hidden", !isVisible);
  });
}

// inicializa la app: carga datos, registra listeners
async function init() {
  // 1) cargamos y renderizamos los jobs
  await loadAndRenderJobs();

  // 2) registramos listeners EN LOS SELECTS
  const selects = document.querySelectorAll(".job-search-select select");
  selects.forEach((select) => {
    select.addEventListener("change", () => {
      // cada cambio vuelve a filtrar tomando los li actuales
      filterJobs();
    });
  });
}

// arrancamos al cargar DOM
document.addEventListener("DOMContentLoaded", init);

/********************/

// buscador de texto (por título/empresa/descripción)
/*const searchInput = document.getElementById("searchJobs");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      const items = document.querySelectorAll(".list-jobs-ul li");
      items.forEach((li) => {
        const text = li.textContent.toLowerCase();
        const matchesText = q === "" || text.includes(q);
        // además de filtros, respetamos el estado actual de selects
        if (!matchesText) li.classList.add("hidden");
        else {
          // si coincide en texto, aplicamos también los filtros selects
          // para reutilizar la lógica, la llamamos y luego quitamos el ocultamiento solo si filterJobs lo permite
          // pero para simplicidad: llamamos filterJobs luego de un input
          filterJobs();
        }
      });
    });
  }*/
