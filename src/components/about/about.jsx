import "./About.css";
import Claudia2 from "../../assets/img/Claudia2.jpg";

const About = () => {
  return (
    <div className="boxAbout" id="about">
      <section className="sectionImg">
        <img className="imgAbout" src={Claudia2} alt="" />
      </section>

      <section className="sectionText">
        <h3>Sobre el proyecto</h3>
        <p>
          Clabelle es un emprendimiento personal que surge de mis experiencias como una mujer, que no solo es mamá si no que tambien trabaja, estudia , crea y sueña. Con nuestros productos buscamos acompañarte dia a día y brindarte una opción linda, fresca y accesible para que puedas renovar tus mochilas y accesorios.
        </p>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
            >
              <path d="M260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-90v30h440v-30H260Zm0-60h440v-580H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z" />
            </svg>
          </div>
          <h2>@Clabelle.mya</h2>
        </div>
      </section>
    </div>
  );
};

export default About;
