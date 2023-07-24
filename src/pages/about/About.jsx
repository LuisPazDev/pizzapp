import { Link } from "react-router-dom";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";

import image from "../about/assets/aboutuspage.png";

export const About = () => {
  return (
    <Container fluid>
      <Row xs={1} sm={1} md={1} className="ms-auto text-center mt-4">
        <Row className="mt-2 mb-4">
          <Col xs={12} md={12} lg={12} className="mb-4">
            <div>
              <h3 className="text-center">
                <Badge pill className="bg-dark text-white">
                  <strong>
                    <i>ABOUT US</i>
                  </strong>
                </Badge>
              </h3>
            </div>
            <div className="mt-1">
              <p>
                <strong>
                  <i> Learn more about us! </i>
                </strong>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h5>
              <strong>
                <i>FAMILY OWNED</i>
              </strong>
            </h5>
            <h6>
              <strong>
                <i> SINCE 2017</i>
              </strong>
            </h6>
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
