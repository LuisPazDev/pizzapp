import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Badge, Container, Image } from "react-bootstrap";

import menupizza from "./assets/menupizzas.png";
import menudrinhs from "./assets/menudrinks.png";
import menudesserts from "./assets/menudesserts.png";

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
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} className="mb-4">
          <Image src={menupizza} alt="Menu Pizzas" />
        </Col>
        <Col xs={12} className="mb-4">
          <Image src={menudrinhs} alt="Menu Drinks" />
        </Col>
        <Col xs={12} className="mb-4">
          <Image src={menudesserts} alt="Menu Desserts" />
        </Col>
      </Row>
    </Container>
  );
};
