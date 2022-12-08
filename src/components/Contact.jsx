import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/Contact.css';

export function Contact() {




  return (

    <div className='container-contact'>
      <h1 className='title-contact'>Contact Us</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Comment</Form.Label>
          <Form.Control className='comment' type="text" placeholder="Leave a Comment" />
        </Form.Group>

        <Button className='btn' variant="primary" type="submit">
        Send
        </Button>
      </Form>
    </div>
  );
}
