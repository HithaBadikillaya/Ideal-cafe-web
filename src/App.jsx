import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import AdminDashboard from './pages/AdminDashboard'; // Import the Admin Dashboard
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />  {/* New admin route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
