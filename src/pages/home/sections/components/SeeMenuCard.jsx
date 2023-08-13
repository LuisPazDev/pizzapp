import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../components/Firebase";

import { Container, Badge, Button, Row, Col, Carousel } from "react-bootstrap";

export const SeeMenuCard = () => {
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
    <Container
      fluid
      style={{ backgroundColor: "rgba(250, 124, 6, 0.863)" }}
      className="ps-5 pe-5"
    >
      <Row>
        {/* Text Col */}
        <Col
          xs={12}
          md={6}
          className="mt-4 mb-4 d-flex flex-column justify-content-center"
        >
          <div>
            <h4 className="mb-3">
              <Badge bg="dark">Welcome</Badge>
            </h4>
            <h1>
              Handmade, With <br />
              an Extra Pinch <br />
              of <b className="text-white"> Love</b> and{" "}
              <b className="text-white">Care </b>
            </h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <div>
              <Button className="mt-3" variant="dark" size="lg">
                <strong>
                  <i>Order Now</i>
                </strong>
              </Button>
            </div>
          </div>
        </Col>
        {/* Carousel Col */}
        <Col xs={12} md={6} className="mt-4 mb-4 text-center">
          <Carousel fade>
            {list.map((item) => (
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
