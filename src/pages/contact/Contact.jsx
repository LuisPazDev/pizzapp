import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../components/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Container, Button, Form, Row, Card } from "react-bootstrap";

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
    <Container className="p-4">
      <div className="mt-5 text-center">
        <h2 className="mt-4 mb-5">
          <strong>
            <i>
              <u>
                <b>CONTACT US</b>
              </u>
            </i>
          </strong>
        </h2>
      </div>

      <Card border="dark" className="p-3">
        <Form className="mt-auto mb-auto" id="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              <h5>
                <strong>
                  <i>NAME</i>
                </strong>
              </h5>
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
              <h5>
                <strong>
                  <i>EMAIL</i>
                </strong>
              </h5>
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
              <h5>
                <strong>
                  <i>MESSAGE</i>
                </strong>
              </h5>
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
        <Link to="/">
          <h5 className="text-center text-black">
            Back to{" "}
            <strong>
              <u> Home Page </u>
            </strong>
          </h5>
        </Link>
      </Row>
    </Container>
  );
}
