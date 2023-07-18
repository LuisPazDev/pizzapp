import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";

import divider from "../assets/divider.svg";

export const HomeHeader = () => {
  return (
    <Container className="text-center p-2">
      <Row xs={1} sm={1} md={2} className="d-flex align-items-center mt-3 mb-3">
        <Col className="mb-1">
          <h5>
            <strong>
              <i>START YOUR ORDER NOW</i>
            </strong>
          </h5>
        </Col>
        <Col className="mt-1 mb-2">
          <Button className="me-1" variant="dark" size="md">
            <Link to="/menu">
              {" "}
              <strong>
                <i>PICK UP</i>
              </strong>
            </Link>
          </Button>
          <img src={divider} style={{ width: 40 }} />
          <Button className="ms-1" variant="dark" size="md">
            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <strong>
                <i>DELIVERY</i>
              </strong>
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};