import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { useCart } from '../components/CartContext'; // ✅ Use global cart context
import AppNavbar from '../components/Navbar'; // Import the navbar

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart(); // ✅ Access global methods
  const [showCheckout, setShowCheckout] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    deliveryOption: 'dine-in'
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle quantity change
  const updateItemQuantity = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateQuantity(item.name, newQuantity); // ✅ Update using context
    } else {
      removeFromCart(item.name); // ✅ Remove if quantity goes to 0
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    alert(`Order placed successfully, ${userDetails.name || 'Customer'}!`);
    clearCart();              // ✅ Clear global cart
    setShowCheckout(false);   // ✅ Close modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <AppNavbar />

      <Container style={{ marginTop: '80px' }}> {/* Adjust margin-top to avoid overlap */}
        <h2 className="text-center mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <Row className="g-3">
              {cartItems.map((item, index) => (
                <Col key={index} md={12} className="d-flex align-items-center border rounded p-3">
                  <img src={item.image} alt={item.name} style={{ width: '80px', borderRadius: '12px' }} className="me-3" />
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1 text-muted">₹{item.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center">
                      <Button variant="outline-danger" onClick={() => updateItemQuantity(item, -1)}>-</Button>
                      <span className="mx-3">{item.quantity}</span>
                      <Button variant="outline-success" onClick={() => updateItemQuantity(item, 1)}>+</Button>
                    </div>
                  </div>
                  <div className="text-end">
                    <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                    <br />
                    <Button variant="link" className="text-danger p-0" onClick={() => removeFromCart(item.name)}>
                      Remove
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="mt-4 text-end">
              <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
              <Button variant="success" onClick={() => setShowCheckout(true)}>Proceed to Checkout</Button>
            </div>
          </>
        )}

        {/* Checkout Modal */}
        <Modal show={showCheckout} onHide={() => setShowCheckout(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Delivery Option</Form.Label>
                <Form.Select
                  name="deliveryOption"
                  value={userDetails.deliveryOption}
                  onChange={handleInputChange}
                >
                  <option value="dine-in">Dine-In</option>
                  <option value="takeaway">Takeaway</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowCheckout(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCheckout}>
              Confirm Order
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    
    </div>
  );
}
