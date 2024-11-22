import React from "react";

export const About = () => {
  return (
    <section id="about">
      <header>
        <h2 className="seccionTittle">About Me</h2>
      </header>

      <div className="container">
        <div className="aboutPhoto">
          <img className="aboutPhotoImg" src="../../images/imagen-cv.webp" />
        </div>
        <div className="aboutInfo">
          <p>
            I'm a creative and dedicated person. Currently, I'm studying
            <strong> Engineering</strong> and taking
            <strong> online courses</strong> to continuously expand my skills
            and knowledge.
          </p>
          <br></br>
          <p>
            Beyond coding and studying, I immerse myself in music, sports, and
            drawing, channeling my creativity and enhancing my well-rounded
            perspective.
          </p>
          <br></br>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>Name:</span>
                </td>
                <td>Miguel Angel Neumann</td>
              </tr>
              <tr>
                <td>
                  <span>Email:</span>
                </td>
                <td>miguelangelneumann@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <span>Date of Birth:</span>
                </td>
                <td>February 14, 2000</td>
              </tr>
              <tr>
                <td>
                  <span>Nationality:</span>
                </td>
                <td>Argentinian-German</td>
              </tr>
              <tr>
                <td>
                  <span>Address:</span>
                </td>
                <td>Misiones, Posadas</td>
              </tr>
              <tr>
                <td>
                  <a
                    className="buttonSecondary"
                    href="mailto:miguelangelneumann@gmail.com"
                    download
                  >
                    Hire Me
                  </a>
                </td>
                <td>
                  <a
                    className="button"
                    href="../../files/NEUMANN-MIGUEL-CV-ES.pdf"
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
          <h3 className="skillTittle">Technologies</h3>
          <ul>
            <li>Mongoose</li>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
            <li>Postman</li>
            <li>Django</li>
            <li>MySql</li>
            <li>Jwt</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="grid-item">
          <h3 className="skillTittle">Programming Languages</h3>
          <ul>
            <li>C/C++</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Sql</li>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript/TypeScript</li>
          </ul>
        </div>
        <div className="grid-item">
          <h3 className="skillTittle">Languages </h3>
          <ul>
            <li>English: B2</li>
            <li>German: B1</li>
            <li>Spanish: Native</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
