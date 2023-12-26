import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn btn-outline-dark">
        Courses
      </button>

      {modal && (
        <div className="customModal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPosition">
            <div className="modalContent">
              <h2>Courses</h2>
              <ul>
                <li>
                  Practical Curse Django: Web Development Backend with Python
                </li>
                <li>The Complete 2023 Web Development Bootcamp</li>
                <li>Ultimate AWS Certified Cloud Practitioner – 2023</li>
                <li>SQL: Creation of databases</li>
                <li>First steps of frontend development</li>
                <li>The Complete 2023 Web Development Bootcamp</li>
                <li>Ultimate AWS Certified Cloud Practitioner – 2023</li>
                <li>SQL: Creation of databases</li>
              </ul>
            </div>

            <button className="btn btn-outline-dark" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
