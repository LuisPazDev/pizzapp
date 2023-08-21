import { Button, Row, Col, Container, Image } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

import delivery from "../assets/delivery.png";

export const DeliveryCard = () => {
  const { ref, inView } = useInView({
    freezeOnceVisible: true,
    threshold: 0.5,
    triggerOnce: true,
  });

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
          <div className="ms-4 mt-4">
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
              <a href="https://www.ubereats.com/" target="_blank">
                <strong>
                  <i>Delivery</i>
                </strong>
              </a>
            </Button>
          </div>
        </Col>
        {/* Image Col */}
        <Col xs={12} md={6}>
          <div ref={ref}>
            <Image
              hidden={!inView}
              fluid
              src={delivery}
              className={`${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
