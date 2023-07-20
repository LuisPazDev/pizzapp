import { Card, Button, Row, Col } from "react-bootstrap";

import pizzaparty from "../../assets/pizzaparty.png";
import { Link } from "react-router-dom";

export const SeeMenuCard = () => {
  return (
    <Card className="border-dark">
      <Card.Img src={pizzaparty} style={{ minHeight: 200 }} />
      <Card.ImgOverlay className="d-flex flex-column justify-column justify-content-center">
        <Row className="text-white">
          <Col className="text-center">
            <div className="mb-3">
              <h4>
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
            </div>
            <div>
              <Button variant="dark" size="lg">
                {" "}
                <Link to="/menu">
                  <strong>
                    <i>SEE MENU</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};
