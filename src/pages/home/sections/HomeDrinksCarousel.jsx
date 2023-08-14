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

export const HomeDrinksCarousel = () => {
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

  return (
    <Container fluid className="ps-5 pe-5">
      <Row>
        {/* Carousel showing Pizza cards   */}
        <Col xs={12} md={6} className="mt-4 mb-4 p-4 text-center">
          <Carousel>
            {drinkList.map((item) => (
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
        <Col className="mt-4 mb-4 p-4 d-flex flex-column align-items-center justify-content-center border-dark border-bottom border-2">
          <div>
            <h6 className="mb-3">
              <i>
                <u>Perfect Drinks</u>
              </i>
            </h6>
            <h2>
              <i>
                We Have <b> Perfect </b>
                <br />
                <b> Drinks </b> to enjoy
                <br />
                with your pizza
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
      </Row>
    </Container>
  );
};
