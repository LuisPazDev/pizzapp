import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../../../components/Firebase"
import { Carousel, Button, Container, Row, Col, Image } from "react-bootstrap"

export const HomeMenuCarousel = () => {
    // Pizza list from Firebase
    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => {
        const q = query(collection(db, "menu"))
        onSnapshot(q, (querySnapshot) => {
            setPizzaList(
                querySnapshot.docs.map((item) => ({
                    id: item.id,
                    data: item.data(),
                }))
            )
        })
    }, [])

    return (
        <Container fluid>
            <Row className='ps-3 pe-3'>
                <Col
                    xs={12}
                    md={12}
                    lg={6}
                    className='mt-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
                    <div>
                        <i>
                            <h5 className='mb-3'>
                                <i>
                                    <u>Our Menu</u>
                                </i>
                            </h5>
                            <h2>
                                <i>
                                    Enjoy our <b> Fabulous </b>
                                    <br />
                                    <b> Pizzas </b> have a
                                    <br />
                                    <b> Perferct Drink </b> or
                                    <br />
                                    Get a <b> Delicious Dessert</b>
                                </i>
                            </h2>

                            <br />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur <br />
                                adipisicing elit. Vel at ratione facere tenetur.
                            </p>
                        </i>

                        <div className='mt-5'>
                            <Button
                                className='mt-3 mx-auto d-block d-md-inline-block mb-3 mb-md-0'
                                variant='dark'
                                size='lg'>
                                <Link to='/menu'>
                                    <strong>
                                        <i> See Menu</i>
                                    </strong>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Col>
                {/* Carousel showing Pizza cards   */}
                <Col
                    xs={12}
                    md={12}
                    lg={6}
                    className='mt-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
                    <Carousel
                        style={{
                            maxWidth: "450px",
                        }}
                        className='mt-4 mb-4'>
                        <Carousel.Item>
                            <Link to='/menu/pizzas'>
                                <Image
                                    fluid
                                    style={{
                                        maxWidth: "450px",
                                    }}
                                    className='d-block w-100'
                                    src='https://res.cloudinary.com/dxctvkec9/image/upload/v1692889790/pizzaslide_lowaps.png'
                                    alt='First slide'
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to='/menu/drinks'>
                                <Image
                                    fluid
                                    style={{
                                        maxWidth: "450px",
                                    }}
                                    className='d-block w-100'
                                    src='https://res.cloudinary.com/dxctvkec9/image/upload/v1692889773/drinkslide_wkueyw.png'
                                    alt='First slide'
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to='/menu/desserts'>
                                <Image
                                    fluid
                                    style={{
                                        maxWidth: "450px",
                                    }}
                                    className='d-block w-100'
                                    src='https://res.cloudinary.com/dxctvkec9/image/upload/v1692889797/dessertslide_nfjynh.png'
                                    alt='First slide'
                                />
                            </Link>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}
