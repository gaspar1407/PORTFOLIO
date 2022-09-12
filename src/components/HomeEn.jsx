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

export default function HomeEn() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    /* localStorage.setItem("theme", theme); */
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
          <button className="boton">Presentation</button>
        </Link>
        <Link
          to="section2"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Projects</button>
        </Link>
        <Link
          to="section3"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Technologies</button>
        </Link>
        <Link
          to="section4"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Contact me</button>
        </Link>
        <input type="checkbox" id="toggle" onClick={toggleTheme}></input>
        <label for="toggle" className="buttonDark"></label>
        <NavLink to="/" className="Spanish">
          <button className="boton">
            <img
              src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
              alt="spanishFlag"
              className="imgSpanish"
            />
          </button>
        </NavLink>
      </nav>
      <div className="body">
        <div
          className="contenedorPresentacion"
          /*   style={{
            backgroundImage: `url(https://ca.slack-edge.com/TPRS7H4PN-U0387NWK7QR-dafca4021140-512)`,
            backgroundPosition: "100% -50%",
            backgroundSize: "700px",
            backgroundRepeat: "no-repeat",
            height: "650px",
            width: "90%",
          }} */
        >
          <div id="section1" className="presentacion">
            <div className="nombre">
              <h3 className="titulo">My name is</h3>
              <h2 className="tituloNombre" id="magui">
                GASPAR MUÑOZ
              </h2>
              <h3 className="subtitulo">I am a full stack web developer</h3>
            </div>
            <img
              src="https://ca.slack-edge.com/TPRS7H4PN-U0387NWK7QR-dafca4021140-512"
              alt="foto"
              className="imgGaspi"
            />
          </div>
        </div>
        <div>
          <div /*  id="section1" */>
            <div>
              <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
                who I am?
              </h3>
              <div className="contenedorinfo">
                <p className="texto">
                  I am a specialized developer as a Front End Developer.
                  Curious, eager to always learn new things that Help me grow
                  personally and professionally every day. With excellent
                  resolution capacity, always looking for ways fast and
                  effective in solving problems, and with good leadership.
                  <br />I started my training at the Henry academy and I still
                  constantly training in a self-taught way.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="section2">
          <div>
            <h3 className="quiensoy" style={{ marginTop: "30px" }}>
              Projects:
            </h3>

            <div className="contenedorrr">
              <div>
                <p className="tituloProyectos">
                  <b style={{ fontWeight: "550", color: "#84c95f" }}>
                    Dogs App
                  </b>
                  it's a single Page Application realized as an individual
                  project for the Henry's bootcamp using React for the front-end
                  and Redux as state management. All components were created
                  with CSS without the use of external libraries. The SPA
                  consumes data from an API, through a Back-end developed in
                  NodeJS using Express adding new functionality to the API
                  original.
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
                    Visit Dogs App!
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
                  It's a application, made in Henry's group project, which seeks
                  to simplify the user on the one hand, with information (staff,
                  activities, management, etc.) and with the subscription both
                  to the gym and to its activities. and on the other part to the
                  administrator, providing all the tools necessary for
                  day-to-day management (shifts, users, professionals, etc). It
                  has profiles division. One of administrator, another for
                  clients and one more for potential customers, the three views
                  being totally different and adapting to the needs of all types
                  of users.
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
                      /*  marginTop: "80px", */
                      width: "400px",
                      marginBottom: "50px",
                      marginLeft: " 0px",
                    }}
                  >
                    Visit Henry Fitness!
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
            <h3 className="quiensoy">Technologies:</h3>
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
            <h3 className="quiensoy">contact me:</h3>
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
