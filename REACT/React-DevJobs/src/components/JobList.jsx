import "../styles/JobList.css";

const JobList = ({ trabajos, cantidad, paginas, loadingPage }) => {
  return (
    <>
      <section className="jobs-list">
        <header className="jobs-list-title">
          <h2>Resultados de la búsqueda</h2>
          <p>
            Se encotraron {cantidad} trabajos totales en {paginas} paginas
          </p>
        </header>
        <div className="jobs-list-container">
          {loadingPage === true ? (
            <div>cargando</div>
          ) : cantidad === 0 ? (
            <div>NO HAY TRABAJOS PARA MOSTRAR</div>
          ) : (
            <ul className="list-jobs-ul">
              {trabajos?.map((job) => (
                <article key={job.id}>
                  <header>
                    <div className="title-bottom">
                      <a href="./jobDesc.html">
                        <h3>{job.titulo}</h3>
                      </a>
                      <button className="button-apply">Aplicar</button>
                    </div>
                    <div className="props">
                      <p>{job.empresa}</p>
                      <p>|</p>
                      <p className="tech">
                        {job.data.technology.join(" - ").toUpperCase()}
                      </p>
                      <p>|</p>
                      <p className="ubicacion">{job.ubicacion.toUpperCase()}</p>
                      <p>|</p>
                      <p className="nivel">{job.data.nivel.toUpperCase()}</p>
                      <p>|</p>
                      <p className="nivel">
                        {job.fecha.split("/").reverse().join("-")}
                      </p>
                    </div>
                  </header>
                  <div>
                    <p>{job.descripcion}</p>
                  </div>
                </article>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default JobList;
