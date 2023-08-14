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

export const HomePizzaCarousel = () => {
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

  return (
    <Container fluid className="ps-5 pe-5">
      <Row>
        <Col className="mt-4 mb-4 p-4 d-flex flex-column align-items-center justify-content-center border-dark border-bottom border-2">
          <div>
            <h6 className="mb-3">
              <i>
                <u>Fabulous Pizzas</u>
              </i>
            </h6>
            <h2>
              <i>
                Try our <b> Fabulous </b>
                <br />
                <b> Pizzas </b> and enjoy
                <br />
                every bite
              </i>
            </h2>

            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <div>
              <Button className="mt-3" variant="dark" size="lg">
                <strong>
                  <i>See More</i>
                </strong>
              </Button>
            </div>
          </div>
        </Col>
        {/* Carousel showing Pizza cards   */}
        <Col xs={12} md={6} className="mt-4 mb-4 p-3 text-center">
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
      </Row>
    </Container>
  );
};
