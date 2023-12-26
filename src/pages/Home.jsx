import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {
  return (
    <section id="home">
      <header className="homeTittle"></header>
      <div className="container">
        <div className="homeInfo">
          <p>Hii There! I'm</p>
          <h1>Miguel Angel Neumann</h1>
          <br></br>
          <ul>
            <li>
              <span class="icon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              FrontEnd
            </li>
            <li>
              <span class="icon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Backend
            </li>

            <li>
              <span class="icon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Engenieering Student
            </li>
          </ul>
          <br></br>
          <div className="socialIcons">
            <a href="https://github.com/guelan14">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a href="https://www.linkedin.com/in/miguel-angel-neumann-a45639229">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com/migue_neumann?igshid=YTQwZjQ0NmI0OA==">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <img className="homePhotoImg" src="../../images/profile.png" />
      </div>
    </section>
  );
};
