import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Checkout({ cartItems, onConfirmOrder }) {
  const [userDetails, setUserDetails] = useState({ name: '', phone: '', delivery: 'dine-in' });

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInput = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmOrder(userDetails);
  };

  return (
    <Container style={{ paddingTop: '140px' }}>
      <h2 className="mb-4">Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="phone" required type="tel" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Delivery Option</Form.Label>
          <Form.Select name="delivery" onChange={handleInput}>
            <option value="dine-in">Dine-In</option>
            <option value="takeaway">Takeaway</option>
          </Form.Select>
        </Form.Group>

        <h5 className="mt-4">Order Summary:</h5>
        <ul className="list-group mb-3">
          {cartItems.map((item, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h5>Total: ₹{totalPrice.toFixed(2)}</h5>
        <Button type="submit" className="mt-3" variant="primary">Confirm Order</Button>
      </Form>
    </Container>
  );
}
