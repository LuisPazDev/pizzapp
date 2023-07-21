import { Card, Button, Row, Col, Badge } from "react-bootstrap";

import hiring from "../../assets/hiring.png";
import { Link } from "react-router-dom";

export const HiringCard = () => {
  return (
    <Card className="border-dark">
      <Card.Img src={hiring} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row>
          <Col xs={5} sm={5} md={5}>
            {/* Space Column */}
          </Col>
          <Col>
            <Row>
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
                  <Link to="/contact">
                    <strong>
                      <i>APPLY HERE</i>
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
