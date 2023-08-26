import { useInView } from "react-intersection-observer";
import { Button, Row, Col, Container, Image } from "react-bootstrap";

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
      <Row className="ps-3 pe-3">
        {/* Text Col */}
        <Col
          style={{
            backgroundColor: "#FA8D28",
          }}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className="mt-5 mb-3 d-flex flex-column align-items-center
          justify-content-center"
        >
          <div className="mt-4">
            <i>
              <h5 className="mb-3">
                <i>
                  <u>Free Delivery</u>
                </i>
              </h5>
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
            </i>

            <div className="mt-4">
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
          </div>
        </Col>
        {/* Image Col */}
        <Col
          ref={ref}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div ref={ref}>
            <Image
              style={{
                maxWidthidth: "500px",
                maxHeight: "500px",
              }}
              hidden={!inView}
              fluid
              src={delivery}
              className={`${
                inView
                  ? "animate__animated animate__fadeInRight animate__delay-1s"
                  : ""
              }`}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
