import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import about from "../assets/aboutcard.png";

export const AboutusCard = () => {
  return (
    <Card className="border-dark">
      <Card.Img src={about} style={{ minHeight: 200 }} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Row className="text-white">
          <Col>
            <div>
              <Badge className="bg-white text-black">
                <h5>
                  <strong>
                    <i> SINCE 2019</i>
                  </strong>
                </h5>
              </Badge>
            </div>
            <div className="mt-3">
              <Button variant="dark" size="lg">
                {" "}
                <strong>
                  <i>ABOUT US</i>
                </strong>
              </Button>
            </div>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
