import { useState } from "react";
import { CartContext } from "./CartContext";
import { Toast, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import cartImg from "../assets/cart.svg";

export const CartProvider = ({ children }) => {
  // get data from local storage and show it in cart
  const [cart, setCart] = useState([]);

  // show toast when add to cart button is clicked
  const [showToast, setShowToast] = useState(false);

  // add to cart button functionality to set toast
  const handleAddToCartToast = (item) => {
    try {
      const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = cartLocalStorage.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartLocalStorage.push({ ...item, quantity: 1 });
        setCart([...cart, { ...item, quantity: 1 }]);
      }
      localStorage.setItem("cart", JSON.stringify(cartLocalStorage));
      setTimeout(() => {
        setShowToast(true);
      }, 1500);
    } catch (e) {
      console.error("Error parsing cart data:", e);
    }
  };

  // calculate total quantity of items in cart
  const cartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={[cart, setCart, handleAddToCartToast]}>
      <Container fluid>
        {children}
        {
          // show Toast when cart is not empty
          cartItems > 0 && (
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                width: 130,
              }}
            >
              <Toast.Header>
                <img src={cartImg} alt="cart" width="35" height="35" />
                <small className="cart-quantity rounded-pill">
                  {cartItems}{" "}
                </small>
              </Toast.Header>
              <Toast.Body>
                <Button variant="dark" size="sm">
                  <Link to="/cart">
                    <strong>
                      <i>CHECK OUT</i>
                    </strong>
                  </Link>
                </Button>
              </Toast.Body>
            </Toast>
          )
        }
      </Container>
    </CartContext.Provider>
  );
};
