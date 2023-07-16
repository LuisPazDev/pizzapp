import { Container, Badge } from "react-bootstrap";

import logoluispazdev from "../assets/logoluispazdev.png";

export const Footer = () => {
  return (
    <Container fluid className="footer-bg text-center mt-3 mb-3">
      <hr />
      <div className="mt-2">
        <h6>
          <strong>
            <i> Developed By </i>
          </strong>
        </h6>
        <img src={logoluispazdev} alt="logo" style={{ height: 60 }} />
      </div>
      <div className="mt-2 mb-3">
        <a
          href="https://luispazdev.github.io/portfolio/#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>
            <i>CONTACT ME </i>
          </strong>
        </a>
      </div>
      <div className="mb-3">
        <Badge bg="dark">
          <h6>
            <i>© 2022 All rights reserved </i>
          </h6>
        </Badge>
      </div>
    </Container>
  );
};
