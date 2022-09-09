import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./estilos/Home.css";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import Footer from "./Footer";
import fotoDogs1 from "./estilos/img/Dogs1.png";
import fotoDogs2 from "./estilos/img/Dogs2.png";
import fotoHF1 from "./estilos/img/HF1.png";
import fotoHF2 from "./estilos/img/HF2.png";
export default function Home() {
  return (
    <div className="todo">
      <nav
        className="nav"
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
      </nav>
      <div className="body">
        <div
          className="contenedorPresentacion"
          style={{
            backgroundImage: `url(https://ca.slack-edge.com/TPRS7H4PN-U0387NWK7QR-dafca4021140-512)`,
            backgroundPosition: "100% -50%",
            backgroundSize: "700px",
            backgroundRepeat: "no-repeat",
            height: "650px",
            width: "90%",
            /*   backgroundColor: "white", */
          }}
        >
          <div className="presentacion">
            <div className="nombre">
              <h3 className="titulo">Mi nombre es</h3>
              <h2 className="tituloNombre" id="magui">
                GASPAR MUÑOZ
              </h2>
              <h3 className="subtitulo">Soy Desarrollador Web Full Stack</h3>
            </div>
          </div>
        </div>
        <div>
          <div id="section1">
            <div>
              <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
                Quién soy?
              </h3>
              <div className="contenedorinfo">
                <p className="texto">
                  Soy desarrollador especializado como Front End Developer.
                  Curioso, con ganas de aprender siempre cosas nuevas que me
                  ayuden a crecer personal y profesionalmente cada día. Con
                  excelente capacidad resolutiva, siempre buscando maneras
                  rápidas y eficaces de solucionar los problemas, y con buena
                  capacidad de liderazgo.
                  <br />
                  Inicié mi capacitación en la academia Henry y me sigo
                  capacitando constantemente de manera autodidacta.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="section2">
          <div>
            <h3 className="quiensoy" style={{ marginTop: "30px" }}>
              Proyectos:
            </h3>

            <div className="contenedorrr">
              <div>
                <p className="tituloProyectos">
                  <b style={{ fontWeight: "550" }}>Dogs App</b> es una Single
                  Page Application realizada como proyecto individual para el
                  bootcamp de Henry.
                </p>
                <div style={{ width: "50%", marginTop: "0" }}>
                  <img
                    src={fotoDogs1}
                    style={{
                      width: "650px",
                      marginLeft: "50px",
                      position: "absolute",
                      zIndex: "5",
                    }}
                  ></img>
                </div>
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
                <img
                  src={fotoDogs2}
                  style={{ width: "750px", zIndex: "1", marginLeft: "200px" }}
                ></img>
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
                  <b style={{ fontWeight: "550" }}>Henry Fitness!</b> es una
                  aplicación, realizada en el proyecto grupal de Henry, que
                  busca simplificar por una parte al usuario, con infomación
                  (staff, actividades, dirección, etc.) y con la suscripción
                  tanto al gimnacio como a las actividades del mismo. Y por otra
                  parte al administrador, brindandole todas las herramientas
                  necesarias para el manejo del dia a dia (turnos, usuarios,
                  profesionales, etc.). Cuenta con división de perfiles. Uno de
                  administrador, otra de clientes y una mas para potenciales
                  clientes, siendo las tres vistas totalmente diferentes y
                  amoldándose a las necesidades de todos los tipos de usuarios..
                </p>
                <div style={{ width: "50%", marginTop: "0" }}>
                  <img
                    src={fotoHF2}
                    style={{
                      width: "680px",
                      marginLeft: "10px",
                      position: "absolute",
                      zIndex: "6",
                    }}
                  ></img>
                </div>
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
                <img
                  src={fotoHF1}
                  style={{ width: "750px", zIndex: "2", marginLeft: "100px" }}
                ></img>
                <a
                  href="https://hfitness.vercel.app/"
                  key="faltauno"
                  target="_blank"
                >
                  <button
                    className="botonVisitar"
                    style={{
                      marginTop: "80px",
                      width: "400px",
                      marginBottom: "120px",
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
            <h3 className="quiensoy">Tecnologías:</h3>
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
                  <Tooltip id={`tooltip-${"bottom"}`}>PostresSQL</Tooltip>
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
            <h3 className="quiensoy">Contáctame:</h3>
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
      <div id="section4">
        <Footer />
      </div>
    </div>
  );
}
