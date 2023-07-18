import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";

import image from "../assets/aboutuspage.png";

export const AboutPage = () => {
  return (
    <Container fluid>
      <Row xs={1} sm={1} md={1} className="ms-auto text-center mt-4">
        <Row className="mt-2 mb-4">
          <Col xs={12} sm={12} md={12}>
            <h2>FAMILY OWNED</h2>
            <h5>
              <strong>
                <i>SINCE 2019</i>
              </strong>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <p className="p-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quos dolorum
              voluptatibus quod quas quidem voluptatem? Quisquam voluptatum,
              voluptate, quibusdam, quia voluptas quos dolorum voluptatibus quod
              quas quidem voluptatem? Quisquam voluptatum, voluptate, quibusdam,
              quia voluptas quos dolorum voluptatibus quod quas quidem
              voluptatem? Quisquam voluptatum, voluptate, quibusdam, quia
              voluptas
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quos dolorum
              voluptatibus quod quas quidem voluptatem? Quisquam voluptatum,
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center border-dark"
          >
            <Image fluid src={image} />
          </Col>
        </Row>
      </Row>

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
};
