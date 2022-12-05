import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Contact = () => {
  
  return(
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Comment</Form.Label>
      <Form.Control type="text" placeholder="Comment" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="danger" type="submit">
      Send
    </Button>
  </Form>
  )
};