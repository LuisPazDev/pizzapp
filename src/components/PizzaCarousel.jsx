import { Carousel, Badge, Button } from "react-bootstrap";

import pepperoniPizza from "../assets/pepperonipizza.png";
import primaveraPizza from "../assets/primaverapizza.png";
import pomodoroPizza from "../assets/pomodoropizza.png";

export const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={pepperoniPizza} alt="First slide" />
        <Carousel.Caption>
          <h5>
            TRY OUR{" "}
            <Badge bg="dark">
              <h4>
                <strong>NEW</strong>
              </h4>
            </Badge>
          </h5>
          <Badge bg="light" className="text-dark">
            <h4>
              <strong>PEPPERONI PIZZA</strong>
            </h4>
          </Badge>
          <Button className="mt-3">ORDER NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={primaveraPizza}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>
            HOUSE{" "}
            <Badge bg="dark">
              <h4>
                <strong>SPECIAL</strong>
              </h4>
            </Badge>
          </h5>
          <Badge bg="light" className="text-dark">
            <h4>
              <strong>PRIMAVERA PIZZA</strong>
            </h4>
          </Badge>
          <Button className="mt-3">ORDER NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pomodoroPizza} alt="Third slide" />
        <Carousel.Caption>
          <h5>
            TRY OUR{" "}
            <Badge bg="dark">
              <h4>
                <strong>NEW</strong>
              </h4>
            </Badge>
          </h5>
          <Badge bg="light" className="text-dark">
            <h4>
              <strong>POMODORO PIZZA</strong>
            </h4>
          </Badge>
          <Button className="mt-3">ORDER NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
