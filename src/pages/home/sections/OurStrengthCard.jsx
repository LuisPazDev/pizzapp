import { useInView } from "react-intersection-observer";
import { Container, Card, Col, Row, Image } from "react-bootstrap";

import food from "../assets/food.svg";
import delivery from "../assets/delivery.svg";
import staff from "../assets/team.svg";

export const OurStrengthCard = () => {
  const { ref, inView } = useInView({
    freezeOnceVisible: true,
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#F8F8F8",
      }}
    >
      <div className="mt-5 mb-5">
        <h1>Why Choose Us</h1>
      </div>

      <Row className="mt-4 mb-4">
        {/*  Second Card */}
        <Col
          ref={ref}
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Card
            hidden={!inView}
            style={{
              backgroundColor: "#F8F8F8",
              width: "16rem",
            }}
            className={`${
              inView
                ? "text-start border-0 animate__animated animate__fadeInRight"
                : "text-start border-0"
            }`}
          >
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
          sm={12}
          md={12}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Card
            style={{
              backgroundColor: "#F8F8F8",
              width: "16rem",
            }}
            hidden={!inView}
            className={`${
              inView
                ? "text-start border-0 animate__animated animate__fadeInRight animate__delay-1s"
                : "text-start border-0"
            }`}
          >
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
          sm={12}
          md={12}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Card
            style={{
              backgroundColor: "#F8F8F8",
              width: "16rem",
            }}
            hidden={!inView}
            className={`${
              inView
                ? "text-start border-0 animate__animated animate__fadeInRight animate__delay-2s"
                : "text-start border-0"
            }`}
          >
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
