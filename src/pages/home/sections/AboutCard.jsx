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
          md={6}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dxctvkec9/image/upload/v1692628414/bgaboutcard_ydw4if.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="p-5 d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <h5 className="mb-3">
              <i>
                <u>About Us</u>
              </i>
            </h5>

            <h1>
              We are a Family <br />
              <strong className="text-white">Owned </strong>
              Restaurant <br />
              <strong className="text-white">Serving</strong> Since <br />
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
              className="mt-3 mx-auto d-block d-md-inline-block mb-3 mb-md-0"
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
        <Col xs={12} md={6} ref={ref}>
          <Image
            fluid
            hidden={!inView}
            src={aboutus}
            className={`${
              inView ? "animate__animated animate__lightSpeedInRight" : ""
            }`}
          />
        </Col>
      </Row>
    </Container>
  );
};
