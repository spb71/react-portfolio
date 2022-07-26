import React from "react";
import { Card, Container } from "react-bootstrap";
import img from "../../assets/images/weather.PNG";
import img2 from "../../assets/images/password-image.PNG";
import img3 from "../../assets/images/planner.PNG";
import img4 from "../../assets/images/note-taker.PNG";
import img5 from "../../assets/images/fitness-tracker.PNG";
import img6 from "../../assets/images/budget-tracker.PNG";

const Projects = () => {
  return (
    <Container id="projects">
      <h1>Portfolio</h1>
      <Card bg="light" style={{ width: "25rem", display: "inline" }}>
        <Card.Img variant="top" fluid="true" src={img} />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Link
            href="https://github.com/spb71/weather-dashboard"
            target="_blank"
          >
            Repo
          </Card.Link>
          <Card.Link
            href="https://spb71.github.io/weather-dashboard/"
            target="_blank"
          >
            Deployed Webpage
          </Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card bg="light" style={{ width: "25rem", display: "inline" }}>
        <Card.Img variant="top" fluid="true" src={img2} />
        <Card.Body>
          <Card.Title>Password Generator</Card.Title>
          <Card.Link
            href="https://github.com/spb71/password-authentication"
            target="_blank"
          >
            Repo
          </Card.Link>
          <Card.Link
            href="https://spb71.github.io/password-authentication/"
            target="_blank"
          >
            Deployed Webpage
          </Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card bg="light" style={{ width: "25rem", display: "inline" }}>
        <Card.Img variant="top" fluid="true" src={img3} />
        <Card.Body>
          <Card.Title>Daily Planner</Card.Title>
          <Card.Link
            href="https://github.com/spb71/daily-planner"
            target="_blank"
          >
            Repo
          </Card.Link>
          <Card.Link
            href="https://spb71.github.io/daily-planner/"
            target="_blank"
          >
            Deployed Webpage
          </Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card bg="light" style={{ width: "25rem", display: "inline" }}>
        <Card.Img variant="top" fluid="true" src={img4} />
        <Card.Body>
          <Card.Title>Note Taker</Card.Title>
          <Card.Link href="https://github.com/spb71/note-taker" target="_blank">
            Repo
          </Card.Link>
          <Card.Link
            href="https://note-taker-classic.herokuapp.com/"
            target="_blank"
          >
            Deployed Webpage
          </Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card bg="light" style={{ width: "25rem", display: "inline" }}>
        <Card.Img variant="top" fluid="true" src={img5} />
        <Card.Body>
          <Card.Title>Fitness Tracker</Card.Title>
          <Card.Link
            href="https://github.com/spb71/workout-tracker"
            target="_blank"
          >
            Repo
          </Card.Link>
          <Card.Link
            href="https://fathomless-plateau-97517.herokuapp.com/"
            target="_blank"
          >
            Deployed Webpage
          </Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card bg="light" style={{ width: "25rem", display: "inline" }}>
        <Card.Img variant="top" fluid="true" src={img6} />
        <Card.Body>
          <Card.Title>Budget Tracker</Card.Title>
          <Card.Link
            href="https://github.com/spb71/budget-tracker"
            target="_blank"
          >
            Repo
          </Card.Link>
          <Card.Link
            href="https://money-funds-tracker.herokuapp.com/"
            target="_blank"
          >
            Deployed Webpage
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Projects;
