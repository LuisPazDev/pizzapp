import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Toast, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import cartImg from "../assets/cart.png";

export const CartProvider = ({ children }) => {
  // get data from local storage and show it in cart
  const [cart, setCart] = useState([]);

  // show toast when add to cart button is clicked
  const [showToast, setShowToast] = useState(false);

  // add to cart button functionality to set toast
  const location = useLocation();
  const currentLocation = location.pathname;

  const handleAddToCartToast = () => {
    if (currentLocation === "/cart") {
      setShowToast(false);
    } else {
      setShowToast(true);
    }
  };

  // calculate total quantity of items in cart
  const cartItems = cart.reduce((total, item) => total + item.quantity, 0);

  // calculate total price of items in cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
  const saleTaxes = totalPrice * 0.04;
  const cartTotal = totalPrice + saleTaxes;

  useEffect(() => {
    if (currentLocation === "/cart") {
      setShowToast(false);
    }
  }, [currentLocation]);

  return (
    <CartContext.Provider value={[cart, setCart, handleAddToCartToast]}>
      {
        // show Toast when cart is not empty
        cartItems > 0 && (
          <Toast
            show={showToast}
            style={{
              position: "fixed",
              bottom: 20,
              right: 20,
              width: 80,
              height: 80,
              zIndex: 9999,
            }}
            className="d-flex justify-content-center align-items-center rounded-circle"
          >
            <Toast.Header closeButton={false} className="position-relative">
              <img src={cartImg} alt="cart" width="55" height="55" />
              <small className="cart-quantity rounded-pill position-absolute top-1 mt-4 ms-4">
                {cartItems}{" "}
              </small>
            </Toast.Header>
          </Toast>
        )
      }
      <>{children}</>
    </CartContext.Provider>
  );
};
