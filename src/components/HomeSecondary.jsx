import { Row, Col } from "react-bootstrap";
import { DeliveryCard } from "./DeliveryCard";
import { ReservarionCard } from "./ReservarionCard";
import { HiringCard } from "./HiringCard";

export const HomeSecondary = () => {
  return (
    <Row xs={1} sm={1} md={3} className="mb-3">
      <Col className="mt-2 mb-2">
        <ReservarionCard />
      </Col>
      <Col className="mt-2 mb-2">
        <DeliveryCard />
      </Col>
      <Col className="mt-2 mb-2">
        <HiringCard />
      </Col>
    </Row>
  );
};
