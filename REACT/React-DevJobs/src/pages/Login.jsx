import React from "react";
import MainNavBar from "../components/MainNavBar";
import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <>
      <MainNavBar />
      <main className="container">
        <h2>Iniciar seccion</h2>
        <p>introdusca sus claves de acceso</p>
        <FormLogin />
      </main>
    </>
  );
};

export default Login;
