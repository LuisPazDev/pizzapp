import { useState, useEffect } from "react";
import { db } from "../../../components/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { ShoppingCart } from "../../../components/ShoppingCart";
import { Card, Button, Badge, Row, Col, Container } from "react-bootstrap";

export const MenuPizzas = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "menu"));
    onSnapshot(q, (querySnapshot) => {
      setList(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  // show button when hover on card
  const [showButton, setShowButton] = useState(null);

  const handleShowButton = (item) => setShowButton(item);
  const handleNoShowButton = () => setShowButton(null);

  return (
    <Container fluid>
      <Row className="text-center mb-4">
        <Row>
          <div className="mt-4">
            <h3>
              <Badge pill bg="dark">
                <strong>
                  <i>PIZZAS</i>
                </strong>
              </Badge>
            </h3>
            <p>
              <i>Choose your favorite pizza</i>
            </p>
          </div>
        </Row>

        <Row xs={1} md={3} lg={3} className="mt-4 mb-4">
          {list.map((item) => (
            <Col className="mt-3 mb-3" key={item.id}>
              <Card
                onMouseEnter={() => handleShowButton(item.id)}
                onMouseLeave={handleNoShowButton}
                border="dark"
                className="text-center ms-auto me-auto rounded-start"
              >
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={item.data.img}
                />

                <Card.Body>
                  <Card.Title>
                    <h3>
                      <Badge
                        pill
                        bg="light"
                        className="text-dark border border-dark"
                      >
                        <b>
                          <i>{item.data.name}</i>
                        </b>
                      </Badge>
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      <strong>
                        <i>{item.data.size}</i>
                      </strong>
                    </p>

                    <p>
                      <strong>{item.data.price}</strong>
                    </p>
                  </Card.Text>
                  {showButton === item.id ? (
                    <Button
                      size="lg"
                      variant="dark"
                      //onClick={() => handleAddToCart(item)}
                    >
                      <strong>
                        <i>ADD ORDER</i>
                      </strong>
                    </Button>
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};
