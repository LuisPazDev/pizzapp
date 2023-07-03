import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../styles/Home.css";

export const HomeHeader = () => {
  return (
    <Container fluid>
      <Row className="header-container p-2 mt-2 mb-4">
        <Row className="mb-2">
          <Col className="text-center">
            <h4>
              <strong>WELCOME TO PIZZAPP </strong>
            </h4>
            <h6>
              <i>THE BEST PIZZA IN TOWN</i>
            </h6>
          </Col>
        </Row>
        <Row className="ms-5 mt-3 btn-container">
          <Col className="text-end ms-5">
            <h5>
              <strong>START YOUR ORDER NOW</strong>
            </h5>
          </Col>
          <Col className="text-start">
            <Button>
              <strong>
                <i>FULL MENU</i>
              </strong>
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
