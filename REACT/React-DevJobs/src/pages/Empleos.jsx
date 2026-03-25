import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import HeroJob from "../components/HeroJob";
import JobList from "../components/JobList";
import Pagination from "../components/Pagination";

const Empleos = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [filtros, setFiltros] = useState({
    tecnologia: "",
    ubicacion: "",
    experiencia: "",
  });

  const [orden, setOrden] = useState("");

  const [loading, setLoading] = useState(true);
  const [notData, _setNotData] = useState(true);

  const [paginaActual, setPaginaActual] = useState(1);
  const [trabajosPorPagina] = useState(5);
  const [inputSearch, setInputSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const indiceUltimo = paginaActual * trabajosPorPagina;
  const indicePrimero = indiceUltimo - trabajosPorPagina;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data.json");
        const data = await res.json();
        setTrabajos(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const onInputChange = (e) => {
    e.preventDefault();
    setPaginaActual(1);
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(inputSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputSearch]);

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [paginaActual]);

  const tecnologiasDisponibles = [
    ...new Set(trabajos.flatMap((job) => job.data.technology).sort()),
  ];

  const trabajosFiltrados = trabajos.filter((job) => {
    const matchesSearch =
      !debouncedSearch ||
      job.titulo.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.empresa.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchesTech =
      !filtros.tecnologia || job.data.technology.includes(filtros.tecnologia);

    const matchesUbicacion =
      !filtros.ubicacion || job.ubicacion === filtros.ubicacion;

    const matchesExperiencia =
      !filtros.experiencia || job.data.nivel === filtros.experiencia;

    return (
      matchesSearch && matchesTech && matchesUbicacion && matchesExperiencia
    );
  });

  const trabajosOrdenados = [...trabajosFiltrados].sort((a, b) => {
    switch (orden) {
      case "abc":
        return a.empresa.localeCompare(b.empresa);
      case "zyx":
        return b.empresa.localeCompare(a.empresa);
      case "new":
        return a.fecha.localeCompare(b.fecha);
      case "j-s":
        return a.data.nivel.localeCompare(b.data.nivel);
      case "s-j":
        return b.data.nivel.localeCompare(a.data.nivel);

      default:
    }
  });

  const cantidad = trabajosOrdenados.length;

  const totalPaginas = Math.ceil(cantidad / trabajosPorPagina);

  const trabajosVisibles = trabajosOrdenados.slice(indicePrimero, indiceUltimo);
  const clickPagina = (numero) => setPaginaActual(numero);
  const clickPrev = (numero) => setPaginaActual(numero);
  const clickNext = (numero) => setPaginaActual(numero);

  return (
    <>
      <NavBar />
      <HeroJob
        onFiltroChange={onFiltroChange}
        onInputChange={onInputChange}
        onSortChange={onSortChange}
        tecnologiasDisponibles={tecnologiasDisponibles}
      />
      <JobList
        loadingPage={loading}
        notFound={notData}
        trabajos={trabajosVisibles}
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
