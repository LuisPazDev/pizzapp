import React from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import pizzaHome from "../assets/pizzahome.png"
import drinkHome from "../assets/drinkhome.png"
import dessertHome from "../assets/desserts.png"

export const HomeMenuCard = () => {
    return (
        <Container fluid>
            <Row className=' mt-4 mb-4'>
                {/*  Title */}
                <Row className='text-center mt-5 mb-5'>
                    <Col>
                        <h2>
                            <strong> What We Offer </strong>
                        </h2>
                        <h6>Curious? Here are our most popular menu items.</h6>
                    </Col>
                </Row>
                {/*  Menu items */}
                <Row className='text-center'>
                    {/*  Pizzas box */}
                    <Col md='4'>
                        <Card
                            className='ms-auto me-auto'
                            style={{ width: "12rem" }}>
                            <Card.Img variant='top' src={pizzaHome} />
                            <Card.Body>
                                <Card.Title> Pizzas </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  Drinks box */}
                    <Col md='4'>
                        <Card
                            className='ms-auto me-auto'
                            style={{ width: "12rem" }}>
                            <Card.Img variant='top' src={drinkHome} />
                            <Card.Body>
                                <Card.Title> Drinks </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Desserts box */}
                    <Col md='4'>
                        <Card
                            className='ms-auto me-auto'
                            style={{ width: "12rem" }}>
                            <Card.Img variant='top' src={dessertHome} />
                            <Card.Body>
                                <Card.Title> Desserts </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
            {/*  View Full Menu button */}
            <Row className='text-center mt-5'>
                <Col className='mt-2'>
                    <Button className='me-4'>
                        <Link className='btn-menu' to='/menu'>
                            {" "}
                            View Full Menu{" "}
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
