import { useState, useEffect } from "react";
import { db } from "../../../components/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
    <>
      <div>
        <h1 className="text-center mt-5"> Pizzas </h1>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 ">
        {list.map((item) => (
          <Col>
            <Card
              style={{ width: "14rem" }}
              className="text-center ms-auto me-auto"
            >
              <Card.Img variant="top" src={item.data.img} />
              <Card.Body>
                <Card.Title>{item.data.name}</Card.Title>
                <Card.Text>
                  <p>{item.data.size}</p>

                  <p> {item.data.price}</p>
                </Card.Text>
                <Button> See Ingredients </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
