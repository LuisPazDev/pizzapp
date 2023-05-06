import React from "react"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import pizzabanner from "../assets/pizzabanner.png"

export const HomeBanner = () => {
    return (
        <Container Container fluid className='container-homebanner'>
            <Row>
                <Col>
                    <div>
                        <img
                            src={pizzabanner}
                            className='img-fluid rounded p-1'
                            alt='pizzabanner'
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
