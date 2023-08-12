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
    <Container>
      <Row>
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
              Check Out Our <br />
              <strong>Menu </strong>
              We Have <br />
              <strong>Something</strong> For <br />
              <strong>Everyone</strong>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button variant="dark" size="lg">
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
