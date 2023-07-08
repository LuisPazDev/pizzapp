import { Card, Button } from "react-bootstrap";
import catering from "../assets/catering.png";

export const CateringCard = () => {
  return (
    <Card>
      <Card.Img src={catering} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-start">
        <div className="me-3">
          <Button variant="dark" size="sm">
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
