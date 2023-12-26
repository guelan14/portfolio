import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <section id="contact">
      <header className="customTittle text-center">
        <h2>Contact me</h2>
      </header>
      <div className="contenido">
        <div className="customContainer">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <a href="https://wa.me/+543743567768/" target="blank">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+543743567768</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <a href="mailto:miguelangelneumann@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>miguelangelneumann@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
