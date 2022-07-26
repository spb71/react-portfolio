import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import profile from "../../assets/docs/Shem-Baijoo-Resume.pdf";

const Resume = () => {
  const skills = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "React",
    },
    {
      name: "Node.js",
    },
    {
      name: "Express",
    },
    {
      name: "MongoDB",
    },
    {
      name: "MySQL",
    },
  ];

  return (
    <Container id="resume">
      <h1 className="title">Resume</h1>
      <div className="box">
        <div id="resume-link-div" className="row">
          <a id="resume-link" href={profile} download>
            Download Resume here
          </a>
        </div>
        <br />
        <h3>Proficiencies</h3>
        <div id="skills-div" className="row">
          <ListGroup>
            {skills.map((skill, index) => (
              <ListGroupItem variant="success" className="skill" key={index}>
                {skill.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
