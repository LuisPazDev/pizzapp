import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import flyer from "../assets/pizzabgmain.png"
import small1 from "../assets/small1.png"
import small2 from "../assets/small2.png"

export const HomeMainCard = () => {
    return (
        <Container fluid>
            <Row xs={1} sm={1} md={2} lg={2}>
                <Col>
                    <div>
                        <img
                            src={flyer}
                            className='img-fluid rounded p-2'
                            alt='pizzamain'
                        />
                    </div>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div>
                                <img
                                    src={small1}
                                    className='img-fluid rounded p-3'
                                    alt='drinks'
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-2 mb-1'>
                        <Col>
                            <div>
                                <img
                                    src={small2}
                                    className='img-fluid rounded p-3'
                                    alt='desserts'
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
