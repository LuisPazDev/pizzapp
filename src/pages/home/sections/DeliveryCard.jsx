import { Button, Badge, Row, Col, Container, Image } from "react-bootstrap";

import delivery from "../assets/delivery.png";

export const DeliveryCard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Image Col */}
        <Col xs={12} md={6} className="p-4">
          <Image fluid src={delivery} />
        </Col>
        {/* Text Col */}
        <Col
          style={{
            backgroundColor: "rgba(250, 124, 6, 0.863)",
          }}
          xs={12}
          md={6}
          className="p-4 d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <h1>
              We are <b className="text-white">Now </b> <br />
              Offering Free
              <br />
              <strong className="text-white">Delivery </strong>
              <strong>with UberEats</strong> <br />
              on Orders <b className="text-white">Over $20 </b>
            </h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button className="mt-2" variant="dark" size="lg">
              <strong>
                <i>Delivery</i>
              </strong>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
