import React from "react";
import NavBar from "../components/NavBar";
import HeroJob from "../components/HeroJob";
import JobList from "../components/JobList";
import Pagination from "../components/Pagination";

const Empleos = () => {
  return (
    <>
      <NavBar />
      <HeroJob />
      <JobList />
      <Pagination />
    </>
  );
};

export default Empleos;
