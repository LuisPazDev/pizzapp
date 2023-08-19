import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../components/Firebase";
import {
  Container,
  Image,
  Button,
  Row,
  Col,
  Form,
  Card,
  Badge,
} from "react-bootstrap";

import slicepizza from "../assets/slicepizza.png";

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
    <Container fluid className="p-5">
      <Row>
        {/* Form Col */}
        <Col
          className="d-flex flex-column justify-content-center align-items-center "
          xs={12}
          md={6}
        >
          <div className="text-start mb-5">
            <h5 className="mb-3">
              <i>
                <u>Reservations</u>
              </i>
            </h5>
            <h1>
              Book A Table <b>Now!</b>
            </h1>
          </div>
          <Form
            onSubmit={handleSubmit}
            id="form"
            className="d-flex flex-column justify-content-center align-items-center border border-dark mt-3 p-3"
          >
            <Row xs={1} md={2} className="p-3">
              {/* Name Field */}
              <Col className="mb-3">
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
              <Col className="mb-3">
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
              <Col className="mb-3">
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
              <Col className="mb-3">
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
              <Col className="mb-3">
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
              <Col className="mb-3">
                <Form.Group controlId="formBasicDate">
                  <Form.Control
                    onChange={handleChange}
                    name="date"
                    type="text"
                    placeholder="Date"
                  />
                </Form.Group>
              </Col>
              <div className="mt-4 text-center">
                <Button variant="dark" size="lg" type="submit">
                  <strong>
                    <i>Book</i>
                  </strong>
                </Button>
              </div>
            </Row>
          </Form>
        </Col>
        {/* Image Col */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center justify-content-center mt-5"
        >
          <Image fluid src={slicepizza} />
        </Col>
      </Row>
    </Container>
  );
};
