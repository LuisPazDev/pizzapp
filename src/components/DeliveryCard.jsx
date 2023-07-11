import { Button, Badge, Card, Row, Col } from "react-bootstrap";

import delivery from "../assets/delivery.png";

export const DeliveryCard = () => {
  return (
    <Card>
      <Card.Img src={delivery} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col>{/* Space Column */}</Col>
          <Col>
            <Row className="mb-2">
              <Col>
                <Badge bg="dark">
                  <i>NOW </i>
                </Badge>
                <h6 className="mt-1">
                  <strong>
                    <i>OFFERING FREE DELIVERY</i>
                  </strong>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="dark" size="sm">
                  {" "}
                  <strong>
                    <i>ORDER NOW</i>
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
