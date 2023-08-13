import {
  Button,
  Badge,
  Carousel,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";

import pizzaslide from "../../assets/pizzaslide.png";
import drinkslide from "../../assets/drinkslide.png";
import dessertslide from "../../assets/dessertslide.png";

export const DeliveryCard = () => {
  return (
    <Container className="ps-5 pe-5 border-dark border-bottom border-2">
      <Row className="mt-2 mb-4">
        <div className="mt-1">
          <h4>
            <Badge bg="dark">Our Menu</Badge>
          </h4>
        </div>
        {/* Carousel Col */}
        <Col xs={12} md={6}>
          <Carousel fade>
            {/* First Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={pizzaslide}
                alt="First slide"
              />
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={drinkslide}
                alt="Second slide"
              />
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={dessertslide}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        {/* Text Col */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <h1>
              Check out our <br />
              <strong>Menu </strong>
              We have <br />
              <strong>Something</strong> for <br />
              <strong>Everyone</strong>
            </h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button className="mt-2" variant="dark" size="lg">
              <strong>
                <i>Go To Menu</i>
              </strong>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
