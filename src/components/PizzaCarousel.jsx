import { Carousel, Badge, Button } from "react-bootstrap";

import pepperoniPizza from "../assets/pepperonipizza.png";
import primaveraPizza from "../assets/primaverapizza.png";
import pomodoroPizza from "../assets/pomodoropizza.png";

export const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={pepperoniPizza} alt="First slide" />
        <Carousel.Caption className="text-end">
          <Button className="mt-3">
            <strong>
              <i>ORDER NOW</i>
            </strong>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={primaveraPizza}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Button className="mt-3">
            <strong>
              <i>ORDER NOW</i>
            </strong>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pomodoroPizza} alt="Third slide" />
        <Carousel.Caption>
          <Button className="mt-3">
            <strong>
              <i>ORDER NOW</i>
            </strong>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
