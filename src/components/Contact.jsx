import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { db } from '../components/Firebase';
import { addDoc, collection } from 'firebase/firestore';
import '../components/Contact.css';

export function Contact() {

  const [ input, setInput ]= useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput( values => ({...values, [name]:value}))
  };

  const clearForm = () => { 
    document.getElementById('form').reset();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input)
    try{
      const comment = collection(db, 'contact')
      const res = await addDoc(comment, input);
      alert('Comment added successfully');
      clearForm();
      return res;

    } catch{
      console.error('Invalid input')
    }
  };

  return (

    <div className='container-contact'>
      <h1 className='title-contact'>Contact Us</h1>
      <Form id='form' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleChange} name='name' type="text" placeholder="Enter your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={handleChange} name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Comment</Form.Label>
          <Form.Control onChange={handleChange} name='comment' className='comment' type="text" placeholder="Leave a Comment" />
        </Form.Group>

        <Button className='btn' variant="primary" type="submit">
        Send
        </Button>
      </Form>
    </div>
  );
}
