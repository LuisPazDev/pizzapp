import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Toast, Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import cartImg from "../assets/cart.svg";

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
              width: 140,
              zIndex: 9999,
            }}
          >
            <Toast.Header closeButton={false}>
              <h6 className="mt-2">
                <strong>
                  <i>My Order</i>
                </strong>
              </h6>
              <small className="cart-quantity rounded-pill ms-3">
                {cartItems}{" "}
              </small>
            </Toast.Header>
            <Toast.Body>
              <p>
                <strong className="me-auto">
                  {" "}
                  <i>Total :{" $" + cartTotal.toFixed(2)}</i>
                </strong>
              </p>
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
      <>{children}</>
    </CartContext.Provider>
  );
};
