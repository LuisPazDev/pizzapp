import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { db } from "../components/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Card, Container } from "react-bootstrap";

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
    <Card className="mt-5 ms-auto me-auto p-4" style={{ width: "22rem" }}>
      <h2 className="mt-4 mb-5">Contact Us</h2>
      <Form className="mt-auto mb-auto" id="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="comment"
            className="input-comment"
            type="text"
            placeholder="Leave a Comment"
          />
        </Form.Group>

        <div className="text-center">
          <Button className="mt-4" size="lg" type="submit">
            Send
          </Button>
        </div>
      </Form>
    </Card>
  );
}
