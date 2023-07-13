import { Card } from "react-bootstrap";

import about from "../assets/about.png";

export const AboutCard = () => {
  return (
    <Card>
      <Card.Img src={about} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start text-center">
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
