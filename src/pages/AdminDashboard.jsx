import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Card, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Initial mock menu items data
  const initialMenuItems = [
    {
      id: 1,
      name: 'Vanilla Ice Cream',
      category: 'Classic',
      price: 50,
      description: 'Rich and creamy vanilla ice cream',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Chocolate Ice Cream',
      category: 'Classic',
      price: 60,
      description: 'Delicious chocolate ice cream',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: ""
  });

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission to add a new menu item
  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      image: formData.image || 'https://via.placeholder.com/150',
      category: formData.category,
    };
    setMenuItems(prevItems => [...prevItems, newItem]);
    // Reset form
    setFormData({ name: '', description: '', price: '', image: '', category: '' });
  };

  // Logout handler clears any session data if needed, then redirects to login page.
  const handleLogout = () => {
    // For demonstration, clear localStorage (or any session data) if needed
    // localStorage.clear();
    navigate('/');
  };

  return (
    <>
      {/* Professional Header with Logout */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">Manage Menu Items</h2>
          </Col>
        </Row>
        <Row>
          {/* Form for adding new menu items */}
          <Col md={6}>
            <Card className="mb-4 shadow-sm">
              <Card.Header className="bg-primary text-white">Add New Menu Item</Card.Header>
              <Card.Body>
                <Form onSubmit={handleAddItem}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter item name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDescription" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter description"
                      rows={2}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPrice" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Enter price"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formImage" className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Enter image URL"
                    />
                  </Form.Group>
                  <Form.Group controlId="formCategory" className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      placeholder="Enter category"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Add Item
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Table display for current menu items */}
          <Col md={6}>
            <Card className="mb-4 shadow-sm">
              <Card.Header className="bg-secondary text-white">Existing Menu Items</Card.Header>
              <Card.Body>
                {menuItems.length > 0 ? (
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.category}</td>
                          <td>₹{item.price.toFixed(2)}</td>
                          <td>{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p>No menu items available.</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Optional: Daily Sales Analytics */}
        <Row className="mb-5">
          <Col>
            <Card className="shadow-sm">
              <Card.Header className="bg-info text-white">Daily Sales Analytics</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={4} className="text-center">
                    <h3>₹5,000</h3>
                    <p>Today's Sales</p>
                  </Col>
                  <Col md={4} className="text-center">
                    <h3>150</h3>
                    <p>Orders</p>
                  </Col>
                  <Col md={4} className="text-center">
                    <h3>25</h3>
                    <p>New Customers</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
