import { Button, Badge, Card, Row, Col } from "react-bootstrap";

import delivery from "../../assets/delivery.png";
import { useState } from "react";

export const DeliveryCard = () => {
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
      <Card.Img src={delivery} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col xs={5} sm={5} md={5}>
            {/* Space Column */}
          </Col>
          <Col>
            <Row>
              <Col>
                {
                  // If showButton is true, then show the button
                  showButton ? (
                    <div>
                      <Button variant="dark" size="md">
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
                    </div>
                  ) : (
                    <div>
                      <h5>
                        <Badge bg="dark">
                          <i>NOW </i>
                        </Badge>
                      </h5>
                      <h6 className="mt-1">
                        <strong>
                          <i>OFFERING FREE DELIVERY</i>
                        </strong>
                      </h6>
                    </div>
                  )
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
