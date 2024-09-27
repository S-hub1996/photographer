import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Contact Us</h2>
      <p>If you have any questions or want to inquire about our services, please reach out using the form below or contact us directly.</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="Type your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Send Message</Button>
      </Form>

      <div className="contact-details my-4">
        <p><strong>Email:</strong> email@example.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
      </div>
    </Container>
  );
}

export default Contact;
