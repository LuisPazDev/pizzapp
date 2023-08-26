import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Container, Badge, Button, Row, Col, Image } from "react-bootstrap";

export const HomeHeader = () => {
  const { ref, inView } = useInView({
    freezeOnceVisible: true,
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Container fluid style={{ backgroundColor: "rgba(250, 124, 6, 0.863)" }}>
      <Row className="ps-3 pe-3">
        {/* Text Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <i>
              <h4 className="mb-3">
                <Badge bg="dark">Welcome</Badge>
              </h4>
              <h1>
                <b className="text-white">We </b> Serve the
                <br />
                <b className="text-white"> Best Pizza </b> in Town
                <br />
                Handmade, With <br />
                an Extra Pinch <br />
                of <b className="text-white"> Love</b> and{" "}
                <b className="text-white">Care </b>
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
                <Link to="/menu">
                  <strong>
                    <i>Order Now</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </div>
        </Col>
        {/* Img Col */}
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
              hidden={!inView}
              fluid
              src="https://res.cloudinary.com/dxctvkec9/image/upload/v1693068888/mainpizza_ykaelu.png"
              className={`${
                inView ? "animate__animated animate__backInRight" : ""
              }`}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
