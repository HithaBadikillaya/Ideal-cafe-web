import React from 'react';
import Carousel from '../components/Carousel';
import HeroBanner from '../components/HeroBanner';
import Testimonial from '../components/Testimonial';
import PopularDishes from '../components/PopularDishes';
import AppNavbar from '../components/Navbar';
import { useCart } from '../components/CartContext'; // ✅ Import context
import Specialoffer from './Specialoffer';
import Footer from './Footer';


export default function Home() {
  const { addToCart, cartItems } = useCart(); // ✅ Use global cart

  return (
    <div>
      <div className="container-fluid my-5 px-0 px-md-3">
        <AppNavbar cartCount={cartItems.length} />


        {/* Carousel Section */}
        <Carousel />

        <div className="my-5">
          <h2 className="text-center">Welcome to Our Home Page</h2>
          <p className="text-center">
            This is the central hub of our site where you'll find the latest updates and featured content.
          </p>
          <HeroBanner /><br />
          <PopularDishes addToCart={addToCart} />
          <Testimonial />
          <Specialoffer/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
