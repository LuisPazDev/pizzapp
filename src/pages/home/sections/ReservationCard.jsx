import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../components/Firebase";

import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";

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
      style={{ backgroundColor: "rgba(250, 124, 6, 0.863)" }}
      className="ps-5 pe-5"
    >
      <Row>
        {/* Text Col */}
        <Col
          xs={12}
          md={6}
          className="mt-4 mb-4 d-flex flex-column justify-content-center"
        >
          ,
          <Card style={{ maxWidth: "40rem" }} border="dark" className="p-3">
            <Form className="mt-auto mb-auto" id="form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>
                  <p>
                    <strong>
                      <i>NAME</i>
                    </strong>
                  </p>
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <h6>
                    <strong>
                      <i>EMAIL</i>
                    </strong>
                  </h6>
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>
                  <h6>
                    <strong>
                      <i>MESSAGE</i>
                    </strong>
                  </h6>
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="comment"
                  className="input-comment"
                  type="text"
                  placeholder="Leave a Message here"
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  variant="dark"
                  className="mt-3 mb-3"
                  size="lg"
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
        {/* Carousel Col */}
        <Col xs={12} md={6} className="mt-4 mb-4 text-center"></Col>
      </Row>
    </Container>
  );
};
