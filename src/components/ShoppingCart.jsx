import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";
import { Table, Button, Container, Badge } from "react-bootstrap";

export const ShoppingCart = React.memo(() => {
  // get cart items from CartContext (context/CartContext.jsx)
  const [cart, setCart] = useContext(CartContext);

  // calculate total price and sale taxes (4%) of cart items
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
    const saleTaxes = totalPrice * 0.04;
    setTotalPrice(totalPrice + saleTaxes);
  }, [cart]);

  // fuction to pay order button and clear cart
  const handlePayOrder = () => {
    Swal.fire({
      title: "Order placed successfully",
      text: "Thank you for your purchase",
      icon: "success",
      confirmButtonText: "<a href='/'>Close</a>",
    });
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <Container fluid className="text-center">
      <div className="mt-5">
        <h3>
          <Badge pill bg="dark">
            <strong>
              <i>CART</i>
            </strong>
          </Badge>
        </h3>
      </div>
      {
        // if cart is empty show message else show table
        cart.length === 0 ? (
          <div className="mt-5">
            <h4>Your cart is empty</h4>
            <p>
              <i>Go to our menu and start your order Now!</i>
            </p>
            <Button className="mt-3" variant="dark" size="lg">
              <Link to="/menu">
                <strong>
                  <i>MENU</i>
                </strong>
              </Link>
            </Button>
          </div>
        ) : (
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
                <td colSpan="2">Sale Taxes (4%):</td>
                <td></td>
                <td>${(totalPrice * 0.04).toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="2">Total:</td>
                <td></td>
                <td>${totalPrice.toFixed(2)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">
                  <Button
                    size="lg"
                    variant="dark"
                    onClick={() => handlePayOrder()}
                  >
                    <strong>
                      <i>PAY ORDER</i>
                    </strong>
                  </Button>
                </td>
              </tr>
            </tfoot>
          </Table>
        )
      }
    </Container>
  );
});
