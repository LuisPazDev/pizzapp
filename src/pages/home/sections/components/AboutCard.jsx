import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";

import aboutcard from "../../assets/aboutcard.png";

export const AboutCard = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div onMouseEnter={handleShow} onMouseLeave={handleClose}>
      {
        // If show is true, then show the button
        !show ? (
          <Card className="border-dark">
            <Card.Img
              src={aboutcard}
              style={{
                maxHeight: "250px",
                minHeight: "250px",
              }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              <Row className="text-white">
                <Col>
                  <div>
                    <h3>
                      <Badge className="bg-white text-black">
                        <strong>
                          <i>SERVING</i>
                        </strong>
                      </Badge>
                    </h3>
                    <h5>
                      <Badge pill className="bg-black text-white">
                        <i>SINCE 2019</i>
                      </Badge>
                    </h5>
                  </div>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        ) : (
          <Card className="menu-card-hover">
            <Card.Img src={aboutcard} style={{ minHeight: 200 }} />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              <Row className="text-white">
                <Col>
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
        )
      }
    </div>
  );
};
