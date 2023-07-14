import { Container, Row, Col } from "react-bootstrap";
import { FullMenuCard } from "./FullMenuCard";
import { AboutusCard } from "./AboutusCard";

export const HomeBanner = () => {
  return (
    <Row xs={1} md={2}>
      <Col className="mt-1 mb-1">
        <FullMenuCard />
      </Col>
      <Col className="mt-1 mb-1">
        <AboutusCard />
      </Col>
    </Row>
  );
};
