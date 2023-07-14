import { Card, Button, Badge } from "react-bootstrap";
import pizzabanner from "../assets/pizzabanner.png";

export const FullMenuCard = () => {
  return (
    <Card>
      <Card.Img src={pizzabanner} style={{ minHeight: 200 }} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <div className="text-white">
          <h4 className="mb-3">
            <strong>
              <i>IT'S TIME TO SHARE</i>
            </strong>
            <br />
            <strong>
              <i>IT'S PIZZA TIME</i>
            </strong>
          </h4>
          <Button variant="dark" size="md">
            {" "}
            <strong>
              <i>FULL MENU</i>
            </strong>
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
