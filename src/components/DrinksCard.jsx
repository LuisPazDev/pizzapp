import { Card, Button, Badge } from "react-bootstrap";

import drinks from "../assets/drinks.png";

export const DrinksCard = () => {
  return (
    <Card>
      <Card.Img src={drinks} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Card.Title>
          <Badge bg="light" className="text-dark">
            <h5>
              <strong>
                <i>PERFECT DRINKS</i>
              </strong>
            </h5>
          </Badge>
        </Card.Title>
        <Card.Text>
          <Button size="md">
            {" "}
            <strong>
              <i>ORDER NOW</i>
            </strong>
          </Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};
