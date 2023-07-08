import { PizzaCarousel } from "./PizzaCarousel";
import { ComboCard } from "./ComboCard";
import { DrinksCard } from "./DrinksCard";
import { DessertsCard } from "./DessertsCard";
import { Row, Col } from "react-bootstrap";

export const HomeMainCard = () => {
  return (
    <Row xs={1} sm={1} md={2}>
      {/* Pizza Carousel */}
      <Col className="mb-3">
        <PizzaCarousel />
      </Col>

      <Col>
        <Row>
          <Col xs={12} className="mb-3">
            <ComboCard />
          </Col>
        </Row>

        {/* Drinks Box */}
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <DrinksCard />
          </Col>

          {/* Desserts Box */}

          <Col xs={12} md={6} className="mb-3">
            <DessertsCard />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
