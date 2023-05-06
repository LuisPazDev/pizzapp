import React from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"

export const HomeCatering = () => {
    return (
        <Container fluid className='container-homebanner'>
            <Row
                xs={1}
                sm={1}
                md={2}
                lg={2}
                className='container-homebanner-text text-center mt-4 mb-4 p-3'>
                <Col>
                    <h4>
                        <strong> WE DO CATERING </strong>
                    </h4>
                    <h6>GET 30% OFF IN YOUR FIRST ORDER</h6>
                </Col>
                <Col>
                    <Button>CONTACT US</Button>
                </Col>
            </Row>
        </Container>
    )
}
