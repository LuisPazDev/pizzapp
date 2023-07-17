import { Col, Container, Image, Row } from "react-bootstrap";

import image from "../assets/aboutuspage.png";

export const AboutPage = () => {
  return (
    <Container fluid>
      <Row className="mt-3" xs={1} sm={1} md={2}>
        <Col className="mt-2 mb-2">
          <div>
            <h2 className="text-center">FAMILY OWNED</h2>
            <h5 className="text-center">
              <strong>
                <i>SINCE 2019</i>
              </strong>
            </h5>
          </div>
          <div>
            <p className="p-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quos dolorum
              voluptatibus quod quas quidem voluptatem? Quisquam voluptatum,
              voluptate, quibusdam, quia voluptas quos dolorum voluptatibus quod
              quas quidem voluptatem? Quisquam voluptatum, voluptate, quibusdam,
              quia voluptas quos dolorum voluptatibus quod quas quidem
              voluptatem? Quisquam voluptatum, voluptate, quibusdam, quia
              voluptas
            </p>
          </div>
        </Col>
        <Col className="mt-2 mb-2 border-dark">
          <Image fluid src={image} />
        </Col>
      </Row>
    </Container>
  );
};
