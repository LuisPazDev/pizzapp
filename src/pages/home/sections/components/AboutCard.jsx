import { Link } from "react-router-dom";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";

import aboutcard from "../../assets/aboutcard.png";

export const AboutCard = () => {
  return (
    <Card className="border-dark">
      <Card.Img src={aboutcard} style={{ minHeight: 200 }} />
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
                <p>
                  <i>SINCE 2019</i>
                </p>
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
