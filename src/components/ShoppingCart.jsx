import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const ShoppingCart = React.memo(() => {
  // get cart from LocalStorage
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  console.log(cart.length);

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
