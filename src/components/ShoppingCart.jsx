import React, { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

export const ShoppingCart = React.memo(() => {
  const [cart, setCart] = useContext(CartContext);

  // get cart items from localStorage
  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartLocalStorage);
  }, []);

  // remove item from cart LocalStorage
  const handleRemoveItemFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div>
      <ul>
        {cart.map((cartItem) => (
          <div className="mt-2 mb-2">
            <li key={cartItem.id}>
              {cartItem.data.name}
              <Button
                size="sm"
                variant="danger"
                className="ms-5"
                onClick={() => handleRemoveItemFromCart(cartItem)}
              >
                <i>Remove</i>
              </Button>
            </li>
          </div>
        ))}
        {
          // show button when cart is not empty
          cart.length > 0 && (
            <Button variant="dark" className="mt-3">
              <strong>
                <i>Checkout</i>
              </strong>
            </Button>
          )
        }
      </ul>
    </div>
  );
});
