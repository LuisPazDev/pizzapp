import { Card, Button } from "react-bootstrap";

import drinks from "../assets/drinks.png";

export const DrinksCard = () => {
  return (
    <Card>
      <Card.Img src={drinks} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <div>
          <Button variant="dark" size="md" className="mb-1">
            {" "}
            <strong>
              <i>ORDER NOW</i>
            </strong>
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
