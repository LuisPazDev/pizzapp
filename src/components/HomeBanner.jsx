import { Card } from "react-bootstrap";
import pizzabanner from "../assets/pizzabanner.png";

export const HomeBanner = () => {
  return (
    <Card>
      <Card.Img src={pizzabanner} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <div>
          <h2 className="text-white">
            <strong>
              <i>IT'S TIME TO SHARE</i>
            </strong>
            <br />
            <strong>
              <i>IT'S PIZZA TIME</i>
            </strong>
          </h2>
        </div>
        <div className="mt-2">
          <button className="btn btn-dark btn-lg">
            <strong>
              <i>ABOUT US</i>
            </strong>
          </button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
