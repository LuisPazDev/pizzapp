import { useState } from "react";
import { Button } from "react-bootstrap";

export const ShoppingCart = ({ items }) => {
  const [cart, setCart] = useState([]);

  // handle button click for remove from cart (onClick)
  const handleRemoveItemFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div className="mt-2 mb-2">
            <li key={item.id}>
              {item.data.name}
              <Button
                size="sm"
                variant="danger"
                className="ms-5"
                onClick={() => handleRemoveItemFromCart(item)}
              >
                <i>Remove</i>
              </Button>
            </li>
          </div>
        ))}
        {
          // show button when cart is not empty
          items.length > 0 && (
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
};
