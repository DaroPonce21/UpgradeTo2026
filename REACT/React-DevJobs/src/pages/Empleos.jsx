import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import HeroJob from "../components/HeroJob";
import JobList from "../components/JobList";
import Pagination from "../components/Pagination";
import useDebounce from "../hooks/useDebounce";
import useJobs from "./../hooks/useJobs";
import useFielters from "./../hooks/useFielters";

const Empleos = () => {
  /*-------------------------------LLAMADAS-------------------------------*/
  const [inputSearch, setInputSearch] = useState("");
  const debouncedSearch = useDebounce(inputSearch, 300);

  const useJobsData = useJobs();
  const { trabajos, loading } = useJobsData;

  const [orden, setOrden] = useState("");
  const [filtros, setFiltros] = useState({
    tecnologia: "",
    ubicacion: "",
    experiencia: "",
  });

  const useFieltersData = useFielters(
    filtros,
    trabajos,
    debouncedSearch,
    orden,
  );
  const { memoOrden } = useFieltersData;

  /*------------------------------- ESTADOS -------------------------------*/

  const [paginaActual, setPaginaActual] = useState(1);
  const [trabajosPorPagina] = useState(5);

  const indiceUltimo = paginaActual * trabajosPorPagina;
  const indicePrimero = indiceUltimo - trabajosPorPagina;

  /* -------------------------------HOOKS -------------------------------*/

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [paginaActual]);

  const memoTech = useMemo(() => {
    const tecnologiasDisponibles = [
      ...new Set(trabajos.flatMap((job) => job.data.technology).sort()),
    ];

    return tecnologiasDisponibles;
  }, [trabajos]);

  const memoTrabajosPorPagina = useMemo(() => {
    const trabajosVisibles = memoOrden.slice(indicePrimero, indiceUltimo);
    return trabajosVisibles;
  }, [indicePrimero, indiceUltimo, memoOrden]);

  /* -------------------------------FUNCIONES -------------------------------*/

  const onInputChange = (e) => {
    e.preventDefault();
    setPaginaActual(1);
    setInputSearch(e.target.value);
  };

  const onFiltroChange = (e) => {
    const { name, value } = e.target;

    setPaginaActual(1);

    setFiltros((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSortChange = (e) => {
    setPaginaActual(1);
    setOrden(e.target.value);
  };
  /*
  const resetFiltros = () => {
    setFiltros("");
    setDebouncedSearch("");
    setInputSearch("");
    setOrden("");
    setPaginaActual(1);
  };
  */

  const cantidad = memoOrden.length;

  const totalPaginas = Math.ceil(cantidad / trabajosPorPagina);

  const clickPagina = (numero) => setPaginaActual(numero);
  const clickPrev = (numero) => setPaginaActual(numero);
  const clickNext = (numero) => setPaginaActual(numero);

  /*-------------------------------RETURN-------------------------------*/

  return (
    <>
      <NavBar />
      <HeroJob
        onFiltroChange={onFiltroChange}
        onInputChange={onInputChange}
        onSortChange={onSortChange}
        tecnologiasDisponibles={memoTech}
        //  resetFiltros={resetFiltros}
      />
      <JobList
        loadingPage={loading}
        trabajos={memoTrabajosPorPagina}
        cantidad={cantidad}
        paginas={totalPaginas}
      />
      <Pagination
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        clickPagina={clickPagina}
        clickPrev={clickPrev}
        clickNext={clickNext}
      />
    </>
  );
};

export default Empleos;
