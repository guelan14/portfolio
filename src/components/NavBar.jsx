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
            <li onClick={handleToggleClick}>
              <a href="#home">Home</a>
            </li>
            <li onClick={handleToggleClick}>
              <a href="#about">About</a>
            </li>
            <li onClick={handleToggleClick}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={handleToggleClick}>
              <a href="#studies">Studies</a>
            </li>
            <li onClick={handleToggleClick}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
