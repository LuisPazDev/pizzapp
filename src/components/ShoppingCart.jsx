import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Table, Button } from "react-bootstrap";

export const ShoppingCart = React.memo(() => {
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

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

  // calculate total price
  useEffect(() => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.data.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cart]);

  return (
    <div className="mt-5">
      <h3>Shopping Cart</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.data.name}</td>
              <td>{item.data.price}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItemFromCart(item)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Total:</td>
            <td></td>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <Button variant="dark">Check Out</Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
});
