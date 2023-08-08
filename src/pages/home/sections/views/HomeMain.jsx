import { DessertsCard, DrinksCard, PizzaCarousel } from "../components";
import { Row, Col, Container } from "react-bootstrap";

export const HomeMain = () => {
  return (
    <>
      <Row xs={1} sm={1} md={2}>
        {/* Pizza Carousel */}
        <Col className="mb-3">
          <PizzaCarousel />
        </Col>

        <Col>
          {/* Pizza Box */}
          <Row className="mb-3">
            <DrinksCard />
          </Row>
          {/* Drinks Box */}
          <Row>
            <DessertsCard />
          </Row>
        </Col>
      </Row>
    </>
  );
};
