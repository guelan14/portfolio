import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <section id="contact">
      <header className="seccionTittle">
        <h2>Contact </h2>
      </header>
      <div className="f-container">
        <div className="box">
          <div className="icon">
            <a
              className="button"
              href="https://wa.me/+543743567768/"
              target="blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <div className="text">
            <p>+543743567768</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <a
              className="buttonSecondary"
              href="mailto:miguelangelneumann@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className="text">
            <p>miguelangelneumann@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
