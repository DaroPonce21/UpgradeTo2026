import "../styles/HeroJob.css";

const HeroJob = () => {
  return (
    <main className="container">
      <section class="Hero-job">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico</p>
        <form action="search" class="job-form">
          <div class="job-search-field">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <label for="searchJobs" class="visually-hidden">
              Campo para buscar trabajos, empresas o habilidades
            </label>
            <input
              type="text"
              name="searchJobs"
              id="searchJobs"
              placeholder="Buscar trabajos, empresas o habilidades"
            />
          </div>
          <div class="job-search-select">
            <select name="tecnologia" id="filter-technology">
              <option value="default" hidden>
                Tecnologia
              </option>
              <option value="todas">Todas</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="react">React</option>
            </select>
            <select name="ubicacion" id="filter-ubication">
              <option value="default" hidden>
                Ubicacion
              </option>
              <option value="todas">Todas</option>
              <option value="remoto">Remoto</option>
              <option value="hibrido">Hibrido</option>
              <option value="presencial">Presencial</option>
            </select>
            <select name="contrato" id="filter-contrato">
              <option value="default" hidden>
                Tipo de contrato
              </option>
              <option value="todas">Todas</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="freelance">Freelance</option>
            </select>
            <select name="experiencia" id="filter-experiencia">
              <option value="default" hidden>
                Nivel de experiencia
              </option>
              <option value="todas">Todas</option>
              <option value="junior">Junior</option>
              <option value="semi-senior">Semi Senior</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </form>
      </section>
    </main>
  );
};

export default HeroJob;
