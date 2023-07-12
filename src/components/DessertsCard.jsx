import { Button, Card, Badge } from "react-bootstrap";

import desserts from "../assets/desserts.png";

export const DessertsCard = () => {
  return (
    <Card>
      <Card.Img src={desserts} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <Card.Text>
          <Button variant="dark" size="md">
            {" "}
            <strong>
              <i>MENU</i>
            </strong>
          </Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};
