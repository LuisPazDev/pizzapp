import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../components/Firebase";

import {
  Container,
  Badge,
  Button,
  Row,
  Col,
  Carousel,
  Card,
} from "react-bootstrap";

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
      style={{
        width: "100%",
      }}
    >
      <Row>
        <Col xs={12} md={6} className="text-center">
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
        {/*  */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <h1>
              Check Out Our <br />
              <strong>Menu </strong>
              We Have <br />
              <strong>Something</strong> For <br />
              <strong>Everyone</strong>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Vel at ratione facere tenetur.
            </p>
            <Button variant="dark" size="lg">
              <strong>
                <i>GO TO MENU</i>
              </strong>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
