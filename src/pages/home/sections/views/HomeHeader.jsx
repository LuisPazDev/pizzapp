import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

import divider from "../../assets/divider.svg";

export const HomeHeader = () => {
  return (
    <Row
      className="d-flex align-items-center text-center mt-4 mb-3"
      xs={1}
      sm={1}
      md={4}
    >
      <Col md={2}></Col>
      <Col className="mb-1" md={4}>
        <h4>
          <strong>
            <i>START YOUR ORDER NOW</i>
          </strong>
        </h4>
      </Col>
      <Col className="d-flex justify-content-center mt-2 mb-2" md={4}>
        <Button className="mb-2" variant="dark" size="md">
          <Link to="/menu">
            {" "}
            <strong>
              <i>PICK UP</i>
            </strong>
          </Link>
        </Button>
        <img src={divider} style={{ width: 40 }} />
        <Button className="mb-2" variant="dark" size="md">
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
      <Col md={2}></Col>
    </Row>
  );
};
