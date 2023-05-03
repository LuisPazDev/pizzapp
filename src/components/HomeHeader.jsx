import React from "react"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"

export const HomeHeader = () => {
    return (
        <Container>
            <Row className='mt-4 mb-5'>
                <Col>
                    <h3>START YOUR ORDER NOW</h3>
                </Col>
                <Col>
                    <Button>Full Menu</Button>
                </Col>
            </Row>
        </Container>
    )
}
