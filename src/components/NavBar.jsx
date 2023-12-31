import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const [isNavVisible, setNavVisibility] = useState(false);

  const handleToggleClick = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <>
      <header className="primary-header flex">
        <a className="logo" href="#home">
          M.A.N.
        </a>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isNavVisible}
          onClick={handleToggleClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible={isNavVisible}
            className="primary-navigation flex"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#studies">Studies</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
