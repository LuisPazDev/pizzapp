import { SeeMenuCard, AboutCard } from "../components";
import { Row, Col } from "react-bootstrap";

export const HomeBanner = () => {
  return (
    <Row xs={1} md={2}>
      <Col className="mt-2 mb-2">
        <SeeMenuCard />
      </Col>
      <Col className="mt-2 mb-2">
        <AboutCard />
      </Col>
    </Row>
  );
};
