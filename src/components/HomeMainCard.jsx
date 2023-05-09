import { PizzaMainImg } from "./PizzaMainImg"

import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import "../styles/Home.css"
import { DrinkBox } from "./DrinkBox"
import { DessertBox } from "./DessertBox"

export const HomeMainCard = () => {
    return (
        <Container fluid>
            <Row xs={1} sm={1} md={2} lg={2}>
                <Col>
                    <PizzaMainImg />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <DrinkBox />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DessertBox />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
