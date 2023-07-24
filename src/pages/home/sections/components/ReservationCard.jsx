import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import reservation from "../../assets/reservation.png";

export const ReservationCard = () => {
  const [showButton, setShowButton] = useState(false);

  const handleButtonMouseEnter = () => {
    setShowButton(true);
  };
  const handleButtonMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <Card
      onMouseEnter={handleButtonMouseEnter}
      onMouseLeave={handleButtonMouseLeave}
      className={showButton ? "menu-card-hover" : "border-dark"}
    >
      <Card.Img src={reservation} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col>{/* Space Column */}</Col>
          <Col>
            {
              // If showButton is true, then show the button
              showButton ? (
                <div>
                  <Button variant="dark" size="md">
                    {" "}
                    <Link to="/contact">
                      <strong>
                        <i>BOOK NOW</i>
                      </strong>
                    </Link>
                  </Button>
                </div>
              ) : (
                <div>
                  <h5>
                    <Badge bg="dark">
                      <i>DINE - IN </i>
                    </Badge>
                  </h5>
                  <h6 className="mt-1">
                    <strong>
                      <i>MAKE A RESERVATION</i>
                    </strong>
                  </h6>
                </div>
              )
            }
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};

<Button variant="dark" size="sm">
  {" "}
  <Link to="/contact">
    <strong>
      <i>BOOK NOW</i>
    </strong>
  </Link>
</Button>;
