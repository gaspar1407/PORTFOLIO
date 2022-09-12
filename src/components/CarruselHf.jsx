import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fotoHF1 from "./estilos/img/HF1.png";
import fotoHF2 from "./estilos/img/HF2.png";

export default function CarruselHf() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          src={fotoHF1}
          style={{ width: "750px", zIndex: "1", marginLeft: "10px" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src={fotoHF2}
          style={{ width: "750px", zIndex: "1", marginLeft: "10px" }}
        ></img>
      </Carousel.Item>
    </Carousel>
  );
}
