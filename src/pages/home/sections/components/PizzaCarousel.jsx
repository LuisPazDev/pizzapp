import { Carousel, Button } from "react-bootstrap";

import mainlogo from "../../assets/mainlogo.png";
import pepperoniPizza from "../../assets/pepperonipizza.png";
import primaveraPizza from "../../assets/primaverapizza.png";
import { Link } from "react-router-dom";

export const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={mainlogo} alt="First slide" />
        <Carousel.Caption className="text-center"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pepperoniPizza}
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
        <img className="d-block w-100" src={primaveraPizza} alt="Third slide" />
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
