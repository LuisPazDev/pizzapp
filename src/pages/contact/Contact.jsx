import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { db } from "../../components/Firebase"
import { addDoc, collection } from "firebase/firestore"
import { Badge, Button, Form, Row, Card, Col, Container } from "react-bootstrap"

export function Contact() {
    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInput((values) => ({ ...values, [name]: value }))
    }

    const clearForm = () => {
        document.getElementById("form").reset()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(input)
        try {
            const comment = collection(db, "contact")
            const res = await addDoc(comment, input)
            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "We will get back to you as soon as possible",
            })
            clearForm()
            return res
        } catch {
            console.error("Invalid input")
        }
    }

    return (
        <Container
            fluid
            style={{ backgroundColor: "#F5F5F5" }}
            className='d-flex flex-column justify-content-center align-items-center'>
            <Row>
                <Col xs={12} md={12} lg={12} className='text-center mt-5 mb-4'>
                    <div>
                        <h2>
                            <Badge pill className='bg-dark text-white'>
                                <strong>
                                    <i>CONTACT US</i>
                                </strong>
                            </Badge>
                        </h2>
                    </div>
                    <div className='mt-3'>
                        <p>
                            <i>
                                We are here to help you with any questions you
                                may have.{" "}
                            </i>
                        </p>
                    </div>
                </Col>
            </Row>

            <Form
                style={{ backgroundColor: "#FFBD59" }}
                className='mt-3 border border-dark rounded p-4'
                id='form'
                onSubmit={handleSubmit}>
                <div className='text-center mb-5'>
                    <h4>
                        <strong>
                            <u>
                                <i>Send us a Message</i>
                            </u>
                        </strong>
                    </h4>
                </div>
                <Row>
                    <Col xs={12} md={6} lg={6} className='mb-3'>
                        <Form.Group controlId='formBasicName'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Name</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                className='border border-dark'
                                onChange={handleChange}
                                name='name'
                                type='text'
                                placeholder='Enter your Name'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6} className='mb-3'>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Email</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                className='border border-dark'
                                onChange={handleChange}
                                name='email'
                                type='email'
                                placeholder='Enter email'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={12} lg={12} className='text-start mt-3'>
                        <Form.Group controlId='formBasicDescription'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Message</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                className='border border-dark'
                                onChange={handleChange}
                                name='comment'
                                type='text'
                                placeholder='Leave your Message here'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <div className='text-center mt-3'>
                        <Button
                            variant='dark'
                            className='mt-3 mb-3'
                            size='lg'
                            type='submit'>
                            <strong>
                                <i>Send</i>
                            </strong>
                        </Button>
                    </div>
                </Row>
            </Form>

            <Row className='ms-auto me-auto mt-5 mb-5'>
                <Col xs={12} md={12} lg={12} className='text-center'>
                    <Link to='/'>
                        <h5 className='text-center text-black'>
                            Go to{" "}
                            <strong>
                                <i>
                                    <u> HOME </u>
                                </i>
                            </strong>
                        </h5>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
