import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Container } from "react-bootstrap";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};
