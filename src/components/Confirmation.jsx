import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

function Confirmation() {
  const location = useLocation();
  const { totalAmount, deliveryLocation, method } = location.state || {};

  return (
    <Container className="pt-5 mt-5">
      <Card className="p-4 shadow-sm text-center mx-auto" style={{ maxWidth: '600px', backgroundColor: '#F5E3E2' }}>
        <h2 className="text-success mb-3">🎉 Order Confirmed!</h2>
        <p className="mb-2 fw-bold">Your delicious ice cream is on the way! 🍦</p>
        <p><strong>Delivery Location:</strong> {deliveryLocation}</p>
        <p><strong>Payment Method:</strong> {method}</p>
        <p><strong>Total Paid:</strong> ₹{totalAmount?.toFixed(2)}</p>

        <Button as={Link} to="/home" variant="danger" className="mt-3 px-4">
          Back to Home
        </Button>
      </Card>
    </Container>
  );
}

export default  Confirmation;