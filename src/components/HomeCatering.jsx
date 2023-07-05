import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export const HomeCatering = () => {
  return (
    <Container fluid>
      <Row className="p-4">
        <Col className="text-center">
          <h4>
            <strong> WE DO CATERING </strong>
          </h4>
          <h6>GET 30% OFF IN YOUR FIRST ORDER</h6>
          <Button variant="dark" size="lg">
            CONTACT US
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
