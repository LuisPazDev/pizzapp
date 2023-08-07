import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Badge, Container } from "react-bootstrap";

import menupizza from "./assets/menupizzas.png";
import menudrinhs from "./assets/menudrinks.png";
import menudesserts from "./assets/menudesserts.png";

export const Menu = () => {
  // Function to handle button hover
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleButtonMouseEnter = (index) => {
    setHoverIndex(index);
  };
  const handleButtonMouseLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <Container fluid>
      {/* Header */}
      <Row className="justify-content-center mt-3 text-center">
        <Col xs={12} md={12} lg={12} className="mt-4 mb-2">
          <div>
            <h3>
              <Badge pill className="bg-dark text-white">
                <strong>
                  <i>MENU</i>
                </strong>
              </Badge>
            </h3>
          </div>
          <div className="mt-1">
            <p>
              <i> Choose your favorite pizza, drink and dessert! </i>
            </p>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        {/* //* Pizzas Card */}

        <Row
          style={{
            cursor: "pointer",
            maxWidth: "550px",
            maxHeight: "300px",
          }}
          xs={12}
          md={12}
          lg={12}
          className="mt-4 mb-4"
        >
          <Card
            style={{ backgroundColor: "#FF914D" }}
            onMouseEnter={() => handleButtonMouseEnter(0)}
            onMouseLeave={handleButtonMouseLeave}
            className={
              hoverIndex === 0 ? "menu-card-hover" : "border-dark border-2"
            }
          >
            <Card.Img src={menupizza} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              {
                // If showButton is true, then show the button
                hoverIndex === 0 ? (
                  <div>
                    <Button variant="dark" size="lg">
                      {" "}
                      <Link to="/menu/pizzas">
                        <strong>
                          <b>
                            <i>ORDER NOW</i>
                          </b>
                        </strong>
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h2>
                      <Badge pill className="bg-white text-dark">
                        <strong>
                          <i>PIZZAS</i>
                        </strong>
                      </Badge>
                    </h2>
                  </div>
                )
              }
            </Card.ImgOverlay>
          </Card>
        </Row>

        {/* //* Drinks Card */}

        <Row
          style={{
            cursor: "pointer",
            maxWidth: "550px",
            maxHeight: "300px",
          }}
          xs={12}
          md={12}
          lg={12}
          className="mt-4 mb-4"
        >
          <Card
            style={{ backgroundColor: "#FF914D" }}
            className={
              hoverIndex === 1 ? "menu-card-hover" : "border-dark border-2"
            }
            onMouseEnter={() => handleButtonMouseEnter(1)}
            onMouseLeave={handleButtonMouseLeave}
          >
            <Card.Img src={menudrinhs} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              {
                // If showButton is true, then show the button
                hoverIndex === 1 ? (
                  <div>
                    <Button variant="dark" size="lg">
                      {" "}
                      <Link to="/menu/drinks">
                        <strong>
                          <b>
                            <i>ORDER NOW</i>
                          </b>
                        </strong>
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h2>
                      <Badge pill className="bg-white text-dark">
                        <strong>
                          <i>DRINKS</i>
                        </strong>
                      </Badge>
                    </h2>
                  </div>
                )
              }
            </Card.ImgOverlay>
          </Card>
        </Row>

        {/* //*Desserts Card */}

        <Row
          style={{
            cursor: "pointer",
            maxWidth: "550px",
            maxHeight: "300px",
          }}
          xs={12}
          md={12}
          lg={12}
          className="mt-4 mb-4"
        >
          <Card
            style={{ backgroundColor: "#FF914D" }}
            className={
              hoverIndex === 2 ? "menu-card-hover" : "border-dark border-2"
            }
            onMouseEnter={() => handleButtonMouseEnter(2)}
            onMouseLeave={handleButtonMouseLeave}
          >
            <Card.Img src={menudesserts} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              {
                // If showButton is true, then show the button
                hoverIndex === 2 ? (
                  <div>
                    <Button variant="dark" size="lg">
                      {" "}
                      <Link to="/menu/desserts">
                        <strong>
                          <b>
                            <i>ORDER NOW</i>
                          </b>
                        </strong>
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h2>
                      <Badge pill className="bg-white text-dark">
                        <strong>
                          <i>DESSERTS</i>
                        </strong>
                      </Badge>
                    </h2>
                  </div>
                )
              }
            </Card.ImgOverlay>
          </Card>
        </Row>
      </Row>
    </Container>
  );
};
