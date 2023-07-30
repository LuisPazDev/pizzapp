import { useState, useEffect } from "react";
import { db } from "../../../components/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Card, Button, Badge, Row, Col, Container } from "react-bootstrap";

export const MenuDrinks = () => {
  // get data from firebase and show it in cards (useEffect and useState)
  const [list, setList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "drinks"));
    onSnapshot(q, (querySnapshot) => {
      setList(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  // show button on hover card image and hide button on leave card image (onMouseEnter and onMouseLeave)

  const [showButton, setShowButton] = useState(null);

  const handleShowButton = (key) => setShowButton(key);
  const handleNoShowButton = () => setShowButton(null);

  return (
    <Container fluid>
      <Row className="text-center mb-4">
        <Row>
          <div className="mt-4">
            <h3>
              <Badge pill bg="dark">
                <strong>
                  <i>DRINKS</i>
                </strong>
              </Badge>
            </h3>
            <p>
              <i>Choose your favorite drink</i>
            </p>
          </div>
        </Row>

        <Row xs={1} md={3} lg={3} className="mt-4 mb-4">
          {list.map((item, key) => (
            <Col className="mt-3 mb-3">
              <Card
                key={item.id}
                onMouseEnter={() => handleShowButton(key)}
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
                        className="text-dark border border-2 border-dark"
                      >
                        <b>
                          <i>{item.data.name}</i>
                        </b>
                      </Badge>
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      <strong>{item.data.price}</strong>
                    </p>
                  </Card.Text>
                  {showButton === key ? (
                    <Button
                      size="lg"
                      variant="dark"
                      onClick={() => {
                        console.log(item.data.name + " added to cart");
                      }}
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
