import { Card, Button, Row, Col, Badge } from "react-bootstrap";

import hiring from "../assets/hiring.png";

export const HiringCard = () => {
  return (
    <Card>
      <Card.Img src={hiring} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col>{/* Space Column */}</Col>
          <Col>
            <Row className="mb-2">
              <Col>
                <Badge bg="dark">
                  <i>JOBS</i>
                </Badge>
                <h6 className="mt-1">
                  <strong>
                    <i>WE ARE HIRING NOW</i>
                  </strong>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="dark" size="sm">
                  {" "}
                  <strong>
                    <i>CONTACT US</i>
                  </strong>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
