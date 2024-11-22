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
      <div className="container">
        <div className="homeInfo">
          <p>Hi There! I'm</p>
          <h1>Miguel Angel Neumann</h1>
          <br></br>
          <ul>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              FrontEnd
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Backend
            </li>

            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Engineering Student
            </li>
          </ul>
          <br></br>
          <div className="socialIcons">
            <a href="https://github.com/guelan14">
              <FontAwesomeIcon icon={faSquareGithub} className="font" />
            </a>
            <a href="https://www.linkedin.com/in/miguel-angel-neumann-a45639229">
              <FontAwesomeIcon icon={faLinkedin} className="font" />
            </a>
            <a href="https://instagram.com/migue_neumann?igshid=YTQwZjQ0NmI0OA==">
              <FontAwesomeIcon icon={faInstagram} className="font" />
            </a>
          </div>
        </div>
        <div className="homePhoto">
          {" "}
          <img src="../../images/profile.webp" />
        </div>
      </div>
    </section>
  );
};
