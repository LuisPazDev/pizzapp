import React from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import pizzabanner from "../assets/pizzabanner.png"

export const HomeMenuCard = () => {
    return (
        <Container fluid>
            <Row className=' mt-4 mb-4'>
                {/*  Title */}
                <Row className='text-center mt-5 mb-5'>
                    <Col>
                        <h4>
                            <strong> WE DO CATERING </strong>
                        </h4>
                        <h6>GET 30% OFF IN YOUR FIRST ORDER</h6>
                    </Col>
                    <Col>
                        <Button>Contact Us</Button>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col>
                    <div>
                        <img
                            src={pizzabanner}
                            className='img-fluid rounded p-1'
                            alt='pizzaflyer'
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
