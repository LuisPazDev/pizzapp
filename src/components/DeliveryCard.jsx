import { Button, Card } from "react-bootstrap";
import delivery from "../assets/delivery.png";

export const DeliveryCard = () => {
  return (
    <Card>
      <Card.Img src={delivery} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <div className="me-4">
          <Button variant="dark" size="sm" className="me-5 mb-1">
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
