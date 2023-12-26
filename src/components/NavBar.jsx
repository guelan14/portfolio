import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  return (
    <>
      <header class="nav-content">
        <p>M.A.N.</p>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li class="nav-item "></li>
          </ul>
        </nav>
        <div>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </header>
    </>
  );
};
