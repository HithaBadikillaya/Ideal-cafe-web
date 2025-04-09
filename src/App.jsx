import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carousel />} />
        
      </Routes>
    </Router>
  );
}

export default App;
