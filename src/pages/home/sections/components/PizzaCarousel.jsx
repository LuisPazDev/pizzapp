import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";

import menupizza from "../../assets/pizzamenu.png";
import menudrinks from "../../assets/drinks.png";
import menudesserts from "../../assets/desserts.png";

export const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{
            maxHeight: "600px",
            minHeight: "400px",
          }}
          className="d-block h-100 w-100"
          src={menupizza}
          alt="First slide"
        />
        <Carousel.Caption className="text-center"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            maxHeight: "600px",
            minHeight: "400px",
          }}
          className="d-block w-100"
          src={menudrinks}
          alt="Second slide"
        />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-1">
            <Link to="/menu/pizzas">
              <strong>
                <i>ORDER NOW</i>
              </strong>
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            maxHeight: "600px",
            minHeight: "400px",
          }}
          className="d-block w-100"
          src={menudesserts}
          alt="Third slide"
        />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-1">
            <Link to="/menu/pizzas">
              <strong>
                <i>ORDER NOW</i>
              </strong>
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
