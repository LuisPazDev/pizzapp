import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../components/Firebase";
import {
  Container,
  Image,
  Carousel,
  Button,
  Row,
  Col,
  Form,
  Card,
} from "react-bootstrap";

import card1 from "../assets/customercard1.png";
import card2 from "../assets/customercard2.png";
import card3 from "../assets/customercard3.png";
import stars from "../assets/stars.svg";

export const ReservationCard = () => {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const clearForm = () => {
    document.getElementById("form").reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);
    try {
      const comment = collection(db, "contact");
      const res = await addDoc(comment, input);
      alert("Comment added successfully");
      clearForm();
      return res;
    } catch {
      console.error("Invalid input");
    }
  };

  return (
    <Container
      fluid
      className="ps-5 pe-5 d-flex flex-column justify-content-center align-items-center"
    >
      <Row>
        {/* Form Col */}
        <Col
          className="d-flex flex-column justify-content-center align-items-start mt-5"
          xs={12}
          md={6}
        >
          <div className="text-start">
            <h5 className="mb-3">
              <i>
                <u>Reservations</u>
              </i>
            </h5>
            <h1>
              Book A Table <b>Now!</b>
            </h1>
          </div>
          <Card className="mt-4 p-3">
            <Form onSubmit={handleSubmit} id="form">
              <Row
                xs={1}
                md={2}
                className="d-flex align-items-center justify-content-center mt-3"
              >
                {/* Name Field */}
                <Col className="mb-3 d-flex flex-column align-items-center justify-content-center ">
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      onChange={handleChange}
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                  </Form.Group>
                </Col>
                {/* Phone Field */}
                <Col className="mb-3  d-flex align-items-center justify-content-center">
                  <Form.Group controlId="formBasicPhone">
                    <Form.Control
                      onChange={handleChange}
                      name="phone"
                      type="text"
                      placeholder="Phone"
                    />
                  </Form.Group>
                </Col>
                {/* Email Field */}
                <Col className="mb-3 d-flex align-items-center justify-content-center">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      onChange={handleChange}
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                </Col>
                {/* Guests Field */}
                <Col className="mb-3  d-flex align-items-center justify-content-center">
                  <Form.Group controlId="formBasicGuests">
                    <Form.Control
                      onChange={handleChange}
                      name="guests"
                      type="text"
                      placeholder="Guests"
                    />
                  </Form.Group>
                </Col>
                {/* Time Field */}
                <Col className="mb-3 d-flex align-items-center justify-content-center">
                  <Form.Group controlId="formBasicTime">
                    <Form.Control
                      onChange={handleChange}
                      name="time"
                      type="text"
                      placeholder="Time"
                    />
                  </Form.Group>
                </Col>
                {/* Date Field */}
                <Col className="mb-3 d-flex align-items-center justify-content-center">
                  <Form.Group controlId="formBasicDate">
                    <Form.Control
                      onChange={handleChange}
                      name="date"
                      type="text"
                      placeholder="Date"
                    />
                  </Form.Group>
                </Col>
                <div className="text-center mt-3">
                  <Button variant="dark" size="lg" type="submit">
                    <strong>
                      <i>Book</i>
                    </strong>
                  </Button>
                </div>
              </Row>
            </Form>
          </Card>
        </Col>
        {/* Testimonial Cards Col */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center justify-content-center mt-5"
        >
          <div className="text-start mb-4">
            <h5 className="mb-3">
              <i>
                <u>Our Customer Feedback</u>
              </i>
            </h5>
            <h1>Client Testimonials</h1>
          </div>
          <Carousel>
            <Carousel.Item>
              <Card style={{ width: "18rem" }} className="text-center">
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
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lorem ipsum dolor sit amet."
                  </Card.Text>
                  <Image src={stars} />
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "18rem" }} className="text-center">
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
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lorem ipsum dolor sit amet."
                  </Card.Text>
                  <Image src={stars} />
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "18rem" }} className="text-center">
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
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lorem ipsum dolor sit amet."
                  </Card.Text>
                  <Image src={stars} />
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
