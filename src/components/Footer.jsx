import { Container, Badge } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="text-center mt-3 mb-3">
      <div>
        <h6>
          <strong>
            <i> Developed By LUISPAZDEV </i>
          </strong>
        </h6>
      </div>
      <div className="mb-2">
        <a
          href="https://luispazdev.github.io/portfolio/#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>CONTACT </i>
        </a>
      </div>

      <Badge bg="dark">
        <h6>
          <i>© 2022 All rights reserved </i>
        </h6>
      </Badge>
    </Container>
  );
};
