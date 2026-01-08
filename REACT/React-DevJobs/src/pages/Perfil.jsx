import React from "react";
import AsideProfile from "../components/AsideProfile";
import FormProfile from "../components/FormProfile";

const Perfil = () => {
  return (
    <div className="container">
      <div>
        <AsideProfile />
        <main>
          <section>
            <h1>Mi Perfil</h1>
            <p>Actualiza tu informacion personal y profesional</p>
          </section>
          <section>
            <FormProfile />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Perfil;
