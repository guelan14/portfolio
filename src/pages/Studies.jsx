import React from "react";

export const Studies = () => {
  return (
    <section id="studies">
      <header className="seccionTittle">
        <h2>Studies</h2>
        <h3>What did I study to do this!</h3>
      </header>
      <div className="grid-container">
        <div className="titulo1 grid-item">
          <h4>3rd year student Information Systems Engineering</h4>
          <p className="grid-uni">Universidad de la Cuenca del Plata (UCP)</p>
        </div>
        <div className="titulo2 grid-item">
          <h4>Process Industry Technician </h4>
          <p className="grid-uni">E.P.E.T. N10</p>
        </div>
        <div className="cursos grid-item">
          <h2>Courses </h2>
          <ul>
            <li>Master en APIs RESTful con NodeJS</li>
            <li>Practical Curse Django: Web Development Backend with Python</li>
            <li> The Complete 2023 Web Development Bootcamp</li>
            <li>Ultimate AWS Certified Cloud Practitioner – 2023</li>
            <li>First steps of frontend development</li>
            <li>SQL: Creation of databases</li>
            <li>The Complete 2023 Web Development Bootcamp</li>
            <li>Ultimate AWS Certified Cloud Practitioner – 2023</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
