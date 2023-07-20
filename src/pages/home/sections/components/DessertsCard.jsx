import { Button, Card } from "react-bootstrap";

import desserts from "../../assets/desserts.png";
import { Link } from "react-router-dom";

export const DessertsCard = () => {
  return (
    <Card className="border-dark">
      <Card.Img src={desserts} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-end">
        <Card.Text>
          <Button variant="dark" size="md">
            {" "}
            <Link to="/menu/desserts">
              <strong>
                <i>ORDER</i>
              </strong>
            </Link>
          </Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};
