import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";

import menupizza from "./assets/menupizzas.png";
import menudrinhs from "./assets/menudrinks.png";
import menudesserts from "./assets/menudesserts.png";

export const Menu = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={4} lg={4} className="mb-4">
        <Card className="border-dark">
          <Card.Img src={menupizza} alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
            <div>
              <Badge pill className="bg-white text-dark">
                <strong>
                  <i>PIZZAS</i>
                </strong>
              </Badge>
            </div>
            <div>
              <Button variant="dark" size="md" className="mt-2 mb-1">
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
      <Col xs={12} md={4} lg={4} className="mb-4">
        <Card className="border-dark">
          <Card.Img src={menudrinhs} alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
            <div>
              <Badge pill className="bg-white text-dark">
                <strong>
                  <i>DRINKS</i>
                </strong>
              </Badge>
            </div>
            <div>
              <Button variant="dark" size="md" className="mt-2 mb-1">
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
      <Col xs={12} md={4} lg={4} className="mb-4">
        <Card className="border-dark">
          <Card.Img src={menudesserts} alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
            <div>
              <Badge pill className="bg-white text-dark">
                <strong>
                  <i>DESSERTS</i>
                </strong>
              </Badge>
            </div>
            <div>
              <Button variant="dark" size="md" className="mt-2 mb-1">
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
  );
};
