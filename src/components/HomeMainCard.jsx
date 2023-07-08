import { PizzaCarousel } from "./PizzaCarousel";
import { DrinksCard } from "./DrinksCard";
import { DessertsCard } from "./DessertsCard";
import { Row, Col } from "react-bootstrap";

export const HomeMainCard = () => {
  return (
    <Row xs={1} sm={1} md={2} lg={2}>
      {/* Pizza Carousel */}
      <Col className="mb-3">
        <PizzaCarousel />
      </Col>

      <Col>
        {/* Drinks Box */}
        <Row className="mb-3">
          <Col>
            <DrinksCard />
          </Col>
        </Row>
        {/* Desserts Box */}
        <Row>
          <Col>
            <DessertsCard />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
