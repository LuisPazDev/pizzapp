import { PizzaCarousel } from "./PizzaCarousel";
import { DrinksCard } from "./DrinksCard";
import { Container, Row, Col } from "react-bootstrap";
import { DessertsCard } from "./DessertsCard";

export const HomeMainCard = () => {
  return (
    <Container className="text-center" fluid>
      <Row xs={1} sm={1} md={2} lg={2} className="p-2">
        {/* Pizza Carousel */}
        <Col className="mb-2">
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
    </Container>
  );
};
