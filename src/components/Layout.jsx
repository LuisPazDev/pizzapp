import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <Container fluid>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
};
