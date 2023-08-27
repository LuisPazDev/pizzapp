import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";
import { Table, Button, Badge, Container } from "react-bootstrap";

export const ShoppingCart = React.memo(() => {
  // get cart items from CartContext (context/CartContext.jsx)
  const [cart, setCart] = useContext(CartContext);

  // calculate total price and sale taxes (4%) of cart items
  const [totalPrice, setTotalPrice] = useState(0);

  // retrieve cart items from localStorage
  const retrieveCartItems = () => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartLocalStorage);
  };

  // call retrieveCartItems whenever the component mounts or updates
  useEffect(() => {
    retrieveCartItems();
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

  // fuction to payOrder button and clear cart
  const navigate = useNavigate();

  const handlePayOrder = () => {
    Swal.fire({
      title: "Order Placed",
      text: "Thank you for your purchase",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
    localStorage.removeItem("cart");
    setCart([]);
    setTimeout(() => {
      navigate("/");
    }, 1600);
  };

  return (
    <Container className="text-center">
      <div className="mt-5">
        <h2>
          <Badge pill bg="dark">
            <strong>
              <i>CART</i>
            </strong>
          </Badge>
        </h2>
      </div>
      {
        // if cart is empty show message else show table
        cart.length === 0 ? (
          <div className="mt-5">
            <h4>Your cart is empty</h4>
            <p>
              <i>Go to our menu and start your order Now!</i>
            </p>
            <Button className="mt-5" variant="dark" size="lg">
              <Link to="/menu">
                <strong>
                  <i>Start Order Here</i>
                </strong>
              </Link>
            </Button>
          </div>
        ) : (
          <Table
            style={{ maxWidth: "80%", margin: "auto" }}
            striped
            bordered
            hover
            className="mt-4"
          >
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
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
                <td colSpan="2">Tax (4%):</td>
                <td></td>
                <td>${(totalPrice * 0.04).toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>
                    <i>TOTAL:</i>
                  </strong>
                </td>
                <td></td>
                <td>
                  <h6>
                    <strong>
                      <i>${totalPrice.toFixed(2)}</i>
                    </strong>
                  </h6>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">
                  <Button
                    size="lg"
                    variant="dark"
                    onClick={() => handlePayOrder()}
                    className="mt-4"
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
