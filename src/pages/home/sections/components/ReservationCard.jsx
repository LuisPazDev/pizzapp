import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import reservation from "../../assets/reservation.png";

export const ReservationCard = () => {
  return (
    <Card className="border-dark border-2">
      <Card.Img src={reservation} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col>{/* Space Column */}</Col>
          <Col>
            <Row>
              <Col>
                <Badge bg="dark">
                  <i>DINE IN </i>
                </Badge>
                <h6 className="mt-1">
                  <strong>
                    <i>MAKE A RESERVATION</i>
                  </strong>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="dark" size="sm">
                  {" "}
                  <Link to="/contact">
                    <strong>
                      <i>BOOK NOW</i>
                    </strong>
                  </Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
