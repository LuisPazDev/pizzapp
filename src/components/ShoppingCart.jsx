import React, { useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { db } from "./Firebase"
import { collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import { Table, Button, Badge, Container, Form, Modal } from "react-bootstrap"

export const ShoppingCart = React.memo(() => {
    // get cart items from CartContext (context/CartContext.jsx)
    const [cart, setCart] = useContext(CartContext)

    // calculate total price and sale taxes (4%) of cart items
    const [totalPrice, setTotalPrice] = useState(0)

    // show modal when order is placed
    const [showModal, setShowModal] = useState(false)

    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInput((values) => ({ ...values, [name]: value }))
    }

    const clearForm = () => {
        document.getElementById("form").reset()
    }

    // retrieve cart items from localStorage
    const retrieveCartItems = () => {
        const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || []
        setCart(cartLocalStorage)
    }

    // call retrieveCartItems whenever the component mounts or updates
    useEffect(() => {
        retrieveCartItems()
    }, [])

    // remove item from cart LocalStorage
    const handleRemoveItemFromCart = (item) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id)
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    // calculate total price
    useEffect(() => {
        const totalPrice = cart.reduce(
            (total, item) => total + item.data.price * item.quantity,
            0
        )
        const saleTaxes = totalPrice * 0.04
        setTotalPrice(totalPrice + saleTaxes)
    }, [cart])

    const order = {
        items: cart.map((item) => ({
            name: item.data.name,
            price: item.data.price,
            quantity: item.quantity,
        })),
        totalPrice: totalPrice.toFixed(2),
        saleTaxes: (totalPrice * 0.04).toFixed(2),
        clientInfo: input,
        timestamp: new Date(),
    }

    const handlePayOrder = async () => {
        // Check if all required fields are filled out
        if (!input.name || !input.email || !input.address) {
            Swal.fire({
                icon: "error",
                title: "Please fill out all required fields",
                showConfirmButton: false,
                timer: 1500,
            })
            return
        }
        try {
            const orders = collection(db, "orders")
            const res = await addDoc(orders, order)
            Swal.fire({
                icon: "success",
                title: "Order Placed Successful!",
                text: "Thank you for ordering with Us!",
                showConfirmButton: false,
                timer: 1500,
            })
            localStorage.removeItem("cart")
            setCart([])
            setShowModal(false)
            clearForm()
        } catch (error) {
            console.error("Error placing order:", error)
        }
    }

    return (
        <Container className='text-center'>
            <div className='mt-5'>
                <h2>
                    <Badge pill bg='dark'>
                        <strong>
                            <i>CART</i>
                        </strong>
                    </Badge>
                </h2>
            </div>
            {
                // if cart is empty show message else show table
                cart.length === 0 ? (
                    <div className='mt-5'>
                        <h4>Your cart is empty</h4>
                        <p>
                            <i>Go to our menu and start your order Now!</i>
                        </p>
                        <Button className='mt-5' variant='dark' size='lg'>
                            <Link to='/menu'>
                                <strong>
                                    <i>Start Order Here</i>
                                </strong>
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <Table
                        style={{ maxWidth: "90%", margin: "auto" }}
                        striped
                        bordered
                        hover
                        className='mt-5'>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.data.name}</td>
                                    <td>{item.data.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Button
                                            variant='danger'
                                            size='sm'
                                            onClick={() =>
                                                handleRemoveItemFromCart(item)
                                            }>
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan='2'>Tax (4%):</td>
                                <td></td>
                                <td>${(totalPrice * 0.04).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <strong>
                                        <i>TOTAL:</i>
                                    </strong>
                                </td>
                                <td></td>
                                <td>
                                    <h6>
                                        <strong>
                                            <i>${totalPrice.toFixed(2)}</i>
                                        </strong>
                                    </h6>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='4'>
                                    <Button
                                        size='md'
                                        variant='outline-dark'
                                        className='mt-2 mb-2'>
                                        <Link className='text-dark' to='/menu'>
                                            <strong>
                                                <i>Keep Ordering</i>
                                            </strong>
                                        </Link>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan='4'>
                                    <Button
                                        size='lg'
                                        variant='dark'
                                        onClick={() => setShowModal(true)}
                                        className='mt-2 mb-2'>
                                        <strong>
                                            <i> Pay Order </i>
                                        </strong>
                                    </Button>
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                )
            }
            <Modal show={showModal} backdrop='static' centered>
                <Modal.Header
                    style={{
                        backgroundColor: "#FFBD59",
                    }}
                    closeButton
                    onClick={() => setShowModal(false)}>
                    <Modal.Title>
                        <u>
                            <i>Client Information</i>
                        </u>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        backgroundColor: "#f8f9fa",
                    }}>
                    <Form
                        onSubmit={(event) => {
                            event.preventDefault()
                            handlePayOrder()
                        }}
                        style={{
                            maxWidth: "90%",
                            margin: "auto",
                        }}>
                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Label>
                                <strong>
                                    <i>Name</i>
                                </strong>
                            </Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter name'
                                onChange={handleChange}
                                name='name'
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>
                                <strong>
                                    <i>Email</i>
                                </strong>
                            </Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                onChange={handleChange}
                                name='email'
                                required
                            />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='formBasicAddress'>
                            <Form.Label>
                                <strong>
                                    <i>Address</i>
                                </strong>
                            </Form.Label>
                            <Form.Control
                                type='address'
                                placeholder='Enter address'
                                onChange={handleChange}
                                name='address'
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mb-4' controlId='formPayment'>
                            <Form.Label>
                                <strong>
                                    <i>Payment</i>
                                </strong>
                            </Form.Label>
                            <Form.Select
                                name='payment'
                                onChange={handleChange}
                                required>
                                <option value=''>Select Payment Method</option>
                                <option value='debit card'>Debit Card</option>
                                <option value='credit card'>Credit Card</option>
                                <option value='paypal'>Paypal</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>

                    <div className='mt-4'>
                        <h5>
                            <strong>
                                <i>
                                    <u>Order Details</u>
                                </i>
                            </strong>
                        </h5>
                        <Table>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td colSpan='3'>{item.data.name}</td>
                                        <td>${item.data.price}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan='2'>Tax (4%):</td>
                                    <td></td>
                                    <td>${(totalPrice * 0.04).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <strong>
                                            <i>TOTAL:</i>
                                        </strong>
                                    </td>
                                    <td></td>
                                    <td>
                                        <h6>
                                            <strong>
                                                <i>${totalPrice.toFixed(2)}</i>
                                            </strong>
                                        </h6>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className='text-center'>
                        <Button
                            size='lg'
                            variant='dark'
                            className='mt-3'
                            onClick={handlePayOrder}>
                            <strong>
                                <i>Confirm Order</i>
                            </strong>
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
})
