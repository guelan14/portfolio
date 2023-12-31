import React from "react";

export const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid ">
          <a class="navbar-brand btn btn-outline-light " href="#home">
            Migue's Portfolio
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav p-2">
              <li class="nav-item ">
                <a
                  class="nav-link  btn btn-outline-light"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-outline-light" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-outline-light" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link btn btn-outline-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
