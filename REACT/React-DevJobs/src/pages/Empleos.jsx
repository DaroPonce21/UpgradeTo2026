import React from "react";
import NavBar from "../components/NavBar";
import HeroJob from "../components/HeroJob";
import JobList from "../components/JobList";
import "../styles/Empleos.css";

const Empleos = () => {
  return (
    <>
      <NavBar />
      <HeroJob />
      <JobList />
    </>
  );
};

export default Empleos;
