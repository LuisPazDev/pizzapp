import React from "react";
import { Container, Card, Col, Row, Image } from "react-bootstrap";

import card1 from "../assets/customercard1.png";
import card2 from "../assets/customercard2.png";
import card3 from "../assets/customercard3.png";
import stars from "../assets/stars.svg";

export const TestimonialsCard = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F8F8F8",
      }}
      className="p-5 d-flex flex-column "
    >
      <Row className="p-5">
        <div className="text-start mb-5">
          <h5 className="mb-3">
            <i>
              <u>Our Customer Feedback</u>
            </i>
          </h5>
          <h1>Client Testimonials</h1>
        </div>
        {/* First Card */}
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column justify-content-center align-items-center mb-5"
        >
          <Card style={{ width: "16rem" }} className="text-center">
            <Image
              roundedCircle
              className="ms-auto me-auto mt-3"
              style={{ width: "100px", height: "100px" }}
              src={card1}
            />
            <Card.Body>
              <Card.Title>
                <i>Sandra Sanz</i>
              </Card.Title>
              <Card.Text>
                "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet."
              </Card.Text>
              <Image src={stars} />
            </Card.Body>
          </Card>
        </Col>
        {/*  Second Card */}
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column justify-content-center align-items-center mb-5"
        >
          <Card style={{ width: "16rem" }} className="text-center">
            <Image
              roundedCircle
              className="ms-auto me-auto mt-3"
              style={{ width: "100px", height: "100px" }}
              src={card2}
            />
            <Card.Body>
              <Card.Title>
                <i>Johan Doe</i>
              </Card.Title>
              <Card.Text>
                "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet."
              </Card.Text>
              <Image src={stars} />
            </Card.Body>
          </Card>
        </Col>
        {/* Third Card */}
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column justify-content-center align-items-center mb-5"
        >
          <Card style={{ width: "16rem" }} className="text-center">
            <Image
              roundedCircle
              className="ms-auto me-auto mt-3"
              style={{ width: "100px", height: "100px" }}
              src={card3}
            />
            <Card.Body>
              <Card.Title>
                <i>Alex Smith</i>
              </Card.Title>
              <Card.Text>
                "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet."
              </Card.Text>
              <Image src={stars} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};