import { Card, Button } from "react-bootstrap";

import oven from "../assets/combos.png";

export const ComboCard = () => {
  return (
    <Card>
      <Card.Img src={oven} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <div>
          <Button variant="dark" size="md" className="mb-2">
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
