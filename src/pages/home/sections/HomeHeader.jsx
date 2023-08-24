import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../components/Firebase";

import { Container, Badge, Button, Row, Col, Carousel } from "react-bootstrap";

export const HomeHeader = () => {
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
    <Container fluid style={{ backgroundColor: "rgba(250, 124, 6, 0.863)" }}>
      <Row className="ps-3 pe-3">
        {/* Text Col */}
        <Col
          xs={12}
          md={12}
          lg={6}
          className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <h4 className="mb-3">
              <Badge bg="dark">Welcome</Badge>
            </h4>
            <h1>
              We Serve the
              <br />
              <b className="text-white"> Best Pizza </b> in Town
              <br />
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
            <div className="mt-4">
              <Button
                className="mt-3 mx-auto d-block d-md-inline-block mb-3 mb-md-0"
                variant="dark"
                size="lg"
              >
                <Link to="/menu">
                  <strong>
                    <i>Order Now</i>
                  </strong>
                </Link>
              </Button>
            </div>
          </div>
        </Col>
        {/* Carousel Col */}
        <Col xs={12} md={12} lg={6}>
          <Carousel fade controls={false} indicators={false}>
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
