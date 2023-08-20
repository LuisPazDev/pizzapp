import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../components/Firebase";
import {
  Carousel,
  Button,
  Container,
  Row,
  Col,
  Badge,
  Image,
} from "react-bootstrap";

import pizzaslide from "../assets/pizzaslide.png";
import drinkslide from "../assets/drinkslide.png";
import dessertslide from "../assets/dessertslide.png";

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
                Enjoy our <b> Fabulous </b>
                <br />
                <b> Pizzas </b> have a
                <br />
                <b> Perferct Drink </b> or
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
              <Button
                className="mt-3 mx-auto d-block d-md-inline-block mb-3 mb-md-0"
                variant="dark"
                size="lg"
              >
                <Link to="/menu">
                  <strong>
                    <i>Menu</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </div>
        </Col>
        {/* Carousel showing Pizza cards   */}
        <Col xs={12} md={6} className="p-4">
          <Carousel indicators={false}>
            <Carousel.Item>
              <Image
                roundedCircle
                className="d-block w-100"
                src={pizzaslide}
                alt="First slide"
              />
              <div className="text-center">
                <h6>
                  <i>
                    <Badge bg="dark"> Fabulous Pizzaz</Badge>
                  </i>
                </h6>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                roundedCircle
                className="d-block w-100"
                src={drinkslide}
                alt="First slide"
              />
              <div className="text-center">
                <h6>
                  <i>
                    <Badge bg="dark"> Perfect Drinks </Badge>
                  </i>
                </h6>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                roundedCircle
                className="d-block w-100"
                src={dessertslide}
                alt="First slide"
              />
              <div className="text-center">
                <h6>
                  <i>
                    <Badge bg="dark"> Delicious Desserts</Badge>
                  </i>
                </h6>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
