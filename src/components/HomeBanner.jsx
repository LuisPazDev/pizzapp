import { Card } from "react-bootstrap";
import pizzabanner from "../assets/pizzabanner.png";

export const HomeBanner = () => {
  return (
    <Card>
      <Card.Img src={pizzabanner} style={{ maxHeight: 200 }} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <div>
          <h3 className="text-white">
            <strong>
              <i>IT'S TIME TO SHARE</i>
            </strong>
            <br />
            <strong>
              <i>IT'S PIZZA TIME</i>
            </strong>
          </h3>
          <button className="btn btn-dark btn-md">
            <strong>
              <i>ABOUT US</i>
            </strong>
          </button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
