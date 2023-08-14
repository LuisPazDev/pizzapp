import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Nav, Navbar, Offcanvas, NavDropdown } from "react-bootstrap";

// Assets & Styles
import logo from "../assets/pizzapplogo.png";
import cartImg from "../assets/cart.svg";

export const NavBar = () => {
  // offcanvas navbar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // cart context to get cart items and set cart items
  const [cartItems, setCartItems] = useContext(CartContext);

  const gettingCartItems = async () => {
    const cartItems = (await JSON.parse(localStorage.getItem("cart"))) || [];
    setCartItems(cartItems);
  };

  useEffect(() => {
    gettingCartItems();
  }, []);

  // calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="sticky-top bg-light border-dark border-bottom border-2 p-2"
        >
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
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link>
                  <Link className="text-dark" onClick={handleClose} to="/menu">
                    <strong>
                      <i>MENU</i>
                    </strong>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="text-dark" onClick={handleClose} to="/about">
                    <strong>
                      <i>ABOUT</i>
                    </strong>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-dark"
                    onClick={handleClose}
                    to="/contact"
                  >
                    <strong>
                      <i>CONTACT</i>
                    </strong>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="text-light" onClick={handleClose} to="/cart">
                    {
                      // if cart is empty, show 0
                      cartItems.length === 0 ? (
                        <img
                          src={cartImg}
                          alt="cartlogo"
                          className="cart-icon"
                        />
                      ) : (
                        // else show total quantity of items in cart
                        <div>
                          <img
                            src={cartImg}
                            alt="cartlogo"
                            className="cart-icon"
                          />
                          <span className="cart-quantity rounded-pill">
                            {totalQuantity}
                          </span>
                        </div>
                      )
                    }
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
};
