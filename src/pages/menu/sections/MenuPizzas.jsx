import { useState, useEffect } from "react";
import { db } from "../../../components/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";

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

  return (
    <Row>
      <Row>
        <div className="text-center mt-4">
          <h3>
            <Badge pill bg="dark">
              <strong>
                <i>PIZZAS</i>
              </strong>
            </Badge>
          </h3>
          <p>
            <i>
              Choose your favorite pizza
              <br />
              and we will prepare it for you with the best ingredients.
            </i>
          </p>
        </div>
      </Row>

      <Row xs={1} md={3} lg={3} className="g-4 ">
        {list.map((item) => (
          <Col>
            <Card
              border="dark"
              style={{ width: "14rem" }}
              className="text-center ms-auto me-auto rounded-start"
            >
              <Card.Img
                className="img-fluid"
                variant="top"
                src={item.data.img}
              />
              <hr />
              <Card.Body>
                <Card.Title>{item.data.name}</Card.Title>
                <Card.Text>
                  <p>{item.data.size}</p>

                  <p> {item.data.price}</p>
                </Card.Text>
                <Button variant="dark">
                  <strong>
                    <i>ORDER</i>
                  </strong>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
};
