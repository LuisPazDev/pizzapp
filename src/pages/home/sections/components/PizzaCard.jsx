import { Card, Button } from "react-bootstrap";

import mainpizza from "../../assets/mainpizza.png";

export const PizzaCard = () => {
  return (
    <Card className="border-dark">
      <Card.Img src={mainpizza} alt="Card image" />
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
