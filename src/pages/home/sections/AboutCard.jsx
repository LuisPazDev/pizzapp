import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Container, Button, Row, Col, Image } from "react-bootstrap";

import aboutus from "../assets/aboutus.png";

export const AboutCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Container fluid>
      <Row>
        {/* Text Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <h5 className="mb-3">
              <i>
                <u>About Us</u>
              </i>
            </h5>

            <h1>
              We are a Family <br />
              <strong>Owned </strong>
              Restaurant <br />
              <strong>Serving</strong> Since <br />
              <strong>2017</strong>
            </h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
          </div>
          <div>
            <Button
              className="mt-4 mx-auto d-block d-md-inline-block mb-3 mb-md-0"
              variant="dark"
              size="lg"
            >
              <Link to="/about">
                <strong>
                  <i>Know More</i>
                </strong>
              </Link>
            </Button>
          </div>
        </Col>
        {/* Image Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          ref={ref}
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dxctvkec9/image/upload/v1692626989/bgreservation_gywqzv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            fluid
            hidden={!inView}
            src={aboutus}
            className={`${
              inView
                ? "animate__animated animate__fadeInRight animate__delay-2s"
                : ""
            }`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x300";
            }}
            alt="About Us"
          />
        </Col>
      </Row>
    </Container>
  );
};
