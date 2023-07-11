import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

export const HomeHeader = () => {
  return (
    <Row className="p-2">
      <Row>
        <Col md={4} className="text-center">
          <h5>
            <strong>
              <i>START YOUR ORDER</i>
            </strong>
          </h5>
        </Col>
        <Col>
          <Button variant="dark" size="sm">
            {" "}
            <strong>
              <i>PICK UP</i>
            </strong>
          </Button>
        </Col>
        <Col>
          <Button variant="dark" size="sm">
            {" "}
            <strong>
              <i>DELIVERY</i>
            </strong>
          </Button>
        </Col>
      </Row>
    </Row>
  );
};
