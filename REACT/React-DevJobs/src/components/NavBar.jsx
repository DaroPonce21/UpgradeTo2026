import React from "react";

const NavBar = () => {
  return (
    <header>
      <div class="container header-inner">
        <a class="logo" href="/">
          <svg
            class="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <h1>DevJobs</h1>
        </a>

        <nav aria-label="Menu principal">
          <a href="">Buscar</a>
          <a href="./empleos">Empleos</a>
          <a href="/empresas">Empresas</a>
          <a href="/salarios">Salarios</a>
        </nav>
        <div class="auth-buttons">
          <a href="/publicar">Publicar un empleo</a>
          <a href="/perfil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
