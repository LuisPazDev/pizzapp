import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import drinks from "../../assets/drinks.png";

export const DrinksCard = () => {
  const [hoverMouse, setHoverMouse] = useState(false);

  const handleMouseEnter = () => {
    setHoverMouse(true);
  };

  const handleMouseLeave = () => {
    setHoverMouse(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {
        // If showButton is true, then show the button
        !hoverMouse ? (
          <Card className="border-dark">
            <Card.Img src={drinks} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
              <div></div>
            </Card.ImgOverlay>
          </Card>
        ) : (
          <Card className="menu-card-hover">
            <Card.Img src={drinks} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end text-center">
              <div>
                <Button variant="dark" size="lg">
                  {" "}
                  <Link to="/menu/drinks">
                    <strong>
                      <i>ORDER NOW</i>
                    </strong>
                  </Link>
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        )
      }
    </div>
  );
};
