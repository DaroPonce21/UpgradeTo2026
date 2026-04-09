import React, { useMemo } from "react";

const useFielters = (trabajos, debouncedSearch, orden, filtros) => {

  const memoFiltros = useMemo(() => {
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
    return trabajosFiltrados;
  }, [debouncedSearch, filtros, trabajos]);

  const memoOrden = useMemo(() => {
    const ranking = {
      training: 0,
      junior: 1,
      "semi-senior": 2,
      senior: 3,
    };
    const SORTS = {
      abc: (a, b) => a.empresa.localeCompare(b.empresa),
      zyx: (a, b) => b.empresa.localeCompare(a.empresa),
      new: (a, b) => a.fecha.localeCompare(b.fecha),
      "j-s": (a, b) => ranking[a.data.nivel] - ranking[b.data.nivel],
      "s-j": (a, b) => ranking[b.data.nivel] - ranking[a.data.nivel],
    };
    let trabajosOrdenados = [];
    if (orden !== "") {
      trabajosOrdenados = [...memoFiltros].sort(SORTS[orden]);
    } else {
      trabajosOrdenados = [...memoFiltros];
    }
    return trabajosOrdenados;
  }, [orden, memoFiltros]);
};

export default useFielters;
