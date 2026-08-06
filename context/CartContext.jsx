"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 1. LocalStorage Se Load Karein (Initial Mount)
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("repairfect_cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("LocalStorage load error:", error);
    }
  }, []);

  // 2. LocalStorage Mein Save Karein Jab BHI state Change ho
  useEffect(() => {
    try {
      localStorage.setItem("repairfect_cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("LocalStorage save error:", error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedColor === product.selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
        return updated;
      }

      return [...prevItems, { ...product, price: product.price || 60, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id && item.selectedColor === selectedColor) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && item.selectedColor === selectedColor)
      )
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};