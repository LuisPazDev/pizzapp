import { Link, Outlet } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../assets/logo.png"

export const Layout = () => {
    return (
        <Container fluid>
            <Navbar variant='dark'>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'> PizzApp </Link>
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link></Nav.Link>
                        <Nav.Link>
                            <Link to='/menu'> Menu </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/reserve'> Contact </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </Container>
    )
}
