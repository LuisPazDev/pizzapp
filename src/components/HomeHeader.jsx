import React from "react"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import "../styles/Home.css"

export const HomeHeader = () => {
    return (
        <Container fluid className='container-homeheader '>
            <Row
                xs={1}
                sm={1}
                md={2}
                lg={2}
                className='container-homeheader-text text-center mt-4 mb-4 p-3 '>
                <Col>
                    <h4>START YOUR ORDER NOW</h4>
                </Col>
                <Col>
                    <Button> VIEW FULL MENU </Button>
                </Col>
            </Row>
        </Container>
    )
}