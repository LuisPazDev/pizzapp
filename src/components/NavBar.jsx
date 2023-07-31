import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

import logo from "../assets/pizzapplogo.png";

export const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <img src={logo} alt="logo" width={100} height={25} />
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
                      CART
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
