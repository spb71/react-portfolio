import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs d-flex flex-row">
      <li className="nav-item p-2">
        <a
          href="#about"
          onClick={() => handlePageChange("About Me")}
          // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "About Me" ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </a>
      </li>
      <li className="nav-item p-2">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item p-2">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact Me")}
          // Check to see if the currentPage is `Contact Me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Contact Me" ? "nav-link active" : "nav-link"
          }
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item p-2">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      <li className="nav-item justify-right p-2">
        <h3>Shem Baijoo</h3>
      </li>
    </ul>
  );
}

export default NavTabs;
