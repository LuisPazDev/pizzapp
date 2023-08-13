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

import aboutus from "../../assets/aboutus.png";

export const AboutCard = () => {
  return (
    <Container fluid style={{}} className="ps-5 mt-4 mb-4">
      <Row>
        {/* Text Col */}
        <Col
          xs={12}
          md={6}
          className="mt-4 mb-4 d-flex flex-column justify-content-center"
        >
          <div>
            <h1>
              We are a Family <br />
              <strong>Owned </strong>
              Restaurant <br />
              <strong>Serving</strong> Since <br />
              <strong>2017</strong>
            </h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button className="mt-2" variant="dark" size="lg">
              <strong>
                <i>Know More</i>
              </strong>
            </Button>
          </div>
        </Col>
        {/* Image Col */}
        <Col xs={12} md={6}>
          <Image fluid rounded src={aboutus} />
        </Col>
      </Row>
    </Container>
  );
};
