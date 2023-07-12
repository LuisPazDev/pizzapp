import { Container, Nav, Navbar, Badge } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand className="text-center" href="#home">
          {" "}
          <h6>
            DEVELOPED BY LUISPAZDEV <br />
          </h6>
          <Badge bg="dark">
            <i>© 2021 All rights reserved</i>
          </Badge>
        </Navbar.Brand>
        <Nav className="me-end">
          <Nav.Link href="#home">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
