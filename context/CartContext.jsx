"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    try {
      const savedCart = localStorage.getItem("repairfect_cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart) && isMounted) {
          setCartItems(parsedCart);
        }
      }
    } catch (error) {
      console.error("LocalStorage load error:", error);
    } finally {
      if (isMounted) {
        setIsHydrated(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem("repairfect_cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("LocalStorage save error:", error);
    }
  }, [cartItems, isHydrated]);

  const addToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedColor === product.selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1,
        };
        return updated;
      }

      return [...prevItems, { ...product, price: product.price || 60, quantity: 1 }];
    });
  }, []);

  const decreaseQuantity = useCallback((id, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id && item.selectedColor === selectedColor) {
            return { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((id, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.selectedColor === selectedColor))
    );
  }, []);

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      decreaseQuantity,
      removeFromCart,
      cartCount: cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0),
      totalPrice: cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0),
    }),
    [cartItems, addToCart, decreaseQuantity, removeFromCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};