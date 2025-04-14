import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import iceCreamData from './IcecreamData';
import { useCart } from './CartContext'; // ✅ Import cart context

export default function PopularDishes() {
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  // Pick a few popular items from different categories
  const popularItems = [];

  iceCreamData.forEach(section => {
    const items = section.sections
      ? section.sections.flatMap(sub => sub.items.slice(0, 1))
      : section.items.slice(0, 1);

    popularItems.push(...items);
  });

  return (
    <Container className="my-5">
      <h2 className="text-center text-danger fw-bold mb-4">Popular Dishes</h2>
      <Row>
        {popularItems.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <div className="card h-100 shadow" style={{ background: '#F5E3E2', borderRadius: '20px', minHeight: '520px' }}>
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{
                  height: '280px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                <p className="text-muted">{item.description}</p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-danger fw-bold fs-5">₹{item.price.toFixed(2)}</span>
                  </div>
                  <button
                    className="btn btn-outline-danger w-100 fw-semibold"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
