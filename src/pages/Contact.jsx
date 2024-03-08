import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

export const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [infoMensaje, setInfoMensaje] = useState("");
  const [sending, setSending] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      mensaje: formData.get("textarea"),
    };

    await axios
      .post("https://email-sender-theta.vercel.app/send-email-portfolio", {
        data,
      })
      .then(function () {
        console.log("Mensaje enviado con éxito");
        alert("¡Mensaje enviado con éxito!");

        setEnviado(true);
        setSending(false);
        setInfoMensaje("Formulario enviado con éxito!");

        setNombre(""); // Limpiar el campo nombre
        setEmail(""); // Limpiar el campo email
        setMensaje(""); // Limpiar el campo mensaje
      })
      .catch(function () {
        setEnviado(true);
        setSending(false);
        setInfoMensaje("ERROR al mandar el formulario");
        alert("¡Error al mandar el formulario!");
        console.error("Mensaje no enviado ERROR!");
      });
  };

  const handleSending = () => {
    setSending(true);
    console.log("HOLAAAAAA");
  };

  return (
    <>
      <section id="contact">
        <header className="seccionTittle">
          <h3 className="">Contact</h3>
          <h2 className="">Contact me</h2>
        </header>

        <div className="grid-container">
          <div className="grid-item">
            <ul>
              <li className="flex">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="">
                  <h3 className=" ">Location</h3>
                  <a
                    className="location"
                    href="https://www.google.com/maps/place/Posadas,+Misiones+Province/@-27.3963033,-55.9657156,13z/data=!3m1!4b1!4m6!3m5!1s0x9457be7f080496c3:0xccbff374623e7b9a!8m2!3d-27.3621374!4d-55.9008746!16zL20vMDZncXMy?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Link to Google Maps"
                  >
                    Posadas, <br></br>Misiones Argentina
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className=" ">
                  <h3 className="">Contact</h3>
                  <p className="">Phone: +54 9 3743-567768</p>
                  <p className="">Mail: miguelangelneumann@gmail.com</p>
                </div>
              </li>
              <li className="flex">
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
              </li>
            </ul>
          </div>
          <div className="grid-item " id="form">
            <div className="form">
              <h2>Dejame tu consulta</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="">
                  <div className="formItem">
                    <label htmlFor="" className=""></label>
                    <input
                      type="text"
                      id="nombre"
                      value={nombre}
                      autoComplete="nombre-dado"
                      placeholder="Nombre"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0"
                      name="nombre"
                      onChange={(e) => setNombre(e.target.value)} // Actualizar el estado del campo nombre
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="email" className=""></label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      autoComplete="email"
                      placeholder="Su email "
                      className=""
                      name="email"
                      onChange={(e) => setEmail(e.target.value)} // Actualizar el estado del campo email
                    />
                  </div>
                  <div className="formItem">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      value={mensaje}
                      id="textarea"
                      name="textarea"
                      placeholder="Escribe su mensaje..."
                      className=""
                      onChange={(e) => setMensaje(e.target.value)} // Actualizar el estado del campo mensaje
                    ></textarea>
                  </div>
                </div>
                <div className=" ">
                  <button
                    onClick={() => {
                      handleSending();
                    }}
                    type="submit"
                    className="button buttonForm"
                  >
                    {sending ? (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        role="status"
                      >
                        <div style={{ display: "flex" }}>
                          <div className="loader"></div>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      "Enviar"
                    )}
                  </button>
                  {enviado && <p style={{ padding: "5px" }}>{infoMensaje}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
