import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Badge,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import pizzacard from "../../assets/pizzacard.png";

export const AboutCard = () => {
  return (
    <Container
      fluid
      style={{
        width: "100%",
      }}
    >
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <h1>
              We are a Family <br />
              <strong>Owned </strong>
              Restaurant <br />
              <strong>Serving</strong> Since <br />
              <strong>2017</strong>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button variant="dark" size="lg">
              <strong>
                <i>READ MORE</i>
              </strong>
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="p-3">
          <Image fluid rounded src={pizzacard} />
        </Col>
      </Row>
    </Container>
  );
};
