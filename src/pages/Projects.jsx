import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section id="projects">
      <header className="seccionTittle">
        <h2>Projects</h2>
        <h3>Exploring My Creativity</h3>
      </header>

      <div className="swiperContent f-container">
        <Swiper
          //breakpoints
          breakpoints={{
            300: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={0}
          autoplay={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Front Dev</li>
                  <li className="buttonYear">2024</li>
                </ul>
              </header>
              <main className="proyectTittle">
                <h4>Front-Mys</h4>
                <p>
                  Social App like Twitter using React as Front End Framework
                </p>
              </main>
              <p></p>
              <div className="projectImg">
                <img src="../../images/mysFront.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/Mys-Front"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Api Dev</li>
                  <li className="buttonYear">2024</li>
                </ul>
              </header>
              <main className="proyectTittle">
                <h4>Api-Rest-Mys</h4>
                <p>
                  Social Api like Twitter using Node, express, sessions, Oauth2,
                  mongodb
                </p>
              </main>
              <p></p>
              <div className="projectImg">
                <img src="../../images/api-node.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/Mys-Api/tree/main"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Api Dev</li>
                  <li className="buttonYear">2024</li>
                </ul>
              </header>
              <main className="proyectTittle">
                <h4>Api-Rest-Musical</h4>
                <p>C.R.U.D Api using Node, Jwt, mongodb</p>
              </main>
              <p></p>
              <div className="projectImg">
                <img src="../../images/api-node.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/api-blog-musica"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Front Dev</li>
                  <li className="buttonYear">2024</li>
                </ul>
              </header>
              <main className="proyectTittle">
                <h4>Hidear Construcciones</h4>
                <p>Developing a front for Hidear Construcciones</p>
              </main>
              <p></p>
              <div className="projectImg">
                <img src="../../images/hidearConstrucciones.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="buttonSecondary"
                      href="https://www.hidearconstrucciones.com.ar/"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Api Dev</li>
                  <li className="buttonYear">2024</li>
                </ul>
              </header>
              <main className="proyectTittle">
                <h4>Api-Red-Social</h4>
                <p>C.R.U.D Api using Node, Node, Jwt, mongodb</p>
              </main>
              <p></p>
              <div className="projectImg">
                <img src="../../images/api-node.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/api-node-red-social"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Api Dev</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main className="proyectTittle">
                <h4>Api-Blog</h4>
                <p>C.R.U.D Api without Logins using Node</p>
              </main>
              <p></p>
              <div className="projectImg">
                <img src="../../images/api-node.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/api-node-blog"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Page Dev</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main>
                <div className="projectTittle">
                  <h4>Web Page Hairdressing</h4>
                </div>
                <p>Building a web page with Django</p>
              </main>
              <div className="projectImg">
                <img src="../../images/peluqueriaMarlene.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/peluqueria-web-complete"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="buttonSecondary"
                      href="https://www.peluqueriamarlene.com.ar/"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Page dev</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main>
                <h4 className="projectTittle">Portfolio</h4>
                <p>This portfolio! Did it with React</p>
              </main>
              <div className="projectImg">
                <img src="../../images/portfolio.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/portfolio"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="buttonSecondary"
                      href="https://miguelangelneumann.com.ar"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">System Dev</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main>
                <h4 className="projectTittle">Center court system</h4>
                <p>A small POO project for school using python </p>
              </main>
              <div className="projectImg">
                <img src="../../images/futbol.jpg" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/sistema-Canchas-Reservas"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">System Dev</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main>
                <h4 className="projectTittle">Hairdressing Internal System</h4>
                <p>Project using C to manage a Hairdressing System</p>
              </main>
              <div className="projectImg">
                <img src="../../images/peluqueriaC.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/sistema-peluqueria"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Page Design</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main>
                <h4 className="projectTittle">Notes</h4>
                <p>The common To do List! Practising React</p>
              </main>
              <div className="projectImg">
                <img src="../../images/mys.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/notesDinamic"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">Page Design</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main>
                <h4 className="projectTittle">Dice Game</h4>
                <p>One of my first projects! Just starting web development</p>
              </main>
              <div className="projectImg">
                <img src="../../images/futbol.jpg" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/dice-game"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="buttonSecondary"
                      href="https://guelan14.github.io/dice-game/"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="projectCard">
              <header>
                <ul>
                  <li className="buttonProject">System Dev</li>
                  <li className="buttonYear">2023</li>
                </ul>
              </header>
              <main>
                <h4 className="projectTittle">Football Tournament</h4>
                <p>A small POO project to practice Java</p>
              </main>
              <div className="projectImg">
                <img src="../../images/futbolDiagram.png" />
              </div>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/VeraMatiasE/FutbolPOO"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
