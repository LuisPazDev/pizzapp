import map from "../assets/pizzmap.png"
import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export const HomeFooterCard = () => {
    return (
        <Container fluid>
            <Row className='mt-4 mb-4'>
                <Col xs={12} md={6} className='mt-3 p-3'>
                    <img
                        src={map}
                        className='img-fluid rounded p-5'
                        alt='pizzaflyer'
                    />
                </Col>
                <Col xs={12} md={6} className='mt-auto mb-auto'>
                    <div className='mt-4 mb-4'>
                        <h5>
                            <strong> Opening Hours </strong>
                        </h5>
                        <p>
                            <small>
                                Monday - Friday: 11:00 AM - 10:00 PM
                                <br />
                                Saturday: 11:00 AM - 11:00 PM
                                <br />
                                Sunday: 11:00 AM - 10:00 PM
                            </small>
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h5>
                            <strong> Location </strong>
                        </h5>
                        <p>
                            <small>
                                123 Anywhere St. Any City, <br /> ST 12345
                            </small>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
