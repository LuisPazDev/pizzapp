import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import about from "../assets/aboutcard.png";
import { Link } from "react-router-dom";

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
                    <i>SERVING</i>
                  </strong>
                </h5>
                <h6>
                  <i>
                    <h6>SINCE 2019</h6>
                  </i>
                </h6>
              </Badge>
            </div>
            <div className="mt-3">
              <Button variant="dark" size="lg">
                <Link to="/about" className="text-white">
                  {" "}
                  <strong>
                    <i>ABOUT US</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
