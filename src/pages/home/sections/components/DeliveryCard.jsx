import { Button, Badge, Card, Row, Col } from "react-bootstrap";

import delivery from "../../assets/delivery.png";

export const DeliveryCard = () => {
  return (
    <Card className="border-dark border-2">
      <Card.Img src={delivery} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col xs={5} sm={5} md={5}>
            {/* Space Column */}
          </Col>
          <Col>
            <Row>
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
                  <a
                    href="https://www.ubereats.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>
                      <i>ORDER NOW</i>
                    </strong>
                  </a>{" "}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
