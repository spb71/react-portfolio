import React from "react";

const Projects = () => {
  return (
    <div
      id="work"
      className="carousel carousel-dark slide border border-info border-5"
      data-bs-ride="carousel"
    >
      <h1>Work</h1>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#work"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#work"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#work"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a
            href="https://spb71.github.io/weather-dashboard/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/images/weather.PNG" alt="weather dashboard" />
          </a>
        </div>
        <div className="carousel-item">
          <a
            href="https://spb71.github.io/password-authentication/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/images/password-image.PNG"
              alt="password authenticator"
            />
          </a>
        </div>
        <div className="carousel-item">
          <a
            href="https://spb71.github.io/daily-planner/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/images/planner.PNG" alt="daily planner" />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#work"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#work"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Projects;
