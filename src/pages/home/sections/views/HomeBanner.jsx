import { ReservationCard, DeliveryCard } from "../components";
import { Row, Col } from "react-bootstrap";

export const HomeBanner = () => {
  return (
    <Row xs={1} md={2}>
      <Col className="mt-2 mb-2">
        <ReservationCard />
      </Col>
      <Col className="mt-2 mb-2">
        <DeliveryCard />
      </Col>
    </Row>
  );
};
