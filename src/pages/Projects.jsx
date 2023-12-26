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

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section id="projects">
      <header className="seccionTittle">
        <h2>Proyects</h2> <h3>Exploring My Creativity: Featured Projects</h3>
      </header>
      <div className="swiperContent f-container">
        <Swiper
          //breakpoints
          breakpoints={{
            100: { slidesPerView: 3 },
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
            <div
              className="projectCard"
              href="https://github.com/guelan14/sistema-Canchas-Reservas/tree/main"
              target="__blank"
            >
              <div className="projectTittle">
                <h3>Center court system</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/futbol.jpg" />
              </div>

              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <ul>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <a
                    className="button"
                    href="https://github.com/guelan14/sistema-Canchas-Reservas"
                    target="__blank"
                  >
                    Github
                  </a>
                </div>
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
                <div className="projectTittle">
                  <h3>Web Page Hairdressing</h3>
                </div>
                <p>Building a page</p>
              </main>
              <div className="projectLink">
                <ul>
                  <li>
                    <a
                      className="button"
                      href="https://github.com/guelan14/peluqueria-web-complete"
                      target="__blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
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
              <div className="projectImg">
                <img src="../../images/peluqueriaMarlene.png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <h3>Api-Blog</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/api-node.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <ul>
                    <li>
                      <a
                        className="button"
                        href="https://github.com/guelan14/api-node-blog"
                        target="__blank"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="buttonSecondary"
                        href="https://www.peluqueriamarlene.com.ar/"
                        target="__blank"
                      >
                        WebSite
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <h3>Hairdressing Internal System</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/peluqueriaC.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>C</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <a
                    className="button"
                    href="https://github.com/guelan14/sistema-peluqueria"
                    target="__blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <h3>Notes</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/mys.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>Html </li>
                    <li>Css</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <a
                    className="button"
                    href="https://github.com/guelan14/notesDinamic"
                    target="__blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              {" "}
              <div className="projectTittle">
                <h3>Dice Game</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/diceGame.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>Html </li>
                    <li>Css</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <ul>
                    <li>
                      <a
                        className="button"
                        href="https://github.com/guelan14/dice-game"
                        target="__blank"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="button"
                        href="https://guelan14.github.io/dice-game/"
                        target="__blank"
                      >
                        WebSite
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <h3>Portfolio</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/portfolio.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>Html </li>
                    <li>Css</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <ul>
                    <li>
                      <a
                        className="buttonSecondary"
                        href="https://github.com/guelan14/portfolio"
                        target="__blank"
                      >
                        Github
                      </a>
                    </li>

                    <li>
                      <a
                        className="button"
                        href="https://miguelangelneumann.com.ar"
                        target="__blank"
                      >
                        WebSite
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <h3>Futbol Tournament</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/futbolDiagram.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <ul>
                    <li>
                      <a
                        className="button"
                        href="https://github.com/VeraMatiasE/FutbolPOO"
                        target="__blank"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
