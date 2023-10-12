import { useInView } from "react-intersection-observer"
import { Container, Card, Col, Row, Image } from "react-bootstrap"

import card1 from "../assets/customercard1.png"
import card2 from "../assets/customercard2.png"
import card3 from "../assets/customercard3.png"
import stars from "../assets/stars.svg"

export const TestimonialsCard = () => {
    const { ref, inView } = useInView({
        freezeOnceVisible: true,
        threshold: 1,
        triggerOnce: true,
    })
    return (
        <Container
            fluid='true'
            className='d-flex flex-column justify-content-center align-items-center'
            style={{
                backgroundColor: "#F8F8F8",
            }}>
            <div className='mt-5 mb-5'>
                <h1>Client Testimonials</h1>
            </div>

            <Row className='mt-4 mb-4'>
                {/* First Card */}
                <Col
                    ref={ref}
                    xs={12}
                    md={12}
                    lg={4}
                    className='d-flex flex-column justify-content-center align-items-center mb-5'>
                    <Card
                        style={{ width: "16rem" }}
                        hidden={!inView}
                        fluid='true'
                        className={`${
                            inView
                                ? "text-center animate__animated animate__fadeInRight animate__delay-1s"
                                : "text-center"
                        }`}>
                        <Image
                            roundedCircle
                            className='ms-auto me-auto mt-3'
                            style={{ width: "100px", height: "100px" }}
                            src={card1}
                        />
                        <Card.Body>
                            <Card.Title>
                                <i>Sandra Sanz</i>
                            </Card.Title>
                            <Card.Text>
                                "lorem ipsum dolor sit amet, consectetur
                                adipiscing elit lorem ipsum dolor sit amet."
                            </Card.Text>
                            <Image src={stars} />
                        </Card.Body>
                    </Card>
                </Col>
                {/*  Second Card */}
                <Col
                    xs={12}
                    md={12}
                    lg={4}
                    className='d-flex flex-column justify-content-center align-items-center mb-5'>
                    <Card
                        style={{ width: "16rem" }}
                        fluid='true'
                        hidden={!inView}
                        className={`${
                            inView
                                ? "text-center animate__animated animate__fadeInRight animate__delay-2s"
                                : "text-center"
                        }`}>
                        <Image
                            roundedCircle
                            className='ms-auto me-auto mt-3'
                            style={{ width: "100px", height: "100px" }}
                            src={card2}
                        />
                        <Card.Body>
                            <Card.Title>
                                <i>Johan Doe</i>
                            </Card.Title>
                            <Card.Text>
                                "lorem ipsum dolor sit amet, consectetur
                                adipiscing elit lorem ipsum dolor sit amet."
                            </Card.Text>
                            <Image src={stars} />
                        </Card.Body>
                    </Card>
                </Col>
                {/* Third Card */}
                <Col
                    xs={12}
                    md={12}
                    lg={4}
                    className='d-flex flex-column justify-content-center align-items-center mb-5'>
                    <Card
                        style={{ width: "16rem" }}
                        hidden={!inView}
                        fluid='true'
                        className={`${
                            inView
                                ? "text-center animate__animated animate__fadeInRight animate__delay-3s"
                                : "text-center"
                        }`}>
                        <Image
                            roundedCircle
                            className='ms-auto me-auto mt-3'
                            style={{ width: "100px", height: "100px" }}
                            src={card3}
                        />
                        <Card.Body>
                            <Card.Title>
                                <i>Alex Smith</i>
                            </Card.Title>
                            <Card.Text>
                                "lorem ipsum dolor sit amet, consectetur
                                adipiscing elit lorem ipsum dolor sit amet."
                            </Card.Text>
                            <Image src={stars} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
