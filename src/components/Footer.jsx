import React from "react";
import "./estilos/Footer.css";

const Footer = () => {
  return (
    <div className="main-Footer">
      <div className="redes-container">
        <a
          href="https://github.com/gaspar1407"
          target="_blank"
          rel="noreferrer"
          className="foot-btn"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gaspar-mu%C3%B1oz-7a9825239/"
          target="_blank"
          rel="noreferrer"
          className="foot-btn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/gaspar.mnz/"
          target="_blank"
          rel="noreferrer"
          className="foot-btn"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/gasparsuchis/"
          target="_blank"
          rel="noreferrer"
          className="foot-btn"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
