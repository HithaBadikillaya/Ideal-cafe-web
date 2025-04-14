import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/Navbar';
import iceCreamData from '../components/IcecreamData';
import { useCart } from '../components/CartContext'; // Import useCart hook
import Footer from './Footer';

// Reusable Card Component
const IceCreamCard = ({ item, addToCart }) => (
  <Col sm={12} md={6} lg={4} className="mb-4">
    <div className="card h-100 shadow" style={{ background: '#F5E3E2', borderRadius: '20px', minHeight: '520px' }}>
      <img
        src={item.image}
        alt={item.name}
        className="card-img-top"
        style={{ height: '280px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
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
            onClick={() => addToCart(item)}  // Use addToCart from context
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </Col>
);

function Menu() {
  const [sortOption, setSortOption] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredIceCreamData, setFilteredIceCreamData] = useState(iceCreamData);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart(); // Access addToCart function and cartItems

  // Sort items based on selected option
  const handleSort = (items) => {
    if (sortOption === 'priceLow') return [...items].sort((a, b) => a.price - b.price);
    if (sortOption === 'priceHigh') return [...items].sort((a, b) => b.price - a.price);
    return items;
  };

  // Filter categories
  const uniqueCategories = [
    ...new Set(
      iceCreamData.flatMap(section =>
        section.sections ? section.sections.map(() => section.category) : [section.category]
      )
    )
  ];

  // Filter ice cream data based on category and sort
  useEffect(() => {
    const filtered = categoryFilter
      ? iceCreamData.filter((section) => section.category === categoryFilter)
      : iceCreamData;

    setFilteredIceCreamData(filtered);
  }, [categoryFilter]);

  return (
    <div>
      <AppNavbar cartCount={cartItems.length} onCartClick={() => navigate('/cart')} />

      <Container style={{ paddingTop: '140px' }}>
        {/* Filter and Sort Controls */}
        <Row className="mb-4 d-flex justify-content-between align-items-center">
          <Col xs={12} md={6} lg={4} className="mb-2">
            <Form.Select
              aria-label="Filter by Category"
              onChange={(e) => setCategoryFilter(e.target.value)}
              value={categoryFilter}
            >
              <option value="">Filter by Category</option>
              {uniqueCategories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </Form.Select>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-2">
            <Form.Select
              aria-label="Sort by"
              onChange={(e) => setSortOption(e.target.value)}
              value={sortOption}
            >
              <option value="">Sort By</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Menu Display */}
        {filteredIceCreamData.map((section, idx) => (
          <div key={idx} className="mb-5">
            <h3 className="text-danger mb-4 fw-bold">{section.category}</h3>
            {section.sections ? (
              section.sections.map((subSection, subIdx) => (
                <div key={subIdx} className="mb-4">
                  <h5 className="text-secondary mb-3">{subSection.section}</h5>
                  <Row>
                    {handleSort(subSection.items).map((item, i) => (
                      <IceCreamCard key={i} item={item} addToCart={addToCart} />
                    ))}
                  </Row>
                </div>
              ))
            ) : (
              <Row>
                {handleSort(section.items).map((item, i) => (
                  <IceCreamCard key={i} item={item} addToCart={addToCart} />
                ))}
              </Row>
            )}
          </div>
        ))}
      </Container>
      <Footer/>
    </div>
  );
}

export default Menu;
