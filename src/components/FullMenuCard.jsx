import { Card, Button } from "react-bootstrap";
import pizzabanner from "../assets/pizzabanner.png";

export const FullMenuCard = () => {
  return (
    <Card>
      <Card.Img src={pizzabanner} style={{ minHeight: 200 }} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <div className="text-white">
          <h4 className="mb-3">
            <strong>
              <b>
                <i>IT'S TIME TO SHARE</i>
              </b>
            </strong>
            <br />
            <strong>
              <b>
                <i>IT'S PIZZA TIME</i>
              </b>
            </strong>
          </h4>
          <Button className="mt-2" variant="dark" size="md">
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
