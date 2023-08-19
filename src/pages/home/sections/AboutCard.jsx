import { Link } from "react-router-dom";
import { Container, Button, Badge, Row, Col, Image } from "react-bootstrap";

import aboutus from "../assets/aboutus.png";

export const AboutCard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Text Col */}
        <Col
          xs={12}
          md={6}
          className="p-5 d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <h5 className="mb-3">
              <i>
                <u>About Us</u>
              </i>
            </h5>
            <h1>
              We are a Family <br />
              <strong>Owned </strong>
              Restaurant <br />
              <strong>Serving</strong> Since <br />
              <strong>2017</strong>
            </h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button
              className="mt-3 mx-auto d-block d-md-inline-block mb-3 mb-md-0"
              variant="dark"
              size="lg"
            >
              <strong>
                <i>Know More</i>
              </strong>
            </Button>
          </div>
        </Col>
        {/* Image Col */}
        <Col xs={12} md={6}>
          <Image fluid src={aboutus} />
        </Col>
      </Row>
    </Container>
  );
};
