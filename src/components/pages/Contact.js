import React, { useState } from "react";
import { Form, Row, Col, Container, Alert } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers";
import { send } from "@emailjs/browser";
import config from "../../utils/config";

const Contact = () => {
  const [formstate, setformstate] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    console.log(e);
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setformstate({ ...formstate, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const from_name = formstate.name;
    const message = formstate.message;
    const reply_to = formstate.email;

    const toSend = { from_name, message, reply_to };

    // reset input fields after submit
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    // reset textarea fields after submit
    Array.from(document.querySelectorAll("textarea")).forEach(
      (input) => (input.value = "")
    );

    send(
      config.env.SERVICE_ID,
      config.env.TEMPLATE_ID,
      toSend,
      config.env.USER_ID
    )
      .then((response) => {
        setResponse(response);

        setTimeout(() => {
          setResponse(null);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container id="contact">
      <h1>Contact Me</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              onBlur={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              onBlur={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message/Comments</Form.Label>
          <Form.Control required as="textarea" rows={3} onBlur={handleChange} />
        </Form.Group>
        {errorMessage && (
          <div>
            <Alert variant="danger">{errorMessage}</Alert>
          </div>
        )}
        <div id="form-btn-div" className="row">
          <button id="form-btn" type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {response && (
          <div>
            <p className="response">Message Successfully Sent!</p>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default Contact;
