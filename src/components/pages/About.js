import React from "react";
import { Container, Card } from "react-bootstrap";
import img from "../../assets/images/my-pic.png";

const About = () => {
  return (
    <Container id="about" className="aboutMe">
      <h1>About Me</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
      </Card>
      <p>
        Hello, my name is Shem Baijoo. I am aspiring to be a full-time software
        developer. I pride myself in designing the UI of various webpages. I
        specialize in frontend development, but I'm considering more backend
        projects to work on in the future.
      </p>
      <br />
      <p>
        The few languages I've learned until now include, with respect to
        frontend, HTML, CSS, Javascript. With respect to the backend, I've
        learned Express.js, Node.js, React.js. Please take a look at my
        Projects, which outline a few of the languages I've worked with in the
        past. My resume is free to download if you would like to see a full list
        of my development experience. Hope you enjoy the user experience!
      </p>
    </Container>
  );
};

export default About;
