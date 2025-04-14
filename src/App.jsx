import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specialoffer from "./pages/Specialoffer";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Specialoffer />} />
        
      </Routes>
      
      
      <Footer />
    </Router>
  );
}

export default App;
