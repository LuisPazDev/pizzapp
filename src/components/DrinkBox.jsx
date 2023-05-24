import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import drink from "../assets/small1.png"

export const DrinkBox = () => {
    return (
        <Card className='bg-dark text-white'>
            <Card.Img src={drink} alt='Card image' />
            <Card.ImgOverlay>
                <Row>
                    <Col>
                        <Card.Title>
                            {" "}
                            PERFECT <br /> DRINKS{" "}
                        </Card.Title>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='mt-5' md={{ span: 6, offset: 9 }}>
                        <Button className='' size='sm'>
                            <p>ORDER NOW</p>
                        </Button>
                    </Col>
                </Row>
            </Card.ImgOverlay>
        </Card>
    )
}
