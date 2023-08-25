import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Badge, Container, Image } from "react-bootstrap";

export const Menu = () => {
  // Function to handle button hover
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleButtonMouseEnter = (index) => {
    setHoverIndex(index);
  };
  const handleButtonMouseLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <Container fluid className="p-4">
      <Row>
        <Col
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Image
            fluid
            style={{
              width: "400px",
              height: "400px",
            }}
            src="https://res.cloudinary.com/dxctvkec9/image/upload/v1692889790/pizzaslide_lowaps.png"
            alt="Menu Pizzas"
          />
        </Col>
        <Col
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Image
            src="https://res.cloudinary.com/dxctvkec9/image/upload/v1692889773/drinkslide_wkueyw.png"
            alt="Menu Drinks"
          />
        </Col>
        <Col
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Image
            src="https://res.cloudinary.com/dxctvkec9/image/upload/v1692889797/dessertslide_nfjynh.png"
            alt="Menu Desserts"
          />
        </Col>
      </Row>
    </Container>
  );
};
