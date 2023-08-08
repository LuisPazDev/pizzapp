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
  Row,
  Col,
  DropdownButton,
  Dropdown,
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

  // show button when hover on card
  const [showButton, setShowButton] = useState(null);

  const handleShowButton = (item) => setShowButton(item);
  const handleNoShowButton = () => setShowButton(null);

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
    <Row className="text-center mb-4">
      <Row>
        <div className="mt-4">
          <h3>
            <Badge pill bg="dark">
              <strong>
                <i>PIZZAS</i>
              </strong>
            </Badge>
          </h3>
          <p>
            <i>Choose your favorite pizza</i>
          </p>
        </div>
      </Row>

      <div className="text-center mt-3">
        <DropdownButton
          id="dropdown-basic-button"
          title=" MENU  "
          variant="dark"
        >
          <Dropdown.Item>
            <Link className="text-black" to="/menu/drinks">
              <strong>
                <i>DRINKS</i>
              </strong>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className="text-black" to="/menu/desserts">
              <strong>
                <i>DESSERTS</i>
              </strong>
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <Row xs={1} md={3} lg={3} className="mt-4 mb-4">
        {list.map((item) => (
          <Col className="mt-3 mb-3" key={item.id}>
            <Card
              style={{ maxWidth: "18rem" }}
              onMouseEnter={() => handleShowButton(item.id)}
              onMouseLeave={handleNoShowButton}
              border="dark border-2"
              className="text-center ms-auto me-auto rounded-start"
            >
              <Card.Img
                className="img-fluid"
                variant="top"
                src={item.data.img}
              />
              <Card.Body
                style={{
                  backgroundColor: "#FF914D",
                  borderTop: "solid 2px black",
                }}
              >
                <Card.Title>
                  <h3>
                    <Badge
                      pill
                      bg="light"
                      className="text-dark border border-2 border-dark"
                    >
                      <b>
                        <i>{item.data.name}</i>
                      </b>
                    </Badge>
                  </h3>
                </Card.Title>
                <Card.Text>
                  <h5>
                    <strong>
                      <b>
                        <i> $ {item.data.price}</i>
                      </b>
                    </strong>
                  </h5>
                  <p>
                    <i>{item.data.ingredients}</i>
                  </p>
                </Card.Text>
                {showButton === item.id ? (
                  <Button
                    size="lg"
                    variant="dark"
                    onClick={() => handleAddToCart(item)}
                  >
                    <strong>
                      <i>ORDER</i>
                    </strong>
                  </Button>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
};
