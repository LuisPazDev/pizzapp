import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import about from "../assets/aboutcard.png";

export const AboutusCard = () => {
  return (
    <Card>
      <Card.Img src={about} style={{ minHeight: 200 }} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-start">
        <Row>
          <Col>
            <Badge bg="light" className="text-black">
              <h5>
                <strong>
                  <i>
                    WE ARE A FAMILY <br /> OWNED RESTAURANT
                    <br /> SINCE 2017
                  </i>
                </strong>
              </h5>
            </Badge>

            <br />

            <Button className="mt-2 ms-4" variant="dark" size="md">
              {" "}
              <strong>
                <i>KNOW MORE</i>
              </strong>
            </Button>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
