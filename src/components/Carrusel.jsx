import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fotoDogs1 from "./estilos/img/Dogs1.png";
import fotoDogs2 from "./estilos/img/Dogs2.png";

export default function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          src={fotoDogs2}
          style={{ width: "750px", zIndex: "1", marginLeft: "10px" }}
        ></img>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src={fotoDogs1}
          style={{ width: "750px", zIndex: "1", marginLeft: "10px" }}
        ></img>
      </Carousel.Item>
    </Carousel>
  );
}
