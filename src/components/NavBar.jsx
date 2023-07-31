import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

// Assets & Styles
import logo from "../assets/pizzapplogo.png";
import cart from "../assets/cart.svg";

export const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // calculate total quantity of items in cart
  const [cartItems, setCartItems] = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="sticky-top bg-light">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={handleShow}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="border-0"
            />
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/" onClick={handleClose}>
                    <img src={logo} alt="logo" width={100} height={25} />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="MENU"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <Link
                        className="text-dark"
                        onClick={handleClose}
                        to="/menu/pizzas"
                      >
                        PIZZAS
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link
                        className="text-dark"
                        onClick={handleClose}
                        to="/menu/drinks"
                      >
                        DRINKS
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link
                        className="text-dark"
                        onClick={handleClose}
                        to="/menu/desserts"
                      >
                        DESSERTS
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link
                      className="text-dark"
                      onClick={handleClose}
                      to="/about"
                    >
                      ABOUT
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="text-dark"
                      onClick={handleClose}
                      to="/contact"
                    >
                      CONTACT
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="text-dark"
                      onClick={handleClose}
                      to="/cart"
                    >
                      <img src={cart} alt="cartlogo" className="cart-icon" />
                      {totalQuantity > 0 && (
                        <span className="cart-quantity">{totalQuantity}</span>
                      )}
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
