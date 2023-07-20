import { Card, Button } from "react-bootstrap";

import drinks from "../../assets/drinks.png";
import { Link } from "react-router-dom";

export const DrinksCard = () => {
  return (
    <Card className="border-dark">
      <Card.Img src={drinks} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <div>
          <Button variant="dark" size="md">
            {" "}
            <Link to="/menu/drinks">
              <strong>
                <i>ORDER</i>
              </strong>
            </Link>
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
