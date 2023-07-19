import {
  PizzaCarousel,
  PizzaCard,
  DrinksCard,
  DessertsCard,
} from "../components";
import { Row, Col } from "react-bootstrap";

export const HomeMain = () => {
  return (
    <Row xs={1} sm={1} md={2}>
      {/* Pizza Carousel */}
      <Col className="mb-3">
        <PizzaCarousel />
      </Col>

      <Col>
        <Row>
          <Col xs={12} className="mb-3">
            <PizzaCard />
          </Col>
        </Row>

        {/* Drinks Box */}
        <Row>
          <Col className="mb-3">
            <DrinksCard />
          </Col>

          {/* Desserts Box */}

          <Col className="mb-3">
            <DessertsCard />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
