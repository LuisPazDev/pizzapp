import { Container } from "react-bootstrap";

import logoluispazdev from "../../assets/logoluispazdev.png";

export const HomeFooter = () => {
  return (
    <Container fluid className="footer-bg text-center mt-3">
      <hr />
      <div className="mt-2">
        <h6>
          <strong>
            <i> Developed By </i>
          </strong>
        </h6>
        <a
          href="https://luispazdev.github.io/portfolio/#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoluispazdev} alt="logo" style={{ height: 50 }} />
        </a>
      </div>

      <div>
        <p>
          <i>© 2022 All rights reserved </i>
        </p>
      </div>
    </Container>
  );
};
