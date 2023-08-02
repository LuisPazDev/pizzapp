import { useState } from "react";
import { CartContext } from "./CartContext";
import { Toast, Button, Container } from "react-bootstrap";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);

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
      setShowToast(true);
    } catch (e) {
      console.error("Error parsing cart data:", e);
    }
  };

  return (
    <CartContext.Provider value={[cart, setCart, handleAddToCartToast]}>
      <Container fluid>
        {children}
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={1600}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            minWidth: 250,
          }}
        >
          <Toast.Header>
            <strong className="me-auto">Item added to cart</strong>
          </Toast.Header>
          <Toast.Body>
            <Button variant="dark" size="sm">
              <strong>
                <i>GO TO CART</i>
              </strong>
            </Button>
          </Toast.Body>
        </Toast>
      </Container>
    </CartContext.Provider>
  );
};
