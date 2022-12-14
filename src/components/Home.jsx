import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./estilos/Home.css";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import Footer from "./Footer";
import Circles from "./Circles";
import { NavLink } from "react-router-dom";
import Carrusel from "./Carrusel";
import CarruselHf from "./CarruselHf";
import fotoGaspi from "./estilos/img/fotoGaspi1.png";

export default function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    /*   localStorage.setItem("theme", theme); */
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`Home ${theme}`}>
      <Circles />
      <nav
        className={`nav ${theme}`}
        style={{
          position: "fixed",
          width: "100%",
          height: "8%",
          display: "flex",
          justifyContent: "center",
          zIndex: "8",
        }}
      >
        <Link
          to="section1"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Presentación</button>
        </Link>
        <Link
          to="section2"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Proyectos</button>
        </Link>
        <Link
          to="section3"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Tecnologías</button>
        </Link>
        <Link
          to="section4"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Contáctame</button>
        </Link>

        <input type="checkbox" id="toggle" onClick={toggleTheme}></input>
        <label for="toggle" className="buttonDark"></label>
        <NavLink to="/HomeEn" className="Spanish">
          <button className="boton">
            <img
              /*  */
              src="https://cdn-icons-png.flaticon.com/512/197/197593.png"
              alt="bandera de España"
              className="imgSpanish"
            />
          </button>
        </NavLink>
      </nav>
      <div className="body">
        <div className="contenedorPresentacion">
          <div id="section1" className="presentacion">
            <div className="nombre">
              <h3 className="titulo">Mi nombre es</h3>
              <h2 className="tituloNombre" id="magui">
                GASPAR MUÑOZ
              </h2>
              <h3 className="subtitulo">Soy Desarrollador Web Full Stack</h3>
            </div>
            {/*   <img src={fotoGaspi} alt="foto" className="imgGaspi" /> */}
          </div>
        </div>
        <div>
          <div /*  id="section1" */>
            <div>
              {/*  <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
                Quién soy?
              </h3> */}
              <div className="contenedorinfo">
                <p className="texto">
                  <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
                    Quién soy?
                  </h3>
                  <p>
                    🔹Desarrollador FullStack con orientación FrontEnd, con la
                    capacidad de desarrollar páginas y aplicaciones web,
                    escalables, modularizadas y optimizadas. ⏱
                  </p>
                  <br />
                  <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
                    Porque yo?
                  </h3>
                  <p>
                    🔸Más allá de los conocimientos técnicos, soy una persona
                    curiosa, que le encanta aprender y enseñar. Me considero una
                    persona con iniciativa, orientado al cliente, creativo y con
                    buena comunicación.📣
                  </p>
                  <br />
                  <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
                    Mi Background?
                  </h3>
                  <p>
                    ✔ Realice cursos de Marketing Digital donde obtuve una
                    certificación de community manager. 🎓
                  </p>
                  <br />
                  <p>
                    ✔ Antes de sumergirme en el mundo IT siempre estuve en
                    puestos laborales relacionados al Marketing, donde aprendí a
                    captar necesidades del cliente y adquirí mis principales
                    Softs Skills. 💼
                  </p>
                  <br />
                  <p>
                    ✔ Ingresé al Bootcamp soyHenry donde, además de
                    familiarizarme con las distintas tecnologías, aprendí
                    metodologías ágiles, a trabajar en conjunto con otros
                    desarrolladores y comunicarme con profesionales que no sean
                    del rubro IT. 👥
                  </p>
                  <br />
                  <p>
                    ✔ Actualmente me encuentro listo para mi primera experiencia
                    laboral en el mundo IT!😁🔔
                  </p>
                  <br />
                  <p>
                    ¿Creés que soy lo que tu equipo está buscando? No dudes en
                    contactarme.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="section2">
          <div>
            <h3 className="quiensooy" style={{ marginTop: "30px" }}>
              Proyectos:
            </h3>

            <div className="contenedorrr">
              <div>
                <p className="tituloProyectos">
                  <b style={{ fontWeight: "550", color: "#84c95f" }}>
                    Dogs App
                  </b>{" "}
                  es una Single Page Application realizada como proyecto
                  individual para el bootcamp de Henry utilizando React para el
                  fornt-end y Redux como state management. Todos los componentes
                  fueron creados con CSS sin uso de librerias externas. La SPA
                  consume datos de una API, a traves de un Back-end desarrollado
                  en NodeJS utilizando Express agregando nuevas funcionalidades
                  a la API original.
                </p>
                <div style={{ width: "50%", marginTop: "0" }}></div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyConten: "flex-end",
                  marginTop: "0",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                <Carrusel />

                <a
                  href="https://dogs-app-client-ten.vercel.app/"
                  key="faltauno"
                  target="_blank"
                >
                  <button className="botonVisitar" style={{ width: "400px" }}>
                    Visitar Dogs App!
                  </button>
                </a>
              </div>
            </div>

            <div
              className="contenedorrr"
              style={{ marginTop: "25px", alignItems: "flex-start" }}
            >
              <div>
                <p
                  className="tituloProyectos"
                  style={{
                    width: "550px",
                    marginLeft: "60px",
                    marginRight: "20px",
                    marginBottom: "0",
                    marginTop: "0",
                  }}
                >
                  <b style={{ fontWeight: "550", color: "#84c95f" }}>
                    Henry Fitness!
                  </b>{" "}
                  Henry Fitness! es una aplicación, realizada en el proyecto
                  grupal de Henry, que busca simplificar por una parte al
                  usuario, con información (staff, actividades, dirección, etc.)
                  y con la suscripción tanto al gimnasio como a las actividades
                  del mismo. Y por otra parte al administrador, brindándole
                  todas las herramientas necesarias para el manejo del día a día
                  (turnos, usuarios, profesionales, etc.). Cuenta con división
                  de perfiles. Uno de administrador, otra de clientes y una mas
                  para potenciales clientes, siendo las tres vistas totalmente
                  diferentes y amoldándose a las necesidades de todos los tipos
                  de usuarios.
                </p>
                <div style={{ width: "50%", marginTop: "0" }}></div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyConten: "flex-end",
                  marginTop: "0",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                <CarruselHf />
                <a
                  href="https://hfitness.vercel.app/"
                  key="faltauno"
                  target="_blank"
                >
                  <button
                    className="botonVisitar"
                    style={{
                      width: "400px",
                      marginBottom: "50px",
                      marginLeft: " 0px",
                    }}
                  >
                    Visitar Henry Fitness!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section3"
          style={{ paddingTop: "180px", paddingBottom: "80px" }}
        >
          <div>
            <h3 className="quiensooy">Tecnologías:</h3>
            <div className="contenedorTecnologias">
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-${"bottom"}`}>javascript</Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/ion:logo-javascript.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>HTML</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/mdi:language-html5.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>CSS</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/teenyicons:css3-solid.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>React</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/akar-icons:react-fill.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>Redux</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/bxl:redux.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-${"bottom"}`}>Bootstrap</Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/cib:bootstrap.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>Node</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/fa-brands:node.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
            </div>
            <div
              className="contenedorTecnologias"
              style={{ marginBottom: "30px" }}
            >
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>Express</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/simple-icons:express.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-${"bottom"}`}>Sequelize</Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/file-icons:sequelize.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-${"bottom"}`}>PostgresSQL</Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/akar-icons:postgresql-fill.svg"
                    className="img"
                  />
                </div>
              </OverlayTrigger>

              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>Git</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/git.png"
                    className="img"
                  />
                </div>
              </OverlayTrigger>

              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip-${"bottom"}`}>Trello</Tooltip>}
              >
                <div className="loguitos">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/trello.png"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="quiensooy">Contáctame:</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-around",
                marginTop: "50px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  textAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginLeft: "-100px",
                  alignItems: "flex-start",
                  marginBottom: "15px",
                }}
              >
                <h4
                  className="contacto"
                  style={{ marginLeft: "40px", textAlign: "start" }}
                >
                  <img
                    src="https://api.iconify.design/carbon:email-new.svg"
                    className="imgContacto"
                  />{" "}
                  gasparmunoz@hotmail.com
                </h4>
                <h4
                  className="contacto"
                  style={{ textAlign: "start", marginLeft: "40px" }}
                >
                  <img
                    src="https://api.iconify.design/ic:baseline-phone.svg"
                    className="imgContacto"
                  />{" "}
                  (+54)1126595851
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section4" className={`Footer ${theme}`}>
        <Footer />
      </div>
    </div>
  );
}
