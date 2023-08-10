import {
  Button,
  Badge,
  Card,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";

import menu from "../../assets/pizzahome.png";

export const DeliveryCard = () => {
  return (
    <Container
      fluid
      style={{
        width: "100%",
      }}
    >
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <h1>
              Handmade, <br />
              With an Extra <br />
              Pinch of Love
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button variant="dark" size="lg">
              <strong>
                <i>Order Now</i>
              </strong>
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image src={menu} fluid />
        </Col>
      </Row>
    </Container>
  );
};
