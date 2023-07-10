import { Row, Col } from "react-bootstrap";
import { DeliveryCard } from "./DeliveryCard";
import { ReservarionCard } from "./ReservarionCard";

export const HomeSecondary = () => {
  return (
    <Row xs={1} sm={1} md={2} className="d-flex align-items-center">
      <Col className="mt-2 mb-2">
        <ReservarionCard />
      </Col>
      <Col className="mt-2 mb-2">
        <DeliveryCard />
      </Col>
    </Row>
  );
};
