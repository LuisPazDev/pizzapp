import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../components/Firebase"
import { useInView } from "react-intersection-observer"
import Swal from "sweetalert2"
import DateTime from "react-datetime"
import "react-datetime/css/react-datetime.css"

import {
    Container,
    Image,
    Button,
    Row,
    Col,
    Form,
    DropdownButton,
} from "react-bootstrap"

import slicepizza from "../assets/slicepizza.png"

export const ReservationCard = () => {
    const [input, setInput] = useState({})

    const [selectedDate, setSelectedDate] = useState(null)

    const [selectedTime, setSelectedTime] = useState("")

    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    })

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
            const reservation = collection(db, "reservations")
            const res = await addDoc(reservation, input)
            Swal.fire({
                icon: "success",
                title: "Reservation Successful!",
                text: "We look forward to seeing you!",
            })
            clearForm()
            return res
        } catch {
            console.error("Invalid input")
        }
    }

    return (
        <Container fluid>
            <Row className='ps-3 '>
                {/* Form Col */}
                <Col
                    className='mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'
                    xs={12}
                    md={12}
                    lg={6}>
                    <div className='text-start mb-3 mt-3'>
                        <h5 className='mb-3'>
                            <i>
                                <u>Reservations</u>
                            </i>
                        </h5>
                        <h1>
                            Book A Table <b>Now!</b>
                        </h1>
                    </div>
                    <Form
                        style={{
                            width: "80%",
                            backgroundColor: "#FFBD59",
                        }}
                        onSubmit={handleSubmit}
                        id='form'
                        className='d-flex flex-column justify-content-center align-items-center border border-dark mt-3 p-3'>
                        <div className='text-center mb-2'>
                            <h4>
                                <i>
                                    <strong>
                                        <u>Reservation Details</u>
                                    </strong>
                                </i>
                            </h4>
                        </div>
                        <Row xs={1} md={2} className='p-3'>
                            {/* Name Field */}
                            <Col className='mb-3'>
                                <Form.Group controlId='formBasicName'>
                                    <Form.Control
                                        onChange={handleChange}
                                        name='name'
                                        type='text'
                                        placeholder='Name'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            {/* Phone Field */}
                            <Col className='mb-3'>
                                <Form.Group controlId='formBasicPhone'>
                                    <Form.Control
                                        onChange={handleChange}
                                        name='phone'
                                        type='text'
                                        placeholder='Phone'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            {/* Email Field */}
                            <Col className='mb-3'>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Control
                                        onChange={handleChange}
                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            {/* Guests Field */}
                            <Col className='mb-3'>
                                <Form.Group controlId='formBasicGuests'>
                                    <Form.Control
                                        onChange={handleChange}
                                        name='guests'
                                        type='text'
                                        placeholder='Guests'
                                    />
                                </Form.Group>
                            </Col>
                            {/* Date Field */}
                            <Col className='mb-3'>
                                <Form.Group controlId='formBasicDate'>
                                    <DateTime
                                        value={selectedDate}
                                        onChange={(date) =>
                                            setSelectedDate(date)
                                        }
                                        dateFormat='DD/MM/YYYY'
                                        timeFormat={false}
                                        inputProps={{
                                            placeholder: "Select a date",
                                            required: true,
                                        }}
                                        isValidDate={(currentDate) => {
                                            // Disable dates before today
                                            const yesterday =
                                                DateTime.moment().subtract(
                                                    1,
                                                    "day"
                                                )
                                            return currentDate.isAfter(
                                                yesterday
                                            )
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            {/* Time Field */}
                            <Col className='mb-3'>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Control
                                        onChange={handleChange}
                                        name='time'
                                        type='text'
                                        placeholder='Time'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className='mt-2 mb-3 text-center'>
                            <Button variant='dark' size='lg' type='submit'>
                                <strong>
                                    <i>Book Now</i>
                                </strong>
                            </Button>
                        </div>
                    </Form>
                </Col>
                {/* Image Col */}
                <Col
                    xs={12}
                    md={12}
                    lg={6}
                    ref={ref}
                    className='d-flex flex-column align-items-center justify-content-center mt-4 mb-4'>
                    <Image
                        hidden={!inView}
                        fluid
                        style={{ width: "95%" }}
                        src={slicepizza}
                        className={`${
                            inView
                                ? "animate__animated animate__fadeInRight animate__flip animate__delay-1s"
                                : ""
                        }`}
                    />
                </Col>
            </Row>
        </Container>
    )
}
