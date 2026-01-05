import React from "react";

const JobList = () => {
  return (
    <>
      <section class="jobs-list">
        <header class="jobs-list-title">
          <h2>Resultados de la búsqueda</h2>
        </header>
        <div class="jobs-list-container">
          <ul class="list-jobs-ul">ACA VA LA LISTA DE EMPLEOS</ul>
        </div>
      </section>
      <section>
        <ul class="pagination">
          <li>
            <a href="" class="active">
              1
            </a>
          </li>
          <li>
            <a href=""> 2 </a>
          </li>
          <li>
            <a href=""> 3 </a>
          </li>
          <li>
            <a href=""> 4 </a>
          </li>
          <li>
            <a href=""> 5 </a>
          </li>
          <li>
            <a href=""> 6 </a>
          </li>
          <li>
            <a href=""> 7 </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default JobList;
