import { useState, useEffect } from "react";
import { db } from "../../../components/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
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

  const [showButton, setShowButton] = useState(false);

  const handleShowButton = (key) => setShowButton(key);
  const handleNoShowButton = () => setShowButton(false);

  return (
    <Container fluid>
      <Row className="text-center">
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
          {list.map((item, key) => (
            <Col className="mt-3 mb-3">
              <Card
                key={item.id}
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
                  {showButton && (
                    <Button size="lg" variant="dark">
                      <strong>
                        <i>ORDER</i>
                      </strong>
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};