import { Container } from "react-bootstrap";
import logoluispazdev from "../assets/logoluispazdev.png";

export const HomeFooter = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
        color: "white",
      }}
      className="text-center pt-3 pb-3"
    >
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
          <img
            src={logoluispazdev}
            alt="logo"
            style={{ width: "150px", height: "50px" }}
          />
        </a>
      </div>
      <div className="mt-2">
        <p>
          <i>© 2022 All rights reserved </i>
        </p>
      </div>
    </Container>
  );
};
