import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import mainpizza from "../../assets/mainpizza.png";

export const PizzaCard = () => {
  const [hoverMouse, setHoverMouse] = useState(false);

  const handleMouseEnter = () => {
    setHoverMouse(true);
  };

  const handleMouseLeave = () => {
    setHoverMouse(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!hoverMouse ? (
        <Card className="border-dark">
          <Card.Img src={mainpizza} alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
            <div>
              <Button variant="dark" size="sm" className="mb-1">
                {" "}
                <Link to="/menu/pizzas">
                  <strong>
                    <i>ORDER NOW</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      ) : (
        <Card className="menu-card-hover">
          <Card.Img src={mainpizza} alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end text-center">
            <div>
              <Button variant="dark" size="lg" className="mb-1">
                {" "}
                <Link to="/menu/pizzas">
                  <strong>
                    <i>ORDER NOW</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      )}
    </div>
  );
};
