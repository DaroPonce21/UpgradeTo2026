import "../styles/FormProfile.css";

const FormProfile = () => {
  return (
    <>
      <form action="submit">
        <>
          <h3>Informacion personal</h3>
          <label htmlFor="name">Nombre completo</label>{" "}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingrese su nombre completo"
          />
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="tu_mail@tu_mail.com"
          />
          <label htmlFor="location">Ubicacion</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Pais - Ciudad"
          />
          <label htmlFor="aboutMe">Sobre Mi</label>
          <textarea
            name="aboutMe"
            id="aboutMe"
            placeholder="Cuenta brevemente quien eres"
          ></textarea>
        </>

        <hr />

        <>
          <h3>Experiencia</h3>
          <label htmlFor="job">Cargo</label>{" "}
          <input
            type="text"
            name="job"
            id="job"
            placeholder="Ingrese el cargo que ocupaba"
          />
          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Ingrese la empresa para la que trabajo"
          />
          <label htmlFor="dateOfStart">Ingrese fecha de inicio</label>
          <input type="date" name="dateOfStart" id="dateOfStart" />
          <label htmlFor="dateOfEnd">Ingrese fecha de finalizacion</label>
          <input type="date" name="dateOfEnd" id="dateOfEnd" />
          <label htmlFor="working">
            Si aun trabaja en ese lugar marque esta casilla
          </label>
          <input type="checkbox" name="working" id="working" />
          <label htmlFor="calculo">Experiencia total es: </label>
        </>

        <hr />

        <>
          <h3>Habilidades</h3>
          <button>JavaScript</button>
          <button>React</button>
          <button>Angular</button>
          <button>Node.js</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>Pythom</button>
          <button>Java</button>
        </>

        <hr />

        <>
          <h3>Cargar CV</h3>
          <input type="file" name="" id="" />
        </>
      </form>
    </>
  );
};

export default FormProfile;
