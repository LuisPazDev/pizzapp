import { Button, Card, Badge } from "react-bootstrap";

import desserts from "../assets/desserts.png";

export const DessertsCard = () => {
  return (
    <Card>
      <Card.Img src={desserts} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Card.Title>
          <Badge bg="light" className="text-dark">
            <h5>
              <strong>
                <i>DELICIOUS DESSERTS</i>
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
