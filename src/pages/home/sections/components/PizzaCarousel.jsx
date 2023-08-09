import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";

import menupizza from "../../assets/pizzamenu.png";
import menudrinks from "../../assets/pizzacard2.png";
import menudesserts from "../../assets/pizzacard3.png";

export const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ minHeight: "500px" }}
          className="d-block h-100 w-100"
          src={
            "https://res.cloudinary.com/dxctvkec9/image/upload/v1691590077/pizzacard_crwxhf.png"
          }
          alt="First slide"
        />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-1">
            <Link to="/menu">
              <strong>
                <i>OUR MENU</i>
              </strong>
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ minHeight: "500px" }}
          className="d-block w-100"
          src={menudrinks}
          alt="Second slide"
        />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-1">
            <Link to="/menu/">
              <strong>
                <i>OUR MENU</i>
              </strong>
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ minHeight: "500px" }}
          className="d-block w-100"
          src={menudesserts}
          alt="Third slide"
        />
        <Carousel.Caption className="text-center">
          <Button variant="dark" size="lg" className="mt-1">
            <Link to="/menu">
              <strong>
                <i>OUR MENU</i>
              </strong>
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
