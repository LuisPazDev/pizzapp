import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../assets/pizzapplogo.png"
import "../styles/NavBar.css"

export const NavBar = () => {
    return (
        <Navbar className='Navbar' collapseOnSelect expand='lg'>
            <Navbar.Brand>
                <Nav.Link>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='logo ms-3' />
                    </Link>
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='ms-auto mt-1 me-4'>
                    <Nav.Link>
                        <Link to='/menu'>
                            <p className='menu-text'>Menu</p>{" "}
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/about'>
                            {" "}
                            <p className='menu-text'>About</p>{" "}
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/reserve'>
                            {" "}
                            <p className='menu-text'>Contact</p>{" "}
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
