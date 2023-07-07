import { Card, Button } from "react-bootstrap";
import reservation from "../assets/reservation.png";

export const ReservarionCard = () => {
  return (
    <Card>
      <Card.Img src={reservation} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <div className="me-3">
          <Button variant="dark" size="sm" className="me-5 mb-1">
            {" "}
            <strong>
              <i>CONTACT US</i>
            </strong>
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
