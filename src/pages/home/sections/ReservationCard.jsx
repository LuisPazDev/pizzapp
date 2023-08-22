import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../components/Firebase";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { Container, Image, Button, Row, Col, Form } from "react-bootstrap";

import slicepizza from "../assets/slicepizza.png";

export const ReservationCard = () => {
  const [input, setInput] = useState({});

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

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
      const reservation = collection(db, "reservations");
      const res = await addDoc(reservation, input);
      Swal.fire({
        icon: "success",
        title: "Reservation Successful!",
        text: "We look forward to seeing you!",
      });
      clearForm();
      return res;
    } catch {
      console.error("Invalid input");
    }
  };

  return (
    <Container fluid className="ps-5">
      <Row>
        {/* Form Col */}
        <Col
          className="d-flex flex-column justify-content-center align-items-start ps-5 "
          xs={12}
          md={7}
        >
          <div className="text-start mb-5 mt-4">
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
            style={{ width: "70%" }}
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
                    required
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
                    required
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
                    required
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
                  <DateTime
                    value={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                    dateFormat={false}
                    timeFormat="HH:mm"
                    inputProps={{
                      placeholder: "Select a time",
                      required: true,
                    }}
                  />
                </Form.Group>
              </Col>
              {/* Date Field */}
              <Col className="mb-3">
                <Form.Group controlId="formBasicDate">
                  <DateTime
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="DD/MM/YYYY"
                    timeFormat={false}
                    inputProps={{
                      placeholder: "Select a date",
                      required: true,
                    }}
                    isValidDate={(currentDate) => {
                      // Disable dates before today
                      const yesterday = DateTime.moment().subtract(1, "day");
                      return currentDate.isAfter(yesterday);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="mt-4 text-center">
              <Button variant="dark" size="lg" type="submit">
                <strong>
                  <i>Book</i>
                </strong>
              </Button>
            </div>
          </Form>
        </Col>
        {/* Image Col */}
        <Col
          ref={ref}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dxctvkec9/image/upload/v1692626989/bgreservation_gywqzv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          xs={12}
          md={5}
          className="d-flex flex-column align-items-center justify-content-center mt-5"
        >
          <Image
            hidden={!inView}
            fluid
            src={slicepizza}
            className={`${
              inView
                ? "animate__animated animate__backInRight animate__flip animate__delay-2s"
                : ""
            }`}
          />
        </Col>
      </Row>
    </Container>
  );
};
