import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import reservation from "../assets/reservation.png";

export const ReservarionCard = () => {
  return (
    <Card>
      <Card.Img src={reservation} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col>{/* Space Column */}</Col>
          <Col>
            <Row className="mb-2">
              <Col>
                <Badge bg="dark">
                  <i>COME</i>
                </Badge>
                <h6 className="mt-1">
                  <strong>
                    <i>VISIT US AND HAVE A GREAT DINNER</i>
                  </strong>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="dark" size="sm">
                  {" "}
                  <strong>
                    <i>RESERVATIONS</i>
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
