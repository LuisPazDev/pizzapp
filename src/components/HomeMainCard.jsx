import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import flyer from "../assets/pizzabgmain.png"
import small1 from "../assets/small1.png"
import small2 from "../assets/small2.png"

export const HomeMainCard = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div>
                        <img
                            src={flyer}
                            className='img-fluid rounded p-1'
                            alt='pizzaflyer'
                        />
                    </div>
                </Col>
                <Col>
                    <Row>
                        <Col className='mt-auto mb-auto'>
                            <div>
                                <img
                                    src={small1}
                                    className='img-fluid rounded p-1'
                                    alt='pizzaflyer'
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-auto mb-auto'>
                            <div>
                                <img
                                    src={small2}
                                    className='img-fluid rounded p-1'
                                    alt='pizzaflyer'
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
