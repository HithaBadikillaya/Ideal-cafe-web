import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Badge,
} from 'react-bootstrap';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom'; // ✅ using useNavigate

const AppNavbar = ({ cartCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate(); // ✅ for programmatic navigation

  const handleCartClick = () => {
    navigate('/cart');
    setIsExpanded(false); // Close the menu on mobile
  };

  return (
    <Navbar
      fixed="top"
      expand="lg"
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
      style={{ backgroundColor: '#6d6f42', padding: '1rem 0' }} // ✅ Updated color
      variant="dark"
      className="shadow-sm"
    >
      <Container fluid className="px-4">
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center text-white ms-3 me-5"
        >
          <img
            src="/images/image.png"
            alt="Logo"
            width="190"
            height="90"
            className="me-2"
            style={{ objectFit: 'contain' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          {/* Nav Links */}
          <Nav className="me-auto ms-3">
            <Nav.Link as={Link} to="/home" className="text-white fs-3 fw-semibold px-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-white fs-3 fw-semibold px-4">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white fs-3 fw-semibold px-4">About Us</Nav.Link>
          </Nav>

          {/* Right Side */}
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-4 mt-4 mt-lg-0 me-lg-5">
            {/* Search - only show when not mobile menu */}
            {!isExpanded && (
              <Form className="position-relative d-flex align-items-center">
                <FiSearch
                  size={23}
                  color="#999"
                  style={{
                    position: 'absolute',
                    left: '14px',
                    zIndex: '2',
                  }}
                />
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="rounded-pill ps-5 pe-3 py-3"
                  style={{ width: '300px', fontSize: '1rem' }}
                />
              </Form>
            )}

            {/* Cart */}
            <div
              className="position-relative"
              style={{ cursor: 'pointer' }}
              onClick={handleCartClick}
            >
              <FiShoppingCart size={31} color="white" />
              <Badge
                bg="light"
                text="dark"
                className="position-absolute top-0 start-100 translate-middle"
                pill
                style={{ fontSize: '0.75rem' }}
              >
                {cartCount}
              </Badge>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;