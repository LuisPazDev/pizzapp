import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import desserts from "../../assets/desserts.png";
import { Link } from "react-router-dom";

export const DessertsCard = () => {
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
            <Card.Img src={desserts} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
              <Card.Text>
                <Button variant="dark" size="sm">
                  {" "}
                  <Link to="/menu/desserts">
                    <strong>
                      <i>ORDER</i>
                    </strong>
                  </Link>
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        ) : (
          <Card className="menu-card-hover">
            <Card.Img src={desserts} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end text-center">
              <Card.Text>
                <Button variant="dark" size="lg">
                  {" "}
                  <Link to="/menu/desserts">
                    <strong>
                      <i>ORDER</i>
                    </strong>
                  </Link>
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        )
      }
    </div>
  );
};
