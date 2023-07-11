import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Footer = () => {
  return (
    <Navbar className="fixed-bottom">
      <Container>
        <Navbar.Brand href="#home">DEVELOPED BY LUISPAZDEV</Navbar.Brand>
        <Nav className="me-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
