import React from "react";

export const About = () => {
  return (
    <section id="about">
      <header>
        <h2 className="seccionTittle">About Me</h2>
      </header>

      <div className="container">
        <div className="aboutPhoto">
          <img className="aboutPhotoImg" src="../../images/profile.png" />
        </div>
        <div className="aboutInfo">
          <p>
            I'm a creative and dedicated person. Currently, I'm studying
            Engineering and taking online courses to continuously expand my
            skills and knowledge.
          </p>
          <br></br>
          <p>
            Beyond coding and studing, I immerse myself in music, sports, and
            drawing, channeling my creativity and enhancing my well-rounded
            perspective.
          </p>
          <br></br>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>Miguel Angel Neumann</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>miguelangelneumann@gmail.com</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>Febraury 14, 2000</td>
              </tr>
              <tr>
                <td>Nationality:</td>
                <td>Argentinian-German</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>Misiones, Posadas</td>
              </tr>
              <tr>
                <td>
                  <a
                    className="buttonSecondary"
                    href="../../files/NeumannMiguelAngelCV.pdf"
                    download
                  >
                    Hire Me
                  </a>
                </td>
                <td>
                  <a
                    className="button"
                    href="../../files/NeumannMiguelAngelCV.pdf"
                    download
                  >
                    Download CV
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="seccionTittle">
        <h2>Highlights Skills</h2>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h3 className="skillTittle">Tecnologies</h3>
          <ul>
            <li>Mongoose</li>
            <li>Node</li>
            <li>Express</li>
            <li>Postman</li>
            <li>Django</li>
            <li>MySql</li>
          </ul>
        </div>
        <div className="grid-item">
          <h3 className="skillTittle">Programming Lenguages</h3>
          <ul>
            <li>C/C++</li>
            <li>Python</li>
            <li>Sql</li>
            <li>Html</li>
            <li>Css</li>
            <li>Js</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="grid-item">
          <h3 className="skillTittle">Courses </h3>
          <ul>
            <li>English: B2</li>
            <li> German: B1</li>
            <li>Spanish: Native</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
