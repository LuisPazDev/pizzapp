import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { Container, Button, Row, Col, Image } from "react-bootstrap"

import aboutus from "../assets/aboutus.png"

export const AboutCard = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    return (
        <Container fluid>
            <Row>
                {/* Text Col */}
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    className='mt-5 mb-3 d-flex flex-column align-items-center
          justify-content-center'>
                    <div className='mt-4'>
                        <h4 className='mb-3'>
                            <i>
                                <u>About Us</u>
                            </i>
                        </h4>
                        <i>
                            <h2>
                                We are a Family <br />
                                <strong>Owned </strong>
                                Restaurant <br />
                                <strong>Serving</strong> Since <br />
                                <strong>2017</strong>
                            </h2>
                            <br />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur <br />
                                adipisicing elit. Vel at ratione facere tenetur.
                            </p>
                        </i>

                        <div className='mt-4'>
                            <Button
                                className='mt-3 mx-auto d-block d-md-inline-block mb-3 mb-md-0'
                                variant='dark'
                                size='lg'>
                                <Link
                                    to='/about'
                                    className='text-decoration-none text-white'>
                                    <strong>
                                        <i>Learn More</i>
                                    </strong>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Col>
                {/* Image Col */}
                <Col
                    xs={12}
                    md={12}
                    lg={6}
                    ref={ref}
                    className='d-flex flex-column align-items-center justify-content-center'>
                    <Image
                        fluid
                        style={{
                            maxWidthidth: "500px",
                            maxHeight: "500px",
                        }}
                        hidden={!inView}
                        src={aboutus}
                        className={`${
                            inView
                                ? "animate__animated animate__fadeInRight animate__delay-1s"
                                : ""
                        }`}
                        onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "https://via.placeholder.com/400x300"
                        }}
                        alt='About Us'
                    />
                </Col>
            </Row>
        </Container>
    )
}
