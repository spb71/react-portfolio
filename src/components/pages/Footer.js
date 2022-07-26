import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiIndeed } from "react-icons/si";

import React from "react";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <a href="https://github.com/spb71" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="fas fa-5x"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/shemuelson-baijoo-752290156/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fas fa-5x"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://my.indeed.com/resume?hl=en&co=US&from=gnav-homepage"
          target="_blank"
          rel="noreferrer"
        >
          <SiIndeed className="fas fa-5x" />
        </a>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
