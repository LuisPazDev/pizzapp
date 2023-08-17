import React from "react";
import { Container, Card, Col, Row, Image } from "react-bootstrap";

import fresh from "../assets/vegan.svg";
import food from "../assets/food.svg";
import delivery from "../assets/delivery.svg";
import staff from "../assets/team.svg";

export const OurStrengthCard = () => {
  return (
    <Container fluid className="p-5 d-flex flex-column ">
      <div className="text-start mb-4">
        <h5 className="mb-3">
          <i>
            <u>Our Strength</u>
          </i>
        </h5>
        <h1>Why We Are The Best</h1>
      </div>
      <Row>
        {/* First Card */}
        <Col
          xs={12}
          md={3}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Card style={{ width: "16rem" }} className="text-start border-0">
            <Image
              className="ms-3"
              style={{
                width: "50px",
                height: "50px",
              }}
              src={fresh}
            />
            <Card.Body>
              <Card.Title>
                <i>Fresh Food</i>
              </Card.Title>
              <Card.Text>
                "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/*  Second Card */}
        <Col
          xs={12}
          md={3}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Card style={{ width: "16rem" }} className="text-start border-0">
            <Image
              className="ms-3"
              style={{ width: "50px", height: "50px" }}
              src={food}
            />
            <Card.Body>
              <Card.Title>
                <i>Best Taste</i>
              </Card.Title>
              <Card.Text>
                "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Third Card */}
        <Col
          xs={12}
          md={3}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Card style={{ width: "16rem" }} className="text-start border-0">
            <Image
              className="ms-3"
              style={{ width: "50px", height: "50px" }}
              src={delivery}
            />
            <Card.Body>
              <Card.Title>
                <i>Free Delivery</i>
              </Card.Title>
              <Card.Text>
                "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Fourth Card */}
        <Col
          xs={12}
          md={3}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Card style={{ width: "16rem" }} className="text-start border-0">
            <Image
              className="ms-3"
              style={{ width: "50px", height: "50px" }}
              src={staff}
            />
            <Card.Body>
              <Card.Title>
                <i>Friendly Staff</i>
              </Card.Title>
              <Card.Text>
                "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
