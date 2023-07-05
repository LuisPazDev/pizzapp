import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import delivery from "../assets/delivery.png";
import catering from "../assets/catering.png";

export const HomeCatering = () => {
  return (
    <Container fluid>
      <Row xs={1} sm={1} md={2}>
        <Col className="text-center">
          <Card>
            <Card.Img src={delivery} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
              <div>
                <Button variant="dark" size="sm">
                  {" "}
                  <strong>
                    <i>ORDER NOW</i>
                  </strong>
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="text-center">
          <Card>
            <Card.Img src={catering} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
              <div>
                <Button variant="dark" size="sm">
                  {" "}
                  <strong>
                    <i>CONTACT US</i>
                  </strong>
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
