import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Badge, Container } from "react-bootstrap";

import menupizza from "./assets/menupizzas.png";
import menudrinhs from "./assets/menudrinks.png";
import menudesserts from "./assets/menudesserts.png";

export const Menu = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-2">
        <Col xs={12} md={12} lg={12} className="mt-4 mb-4">
          <h1 className="text-center">
            <Badge pill className="bg-dark text-white">
              <strong>
                <i>MENU</i>
              </strong>
            </Badge>
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={6} className="mt-4 mb-4">
          <Card className="border-dark">
            <Card.Img src={menupizza} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              <div>
                <h3>
                  <Badge pill className="bg-white text-dark">
                    <strong>
                      <i>PIZZAS</i>
                    </strong>
                  </Badge>
                </h3>
              </div>
              <div>
                <Button variant="dark" size="md" className="mt-1 mb-1">
                  {" "}
                  <Link to="/menu/pizzas">
                    <strong>
                      <i>ORDER NOW</i>
                    </strong>
                  </Link>
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={6} className="mt-4 mb-4">
          <Card className="border-dark">
            <Card.Img src={menudrinhs} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              <div>
                <h2>
                  <Badge pill className="bg-white text-dark">
                    <strong>
                      <i>DRINKS</i>
                    </strong>
                  </Badge>
                </h2>
              </div>
              <div>
                <Button variant="dark" size="lg" className="mt-2 mb-1">
                  {" "}
                  <Link to="/menu/drinks">
                    <strong>
                      <i>ORDER NOW</i>
                    </strong>
                  </Link>
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="border-dark">
            <Card.Img src={menudesserts} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              <div>
                <h2>
                  <Badge pill className="bg-white text-dark">
                    <strong>
                      <i>DESSERTS</i>
                    </strong>
                  </Badge>
                </h2>
              </div>
              <div>
                <Button variant="dark" size="lg" className="mt-2 mb-1">
                  {" "}
                  <Link to="/menu/desserts">
                    <strong>
                      <i>ORDER NOW</i>
                    </strong>
                  </Link>
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
