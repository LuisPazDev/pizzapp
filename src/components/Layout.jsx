import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import Container from "react-bootstrap/Container"

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
