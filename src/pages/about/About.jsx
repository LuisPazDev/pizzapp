import { Link } from "react-router-dom";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";

import image from "../about/assets/aboutuspage.png";

export const About = () => {
  return (
    <Container fluid style={{ backgroundColor: "#F5F5F5" }}>
      <Row className="mt-2 text-center">
        <Col xs={12} md={12} lg={12} className="mt-5 mb-3">
          <div>
            <h2 className="text-center">
              <Badge pill className="bg-dark text-white">
                <strong>
                  <i>ABOUT US</i>
                </strong>
              </Badge>
            </h2>
          </div>
          <div className="mt-3">
            <p>
              <i> Learn more about us! </i>
            </p>
          </div>
        </Col>
      </Row>

      <Row
        className="d-flex flex-row justify-content-center align-items-center mt-2"
        xs={1}
        sm={1}
        md={2}
        lg={2}
      >
        <Col
          style={{ width: "450px" }}
          className="d-flex flex-column justify-content-center align-items-center p-3 mb-2"
        >
          <h4>
            <strong>
              <i>FAMILY OWNED</i>
            </strong>
          </h4>
          <h6>
            <strong>
              <i> SINCE 2017</i>
            </strong>
          </h6>
          <p className="p-about mt-4" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            praesentium ipsa neque, reprehenderit distinctio, a in eius
            pariatur, hic architecto fugiat commodi fugit aperiam similique
            itaque sequi odit ratione ullam. Lorem ipsum dolor sit amet Lorem
            <br />
            <br />
            Ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia
            voluptatibus, voluptatem. Quisquam quia voluptatibus, voluptatem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quia voluptatibus, voluptatem. Lorem ipsum dolor sit amet
            <br />
          </p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center mb-3 p-2">
          <Image
            fluid
            rounded
            src={image}
            style={{ width: "450px" }}
            alt="about us"
          />
        </Col>
      </Row>
      <Row className="ms-auto me-auto mt-5">
        <Col className="mb-5">
          <Link to="/menu">
            <h5 className="text-center text-black">
              <i> Go To </i>
              <strong>
                <i>
                  <u> MENU </u>
                </i>
              </strong>
            </h5>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
