import flyer from "../assets/pizzaflyer.png"
import { Container } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"

export const HomeMainCard = () => {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col xs={12} md={6} className='mt-auto mb-auto'>
                    <div className='ms-auto me-auto'>
                        <h1>
                            <strong> The Best Pizzas </strong>
                        </h1>
                        <p>
                            We are a family owned and operated pizza shop in the
                            heart of Dallas, TX. We are known for our delicious
                            pizza and our friendly staff. We look forward to
                            serving you!
                        </p>
                    </div>
                </Col>

                <Col xs={12} md={6} className='mt-auto mb-auto'>
                    <div>
                        <img
                            src={flyer}
                            className='img-fluid rounded p-1'
                            alt='pizzaflyer'
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
