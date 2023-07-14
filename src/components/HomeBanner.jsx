import { Card, Button, Badge } from "react-bootstrap";
import pizzabanner from "../assets/pizzabanner.png";

export const HomeBanner = () => {
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
          <Badge bg="light">
            <h6 className="text-black">
              <strong>
                <i>OFFERING FREE DELIVERY </i>
              </strong>
            </h6>
          </Badge>
          <br />
          <Button className="mt-2" variant="dark" size="lg">
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
