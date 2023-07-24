import { useState } from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";

import hiring from "../../assets/hiring.png";
import { Link } from "react-router-dom";

export const HiringCard = () => {
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
      <Card.Img src={hiring} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col xs={5} sm={5} md={5}>
            {/* Space Column */}
          </Col>
          <Col>
            {
              // If showButton is true, then show the button
              showButton ? (
                <div>
                  <Button variant="dark" size="md">
                    {" "}
                    <Link to="/contact">
                      <strong>
                        <i>APPLY HERE</i>
                      </strong>
                    </Link>
                  </Button>
                </div>
              ) : (
                <div>
                  <h5>
                    <Badge bg="dark">
                      <i>JOBS</i>
                    </Badge>
                  </h5>
                  <h6 className="mt-1">
                    <strong>
                      <i>WE ARE HIRING NOW </i>
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
