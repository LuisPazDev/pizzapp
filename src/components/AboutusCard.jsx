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
              <h4>
                <strong>
                  <i>FAMILY OWNED</i>
                </strong>
              </h4>
              <h6>
                <i> SINCE 2019</i>
              </h6>
            </Badge>

            <br />

            <Button className="mt-3 ms-4" variant="dark" size="md">
              {" "}
              <strong>
                <i>ABOUT US</i>
              </strong>
            </Button>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
