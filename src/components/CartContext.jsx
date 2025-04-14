import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.name === item.name);
      if (existingItem) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart by item name
  const removeFromCart = (itemName) => {
    setCartItems(prev => prev.filter(item => item.name !== itemName));
  };

  // Update quantity
  const updateQuantity = (itemName, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.name === itemName
          ? { ...item, quantity: Math.max(item.quantity + delta, 0) } // Ensure quantity doesn't go below 0
          : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Total price calculation
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
