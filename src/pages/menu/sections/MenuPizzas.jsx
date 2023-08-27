import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../components/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import {
  Card,
  Button,
  Badge,
  Image,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Container,
} from "react-bootstrap";

export const MenuPizzas = () => {
  // get data from firebase and show it in cards (useEffect and useState)
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

  // add to cart button functionality to set local storage
  const [cart, setCart, handleAddToCartToast] = useContext(CartContext);

  const handleAddToCart = (item) => {
    try {
      const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItemIndex = cartLocalStorage.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        const existingItem = cartLocalStorage[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        cartLocalStorage[existingItemIndex] = updatedItem;
        setCart(cartLocalStorage);
      } else {
        cartLocalStorage.push({ ...item, quantity: 1 });
        setCart([...cartLocalStorage]);
      }

      localStorage.setItem("cart", JSON.stringify(cartLocalStorage));
      Swal.fire({
        title: item.data.name,
        text: "Successfully added to cart",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      handleAddToCartToast();
    } catch (e) {
      console.error("Error parsing cart data:", e);
    }
  };

  return (
    <Container style={{ backgroundColor: "#F8F8F8" }}>
      <Row className="text-center mb-4">
        <Row>
          <div className="mt-5">
            <h2>
              <Badge pill bg="dark">
                <strong>
                  <i>PIZZAS</i>
                </strong>
              </Badge>
            </h2>
            <p>
              <i>Choose your favorite pizza</i>
            </p>
          </div>
        </Row>

        <div className="text-center mt-4">
          <DropdownButton
            id="dropdown-basic-button"
            title=" MENU  "
            variant="dark"
          >
            <Dropdown.Item>
              <Link className="text-black" to="/menu/drinks">
                <strong>
                  <i>Drinks</i>
                </strong>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="text-black" to="/menu/desserts">
                <strong>
                  <i>Desserts</i>
                </strong>
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <Row xs={1} md={2} lg={2} xl={3} className="mt-5">
          {list.map((item) => (
            <Col className="d-flex flex-column justify-content-center align-items-center mb-5">
              <Card
                key={item.id}
                style={{ width: "16rem" }}
                border="dark border-1"
                className="text-start rounded-start"
              >
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={item.data.img}
                />
                <Card.Body>
                  <Card.Title>
                    <Row className="d-flex flex-row align-items-center">
                      <Col xs={9}>
                        <h4>
                          <b>
                            <i>{item.data.name} </i>
                          </b>
                        </h4>
                      </Col>
                      <Col xs={3}>
                        <h6 className="text-danger">
                          <b>
                            <i>${item.data.price}</i>
                          </b>
                        </h6>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text className="text-center">
                    <Image
                      style={{ width: "100px", height: "50px" }}
                      src="https://res.cloudinary.com/dxctvkec9/image/upload/v1693075961/stars_jzlgeg.png"
                    />
                    <p>
                      <i>{item.data.ingredients}</i>
                    </p>
                    <Button
                      className="mt-2 mb-2"
                      size="lg"
                      variant="dark"
                      onClick={() => handleAddToCart(item)}
                    >
                      <strong>
                        <i> ORDER NOW </i>
                      </strong>
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};
