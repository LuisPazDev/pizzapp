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

export const HomeMenuCarousel = () => {
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
        <Col className="mt-4 mb-4 p-4 d-flex flex-column align-items-center justify-content-center">
          <div>
            <h5 className="mb-3">
              <i>
                <u>Our Menu</u>
              </i>
            </h5>
            <h2>
              <i>
                Try our <b> Fabulous </b>
                <br />
                <b> Pizzas </b> enjoy a
                <br />
                <b> Perferct Drink </b> and
                <br />
                Get a <b> Delicious Dessert</b>
              </i>
            </h2>

            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <div>
              <Button className="mt-3" variant="dark" size="lg">
                <Link to="/menu">
                  <strong>
                    <i>See More</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </div>
        </Col>
        {/* Carousel showing Pizza cards   */}
        <Col xs={12} md={6} className="p-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dxctvkec9/image/upload/v1690675176/napolipizza_steaxd.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dxctvkec9/image/upload/v1690678273/papayajuice_srllga.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dxctvkec9/image/upload/v1690983380/cake_xn3frn.png"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
