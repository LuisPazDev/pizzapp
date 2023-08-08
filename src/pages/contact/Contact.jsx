import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../components/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Badge, Button, Form, Row, Card, Col } from "react-bootstrap";

export function Contact() {
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
    <>
      <Row>
        <Col xs={12} md={12} lg={12} className="text-center mb-4">
          <div>
            <h3>
              <Badge pill className="bg-dark text-white">
                <strong>
                  <i>CONTACT US</i>
                </strong>
              </Badge>
            </h3>
          </div>
          <div className="mt-1">
            <p>
              <i> Send us a message with your special request.</i>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
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
        <Row className="ms-auto me-auto mt-5 mb-3">
          <Link to="/menu">
            <h5 className="text-center text-black">
              Go to{" "}
              <strong>
                <i>
                  <u> MENU </u>
                </i>
              </strong>
            </h5>
          </Link>
        </Row>
      </Row>
    </>
  );
}
