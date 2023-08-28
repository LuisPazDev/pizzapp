import { Link } from "react-router-dom";
import { Button, Row, Col, Badge, Container, Card } from "react-bootstrap";

export const Menu = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F8F8F8",
      }}
    >
      <Row>
        <Row className="mt-5 mb-4">
          <Col xs={12} className="mb-4">
            <div>
              <h2 className="text-center">
                <Badge pill className="bg-dark text-white">
                  <strong>
                    <i> MENU </i>
                  </strong>
                </Badge>
              </h2>
            </div>
            <div className="mt-3 text-center">
              <p>
                <i> Choose your favorite Pizza, Drink or Dessert! </i>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-2 mb-4">
          {/* Pizzas */}
          <Col
            xs={12}
            md={12}
            lg={4}
            className="mb-5 d-flex flex-column align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dxctvkec9/image/upload/v1693071715/pizzasmenu_waowce.png"
              />
              <Card.Title className="text-center mt-3">
                <h3>
                  <strong>
                    <i> Pizzas </i>
                  </strong>
                </h3>
                <small>
                  <i> Choose your favorite Pizza </i>
                </small>
              </Card.Title>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Button className="mt-3 mb-3" size="lg" variant="dark">
                  <Link to="/menu/pizzas">
                    <strong>
                      <i> SEE MORE </i>
                    </strong>
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Drinks */}
          <Col
            xs={12}
            md={12}
            lg={4}
            className="mb-5 d-flex flex-column align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dxctvkec9/image/upload/v1693071546/drinksmenu_p2duzb.png"
              />
              <Card.Title className="text-center mt-3">
                <h3>
                  <strong>
                    <i> Drinks </i>
                  </strong>
                </h3>
                <small>
                  <i> Choose your favorite Drink </i>
                </small>
              </Card.Title>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Button className="mt-3 mb-3" size="lg" variant="dark">
                  <Link to="/menu/drinks">
                    <strong>
                      <i> SEE MORE </i>
                    </strong>
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Desserts */}
          <Col
            xs={12}
            md={12}
            lg={4}
            className="mb-5 d-flex flex-column align-items-center justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dxctvkec9/image/upload/v1693071853/dessertsmenu_g1odmn.png"
              />
              <Card.Title className="text-center mt-3">
                <h3>
                  <strong>
                    <i> Desserts </i>
                  </strong>
                </h3>
                <small>
                  <i> Choose your favorite Dessert </i>
                </small>
              </Card.Title>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Button className="mt-3 mb-3" size="lg" variant="dark">
                  <Link to="/menu/desserts">
                    <strong>
                      <i> SEE MORE </i>
                    </strong>
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
