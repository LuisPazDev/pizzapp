import { Button, Badge, Card } from "react-bootstrap";

import delivery from "../assets/delivery.png";

export const DeliveryCard = () => {
  return (
    <Card>
      <Card.Img src={delivery} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <div className="me-5 mb-2">
          <Button className="me-1" variant="dark" size="md">
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
