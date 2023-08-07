import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const HomeIntro = () => {
  return (
    <Container>
      <Row className="mt-3 mb-4">
        <div className="text-center">
          <h2 className="mb-3">WELCOME TO PIZZAPP</h2>
          <p>
            <i>
              This is a web development project developed by {"Luis Paz"} to
              demonstrate his skills <br /> like a Frontend developer using
              ReactJS, FIrebase and Bootstrap.
            </i>
          </p>
        </div>
      </Row>
    </Container>
  );
};
