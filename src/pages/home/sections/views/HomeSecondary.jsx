import { DeliveryCard, ReservationCard, HiringCard } from "../components";
import { Row, Col } from "react-bootstrap";

export const HomeSecondary = () => {
  return (
    <Row xs={1} sm={1} md={3} className="mb-3">
      <Col className="mt-2 mb-2">
        <ReservationCard />
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
