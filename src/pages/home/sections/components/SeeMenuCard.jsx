import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import pizzacard from "../../assets/pizzacard.png";
import { Link } from "react-router-dom";

export const SeeMenuCard = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div onMouseEnter={handleShow} onMouseLeave={handleClose}>
      {
        // If show is true, then show the button

        !show ? (
          <Card className="border-dark">
            <Card.Img src={pizzacard} style={{ minHeight: 300 }} />
            <Card.ImgOverlay className="d-flex flex-column justify-column justify-content-center">
              <Row className="text-white">
                <Col className="text-center">
                  <div className="mb-3">
                    <h3>
                      <strong>
                        <b>
                          <i>IT'S TIME TO SHARE</i>
                        </b>
                      </strong>
                      <br />
                      <strong>
                        <b>
                          <i>IT'S PIZZA TIME</i>
                        </b>
                      </strong>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        ) : (
          <Card className="menu-card-hover">
            <Card.Img
              src={pizzacard}
              style={{
                maxHeight: "250px",
                minHeight: "250px",
              }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-column justify-content-center">
              <Row className="text-white">
                <Col className="text-center">
                  <div className="mb-1">
                    <h5>
                      <p>
                        <strong>
                          <b>
                            <i>CHECK OUR FULL MENU</i>
                          </b>
                        </strong>
                      </p>
                    </h5>
                  </div>
                  <div>
                    <Button variant="dark" size="lg">
                      {" "}
                      <Link to="/menu">
                        <strong>
                          <i>SEE MENU</i>
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
