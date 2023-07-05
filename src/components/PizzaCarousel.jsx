import { Carousel, Button } from "react-bootstrap";

import pepperoniPizza from "../assets/pepperonipizza.png";
import primaveraPizza from "../assets/primaverapizza.png";
import menuPizza from "../assets/menupizza.png";

export const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={pepperoniPizza} alt="First slide" />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-3">
            <strong>
              <i>ORDER NOW</i>
            </strong>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={primaveraPizza}
          alt="Second slide"
        />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-3">
            <strong>
              <i>ORDER NOW</i>
            </strong>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={menuPizza} alt="Third slide" />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-3">
            <strong>
              <i>FULL MENU</i>
            </strong>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      ß
    </Carousel>
  );
};
