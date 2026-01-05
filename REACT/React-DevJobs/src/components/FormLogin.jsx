import React from "react";

const FormLogin = () => {
  return (
    <div>
      <form action="submit" className="">
        <div className="inputform">
          <label htmlFor="email" className="visually-hidden">
            introdusca su email
          </label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <label htmlFor="password" className="visually-hidden">
            introdusca su contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="remember-forgot">
          <label htmlFor="checkbox" className="visually-hidden">
            Seleccionar para recordar usuario
          </label>
          <input type="checkbox" name="checkbox" id="checkbox"></input>
          <label htmlFor="checkbox">Recuerdame</label>
          <a href="/forgot-password">Olvide mi contraseña</a>
        </div>
        <div className="button">
          <button className="button-apply" type="submit">
            Ingresar
          </button>
        </div>
        <legend>¿No tienes cuenta?</legend>
        <div className="auth-buttons">
          <a className="button">Crear cuenta para Desarrollador</a>
          <a>Crear cuenta para Empresa</a>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
