import { AboutCard, PizzaCarousel, SeeMenuCard } from "../components";
import { Row, Col, Container } from "react-bootstrap";

export const HomeMain = () => {
  return (
    <Container style={{ maxWidth: "1200px" }}>
      <Row xs={1} sm={1} md={2}>
        {/* Pizza Carousel */}
        <Col className="mb-4">
          <PizzaCarousel />
        </Col>

        <Col>
          {/* Pizza Box */}
          <Row className="mb-4">
            <SeeMenuCard />
          </Row>
          {/* Drinks Box */}
          <Row>
            <AboutCard />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
