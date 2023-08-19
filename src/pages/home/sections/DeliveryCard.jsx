import { Button, Badge, Row, Col, Container, Image } from "react-bootstrap";

import delivery from "../assets/delivery.png";

export const DeliveryCard = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#FA8D28",
      }}
    >
      <Row>
        {/* Text Col */}
        <Col
          style={{
            backgroundColor: "#FA8D28",
          }}
          xs={12}
          md={6}
          className="p-3 d-flex flex-column align-items-center
          justify-content-center"
        >
          <div className="ms-4">
            <h1>
              <b className="text-white">Now </b>
              Oferring
              <br />
              Free
              <strong className="text-white"> Delivery </strong>
              <br />
              <strong>with UberEats on</strong>
              <br />
              Orders <b className="text-white">Over $20 </b>
            </h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button
              className="mt-3 mx-auto d-block d-md-inline-block mb-3 mb-md-0"
              variant="dark"
              size="lg"
            >
              <strong>
                <i>Delivery</i>
              </strong>
            </Button>
          </div>
        </Col>
        {/* Image Col */}
        <Col xs={12} md={6}>
          <Image fluid src={delivery} />
        </Col>
      </Row>
    </Container>
  );
};
