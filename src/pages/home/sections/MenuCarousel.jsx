import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../components/Firebase";
import {
  Carousel,
  Button,
  Card,
  Container,
  Row,
  Col,
  Badge,
} from "react-bootstrap";

export const MenuCarousel = () => {
  // Pizza list from Firebase
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "menu"));
    onSnapshot(q, (querySnapshot) => {
      setPizzaList(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  // Drinks list from Firebase
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "drinks"));
    onSnapshot(q, (querySnapshot) => {
      setDrinkList(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  // Desserts list from Firebase
  const [dessertList, setDessertList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "desserts"));
    onSnapshot(q, (querySnapshot) => {
      setDessertList(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  return (
    <Container fluid className="ps-5 pt-3 pb-3 pe-5">
      <Row>
        {/* Carousel showing Pizza cards   */}
        <Col xs={12} md={6} className="mt-4 mb-4 text-center">
          <Carousel>
            {pizzaList.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.data.img}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col className="mt-4 mb-4 d-flex flex-column justify-content-center">
          <div>
            <h4 className="mb-3">
              <Badge bg="dark">Welcome</Badge>
            </h4>
            <h2>
              Try our <br />
              <b>Fabuoloses Pizzas</b>
              <br /> and enjoy
            </h2>

            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <div>
              <Button className="mt-3" variant="dark" size="lg">
                <strong>
                  <i>Menu</i>
                </strong>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
